$(document).ready(function () {
  $(".veen .rgstr-btn button").click(function () {
    $(".veen .wrapper").addClass("move");
    $(".body").css("background", "#039F79");
    $(".container-menu").css("background", "#039F79");
    $(".veen .login-btn button").removeClass("active");
    $(this).addClass("active");
  });
  $(".veen .login-btn button").click(function () {
    $(".veen .wrapper").removeClass("move");
    $(".body").css("background", "#243b55");
    $(".container-menu").css("background", "#243b55");
    $(".veen .rgstr-btn button").removeClass("active");
    $(this).addClass("active");
  });
});
