if ( !window.USC ) { window.USC = {}; }
require2( [typeof IntersectionObserver === 'undefined' ? 'usc/p/intersection-observer' : ''], function () {
	/**
	 * When an element is visible in the viewport, execute the callback.
	 * 
	 * @param {HTMLElement} el
	 * @param {Number} amount
	 * @param {Function} callback
	 */
	USC.onVisible = function ( el, viewport, callback ) {
		// If the callback is a string, convert it to a handler that will add that string as a class.
		if ( typeof callback === 'string' ) {
			var cls = callback;
			callback = function ( el ) {
				el.classList.add( cls );
			}
		}

		var rootMargin;
		var threshold;
		if ( viewport < 0 ) {
			rootMargin = ( -viewport * 200 ) + 'px';
			threshold = 0;
		} else {
			rootMargin = '0px';
			threshold = viewport || 0;
		}

		// Build the observer.
		var options = { root: null, rootMargin: rootMargin, threshold: threshold };
		var observer = new IntersectionObserver( function ( entries, observer ) {
			// Do we have a visible element?
			var visible = entries.find( function ( entry ) { return entry.isIntersecting; } );
			if ( !visible ) {
				return;
			}
			// Run the callback.
			callback( el );
			// Complete the observer.
			observer.unobserve( el );
			observer.disconnect();
		}, options );

		// Start the observer.
		observer.observe( el );
	};

	if ( window.register ) {
		window.register( 'usc/p/visible' );
	}
} );