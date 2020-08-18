$("#xp-slideshow > div:gt(0)").hide();

setInterval(function () {
  $("#xp-slideshow > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#xp-slideshow");
}, 8000);
