if ( !window.USC ) { window.USC = {}; }

/**
 * Check for and initialize any videos.
 * @returns
 */
const youtube = [];
export async function initVideos() {
	const elements = document.querySelectorAll( 'video,source[src]' );
	if ( !elements.length ) {
		return;
	}

	// Split the videos by cloudfare and standard.
	const cloud = [];
	const standard = [];
	for ( const el of elements ) {
		const src = el.getAttribute( 'src' );
		if ( src?.endsWith( '.m3u8' ) ) {
			cloud.push( el );
		} else if ( src ) {
			standard.push( el );
		} else if ( el.dataset.yt ) {
			youtube.push( el );
		}
	}

	await cloudflare( cloud );
	videoAnalytics( standard );
	await youTube( youtube );
}

/**
 * Initialize cloudflare videos.
 * @param {Array<HTMLVideoElement | HTMLSourceElement>} cloud
 */
async function cloudflare( cloud ) {
	if ( !cloud?.length ) {
		return;
	}

	console.log( 'cloudflare() - ' + cloud.length );
	if ( !window.Hls ) {
		await import( `/common/usc/p/hls.min.js` );
		if ( !window.Hls ) {
			throw new Error( "Unable to load HLS script" );
		}
	}

	for ( const el of cloud ) {
		const videoSrc = el.getAttribute( 'src' );
		const video = el.closest( 'video' );
		if (// Make sure we have a video element.
			!video ||
			// And we didn't already init the HLS component.
			video.$cloudFlare ||
			// Skip if the browser can natively play this stream.
			video.canPlayType( 'application/vnd.apple.mpegurl' ) ) {
			continue;
		}

		// Create and bind the HLS to this video element.
		const hls = new Hls();
		hls.loadSource( videoSrc );
		hls.attachMedia( video );
		video.$cloudFlare = hls;
	}
}

/**
 * Initialze youtube iframe API.
 * @param {Array<HTMLVideoElement | HTMLSourceElement>} youtube
 */
async function youTube( youtube ) {
	if ( !youtube?.length || document.getElementById('youtube-api-script')) {
		return;
	} 

	// Load YouTube Iframe API script if it's not already added
	const script = document.createElement('script');
	script.src = 'https://www.youtube.com/iframe_api';
	script.id = 'youtube-api-script';
	document.head.appendChild(script);

	//Listen for the youtube iframe api to be ready    
	window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
}

/**
 * Initialize youtube API Videos.
 * @param {HTMLVideoElement} video
 * @param {string} src
 * @returns
 */
function onYouTubeIframeAPIReady() {
	let obj = {
		height: '360',
		width: '640'
	};

	let events = {
		'onReady': event => {
			//get each data-showhide for our youtube players to setup our eventlisteners
			let section = event.target.getIframe().closest('[data-showhide]');
			//get each open and close button to pause/play
			let opnBtn = section.querySelector('[data-role="btn"]');
			let clsBtn = section.querySelector('.pop [data-role="btn"]');

			// Play the player when the open button is clicked
			opnBtn.addEventListener('click', () => {
				event.target.playVideo();
			});

			// Pause the player when the close button is clicked
			clsBtn.addEventListener('click', () => {
				event.target.pauseVideo();
			});

		}
	}

	for( const el of youtube ) {
		obj.videoId = el.dataset.yt.includes('watch?v=') ? el.dataset.yt.split('watch?v=')[1] : el.dataset.yt.split('embed/')[1];
		if(el.closest('[data-showhide]')) {
			obj.events = events;
		}
		// Create the player
		let player = new YT.Player(el, obj);
	}
}

/**
 * Connect scorpion analytics to a video element.
 * @param {Array<HTMLVideoElement | HTMLSourceElement>} standard
 */
function videoAnalytics( standard ) {
	if ( !standard?.length ) {
		return;
	}
	for ( const el of standard ) {
		const video = el.closest( 'video' );
		initAnalytics( video );
	}
}

/**
 * Connect analytics events to a video.
 * @param {any} video
 */
function initAnalytics( video ) {
	if ( !( video instanceof HTMLVideoElement ) ) {
		// Not a video.
		return;
	} else if ( !window._sa_videoStart ) {
		// Analytics not present on page.
		return;
	} else if ( video.attributes['data-notrack'] ) {
		// We've been asked to not track the video.
		return;
	} else if ( video.loop && video.autoplay ) {
		// Auto-playing and loop videos don't count as a metrics.
		return;
	} else {
		videoEvents( video );
	}
}

const VIDEOSTATUS = {
	NOSOURCE: 0,
	INITIALIZED: 1,
	READY: 2
};

/**
 * Initialize the video state.
 * @param {HTMLVideoElement} video
 * @param {string} src
 * @returns
 */
function setState( video, src ) {
	const file = getFile( src );
	if ( !file ) {
		// Nothing to do.
		return VIDEOSTATUS.NOSOURCE;
	} else if ( video.sa?.file !== file ) {
		// If we had a setTimeout event, clear it.
		if ( video.sa?.timer ) {
			clearTimeout( video.sa.timer );
		}

		// Reset the video state.
		video.sa = {
			file,
			vvid: undefined,
			vpid: undefined,
			seeking: false,
			currentTime: 0,
			duration: 0,
			timer: 0,
		};
		return VIDEOSTATUS.INITIALIZED;
	} else {
		// Good to go.
		return VIDEOSTATUS.READY;
	}
}

