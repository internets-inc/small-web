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
      var scope, select, target;
      target = ev.currentTarget;
      scope = target.parentNode;
      select = scope.querySelector('select');
      if (select) {
        select.focus();
      }
    };
    for (i = items.length - 1; i >= 0; i += -1) {
      item = items[i];
      item.addEventListener('click', clicked, false);
    }
  };
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
})();
