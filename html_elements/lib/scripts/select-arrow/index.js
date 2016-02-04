(function() {
  'use strict';
  var DOMContentLoaded, hasOwnAbility;
  hasOwnAbility = (function() {
    var style;
    style = document.createElement('a').style;
    style.cssText = 'pointer-events: auto';
    return style.pointerEvents === 'auto';
  })();
  if (hasOwnAbility) {
    return;
  }
  DOMContentLoaded = function() {
    var clicked, i, item, items;
    items = document.querySelectorAll('.select__arrow');
    if (!items.length) {
      return;
    }
    clicked = function(ev) {
      var event, scope, select;
      scope = ev.currentTarget.parentNode;
      select = scope.querySelector('select');
      event = document.createEvent('MouseEvents');
      event.initMouseEvent('mousedown', false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      select.dispatchEvent(event);
    };
    for (i = items.length - 1; i >= 0; i += -1) {
      item = items[i];
      item.addEventListener('click', clicked, false);
    }
  };
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
})();
