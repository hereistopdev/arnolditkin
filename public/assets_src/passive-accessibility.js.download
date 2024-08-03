if ( !window.USC ) { window.USC = {}; }
( function () {

    // Grab the first content section on the page.
    var content = document.querySelector( '[data-content="true"]' );

    // Setup the intial cookie data to track.
    var cookieData = {
        contrast: false,
        text: false
    };

    /**
     * Manage and Run the Accessibility Menu.
     * 
     * @param {Array} el
     */
	function accessMenu( el ) {

        // Check for existing cookies and put them in place.
        cookieFinder();
	 
        // Bind Handle Click for Passive Listener
        this._handleClick = _handleClick.bind( this );

    }

      /**
     * Function to Handle Click Events
     * 
     * @param {Event} e
     */
       function _handleClick( e ) {

        // Find my button
        var btn = e.target.closest( '[data-action]' );

        // No button no fun 
        if ( !btn ) return;

        // If it's a keydown event and it wasn't enter, no fun
        if ( e.type === 'keydown' && e.keyCode !== 13 ) return;

        // Evaluate what was selected and do the thing.            
        switch ( btn.getAttribute( 'data-action' ) ) {

            case 'content':

                // Call 'Skip To Content' fn
                skipToContent();
                break;

            case 'highContrast':

                // Toggle 'High Contrast'
                document.documentElement.classList.toggle( 'high-contrast' );

                if ( document.documentElement.classList.contains( 'high-contrast' ) ) {
                    cookieData.contrast = true;
                } else {
                    cookieData.contrast = false;
                }
                break;

            case 'largeText':

                // Call 'Increase Text Size' fn
                textSize();
                break;

            case 'clear':

                // 'Clear' enabled options and remove set cookies
                document.documentElement.classList.remove( 'high-contrast', 'x1', 'x2' );
                cookieData.contrast = false;
                cookieData.text = false;
                break;

        }

        setCookie();

    }


    /**
     * Initialize Any Cookies Already Existing.
     */
    function cookieFinder() {

        // Split cookie data so we can do the thing
        var cookies = document.cookie.split( ";" );

        // Loop through cookies to find ours if it's there
        for ( var i = 0; i < cookies.length; i++ ) {

            // If we find our cookie, eat it
            if ( cookies[i].indexOf( 'AO=' ) > -1 ) {

                // Updating cookie data
                cookieData = JSON.parse( cookies[i].match( /[\{].+[}]/g ) );

                // Turn on 'High Contrast' if they have contrast cookie
                if ( cookieData.contrast ) {
                    document.documentElement.classList.add( 'high-contrast' );
                }

                // Turn on 'Increase Text Size' if they have text cookie
                if ( cookieData.text ) {

                    // Check to see which text size was saved and set it again cause we nice 
                    if ( cookieData.text == 1 ) {
                        document.documentElement.classList.add( 'x1' );
                    } else if ( cookieData.text == 2 ) {
                        document.documentElement.classList.add( 'x2' );
                    }

                }

            }

        }

    }
    
    /**
     * Set cookies for enabled options. 
     */
    function setCookie() {

        // Get date
        var date = new Date();
        date.setTime( date.getTime() + ( 30 * 24 * 60 * 60 * 1000 ) );

        // Set a cookie for 30 days
        document.cookie = 'AO=' + JSON.stringify( cookieData ) + '; expires=' + date + ';path=/';

    }

    /**
     * Text Sizing Function. 
     */
    function textSize () {

        // If we're at level-2, go back to level-0
        if ( document.documentElement.classList.contains( 'x2' ) ) {
            document.documentElement.classList.remove( 'x2' );
            cookieData.text = false;
        } else if ( document.documentElement.classList.contains( 'x1' ) ) {
            // If we're at level-1, go to level-2
            document.documentElement.classList.remove( 'x1' );
            document.documentElement.classList.add( 'x2' );
            cookieData.text = 2;
        } else {
            // If we're at level-0, go to level-1
            document.documentElement.classList.add( 'x1' );
            cookieData.text = 1;
        }

        // Trigger a window resize to fix header padding if needed :)
        window.dispatchEvent(new CustomEvent('scroll'));

    }

    /**
     * Skip to Content. 
     */
    function skipToContent() {
        content.setAttribute( 'tabindex', 0 );
		content.focus();
    }

    window.USC.accessMenu = function ( el ) {
		if ( el === null ) {
			return;
		} else if ( !( el instanceof HTMLElement ) ) {
			throw new Error( "Need an HTMLElement to initialize the AccessMenu." )
		} else if ( el.$accessMenu ) {
			console.log( "AccessMenu already initialized." );
			return;
		} else {
			el.$accessMenu = new accessMenu( el );
		}
    }
    
	if ( window.register ) {
		window.register( 'usc/p/passive-accessibility' );
    }
} )();