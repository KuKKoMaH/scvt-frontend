$('.' + file_input).on('change', function(event) {
  const files = event.target.files;
  if(!files.length || !files[0].name) return;
  const $name = $(this).parents('.' + file_wrapper).find('.' + file_name);
  $name.html(files[0].name);
});