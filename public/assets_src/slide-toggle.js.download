if ( !window.USC ) { window.USC = {}; }
( function () {

    /**
     * Create Slide Toggle for Animating the Open / Close of Elements
     * 
     * @param {HTMLElement} el
     * @param {Boolean} show
     */
	USC.slideToggle = function ( el, show ) {
        
        // If we don't have an element, abort.
        if ( !el ) return;

        // Get the current dimensions, but only if we're not already closed. 
        var fromDims = ( show && !el.getAttribute( 'animating' ) ) ? false : getDims( el );
        if ( fromDims ) fromDims = 'overflow: hidden; display: block; visibility: visible; padding-top: ' + fromDims.paddingTop + 'px; padding-bottom: ' + fromDims.paddingBottom + 'px; margin-top: ' + fromDims.marginTop + 'px; margin-bottom: ' + fromDims.marginBottom + 'px; height: ' + fromDims.height + 'px;'

        // If we're showing, get the displayed size.
        if ( show ) var toDims = openDims( el, fromDims );
		
		// Show or Hide the element. 
        showHide( el, show, toDims, fromDims );

    }
    
    /**
     * Get the Current Measurements to Start with.
     * 
     * @param {HTMLElement} el
     */
    function getDims( el ) {
		
        // Get the finished values using computed style so it doesn't have to paint.
        var styles = getComputedStyle( el );
        var dim = {
            paddingTop: parseFloat( styles.paddingTop ),
            paddingBottom: parseFloat( styles.paddingBottom ),
            marginTop: parseFloat( styles.marginTop ),
            marginBottom: parseFloat( styles.marginBottom ),
            height: ( styles.height === 'auto' ) ? 0 : parseFloat( styles.height )
        }

		return dim;

    }

    /**
     * Get the Completed State We're Animating to.
     * 
     * @param {HTMLElement} el
	 * @param {Object} fromDims
     */
    function openDims( el, fromDims ) {

        // Reset before we measure.
        el.style.cssText = '';

        // Since we're showing, quickly display the item.
        el.style.transition = 'none';
        el.style.display = 'block';
        el.style.height = 'auto';
        
        // Get the dimensions while in our open state.
        var dim = getDims( el );
		
        // Now reset the state of the element.
        el.style.removeProperty( 'display' );
        el.style.removeProperty( 'height' );
        el.style.removeProperty( 'transition' )
        el.style.cssText = fromDims;
        el.offsetHeight;

		return dim;

    }
	
	/**
     * Clean up the styles we don't want/need
	 *
	 * @param {HTMLElement} el
     */
    function reset( el ) {
		//if ( parseFloat( getComputedStyle( el ).height ) === 0 ) {
			el.style.cssText = '';
			el.removeAttribute( 'animating' );
		//}
    }

   /**
     * Open or Close the Element
     *
	 * @param {HTMLElement} el
	 * @param {Boolean} show
     * @param {Object} toDims
	 * @param {Object} fromDims
     */
    function showHide( el, show, toDims, fromDims ) {
        // Check if we're using expandable content, and get dimensions for closing
        if ( el.dataset.start ) {
            var dim = getDims( el );
        }

        // Set the closed value to all 0's since we need it both as a starting point and an ending point.
        var closed = 'overflow: hidden; display: block; visibility: visible; padding-top: 0; padding-bottom: 0; margin-top: ' + ( ( el.dataset.start ) ? dim.marginTop : '0' ) + 'px; margin-bottom: '  + ( ( el.dataset.start ) ? dim.marginBottom : '0' ) +  'px; height:' + ( ( el.dataset.start ) ? el.dataset.start : '0' );    

        // If we have current dimensions, set those. If not, set the close state as the starting point.
        el.style.cssText = ( fromDims ) ? fromDims : closed;
        el.offsetHeight;
        
		if ( show ) {
			
			// Since we're showing, construct the open state CSS.
			var open = 'overflow: hidden; display: block; visibility: visible; padding-top: ' + toDims.paddingTop + 'px; padding-bottom: ' + toDims.paddingBottom + 'px; margin-top: ' + toDims.marginTop + 'px; margin-bottom: ' + toDims.marginBottom + 'px; height: ' + toDims.height + 'px;';
			
            // Set the open state and then add an open class.
            el.style.cssText = open;
            el.classList.add( 'sld-opn' );

        } else {
            
            // Set the closed state and remove the open class.
            el.style.cssText = closed;
            el.classList.remove( 'sld-opn' );

        }
		
		// Set animating so we can track progress.
		el.setAttribute( 'animating', true );

		// Add an attribute so we know the event has already been bound to the element.
		if ( !el.hasAttribute( 'bound' ) ) {
			el.setAttribute( 'bound', true );
			el.addEventListener( 'transitionend', reset.bind(null, el) );
		}
		
    }

	if ( window.register ) {
		window.register( 'usc/p/slide-toggle' );
    }
    
} )();