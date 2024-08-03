if (!window.USC) { window.USC = {}; }

// Listen for every click and keydown and pass them to the handler function
window.USC.listenUp = function (e) {

    // Make sure our target is a Show/Hide element
    if (e.target.closest('[data-role="btn"]')) {
        if (!window.USC.showHide) {
            require2('/common/usc/p/passive-show-hide.js', function () {
                window.USC.showHide(e);
            });
        } else {
            window.USC.showHide(e);
        }
    }

    // Make sure our target is a LightBox element
    if (e.target.closest('[data-lightbox="true"]')) {
        var lb = e.target.closest('[data-lightbox="true"]');

        // Check to see if Light Box has initialized on this element. If not, initialize it and handle the click function.
        if (!lb.$lightBox) {
            USC.lightBox(lb);
            lb.$lightBox._handleClick(e);
        }
    }

    // Make sure our target is an Accessibility element
    if (e.target.closest('[data-accessibility-menu="true"]')) {
        var menu = e.target.closest('[data-accessibility-menu="true"]');
        menu.$accessMenu._handleClick(e);
    }

    // Make sure our target is a Tabbable element
    var elTab = e.target.closest('.el-tab-box');
    var par = elTab && elTab.parentNode.closest('.el-tab-box');
    if (elTab) {
        if (!window.USC.tabbableHandler) {
            require2('/common/usc/p/passive-tabbable-init.js', function () {
                USC.tabbable( (elTab && par) ? par : elTab );
                USC.tabbableHandler(e, elTab);
            });
        } else {
            if ( !elTab.$tabbable ) USC.tabbable( (elTab && par) ? par : elTab );
            USC.tabbableHandler(e, elTab);
        }
    }
}

document.addEventListener('click', USC.listenUp);
document.addEventListener('keydown', USC.listenUp);

if (window.register) {
    window.register('usc/p/passive-listener');
}