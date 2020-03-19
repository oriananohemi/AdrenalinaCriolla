$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 400) {
      $(".navbar").css("background", "black");
      $(".dropdown-menu").css("background", "black");
    } else {
      $(".navbar").css("background", "#36536e");
      $(".dropdown-menu").css("background", "#36536e");
    }
  });
});
