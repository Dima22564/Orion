"use strict";

$(document).ready(function () {
  $(".currecy-select").selectmenu({
    classes: {
      "ui-selectmenu-button-closed": "drop-menu-currecy-select",
      "ui-selectmenu-button-open": "drop-menu-currecy-select",
      "ui-menu-item-wrapper": "drop-menu"
    },
    icons: {
      button: "custom-icon"
    },
    transferClasses: true,
    focus: function focus(event, ui) {
      $(ui).addClass('custom');
    }
  }).selectmenu("menuWidget");

  function date(parent) {
    $(parent).on('input', function () {
      var val = $(parent).find('input').val();
      $(parent).find('.js-out').html(val);
    });
  }

  date('.js-date-1');
  date('.js-date-2');
  $(".currency-select-1").selectmenu({
    classes: {
      "ui-selectmenu-button-closed": "drop-menu-currecy-select-1",
      "ui-selectmenu-button-open": "drop-menu-currecy-select-1",
      "ui-menu-item-wrapper": "drop-menu"
    },
    icons: {
      button: "custom-icon"
    },
    transferClasses: true,
    focus: function focus(event, ui) {
      $(ui).addClass('custom');
    }
  }).selectmenu("menuWidget");
});