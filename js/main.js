
/** ====== Loader ======= **/
$(window).on('load', function() {
      $('#status').fadeOut();
      $('#preloader').delay(450).fadeOut('slow');
      $('body').delay(450).css({'overflow':'visible'});
});
/** ====== Hamburger Menu ======= **/
$(function (){
    $("#hamburger-open").on('click', function(){
        $("#hamburger-open").toggleClass("open");
        $(".intro").toggleClass("openBlock");
    });
    $("#hamburger-open").hover(function(){
        $(this).toggleClass("hoversize");
    });
});

//
// /** ====== Portforlio ======= **/
// $(document).ready(function (){
//   var filterList = {
//     init: function () {
//       $('#portfoliolist').mixItUp({
//         selectors: {
//           target: '.portfolio',
//           filter: '.filter'
//         },
//         load: {
//           filter: '.concepts'
//         }
//       });
//     }
//   };
//   // Run the show!
//   filterList.init();
//   });

/** ====== scrollify ======= **/


$("#link-0").click(function(e){
    e.preventDefault()
    $('html,body').animate({
        scrollTop: $(".intro").offset().top},
        'slow');
    if($(window).width()<1474){
    $('html,body').animate({
        scrollTop: $(".intro").offset().top},
        'slow');

    $('.intro').removeClass('openBlock');
    $("#hamburger-open").toggleClass("open");
  }
});

$("#link-1").click(function(e){
    e.preventDefault()
    $('html,body').animate({
        scrollTop: $(".content-One").offset().top},
        'slow');

    if($(window).width()<1474){
    $('html,body').animate({
        scrollTop: $(".content-One").offset().top},
        'slow');

    $('.intro').removeClass('openBlock');
    $("#hamburger-open").toggleClass("open");
  }
});
$("#link-2").click(function(e){
    e.preventDefault()
    $('html,body').animate({
        scrollTop: $(".content-Two").offset().top},
        'slow');

    if($(window).width()<1474){
    $('html,body').animate({
        scrollTop: $(".content-Two").offset().top},
        'slow');

    $('.intro').removeClass('openBlock');
    $("#hamburger-open").toggleClass("open");
  }
});
$("#link-3").click(function(e){
    e.preventDefault()
    $('html,body').animate({
        scrollTop: $(".content-Three").offset().top},
        'slow');

    if($(window).width()<1474){
    $('html,body').animate({
        scrollTop: $(".content-Three").offset().top},
        'slow');

    $('.intro').removeClass('openBlock');
    $("#hamburger-open").toggleClass("open");
  }
});
$("#link-4").click(function(e){
    e.preventDefault()
    $('html,body').animate({
        scrollTop: $(".content-Four").offset().top},
        'slow');

    if($(window).width()<1474){
    $('html,body').animate({
        scrollTop: $(".content-Four").offset().top},
        'slow');

    $('.intro').removeClass('openBlock');
    $("#hamburger-open").toggleClass("open");
  }
});


/** ====== Particles ======= **/
  particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });

/** ====== Google Analytics ======= **/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-64169644-2', 'auto');
ga('send', 'pageview');
