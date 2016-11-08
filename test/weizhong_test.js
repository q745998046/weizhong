(function ($) {
  module('jQuery#weizhong', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.weizhong(), this.elems, 'should be chainable');
  });

  test('is weizhong', function () {
    expect(1);
    strictEqual(this.elems.weizhong().text(), 'weizhong0weizhong1weizhong2', 'should be weizhong');
  });

}(jQuery));
