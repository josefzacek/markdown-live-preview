function LivePreview() {
  var text = document.getElementById('source-text-area').value,
  target = document.getElementById('targetDiv'),
  converter = new showdown.Converter(),
  html = converter.makeHtml(text);
  target.innerHTML = html;
}
