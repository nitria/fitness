/*HAMBURGER
==========*/
$(function () {
  $(".hamburger").click(function () {
    $(".navbar").toggleClass("open");
    $(this).toggleClass("open");
  });

  /*BackToTop
  ==========*/
  $(".top").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() < 450) {
      $(".top").fadeOut();
    } else {
      $(".top").fadeIn();
    }
  });
});
