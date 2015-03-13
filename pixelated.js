(function($) {
  pixelated = {
    modal: function(selector, show) {
      var modal = $(selector);
      modal.find('[data-pyxel-action=close]').unbind('click');
      if (show && !modal.is(':visible')) {
        modal.find('[data-pyxel-action=close]').click(function() {
          modal.hide();
        });
        modal.show();
      } else if (!show) {
        modal.hide();
      }
    }
  };
})(jQuery);