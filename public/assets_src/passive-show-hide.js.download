if ( !window.USC ) { window.USC = {}; }
require2( ['usc/p/usc-utils', 'usc/p/slide-toggle'], function () {

	window.USC.showHide = function ( e ) {

		var defaultOptions = {
			// The class added is customizable.
			className: 'show',
			// Do you need a class added to the html element? It goes on the container by default.
			htmlClass: false,
			// Should the panel slide open and shut?
			slider: false
		}

		// Define the elements
		var el = e.target;
		var type = e.type;
		var box = el.closest( '[data-showhide]' );
		var panel = box.querySelector( '[data-role="panel"]' );
		var btns = Array.from( box.querySelectorAll( '[data-role="btn"]' ) );
		var focusable = Array.from( panel.querySelectorAll( 'a, button, input, select, [tabindex="0"], video' ));
		var lastFocus = focusable.pop();
		var returnSpot = btns[0];
		var videos = Array.from(panel.querySelectorAll( 'video' ));

		if ( !lastFocus ) lastFocus = panel;

		// Set the options
		var data = USC.elementData( box );
		el.options = Object.assign( {}, defaultOptions, data );

		// Create the toggling functionality
		function toggleActive( el, e ) {

			// Check our active state and toggle some functionality
			var active = ( !panel.getAttribute( 'aria-hidden' ) || panel.getAttribute( 'aria-hidden' ) === "true" ) ? false : true;

			// If the slider option is turned on, trigger the slider functionality
			if ( el.options.slider === true ) USC.slideToggle( panel, !active )

			// Toggle our classes and attributes
			box.classList.toggle( el.options.className );
			if ( el.options.htmlClass ) document.documentElement.classList.toggle( el.options.className );
			panel.setAttribute( 'aria-hidden', active );

			// Set the state of videos and set our focus depending on if we're closing or opening a panel
			if ( active ) {
				// Loop through and pause our videos if we close a panel
				videos.forEach( function ( vid ) {
					try { vid.pause(); }
					catch ( ex ) { ; }
				} );

				// Make focusable items non-focusable if closing
                focusable.forEach((el) => {
                    el.setAttribute('tabindex','-1');
                });

				returnSpot.focus();
			} else {
				// Play our first video if we have one when we open a panel
				if ( videos[0] && videos[0].readyState >= 1 ) {
					initVideo( videos[0] ).then( video => {
						try { video.play(); }
						catch ( ex ) { ; }
					} );
				}
				 
				// Make focusable items focusable when opening 
                focusable.forEach((el) => {
                    el.setAttribute('tabindex','0');
                });
				panel.setAttribute('tabindex','0');
				panel.focus();
			}

		}

		// Before we run everything, validate to make sure our targets and types are correct
		var run;

		// if we click or pressed enter on a button
		if ( e.keyCode === 13 && el.closest( '[data-role="btn"]' ) || type == 'click' && el.closest( '[data-role="btn"]' ) ) run = true;

		// if we pressed escape on a showhide element
		if ( e.keyCode == 27 && el.closest( '[data-showhide]' ) ) run = true;

		// if we pressed tab
		if ( e.keyCode === 9 ) {

			// If shift was held to move back and we're on the panel, toggle the panel
			if ( e.shiftKey && panel == el ) {
				run = true;
				e.preventDefault();
				returnSpot.focus();
			}
			// If moving forward and we're currently on our last element, toggle the panel
			else if ( !e.shiftKey && lastFocus == el ) {
				run = true;
				lastFocus = panel;
			}

		}

		// Fire when ready
		if ( run === true ) toggleActive( el, e );

	};

	function initVideo( video ) {
		return new Promise( resolve => {
			if ( !window._sa_videoStart || video.$videoEvents ) {
				// Make sure we have scorpion analytics on the page, that the video hasn't already been wired up.
				resolve( video );
				return;
			} else if ( USC.initAnalytics ) {
				// If the video script has already been loaded, run it.
				USC.initAnalytics( video );
				resolve( video );
				return;
			}

			// Load the video script.
			require2( '/common/usc/p/video.js' );

			// As soon as it's loaded we'll resolve the promiser.
			let _interval = 0;
			const _max_wait_time = 2000;
			const _start = performance.now();
			const fn = () => {
				if ( USC.initAnalytics ) {
					// It's loaded and ready.
					clearInterval( _interval );
					USC.initAnalytics( video );
					resolve( video );
					return;
				}

				let _now = performance.now();
				if ( _now - _start > _max_wait_time ) {
					// Can't wait any longer.
					clearInterval( _interval );
					resolve( video );
					return;
				}
			};
			_interval = setInterval( fn, 250 );
		} );
	}

	if ( window.register ) {
		window.register( 'usc/p/passive-show-hide' );
	}

} );