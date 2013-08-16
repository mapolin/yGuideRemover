'use strict';
function yGuideRemove() {
    var guide = document.getElementById('guide');
    if(guide) {
        var isInner = document.getElementById('guide-container').className.match('collapsible-guide');
        if(isInner) {
            guide.parentElement.removeChild(guide);
        }
    }
}
yGuideRemove();