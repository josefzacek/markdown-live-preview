$( document ).ready(function() {

  $('#full-screen').click(function() {
    $("body>div").toggleClass('container container-fluid');
    $( "body>div>h1" ).toggleClass('text-center hidden');
  });

});

function LivePreview() {
  var text = document.getElementById('source-text-area').value,
  target = document.getElementById('targetDiv'),
  converter = new showdown.Converter(),
  html = converter.makeHtml(text);
  target.innerHTML = html;
}
