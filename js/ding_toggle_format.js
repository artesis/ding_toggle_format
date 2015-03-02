(function($) {

  Drupal.behaviors.toggleFormat = {
    attach: function(context, settings) {
      $('#ding-toggle-format a', context).click(function(e) {
        e.preventDefault();
        if (!$(this).hasClass('disabled')) {
          var toFormat = ($.cookie("ding_toggle_format") == 'short') ? 'long': 'short';
          Drupal.setFormat(toFormat);
        }
        return false;
      });
    }
  };

  Drupal.behaviors.readyFormat = {
    attach: function(context, settings) {
      $('#ding-toggle-format', context).ready(function() {
        var format = ($.cookie("ding_toggle_format")) ? $.cookie("ding_toggle_format") : 'long';
        Drupal.setFormat(format);
      });
    }
  };

  Drupal.setFormat = function(format) {
    var formatClass = 'ding-toggle-format-' + format;
    // Remove format from div
    $("#ding-toggle-format").removeClass('ding-toggle-format-long');
    $("#ding-toggle-format").removeClass('ding-toggle-format-short');
    // Remove disabled from toggle links
    $("#ding-toggle-format a").removeClass('active');
    // Set active toogle link
    $("#ding-toggle-format a." + formatClass).addClass('active');
    $("#ding-toggle-format").addClass(formatClass);
    // Set format to search results
    $("li.search-result").removeClass('ding-format-long');
    $("li.search-result").removeClass('ding-format-short');
    $("li.search-result").addClass('ding-format-' + format);
    $.cookie("ding_toggle_format", format, {
      expires: 30
    });
  };

} (jQuery));

