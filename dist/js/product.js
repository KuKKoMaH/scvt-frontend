webpackJsonp([0],{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(11);

var sizes = window.sizes;
var $slider = $('.' + "src-modules-sizes-slider");
var width = sizes.initialWidth;
var height = sizes.initialHeight;

function updateSizes() {
  $widthHolder.html(width);
  $heightHolder.html(height);

  var percentWidth = sizes.maxContainerWidth * (width / sizes.maxWidth);
  var percentHeight = sizes.maxContainerHeight * (height / sizes.maxHeight);
  $slider.width(percentWidth + '%');
  $slider.find('.slick-list').height(percentHeight + '%');
  $slider.slick('setPosition', 0);
}

function loadImage(index) {
  var $slide = $slick.$slides.eq(index);
  var url = $slide.data('lazy');
  if (url) {
    $slide.css('backgroundImage', 'url(' + url + ')');
    $slide.data('lazy', null);
  }
}

$slider.slick({
  lazyLoad: 'progressive',
  //dots:     true,
  arrows: false,
  asNavFor: '.' + "src-modules-sizes-thumbs_slider"
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  loadImage(nextSlide);
});

$('.' + "src-modules-sizes-thumbs_slider").slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.' + "src-modules-sizes-slider",
  centerMode: true,
  focusOnSelect: true,
  infinite: true
});

var $slick = $slider.slick('getSlick');

$slider.css('left', sizes.positionX + '%');
$slider.find('.slick-list').css('top', sizes.positionY + '%');

/* ================================================================================ */
/* Кнопки */
/* ================================================================================ */

var $width = $('.' + "src-modules-sizes-width");
var $height = $('.' + "src-modules-sizes-height");
var $widthHolder = $width.find('.' + "src-modules-sizes-size");
var $heightHolder = $height.find('.' + "src-modules-sizes-size");

$width.css({
  top: sizes.positionY - sizes.maxContainerHeight / 2 + '%',
  marginTop: -$width.height() / 2 - 10,
  left: sizes.positionX + '%'
}).fadeIn('fast');

$height.css({
  top: sizes.positionY + '%',
  marginLeft: -$height.width() / 2 - 10,
  left: sizes.positionX - sizes.maxContainerWidth / 2 + '%'
}).fadeIn('fast');

$width.find('.' + "src-modules-sizes-minus").on('click', function () {
  if (width <= sizes.minWidth) return;
  width -= 10;
  updateSizes();
});

$width.find('.' + "src-modules-sizes-plus").on('click', function () {
  if (width >= sizes.maxWidth) return;
  width += 10;
  updateSizes();
});

$height.find('.' + "src-modules-sizes-minus").on('click', function () {
  if (height <= sizes.minHeight) return;
  height -= 10;
  updateSizes();
});

$height.find('.' + "src-modules-sizes-plus").on('click', function () {
  if (height >= sizes.maxHeight) return;
  height += 10;
  updateSizes();
});

updateSizes();
loadImage(0);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
__webpack_require__(2);
__webpack_require__(6);
__webpack_require__(4);
__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ })

},[24]);