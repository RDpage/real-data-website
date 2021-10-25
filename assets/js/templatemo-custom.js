(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  // respoive history
  $(window).resize(function(){

    var width = window.innerWidth;
    
    if(width < 769){
    
    // $(".history").addClass("mobile-history");
    $(".history").hide();

    
    }
    
    else {
      // $(".history").removeClass("mobile-history");
      $(".service").show();
    }
    
    }).resize();




	$('.owl-our-team').owlCarousel({
		items:3,
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		margin:0,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:3
      },
      1600:{
        items:3
      }
    }
})
	
    
  
	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


    $(".hamberger-wrap").click(function(){
      $(".hamberger-wrapr").toggleClass("active");
    });  







  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });


  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });




  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });

      
  }

  //Get the button
  var btButton =  $('.Bt-icon-img')

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btButton.addClass("active");
    } else {
      btButton.removeClass("active");
    }
  } 

  // When the user clicks on the button, scroll to the top of the document
  $('.Bt-icon-img').on('click', function() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });



	// Page loading animation
  $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }

  //The detail of about section toggling effect
  $('.about-btn').click(function(e){
    e.preventDefault();
    $('.twoSide').slideToggle();
    $('#about-history').slideToggle();
    $(this).text( $(this).text() == 'Read More' ? "Show Less" : "Read More"); 
    if($(this).text() == 'Show Less'){
      $('.about-container').addClass('about-bg');
    }else{
      $('.about-container').removeClass('about-bg');
    }
  });

  //The detail of service toggling effect
  $('.service-btn').click(function(e){
    e.preventDefault();
    $('.detail-content').slideToggle();
    $(this).text( $(this).text() == 'Read More' ? "Show Less" : "Read More"); 
    if($(this).text() == 'Show Less'){
      $('.service-container').css('background','linear-gradient(to bottom, #fff, #CCD8DF )')
    }else{
      $('.service-container').css('background','#e7ecf0');
    }
  
  });
  





})(window.jQuery);