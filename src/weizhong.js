/*
 * 
 * 
 *
 * Copyright (c) 2016 
 * Licensed under the MIT license.
 */
(function ($) {
  $.fn.weizhong = function () {
    return this.each(function (i) {
      // Do something to each selected element.
      $(this).html('weizhong' + i);
    });
  };
}(jQuery));
