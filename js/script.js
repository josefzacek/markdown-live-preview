function LivePreview() {
  var text = document.getElementById('source-text-area').value,
  target = document.getElementById('targetDiv'),
  converter = new showdown.Converter(),
  html = converter.makeHtml(text);
  target.innerHTML = html;
}

function FullScreen() {
  $( "body>div" ).removeClass( "container" );
  $( "body>div" ).addClass( "container-fluid" );
  $( "body>div>h1" ).removeClass("text-center");
  $( "body>div>h1" ).css("display", "none");
}
