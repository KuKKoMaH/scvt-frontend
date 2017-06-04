require('selectize');

var $selects = $('.' + select_wrapper).selectize({
  dropdownParent: 'body'
  // onChange: function (value) {
  //   $selects.each(function () {
  //     if (this.selectize.getValue() !== value)
  //       this.selectize.setValue(value);
  //   });
    // $('.' + styles.popup.city).val(value);
  // }
});