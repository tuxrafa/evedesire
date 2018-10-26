$(".videoChange").click(function() {trocaVideo(this)});
var bejeto
function trocaVideo(obj) {
  url = "https://www.youtube.com/embed/"+$(obj).attr("video")+"?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1";
  $('#mainVideoPlayer').attr('src',url);
}

$(".albery-container").albery({
  speed: 500,
  imgWidth: 700,
  paginationBorder: 5,
  paginationItemWidth: 116
});

$('nav .nav a[href^="#"]').click(function () {
  var section = $.attr(this, 'href').substr(1);
  if (section == "home") {
    sectionTop = 0;
  } else {
    sectionTop = $('section#' + section ).offset().top -100;
  }
    $('html, body').animate({
        scrollTop: sectionTop
    }, 500);

    return false;
});