/**
 * Get the video file.
 * @param {string} src
 */
function getFile( src ) {
	if ( !src ) {
		return null;
	} else if ( src.startsWith( "https://" ) || src.startsWith( "http://" ) ) {
		// If the source is in the same domain, we'll report analytics as a relative path.
		const u = new URL( src );
		if ( u.host === window.location.host ) {
			return u.pathname + u.search;
		}
	} else {
		return src;
	}
}

/**
 * Configure video events to track stats.
 * @param {HTMLVideoElement} video
 * @param {string} src
 * @returns
 */
function videoEvents( video ) {
	if ( video.$videoEvents ) {
		return;
	}

	// Make sure we have a unique id.
	let id = video.getAttribute( 'id' );
	if ( !id ) {
		id = uuid();
		video.setAttribute( 'id', id );
	}

	const play = e => {
		if ( video.sa?.seeking ) {
			// Wait for seek to be over before firing.
			return;
		} else if ( setState( video, video.currentSrc ) === VIDEOSTATUS.NOSOURCE ) {
			// No video source available.
			return;
		} else if ( video.sa.vpid ) {
			// If we have a video play id, then we were paused.
			// No need to start a new videoplaytime, we can let the
			// timeupdate pick up from where it left off.
			return;
		}
		const auto = video.autoplay || video.config?.autostart ? 1 : 0;
		window._sa_videoStart(
			id,
			video.sa.vvid,
			video.sa.file,
			Math.round( video.sa.currentTime || 0 ),
			video.sa.duration || 0,
			auto,
		);
	};
	const timeupdate = e => {
		if ( video.sa?.seeking ) {
			// Wait for seek to be over before firing.
			return;
		} else if ( setState( video, video.currentSrc ) === VIDEOSTATUS.NOSOURCE ) {
			// No video source available.
			return;
		} else if ( !video.currentTime && !video.duration ) {
			// We don't actually have any data to do anything with.
			return;
		} else if ( !video.sa.vvid || !video.sa.vpid ) {
			// Still waiting for the initial video start event to return.
			return;
		}

		// How long since the last time we fired this event?
		const since = video.currentTime - video.sa.currentTime;
		if ( since > 5 || ( video.sa.duration !== video.duration ) ) {
			// Every 5 seconds (or we have an updated duration).
			video.sa.currentTime = video.currentTime;
			video.sa.duration = video.duration;
			window._sa_videoPlay(
				video.sa.vvid,
				video.sa.vpid,
				Math.round( video.sa.currentTime ),
				Math.round( video.sa.duration ),
			);
		}
	};
	const seeking = e => {
		if ( !video.sa ) {
			video.sa = {};
		} else if ( video.sa.timer ) {
			clearTimeout( video.sa.timer );
		}
		// Not we've started seeking so other events don't fire.
		video.sa.seeking = true;
	};
	const seeked = e => {
		if ( !video.sa ) {
			video.sa = {};
		} else if ( video.sa.timer ) {
			clearTimeout( video.sa.timer );
		}

		// The seeked event triggers a whole bunch of times in a row, so we'll wait
		// a moment before deciding it's actually done.
		video.sa.timer = setTimeout( () => {
			if ( setState( video, video.currentSrc ) === VIDEOSTATUS.NOSOURCE ) {
				// No video source available.
				return;
			}

			// Retart a videoplaytime event for this video play.
			video.sa.seeking = false;
			video.sa.vpid = undefined
			video.sa.currentTime = video.currentTime;
			video.sa.duration = video.duration;
			window._sa_videoStart(
				id,
				video.sa.vvid,
				video.sa.file,
				Math.round( video.sa.currentTime ),
				Math.round( video.sa.duration ),
			);
		}, 250 );
	};
	const ended = e => {
		if ( !video.sa?.vvid || !video.sa?.vpid ) {
			// For some reason the video analytics ids were never initialized.
			return;
		} else if ( video.sa.timer ) {
			clearTimeout( video.sa.timer );
		}

		// Record that we've reached the end position.
		window._sa_videoPlay(
			video.sa.vvid,
			video.sa.vpid,
			Math.round( video.currentTime ),
			Math.round( video.duration )
		);

		// If the video is played again, we'll want a new set of ids.
		delete video.sa;
	};

	// Save the subscription as an expando on the video element.
	video.$videoEvents = {
		unsubscribe: () => {
			video.removeEventListener( 'play', play );
			video.removeEventListener( 'timeupdate', timeupdate );
			video.removeEventListener( 'seeking', seeking );
			video.removeEventListener( 'seeked', seeked );
			video.removeEventListener( 'ended', ended );
		}
	};

	video.addEventListener( 'play', play );
	video.addEventListener( 'timeupdate', timeupdate );
	video.addEventListener( 'seeking', seeking );
	video.addEventListener( 'seeked', seeked );
	video.addEventListener( 'ended', ended );
}

/**
 * Return an id-friendly guid.
 * 
 * @returns {string}
 */
function uuid() {
	let d = performance.now();
	const uuid = '_xxxxxxxxxxxxxxxx'.replace( /x/g, _ => {
		const r = ( d + Math.random() * 16 ) % 16 | 0;
		d = Math.floor( d / 16 );
		return ( r ).toString( 16 );
	} );
	return uuid;
}

window.USC.initVideos = initVideos;
window.USC.initAnalytics = initAnalytics;

if (window.register) {
	window.register('usc/p/video');
}