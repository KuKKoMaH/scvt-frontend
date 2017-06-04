const $tabs = $('.' + stocks_detail);
$('.' + stocks_item).on('click', function() {
  const index = $(this).data('target');
  $tabs.removeClass(stocks_detail_active);
  $tabs.eq(index).addClass(stocks_detail_active);
});
