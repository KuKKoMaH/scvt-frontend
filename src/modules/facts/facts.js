const $popups = $('.' + facts_popup);

$('.' + facts_button).on('click', function(){
  const $this = $(this);
  $popups.fadeOut('fast');
  $this.parent().parent().find('.' + facts_popup).fadeIn('fast');
});


$('.' + facts_popup_close).on('click', function() {
  $popups.fadeOut('fast');
});