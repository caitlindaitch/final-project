$(document).ready(function() {

  $('.scroll-down').click(function(){
      $('#content').velocity('scroll', { duration: 1200 });
  });

  $('.footer-return').click(function(){
    $('.top').velocity('scroll', { duration: 1200 });
  });

  function showPopup() {
    $(".popup").velocity({
      opacity: [1, 0]
    }, {
      display: 'block'
    });

    $(".overlay-background").velocity({
      opacity: [1, 0]
    }, {
      display: 'block'
    });
  }

  function hidePopup () {
    $(".popup").velocity({
      opacity: [0, 1]
    }, {
      display: 'none'
    });

    $(".overlay-background").velocity({
      opacity: [0, 1]
    }, {
      display: 'none'
    });
  }

  $(".buy-now").click(showPopup);
  $(".close-icon, .overlay-background").click(hidePopup);

});
