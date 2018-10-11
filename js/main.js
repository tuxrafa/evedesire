$(".videoChange").click(function() {trocaVideo(this)});
var bejeto
function trocaVideo(obj) {
  url = "https://www.youtube.com/embed/"+$(obj).attr("video")+"?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1";
  $('#mainVideoPlayer').attr('src',url);
}

$(".fotoChange").click(function() {trocaFoto(this)});
function trocaFoto(obj) {
  url = obj.src;
  $('#mainFoto').attr('src',url);
}
