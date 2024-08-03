if ( !window.USC ) { window.USC = {}; }
require2( ['usc/p/usc-utils', 'usc/p/slide-toggle'], function () {

	
	/**
	 * Take the Event and call the appropiate function with the Tabbable Context
	 * 
	 * @param {Event} e
	 * @param {HTMLElement} elTab 
	 */
    window.USC.tabbableHandler = function(e, elTab) {
        var data = elTab.$tabbable;

        if (!data) return;

        switch(e.type) {
            case 'click': 
                USC.tabbableClick(e, data);
                break;
            case 'keydown':
                USC.tabbableKeyDown(e, data);
                break;
        }

    }

	/**
	 * Handles click events and key downs that will count as clicks.
	 * 
	 * @param {Event} e 
	 */
	 window.USC.tabbableClick = function( e, data ) {

         if (!data) data = this;

		// Make sure we clicked on or inside of a tab.
		var tab = e.target.closest( '.el-tab' );
		var secTab = e.target.closest( '.el-sec-tab' );
		var next = e.target.closest( '.el-next-btn' );
		var prev = e.target.closest( '.el-prev-btn' );
		
		// If we clicked the next button, makre sure we're in bounds and then open the next panel.
		if ( next ) {
			if ( ( data.activeIndex + 1 ) <= ( data.els.panels.length - 1 ) ) {
				// If we're using form controls, grab them and let's validate before we move. 
				if ( data.options.stepForm ) {
					var valid = checkValidity( data );
					if ( !valid ) return;
				};
				USC.tabState( data.activeIndex + 1, data );
			} 
		} else if ( prev ) {
			// If we clicked on the previous button, make sur we're in bound and then go to the previous panel.
			if ( ( data.activeIndex - 1 ) >= 0 ) USC.tabState( data.activeIndex - 1, data ); 
		} else if ( !tab && !secTab ) {
			// Not a tab.
			if ( data.options.hover && !data.options.hoverStay ) {
				// Turn off the tabs.
				USC.tabState( -1, data );
			}
			return;
		} else {
			
			// If what we have is a secondary tab, let's get the regular tab before we move on.
			var sti = secTab && data.els.secTabs.indexOf( secTab );
			if ( secTab && sti > -1 ) {
				tab = data.els.tabs[parseInt( secTab.getAttribute( 'index' ) )];
			}
			
			// Since it is a tab, let's make sure it belongs to this level of tabs.
			var ti = data.els.tabs.indexOf( tab );
			if ( ti < 0 ) {
				return;
			}

			// If we're using form controls, grab them and let's validate before we move. 
			if ( data.options.stepForm ) {
				var valid = checkValidity( data );
				if ( !valid ) return;
			};
			
			// Check to see if the tab is active.
			if ( tab.classList.contains( 'active' ) ) {

				// Close the tabs if we're closing when clicking an active item.
				if ( data.options.closing ) {
					// Turn off all tabs.
					USC.tabState( -1, data );
				} else {
					return;
				}

			} else {
				// Since we have a tab that belongs to this instance and it's not active, activate it.
				USC.tabState( data.els.tabs.indexOf( tab ), data );
			}

		}
	}

    
	/**
	 * Handles Key Down Events
	 * 
	 * @param {KeyboardEvent} e 
	 */
	window.USC.tabbableKeyDown = function( e, data ) {
		var tab, index, next, bounds;

		if ( e.keyCode === 13 ) {
			// Pressed enter.
			if ( e.shiftKey && e.ctrlKey && e.altKey ) {
				return;
			} else if ( ( tab = e.target.closest( ".el-tab" ) ) || ( tab = e.target.closest( ".el-sec-tab" ) ) ) {
				// Since we entered on a tab, call the click function for it.
				USC.tabbableClick( e, data );
				return;
			}
			return;
		} else if ( e.keyCode !== 9 ) {
			// Not a tab key, leave.
			return;
		}

		// Are we in the list of aquired tabbable elements.
		index = data.els.tabbable.indexOf( e.target );
		if ( index < 0 ) {
			return;
		}

		// If our tabs are inside of panels, or if tabs are siblings, go no further.
		if ( data.els.tabsInPanels || data.options.siblings ) return;

		// Find the next or previous visible element depending on whether Shift was held.
		for ( var i = index + ( e.shiftKey ? -1 : 1 ); ( i < data.els.tabbable.length ) && ( i >= 0 ); e.shiftKey ? i-- : i++ ) {
			next = data.els.tabbable[i];
			bounds = next.getBoundingClientRect();
			if ( !bounds.width || !bounds.height || getComputedStyle( next ).visibility === 'hidden' ) {
				next = undefined;
				continue;
			} else {
				break;
			}
		}

		if ( next ) {
			// Manually focus on that element.
			next.focus();
			e.preventDefault();
		} else if ( !e.shiftKey ) {
			// Since we're going forward.
			// Create a temp element to skip us passed the open panel.
			var esc = document.createElement( 'span' )
			esc.setAttribute( 'tabindex', 0 );

			// Add the temp element to the end of the tab box and focus on it.
			data.els.tabBox.appendChild( esc );
			esc.focus();

			// Now that we've moved our focus passed the panels and we're safe, remove the escape element.
			esc.remove();
		}
	}

	/**
	 * If we're closing when you leave a tab, this function handles it.
	 * 
	 * @param {MouseEvent} e 
	 */
	window.USC.tabbableMouseLeave = function( e ) {
		USC.tabState( -1, this );
	}

	/**
	 * Check Validity Function for Stepping Forms.
	 */
	function checkValidity( data ) {
		var pnl;
		// Get the active panel
		for ( var p = 0; p < data.els.panels.length; p++ ) {
			if ( data.els.panels[p].classList.contains( 'active' ) ) { 
				pnl = data.els.panels[p];
				continue;
			}
		}

		// Grab the inputs from that panel and add them to an array.
		var inps = Array.from( pnl.querySelectorAll( 'input, select, textarea' ) );
		// If we have inputs, check them against the form.js "Invalid" function. 
		// It returns true if valid and false if invalid.
		if ( inps ) {
			for (var i = 0; i < inps.length; i++ ) {
				const p = inps[i].parentElement;
				const v = p.querySelector('[data-validity]');

				if ( (!v && !inps[i].checkValidity()) ) {
					inps[i].reportValidity();
					return false
				} else if ( !inps[i].trigger('invalid') ) {
					return false
				}
			}
		}
		
		// If we don't find inputs or none come back invalid, return true.
		return true;
	}

	/**
	 * Set the active and inactive state for each tab.
	 * 
	 * @param {Number} index 
	 */
	window.USC.tabState = function( index, data ) {
		// Loop through the tabs and set the state. 
		for ( var i = 0; i < data.els.tabs.length; i++ ) {
			var tab = data.els.tabs[i];
			var panel = data.els.panels[i];
			USC.tabbableToggleActive( tab, panel, i === index, data );
			if ( i === index ) data.activeIndex = index;
		}

		// If we're on the first or last tab, add a class to the tab-box. Otherwise, make sure we don't have either class.
		if ( data.activeIndex === 0 ) {
			data.els.tabBox.classList.add( 'tab-start' );
			data.els.tabBox.classList.remove( 'tab-end' );
		} else if ( data.activeIndex === ( data.els.panels.length - 1 ) ) {
			data.els.tabBox.classList.remove( 'tab-start' );
			data.els.tabBox.classList.add( 'tab-end' );
		} else {
			data.els.tabBox.classList.remove( 'tab-start', 'tab-end' );
		}

	}

	/**
	 * Handle activating and deactivating tabs and panels. 
	 * 
	 * @param {HTMLElement} el
	 * @param {HTMLElement} panel 
	 * @param {Boolean} active
	 */
	window.USC.tabbableToggleActive = function( el, panel, active, data ) {
		// If we're already active and we're trying to activate, there's nothing to do.
		if ( active && el.classList.contains( 'active' ) ) return;

		// If we're not active and we're trying to deactivate, there's nothing to do.
		if ( !active && !el.classList.contains( 'active' ) ) return;

		// If we're sliding, do some crazy slider stuff...
		if ( data.options.slider === true ) {
			USC.slideToggle( panel, active );
		}

		// Add/remove the active class from the tab and it's corresponding panel.
		el.classList.toggle( 'active' );
		panel.classList.toggle( 'active' );

		// Update the ARIA attributes to reflect the new states
		USC.setAttributes( el, { 'aria-selected': active, 'aria-expanded': active } );
		panel.setAttribute( 'aria-hidden', active ? false : true );

		// If we're using secondary tabs, let's update them according to how we did the normal tabs.
		if ( data.options.secTabs ) {
			secTab = data.els.secTabs[el.getAttribute( 'index' )];
			secTab.classList.toggle( 'active' );
			USC.setAttributes( secTab, { 'aria-selected': active, 'aria-expanded': active } );

			// Focus on the normal tab so we're back in the correct spot we were before we entered the current panel.
			if ( !active ) {
				el.focus();
			}

		}

		// If we're marking a panel as active and we have a setup where tabs are in panels, move the focus to the newly opened panel.
		if ( active && data.els.tabsInPanels ) {
			panel.focus();
		}

		// Trigger any elements that are deferred inside the panel that is active
		if ( active ) {
			panel.dispatchEvent( new Event('resize') );
		}

		// If we're going active, look to see if there are images we need to show. 
		// The lazy load can't handle images inside of hidden panels so we have to work around it until we can find a better solution.
		if ( data.options.lazy === true && active ) {
			if ( panel.querySelector( 'img[data-src],img[data-bg],video[data-src],source[data-src]' ).length > 0 ) {
				window.dispatchEvent(new Event('resize'));
			}
		}

		// If we're handling video and we have a video, let's pause it
		if ( data.options.video === true && !active ) {
			panel.querySelectorAll( "video" ).forEach( function ( el ) {
				try { el.pause(); }
				catch ( ex ) { ; }
			} );
		}

	}

	if (window.register) {
		window.register('usc/p/passive-tabbable-handler');
	}

});