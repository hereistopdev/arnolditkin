if ( !window.USC ) { window.USC = {}; }
require2( 'usc/p/utils', function () {

	var defaultOptions = {
		// Scroll by one item at a time with single and by group with panel
		scroll: 'panel',
		// Do you want the list to not wrap back to the beginning when you reach the end and vice-versa?
		wrap: false,
		// Do we want to activate one item at a time?  Or the entire visible panel?
		activate: 'item',
		// For a 'single' scroll, the active will automatically be place on the first item or the middle item you show an odd amount. 
		// First active true will force the active to always be on the first item. 
		firstActive: false,
		// Animate the transform property to move things into position.
		property: 'transform',
		// Auto advance to the next scrolling item on a timer.
		autoAdvance: false,
		// Time between auto-advance.
		delay: 8000,
		// Optionally specificy the duration of the slide transition for auto-advance calculations.
		duration: 0
	};

	var ACTIVE_CLASS = 's-active'

	/**
	 * Get the parts of the scrolling list.
	 * 
	 * @param {HTMLElement} parent
	 */
	function getItems( collection, parent ) {
		var elements = parent.querySelectorAll( "[data-role]" );
		for ( var i = 0; i < elements.length; i++ ) {
			var el = elements[i];
			var role = el.getAttribute( 'data-role' );
			switch ( role ) {
				case 'scroller':
				case 'items':
					// Already handled.
					break;
				case 'item':
					// Any item without a link gets a tab index.
					if ( !el.querySelector( 'a' ) ) {
						el.setAttribute( 'tabindex', 0 );
					}
					// Add to the item collection.
					collection.items.push( el );
					break;
				case 'thumbList':
				case 'list':
				case 'container':
					// Store one of these.
					collection[role] = el;
					break;
				default:
					// The rest can have multiple, store it as an array.
					var list = collection[role];
					if ( !list ) {
						collection[role] = list = [el];
					} else {
						list.push( el );
					}
					break;
			}
		}
	}


	function ScrollingList( el ) {
		this.element = el;

		// Note the main scroller element.
		this.els = {
			scroller: el.closest( "[data-role='scroller']" ) || el,
			items: []
		};

		// Get any other items.
		getItems( this.els, this.els.scroller );

		// Set the options.
		var data = USC.elementData( el );
		this.options = Object.assign( {}, defaultOptions, data );

		this.state = {
			// Current index position of the individual active item.
			index: 0,
			// Resize timer.
			rtimer: 0,
			// Which css property to adjust.
			prop: 'transform',
			// The dimension to transform (X/Y)
			axis: 'transformX{0}',
			// The current viewport width.
			wn: window.innerWidth,
			// Track if the user is navigating with their keyboard. 
			tabbing: false
		};

		// Check to make sure our items are all visible and stop the scrolling list if any are hidden.
		// If we have any hidden items, let's assume we're running tabs that are supposed to turn into a scrolling list later. 
		for ( var itm = 0; itm < this.els.items.length; itm++ ) {
			if ( getComputedStyle( this.els.items[itm] ).display === 'none' ) {
				return false;
			}
		}

		// Store the event listener functions to make them easy to remove for ADA.
		this.handleClick = this.handleClick.bind( this );
		this.handleKeydown = this.handleKeydown.bind( this );
		this.handleFocusIn = this.handleFocusIn.bind( this );
		this.handleResize = this.handleResize.bind( this );

		// Bind our events.
		this.els.scroller.addEventListener( 'click', this.handleClick );
		this.els.scroller.addEventListener( 'keydown', this.handleKeydown );
		this.els.scroller.addEventListener( 'focusin', this.handleFocusIn );
		window.addEventListener( 'resize', this.handleResize );

		// Set up swipe events if the device has touch.
		if ( 'ontouchstart' in window ) {
			this.state.x0;
			this.state.x1;
			this.els.scroller.addEventListener( 'touchstart', function ( e ) { this.handleTouchStart( e ); }.bind( this ), { passive: true } );
			this.els.scroller.addEventListener( 'touchend', function ( e ) { this.handleTouchEnd( e ); }.bind( this ), { passive: true } );
		}

		// Measure the items, refresh the state, and set the scroller as active.
		this.measure();
		this.refresh();
		this.els.scroller.classList.add( 'active' );

	}

	/**
	 * Activate an item.
	 * 
	 * @param {HTMLElement} item
	 */
	ScrollingList.prototype._activate = function ( item ) {
		item.classList.add( ACTIVE_CLASS );

		// If we have an active, matching el-tabs control, active it.
		var tab = item.closest( ".el-tab[aria-controls]" );
		var tabs = tab && tab.closest( '.el-tab-box' );
		var tabbable = tabs && tabs.$Tabbable;
		if ( tab && tabs && tabbable ) {
			tabbable.tabState( tab.getAttribute( 'index' ) );
		}

	};

	/**
	 * Deactivate an item.
	 * 
	 * @param {HTMLElement} item
	 */
	ScrollingList.prototype._deactivate = function ( item ) {
		if ( !item || !item.classList.contains( ACTIVE_CLASS ) ) {
			return;
		}

		item.classList.remove( ACTIVE_CLASS );

		// Stop any NON-JWplayer videos.
		item.querySelectorAll( "video" ).forEach( function ( el ) {
			el.pause();
		} );
	};

	/**
	 * Calculate the Position of a Requested Index.
	 *
	 * @param {number} index
	 */
	ScrollingList.prototype._position = function ( index ) {
		if ( this.options.scroll !== 'panel' ) {
			// Index of the item times item width.
			to = index * this.state.single;
		} else {
			// Convert the index of the item to the index of the panel, times panel width.
			to = Math.round( index / this.state.visible ) * this.state.panel;
		}
		return to;

	};

	/**
	 * Animate the New Item Into Position.
	 * 
	 * @param {Number} index 
	 */
	ScrollingList.prototype.animate = function ( index ) {
		// Get the position information for the requested index.
		var to = this._position( index );

		// If the last page of items isn't full, don't animate the entire way.
		if ( this.state.max && to > this.state.max ) {
			to = this.state.max;
		}

		// Convert to a negative percentage and apply it to the list.
		var transform = this.state.axis.replace( '{0}', ( to * -100 ) + '%' );
		this.els.list.style[this.state.prop] = transform;

		// Update the new index position.
		this.state.index = index;

		// Refresh the state of any navigation.
		this.refresh();

		// Trigger the scroll event for lazy load images.
		window.dispatchEvent( new CustomEvent( 'scroll' ) );
	};

	/**
	 * Go to a Specific Item by Index.
	 * 
	 * @param {Number} index
	 */
	ScrollingList.prototype.moveTo = function ( index ) {
		if ( !this.state.panel ) {
			// Nothing is visible.
			return;
		}

		// If the index busts the limit, fix it based on the wrap settings.
		if ( index < 0 ) {
			index = this.options.wrap ? this.state.length - 1 : 0;
		} else if ( index >= this.state.length ) {
			index = this.options.wrap ? 0 : this.state.length - 1;
		}

		if ( index === this.state.index ) {
			return;
		}

		// Now that we've validated the index position, animate it.
		if ( this.state.visible === this.state.length ) {
			// Nothing to do.
		} else {
			this.animate( index );
		}
	};

	/**
	 * Next Function. 
	 */
	ScrollingList.prototype.next = function () {
		if ( this.options.scroll === 'panel' ) {
			// Advance to the first item in the next panel.
			var panel = Math.floor( this.state.index / this.state.visible );
			panel++;
			this.moveTo( panel * this.state.visible );
		} else {
			// Advance to the next item.
			this.moveTo( this.state.index + 1 );
		}
	};

	/**
	 * Prev Function. 
	 */
	ScrollingList.prototype.prev = function () {
		if ( this.options.scroll === 'panel' ) {
			// Advance to the first item in the previous panel.
			var panel = Math.floor( this.state.index / this.state.visible );
			panel--;
			this.moveTo( panel * this.state.visible );
		} else {
			// Advance to the previous item.
			this.moveTo( this.state.index - 1 );
		}
	};

	/**
	 * Handle Clicks.
	 * 
	 * @param {Event} e 
	 */
	ScrollingList.prototype.handleClick = function ( e ) {
		var el = e.target.closest( '[data-action], [data-role]' );

		// If we haven't clicked a scrolling list piece, it doesn't matter.
		if ( !el ) return;

		// Is it an actionable item?
		var action = ( el.getAttribute( 'data-action' ) ) ? true : false;

		if ( action ) {
			var data = el.dataset;
			switch ( data.action ) {
				case 'Next':
					this.next();
					break;
				case 'Prev':
					this.prev();
					break;
				case 'Thumb':
					this.moveTo( parseInt( data.index ) );
					break;
			}
		} else if ( el.getAttribute( 'data-role' ) === 'item' && this.options.scroll === 'single' && this.options.activate === 'item' ) {
			// Since we clicked an item, we're moving by singles, and we want to activate single, activate this one.
			var index = this.els.items.indexOf( el );
			if ( index >= 0 ) this.moveTo( index );
		}
	}

	/**
	 * Measure or Re-measure the Elements to Calculate Everything.
	 */
	ScrollingList.prototype.measure = function () {
		if ( !this.els.items.length ) {
			return;
		}

		var dim, item, extra;
		var cont = this.els.container.getBoundingClientRect();
		var list = this.els.list.getBoundingClientRect();
		var first = this.els.items[0].getBoundingClientRect();
		var start = 'left';
		var end = 'right';
		var size = 'width';
		var items = this.els.items;

		// Which attributes are we going to use for measurements?			

		switch ( this.options.property ) {
			case 'transform':
				this.state.prop = 'transform';
				this.state.axis = 'translateX({0})';
				break;
			case 'margin':
				this.state.prop = 'marginLeft';
				this.state.axis = '{0}'
				break;

			default:
				console.log( "Invalid animation property" );
				break;
		}

		// Note the number of items.
		this.state.length = items.length;

		// Reset the dimensions.
		this.state.single = 0;
		this.state.panel = 0;
		this.state.visible = 0;
		this.state.pages = 0;
		this.state.size = 0;

		dim = {
			// The top left position is the first item on the list.
			left: first.left,
			top: first.top,
			// The boundary (to determine out-of-frame) is the container.
			right: cont.right,
			bottom: cont.bottom
		};

		if ( this.options.property === 'transform' ) {
			// Percent translates are relative to the item itself.
			dim.width = list.width;
			dim.height = list.height;
		} else {
			// Percent margins are relative to the parent container.
			dim.width = cont.width;
			dim.height = cont.height;
		}

		// Find the first item outside the boundary of the container.
		for ( var i = 1; i < items.length; i++ ) {
			// Get the next item and measure it.
			item = items[i].getBoundingClientRect();

			if ( i === 1 ) {
				// How big is a single item?
				this.state.single = ( item[start] - dim[start] ) / dim[size];
			}

			// Look for the first item off "camera".
			if ( !this.state.pages && item[end] > dim[end] ) {
				// How big is a group?
				this.state.panel = ( item[start] - dim[start] ) / dim[size];
				// How many visisble in a panel?
				this.state.visible = i;
				// How many "pages" of visible groups?
				this.state.pages = Math.ceil( items.length / i );
			}

			if ( i === items.length - 1 ) {
				// Measure the total size from the first to last item.
				this.state.size = item[end] - dim[start];
			}
		}

		if ( !this.state.visible ) {
			// Everything is on one panel.
			this.els.scroller.classList.add( 'no-scroll' );
			this.state.visible = this.state.length;
			this.state.pages = 1;
		} else if ( extra = ( this.state.length % this.state.visible ) ) {
			// What is max we can scroll without showing whitespace.
			this.state.max =
				// The total number of pages (less one) times the width of a page of items.
				( ( this.state.pages - 2 ) * this.state.panel ) +
				// Add in the number of extra items, times the width of a single item.
				( extra * this.state.single );
		}

		// If we have more than one page and we're using thumbs, add them.
		if ( this.state.pages > 1 && this.els.thumbList ) {

			// Check to see if we have custom thumbs first.
			var thumbs = Array.from(this.els.thumbList.querySelectorAll('[data-action="Thumb"]'));
			if (!this.thumbEl && thumbs.length) {
				// If we have custom thumbs, grab the first one to use as a template for potentially making more.
				var template = thumbs[0];
				this.thumbEl = document.createElement( template.tagName );
				this.thumbEl.setAttribute( 'class', template.getAttribute( 'class' ) );
				this.thumbEl.setAttribute( 'data-action', "Thumb" );
			}

			// Loop through the amount of pages we have to create / hook up thumbs.
			for ( var t = 0; t < this.state.pages; t++ ) {

				// Get the item number we'll need to move to for the current page depending on if we're moving by group or single.
				var num = (this.options.scroll === 'panel') ? Math.ceil((this.els.items.length / this.state.pages) * t) : t;

				// If we don't have thumbs or if we only had one to be used for a template, we need to add one. 
				if ( !thumbs.length || !thumbs[t] ) {

					// If we have a thumbEl template, clone to to use. If not, we may need to set elements up. 
					var thumb = this.thumbEl ? this.thumbEl.cloneNode( true ) : document.createElement( this.els.thumbList.tagName == 'UL' ? 'li' : 'span' );

					// If we are using our template, add the necessary attributes to it.
					if (this.thumbEl) {
						thumb.setAttribute( 'title', 'View Item ' + ( num + 1 ) );
						thumb.setAttribute( 'data-index', num );
					} else {
						// Otherwise, setup the custom button element. 
						thumb.innerHTML = '<button title="View Item ' + ( num + 1 ) + '" data-action="Thumb" data-index="' + num + '"></button>';
					}

					// Appen the thumb to the container.
					this.els.thumbList.append( thumb );
				} else {
					// If we do have a thumb for this page already in existence, just add the data-index to it.
					thumbs[t].setAttribute( 'data-index', num );
				}

			}

			// Save the thumbs so we can update active classes and such.
			this.els.thumbs = Array.from( this.els.scroller.querySelectorAll( '[data-action="Thumb"]' ) );
		}
	};

	/**
	 * Reset the Scrolling List. 
	 */
	ScrollingList.prototype.reset = function () {
		// See if we got here as the result of a resize.
		if ( this.state.rTimer !== 0 ) {
			// Only trigger a reset if the width changed (don't care about browser height).
			var wn = window.innerWidth;
			if ( wn === this.state.wn ) {
				return;
			}
		}

		// Since the width has changed, update the stored version.
		this.state.wn = wn;

		// Snap the list back to the beginning.
		this.els.list.style.transform = 'none';
		if ( this.options.property === 'margin' ) this.els.list.style.removeProperty( 'marginLeft' );

		// Reset the index.
		this.state.index = 0;

		// Reset the thumbs
		if ( this.els.thumbList ) {
			if ( this.els.thumbs ) this.els.thumbs.forEach( el => el.remove() );
			delete this.els.thumbs;
		}

		// Remeasure.
		this.measure();

		// Force a repaint.
		void this.els.list.offsetWidth;

		// Update the state.
		this.refresh();
	};

	/**
	 * Refresh the State of the Scroller Position. 
	 */
	ScrollingList.prototype.refresh = function () {
		var start, end, middle, from, to, active, total;

		// Are we at the start or the end (for the purposes of navigation).
		if ( this.options.scroll === 'panel' ) {
			start = this.state.index < this.state.visible;
			end = Math.floor( this.state.index / this.state.visible ) === this.state.pages - 1;
		} else {
			start = this.state.index === 0;
			end = this.state.index === this.state.length - 1;
		}

		this.els.scroller.classList[start ? 'add' : 'remove']( 'start' );
		this.els.scroller.classList[end ? 'add' : 'remove']( 'end' );

		if ( this.els.items ) {
			if ( this.options.activate === 'panel' ) {
				// Activate every visible item in the panel.
				from = Math.floor( this.state.index / this.state.visible ) * this.state.visible;
				to = from + this.state.visible - 1;
			} else {

				// Check to see if we want to show the middle item as active. 
				// This can happen if we have a center item, we aren't forcing the active to the first item, and we're not tabbing.
				// Otherwise, set the first item as the active item.
				if ( ( this.state.visible % 2 ) === 1 && this.options.firstActive === false && this.state.tabbing === false ) {
					middle = ( this.state.index >= ( this.els.items.length - Math.floor( this.state.visible / 2 ) ) ) ? this.state.index - this.els.items.length + Math.floor( this.state.visible / 2 ) : this.state.index + Math.floor( this.state.visible / 2 );
					from = middle;
					to = middle;
				} else {
					from = this.state.index;
					to = this.state.index;
				}

			}

			// Set the state of the items.
			for ( var i = 0; i < this.els.items.length; i++ ) {
				var item = this.els.items[i];
				if ( i >= from && i <= to ) {
					this._activate( item );
				} else {
					this._deactivate( item );
				}
			}

		}

		// If we have thumbs, make sure our active classes are up to date.
		if ( this.els.thumbs ) {
			for ( var i = 0; i < this.els.thumbs.length; i++ ) {

				// Grab the current thumb.
				var item = this.els.thumbs[i];

				// If the current thumb index matches our current index, make it active.
				if ( parseInt( item.getAttribute( 'data-index' ) ) === this.state.index ) {
					this._activate( item );
				} else {
					// Since the index doesn't match, make sure it's not active.
					this._deactivate( item );
				}
			}
		}

		// Calculate the current position.
		if ( this.options.scroll === 'panel' ) {
			active = Math.floor( this.state.index / this.state.visible ) + 1;
			total = this.state.pages;
		} else {
			active = this.state.index + 1;
			total = this.state.length;
		}

		// Set any paging elements.
		if ( this.els['page-active'] ) {
			this.els['page-active'].forEach( function ( el ) { el.textContent = active; } );
		}
		if ( this.els['page-total'] ) {
			this.els['page-total'].forEach( function ( el ) { el.textContent = total; } );
		}
	};

	/**
	 * Handles Resize Events.
	 * 
	 * @param {Event} e 
	 */
	ScrollingList.prototype.handleResize = function ( e ) {
		clearTimeout( this.state.rtimer );
		this.state.rtimer = setTimeout( function () { this.reset(); }.bind( this ), 100 );
	}

	/**
	 * Handle Keydown Events.
	 * 
	 * @param {KeyboardEvent} e 
	 */
	ScrollingList.prototype.handleKeydown = function ( e ) {
		// If we haven't set that we're tabbing and we pressed tab, set it. 
		if ( !this.els.scroller.classList.contains( 'tabbing' ) && e.keyCode === 9 ) {
			
			this.els.scroller.classList.add( 'tabbing' );
			this.state.tabbing = true;

			// Remove the event listeners and delete the instance of the scrolling list.  
			this.els.scroller.removeEventListener( 'click', this.handleClick );
			this.els.scroller.removeEventListener( 'keydown', this.handleKeydown );
			this.els.scroller.removeEventListener( 'focusin', this.handleFocusIn );
			window.removeEventListener( 'resize', this.handleResize );
			delete this.element.$scrollingList;

		}
	};

	/**
	 * Handle the Focus In event.
	 * 
	 * @param {FocusEvent} e 
	 */
	ScrollingList.prototype.handleFocusIn = function ( e ) {
		// Check if we gained focus on a scrolling item.
		var index = this.els.items.indexOf( e.target );
		if ( index === -1 ) {
			// Nope.
			return;
		} else if ( e.target.classList.contains( ACTIVE_CLASS ) ) {
			// Already active.
			return;
		} else {
			// Activate the new item.
			this.animate( index );
		}
	};

	/**
	 * Handle Touch Start.
	 * 
	 * @param {Event} e 
	 */
	ScrollingList.prototype.handleTouchStart = function ( e ) {
		this.state.x0 = e.changedTouches[0].clientX;
	};

	/**
	 * Handle Touch End.
	 * 
	 * @param {TouchEvent} e 
	 */
	ScrollingList.prototype.handleTouchEnd = function ( e ) {
		// If we have an existing x, let's get the new one and test if we're trying to move.
		if ( this.state.x0 ) {

			var diff = e.changedTouches[0].clientX - this.state.x0;

			if ( diff >= 50 ) this.prev();
			if ( diff <= -50 ) this.next();

		}
	};

	// Add the ScrollingList to the USC prototype collection.
	if ( !USC._proto_ ) {
		USC._proto_ = {};
	}
	USC._proto_.ScrollingList = ScrollingList;

	/**
	 * Public ScrollingList creation.
	 * 
	 * @param {any} el
	 */
	window.USC.scrollingList = function ( el ) {
		if ( el === null ) {
			return;
		} else if ( !( el instanceof HTMLElement ) ) {
			throw new Error( "Need an HTMLElement to initialize a ScrollingList." )
		} else if ( el.$scrollingList ) {
			console.log( "ScrollingList already initialized." );
			return;
		} else {
			el.$scrollingList = new ScrollingList( el );
		}
	};

	if ( window.register ) {
		window.register( 'usc/p/scrolling-list' );
	}
} );