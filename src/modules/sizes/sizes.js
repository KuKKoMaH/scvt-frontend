import 'slick-carousel';

// const $picture = $('.' + sizes_picture);
// let width = $('[name="width"]:checked').val();
// let height = $('[name="height"]:checked').val();
//
// const maxHeight = $('[name="height"]').last().val();
// const maxWidth = $('[name="width"]').last().val();
//
// const maxSize = 40;
//
// positionPicture();
//
// $('[name="width"]').on('change', function(){
//   width = $(this).val();
//   positionPicture();
// });
//
// $('[name="height"]').on('change', function(){
//   height = $(this).val();
//   positionPicture();
// });
//
// function positionPicture() {
//   console.log(width, height);
//   $picture
//     .width((maxSize * width / maxWidth ) + '%')
//     .height((maxSize * height / maxHeight ) + '%')
// }

const sizes = window.sizes;
const $slider = $('.' + sizes_slider);
let width = Math.round((sizes.minWidth + sizes.maxWidth) / 2 / 10) * 10;
let height = Math.round((sizes.minHeight + sizes.maxHeight) / 2 / 10) * 10;

function updateSizes() {
  $widthHolder.html(width);
  $heightHolder.html(height);

  const percentWidth = sizes.maxContainerWidth * (width / sizes.maxWidth);
  const percentHeight = sizes.maxContainerHeight * (height / sizes.maxHeight);
  $slider.width(percentWidth + '%');
  $slider.find('.slick-list').height(percentHeight + '%');
  $slider.slick("setPosition", 0);
}

function loadImage(index) {
  const $slide = $slick.$slides.eq(index);
  const url = $slide.data('lazy');
  if(url) {
    $slide.css('backgroundImage', 'url(' + url + ')');
    $slide.data('lazy', null);
  }
}

$slider.slick({
  lazyLoad: 'progressive',
  dots:     true,
  arrows:   false,
    // const img = $(event.currentTarget).find("[data-slick-index='"+next_slide_index+"'] img");
    // const img2 = $(event.currentTarget).find("[data-slick-index='"+(next_slide_index+1)+"'] img");
    // img.attr('src', img.data('llos-lazy'));
    // setTimeout(function(){
    //   img2.attr('src', img2.data('llos-lazy'));
    // }, 300);
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  loadImage(nextSlide);
});

const $slick = $slider.slick('getSlick');

$slider.css('left', sizes.positionX + '%');
$slider.find('.slick-list').css('top', sizes.positionY + '%');

/* ================================================================================ */
/* Кнопки */
/* ================================================================================ */

const $width = $('.' + sizes_width);
const $height = $('.' + sizes_height);
const $widthHolder = $width.find('.' + sizes_size);
const $heightHolder = $height.find('.' + sizes_size);

$width.css({
  top:       sizes.positionY - (sizes.maxContainerHeight / 2) + '%',
  marginTop: -$width.height() / 2 - 10,
  left:      sizes.positionX + '%',
}).fadeIn('fast');

$height.css({
  top:        sizes.positionY + '%',
  marginLeft: -$height.width() / 2 - 10,
  left:       sizes.positionX - (sizes.maxContainerWidth / 2) + '%',
}).fadeIn('fast');

$width.find('.' + sizes_minus).on('click', function () {
  if (width <= sizes.minWidth) return;
  width -= 10;
  updateSizes();
});

$width.find('.' + sizes_plus).on('click', function () {
  if (width >= sizes.maxWidth) return;
  width += 10;
  updateSizes();
});

$height.find('.' + sizes_minus).on('click', function () {
  if (height <= sizes.minHeight) return;
  height -= 10;
  updateSizes();
});

$height.find('.' + sizes_plus).on('click', function () {
  if (height >= sizes.maxHeight) return;
  height += 10;
  updateSizes();
});

updateSizes();
loadImage(0);