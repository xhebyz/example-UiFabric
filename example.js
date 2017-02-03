/**
 * Created by saraos on 01-02-17.
 */
function initExample() {
    // File Picker demo fixes
    if ($('.ms-FilePicker').length > 0) {
        $('.ms-FilePicker').css({
            "position": "absolute !important"
        });

        $('.ms-Panel').FilePicker();
    } else {
        if ($.fn.CommandBar) {
            $('.ms-CommandBar').CommandBar();
        }
    }

    // Vanilla JS Components
    if (typeof fabric !== "undefined") {
        if ('CommandBar' in fabric) {
            var elements = document.querySelectorAll('.ms-CommandBar');
            var i = elements.length;
            var component;
            while(i--) {
                component = new fabric['CommandBar'](elements[i]);
            }
        }
    }


}