if ( !window.USC ) { window.USC = {}; }
require2(['usc/p/passive-tabbable-handler', 'usc/p/usc-utils', 'usc/p/slide-toggle'], function () {

    var defaultOptions = {
        slider: false,
        speed: 500,
        // Are the tabs and their panels siblings or in separate elements?
        siblings: true,
        // Do we want to close an item if it's open and they click the tab again?
        closing: false,
        // Do we want to open items when their tab is hovered?
        hovers: false,
        // Do we want items to stay open once they've been hovered on?
        hoverStay: true,
        // Do you have videos in your items?
        video: false,
        // Do you have images that are being lazy loaded?
        lazy: false,
        // Are we running a stepping form of some sort that needs the tabbable to check validity of inputs between steps?
        stepForm: false,
        // Do we want to be able to move the tabs with next and previous buttons of some sort?
        nextPrev: false
    };
    var touch = window.matchMedia('(hover:none)');
    /**
     * Create the Tabbable control.
     * 
     * @param {HTMLElement} el 
     */
    function Tabbable(el) {
        this.element = el;
        this.activeIndex = 0;
        // Get our elements.
        this.els = {
            tabBox: el,
            tabs: Array.from(el.querySelectorAll('.el-tab')),
            panels: Array.from(el.querySelectorAll('.el-panel')),
            secTabs: Array.from(el.querySelectorAll('.el-sec-tab')),
            tabbable: []
        };


        
        // Make sure we have tabs and panels before we move on.
        if (!this.els.panels.length || !this.els.tabs.length) return false;
        // Set the options.
        var data = USC.elementData(el);
        this.options = Object.assign({}, defaultOptions, data);
        // Bind these methods to this instance.
        this.handleAria = handleAria.bind(this);
        this.getTabbable = getTabbable.bind(this);
        this.handleSubs = handleSubs.bind(this);

        // Grab any sub tab boxes so we can remove their elements from our current set and set the subsets up with their own Tabbable.
		var sub = Array.from( this.els.tabBox.querySelectorAll( '.el-tab-box' ) );
		if ( sub.length ) {
			this.handleSubs( sub );
		}

        // Check to see if we have secondary tabs.
        if (this.els.secTabs.length) this.options.secTabs = true;
        // Check to make sure we don't have non-active panels that are visible as this is an indication we don't need to run.
        var visCheck = panelVisCheck(this.els.panels);
        if (!visCheck) return false;
        // If we are using next/prev buttons, find them and store them. 
        if (this.options.nextPrev) {
            this.els.next = el.querySelector('.el-next-btn');
            this.els.prev = el.querySelector('.el-prev-btn');
        }
        this.handleAria();
        // Collect the tabbable elements in our display.
        this.getTabbable();
        // If we want to activate the tabs on hover.
        if (this.options.hovers) {
            // If we're not on a touch device, treat a focusin or a mouseover on a tab as though we clicked it.
            if (!touch.matches) {
                this.els.tabBox.addEventListener('mouseover', USC.tabbableClick.bind(this));
                this.els.tabBox.addEventListener('focusin', USC.tabbableClick.bind(this));
            }
            if (!this.options.hoverStay) {
                // When leaving a tab, turn it off.
                this.els.tabBox.addEventListener('mouseleave', USC.tabbableMouseLeave.bind(this));
                this.els.tabBox.addEventListener('focusout', USC.tabbableMouseLeave.bind(this));
            }
        }
    }

    /**
     * Take an array of tabs and find the tab associated to the provided panel ID.
     * 
     * @param {Array} tabs
     * @param {Number} id 
     */
    function findTab(tabs, id) {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].getAttribute('aria-controls') === id) return tabs[i];
        }
    }

    /**
	 * Remove items from the arrays if they belong to a subset of tabs.
	 * 
	 * @param {HTMLElement[]} subs
	 * @param {HTMLElement} el
	 * @param {Array} array
	 * @param {Number} index 
	 */
	function removeSub( subs, el, array, index ) {

		// Iterate through the tab subsets and check the element against them.
		for ( var i = 0; i < subs.length; i++ ) {

			// If the element is a child of a subset, remove it from the elements array.
			if ( subs[i].contains( el ) && el != subs[i] ) {
				array.splice( index, 1 );
				break;
			}
		}

    }
    
    /**
	 * Check each type of element to make sure it's not in a subset.
	 * 
	 * @param {HTMLElement[]} subs
	 */
     function handleSubs( subs ) {

		// Create temporary arrays to work with.
		var tempTabs = this.els.tabs.slice( 0 );
		var tempPanels = this.els.panels.slice( 0 );
		var tempSecTabs = this.els.secTabs.slice( 0 );

		// Check and remove any tabs from nested tab sets.
		for ( var t = this.els.tabs.length - 1; t >= 0; t-- ) {
			removeSub( subs, this.els.tabs[t], tempTabs, t );
		}

		// Replace the orginal object with the updated temp array.
		this.els.tabs = tempTabs;

		// Check and remove any panels from nested tab sets.
		for ( var p = this.els.panels.length - 1; p >= 0; p-- ) {
			removeSub( subs, this.els.panels[p], tempPanels, p );
		}

		// Replace the orginal object with the updated temp array.
		this.els.panels = tempPanels;

		// Check and remove any secondary tabs from nested tab sets.
		for ( var st = this.els.secTabs.length - 1; st >= 0; st-- ) {
			removeSub( subs, this.els.secTabs[st], tempSecTabs, st );
		}

		// Replace the orginal object with the updated temp array.
		this.els.secTabs = tempSecTabs;

		// Create a new Tabbable for each subset of tabs.
		for ( var i = 0; i < subs.length; i++ ) {
			new window.USC.tabbable( subs[i] );
		}
	}


    /**
     * Handle all of the ARIA markup and accessibility decisions. 
     */
    function handleAria() {
        // Get the first tab and panel for checking our setup.
        // Grab the tab list element if we have one.
        var tab = this.els.tabs[0];
        var panel = this.els.panels[0];
        var list = tab && tab.closest('ul');
        // If we have a list, add the appropriate attribute.
        if (list) {
            list.setAttribute('role', 'tablist');
        }
        // Add tabindex for non-sibling panels so we can jump focus back and forth later.
        if (this.options.siblings === false) {
            for (var pn = 0; pn < this.els.panels.length; pn++) {
                this.els.panels[pn].setAttribute('tabindex', 0);
            }
        } else {
            // ( Allows for easily changing to an accordion on mobile. )
            // Since the tabs & panels are siblings, let's determine whether or not we want to use sliding. 
            // Let's assume we want to slide if the panels are relative in position and we're not using hovers as a control.
            // Since all panels should have the same styles, we'll just check the first one. 
            if (panel && getComputedStyle(panel).position !== 'absolute' && this.options.hovers === false) {
                this.options.slider = true;
            }
        }
        // Do some checking to make sure we're only setting necessary attributes.
        this.els.panelIds = (panel && this.els.panels[0].getAttribute('id')) ? true : false;
        this.els.tabControls = (tab && this.els.tabs[0].getAttribute('aria-controls')) ? true : false;
        // If our tabs aren't in a list and we have manually associated elements, let's reorder the arrays.
        // This part assumes the panels are in proper order.
        if (!list && this.els.panelIds && this.els.tabControls) {
            // For each panel, find the matching tab and push them one by one into a new array.
            var newTabs = [],
                newSecTabs = [];
            // Run through the panels and find the associated tab or tabs. Reorder them into new arrays accordingly.
            for (k = 0; k < this.els.panels.length; k++) {
                newTabs.push(findTab(this.els.tabs, this.els.panels[k].getAttribute('id')));
                if (this.options.secTabs) {
                    newTabs.push(findTab(this.els.secTabs, this.els.panels[k].getAttribute('id')));
                }
            }
            // Since we now have an array of tabs in the same order as their matching panels, update the offical tabs array.
            this.els.tabs = newTabs;
            if (this.options.secTabs) {
                this.els.secTabs = newSecTabs;
            }
        }
        // Check to see if the first tab is inside any of our panels. 
        // If it is, set an attribute so we can alter how ADA navigation works.
        for (var pan = 0; pan < this.els.panels.length; pan++) {
            if (this.els.panels[pan].contains(this.els.tabs[0])) {
                this.els.tabsInPanels = true;
                break;
            }
        }
        // For as many tabs as we have, set the necessary attributes on each tab and its corresponding panel.
        for (var j = 0; j < this.els.tabs.length; j++) {
            // Setup value for if the current tab / panel are supposed to be active.
            var active = (this.els.tabs[j].classList.contains('active')) ? true : false,
                // If we already have IDs, let's stick with them. If not, let's make our own.
                id = (this.els.panelIds) ? this.els.panels[j].getAttribute('id') : (this.element.getAttribute('id')) ? this.element.getAttribute('id') + this.els.tabs[j].innerText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?\s]/g, '') : Math.floor(Math.random() * 100) + 'Panel' + j;
            // Set all necessary attributes for the current tab
            USC.setAttributes(this.els.tabs[j], { role: 'tab', tabindex: 0, 'aria-selected': active, 'aria-expanded': active, 'aria-controls': id, index: j });
            // If we have secondary tabs, mirror the normal tab attributes.
            if (this.options.secTabs) {
                USC.setAttributes(this.els.secTabs[j], { role: 'tab', tabindex: 0, 'aria-selected': active, 'aria-expanded': active, 'aria-controls': id, index: j });
            }
            // Set all necessary attributes for the current panel
            USC.setAttributes(this.els.panels[j], { role: 'tabpanel', 'aria-hidden': active ? false : true, id: id });
        }
        // If we have next/prev buttons, let's set them up.
        if (this.els.next) USC.setAttributes(this.els.next, { role: 'button', title: 'View the Next Panel' })
        if (this.els.prev) USC.setAttributes(this.els.prev, { role: 'button', title: 'View the Previous Panel' })
    }
    /**
     * Find all tabbable elements in the tab box so we can track where we are in moving keyboard users.
     */
    function getTabbable() {
        var tabbable = Array.from(this.els.tabBox.querySelectorAll("a,button,input,select,[tabindex]"));
        while (tabbable.length) {
            // Get the first item on the list and move it to the tabbable collection.
            var item = tabbable.shift();
            this.els.tabbable.push(item);
            // Check to see if this is one of the tab objects.
            var index = this.els.tabs.indexOf(item);
            if (index < 0) {
                continue;
            }
            // Get the matching panel.
            var panel = this.els.panels[index];
            // Find all tabbable elements in the matching panel.
            for (var i = 0; i < tabbable.length; i++) {
                item = tabbable[i];
                if (panel === item || panel.contains(item)) {
                    // Move those over to the tabbable collection, in sequence.
                    this.els.tabbable.push(item);
                    // Remove this item from the temp collection and adjust the index.
                    tabbable.splice(i, 1);
                    i--;
                }
            }
        }
    }
    /**
     * ( Allows you to block or move to a scrolling list in responsive ) 
     * If our panels are not hidden, let's assume we don't want tabs. 
     * Iterate through the panels looking for a non-active panel that is being displayed. 
     * 
     * @param {Array} panels 
     */
    function panelVisCheck(panels) {
        for (var p = 0; p < panels.length; p++) {
            // Grab the current panel.
            var panel = panels[p];
            if (panel.classList.contains('active')) {
                continue;
            }
            // If a non-active panel is visible, exit now.
            var bounds = panel.getBoundingClientRect();
            if (bounds.width || bounds.height) {
                return false;
            }
        }
        return true;
    }

    /**
     * Public Tabbable creation.
     * 
     * @param {any} el
     */
    window.USC.tabbable = function (el) {
        el = el.closest('.el-tab-box') || el;
        if (!(el instanceof HTMLElement)) {
            throw new Error("Need an HTMLElement to initialize a Tabbable.")
        } else if (el.$tabbable) {
            console.log("Tabbable already initialized.");
            return;
        } else {
            el.$tabbable = new Tabbable(el);
        }
    };


	if ( window.register ) {
		window.register( 'usc/p/passive-tabbable-init' );
	}

} );