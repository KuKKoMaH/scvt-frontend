const $picture = $('.' + sizes_picture);
let width = $('[name="width"]:checked').val();
let height = $('[name="height"]:checked').val();

const maxHeight = $('[name="height"]').last().val();
const maxWidth = $('[name="width"]').last().val();

const maxSize = 40;

positionPicture();

$('[name="width"]').on('change', function(){
  width = $(this).val();
  positionPicture();
});

$('[name="height"]').on('change', function(){
  height = $(this).val();
  positionPicture();
});

function positionPicture() {
  console.log(width, height);
  $picture
    .width((maxSize * width / maxWidth ) + '%')
    .height((maxSize * height / maxHeight ) + '%')
}



