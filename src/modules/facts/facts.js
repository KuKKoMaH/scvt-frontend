const $popups = $('.' + facts_popup);

$('.' + facts_click).on('click', function (e) {
  e.stopPropagation();
  const $this = $(this);
  const $popup = $this.parent().find('.' + facts_popup);
  hidePopup();
  $popup.fadeIn('fast');
  $popup.on('click', function ( e ) {
    e.stopPropagation();
  });
  $(window).on('click', hidePopup);
});

$('.' + facts_popup_close).on('click', hidePopup);

function hidePopup() {
  $popups.fadeOut('fast');
  $(window).off('click', hidePopup);
}