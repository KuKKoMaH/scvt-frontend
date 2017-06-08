const $popups = $('.' + facts_popup);

$('.' + facts_click).on('click', function () {
  const $this = $(this);
  const popup = $this.parent().find('.' + facts_popup);
  $popups.fadeOut('fast');
  popup.fadeIn('fast');
});

$('.' + facts_popup_close).on('click', function () {
  $popups.fadeOut('fast');
});