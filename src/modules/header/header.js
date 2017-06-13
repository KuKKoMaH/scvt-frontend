import 'jquery-smooth-scroll';
import 'magnific-popup';

$('.' + header_callback).magnificPopup({
  type: 'inline'
});

$('.' + header_menu + ' a').smoothScroll();
