$(document).ready(function() {

  $('.scroll-down').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 1200);
      return false;
  });

  function showPopup() {
    $(".popup").fadeIn();

    $("body").addClass("overlay-background");
  }

  function hidePopup () {
    $(".popup").fadeOut();

    $("body").removeClass("overlay-background")
  }

  $(".buy-now").click(showPopup);
  $(".close-icon").click(hidePopup);

});
