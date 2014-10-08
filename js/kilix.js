$(document).ready(function(){
    menuheight();
    $('.menu-icon').on('click',function(){
      $('body').toggleClass('toggle');
    });
    $(window).on('resize',  menuheight);
  });

function menuheight(){
  fullheight = $('.k-wrapper').height();
  $('.k-menu').css('height',fullheight);
}