$('.' + file_input).on('change', function(event) {
  const files = event.target.files;
  if(!files.length || !files[0].name) return;
  const $name = $(this).parent().find('.' + file_name);
  $name.html(files[0].name);
});