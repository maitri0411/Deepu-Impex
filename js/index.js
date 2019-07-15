window.onload=function(){if(window.jQuery){$(document).ready(function(){$(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show();$("body").append("<div class='overlay'></div>");$(".navbar-toggle, .navbar-toggler").on("click",function(){$(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass"));$(".sideMenu, .overlay").toggleClass("open");$(".overlay").on("click",function(){$(this).removeClass("open");$(".sideMenu").removeClass("open")})});$("body").on("click",".sideMenu.open .nav-item",function(){if(!$(this).hasClass("dropdown")){$(".sideMenu, .overlay").toggleClass("open")}});$(window).resize(function(){if($(".navbar-toggler").is(":hidden")){$(".sideMenu, .overlay").hide()}else{$(".sideMenu, .overlay").show()}})})}else{console.log("sidebarNavigation Requires jQuery")}}

$(document).ready(function() {

  $(".box").on("click", function() {
    $(this).siblings().toggleClass("hidden");
    $(this).toggleClass("full");
    $(".captionBox").toggleClass("hiddenText");
    $(this).children().animate({
      opacity: "1"
    }, 500, function() {});
  });

  if ($(window).width() < 768) {
    $(".box").on("click", function() {
      $("#gridGallery").toggleClass("mobileFunction");
    });
  }

  if ($(window).width() >= 768) {

    $(".box").hover(function() {
      $(this).siblings().toggleClass("opacity");
    });

  }

  $(".horizontal").click(function() {
    $(this).toggleClass("full");
    $(".captionBox").toggleClass("hiddenText");
    $(this).children().animate({
      opacity: "1"
    }, 500, function() {});
  });

  $(".horizontal").hover(function() {
    $(this).siblings().toggleClass("opacity");
  });

});

/*$(function() {
  var $elements = $('.animateBlock.notAnimated'); //contains elements of nonAnimated class
  var $window = $(window);
  $window.on('scroll', function(e) {
    $elements.each(function(i, elem) { //loop through each element
      if ($(this).hasClass('animated')) // check if already animated
        return;
      animateMe($(this));
    });
  });
});

function animateMe(elem) {
  var winTop = $(window).scrollTop(); // calculate distance from top of window
  var winBottom = winTop + $(window).height();
  var elemTop = $(elem).offset().top; // element distance from top of page
  var elemBottom = elemTop + $(elem).height();
  if ((elemBottom <= winBottom) && (elemTop >= winTop)) {
    // exchange classes if element visible
    $(elem).removeClass('notAnimated').addClass('animated');
  }
}*/

/*var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');*/

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1000);

            }

        });

    });

});


$(document).ready(function() {

	$(window).scroll( function(){

		// slide in from left to right
		$('.slide-right').each(function() {
			var objBot = $(this).offset().top + $(this).outerHeight();
			var winBot = $(window).scrollTop() + $(window).height();

			if( winBot > objBot ){
				$(this).animate({
					opacity: 1,
					marginRight: "0",
					marginLeft: "0"
				}, 500, 'linear' );
			}
		});

		// slide in from right to left
		$('.slide-left').each(function() {
			var objBot = $(this).offset().top + $(this).outerHeight();
			var winBot = $(window).scrollTop() + $(window).height();

			if( winBot > objBot ){
				$(this).animate({
					opacity: 1,
					marginRight: "0",
					marginLeft: "0"
				}, 500, 'linear' );
			}
		});

		// fade in when obj is 33% in viewport
		$('.fade-in').each( function(){
			var objBot = $(this).offset().top + ($(this).outerHeight() / 3);
			var winBot = $(window).scrollTop() + $(window).height();

			if( winBot > objBot ){
				$(this).animate({
					opacity: 1
				}, 800 );
			}
		});

		// slide in from right to left (always visible ) when obj is 50% in viewport
		$('.visible-slide-left').each(function() {
			var objBot = $(this).offset().top + ($(this).outerHeight() / 2);
			var winBot = $(window).scrollTop() + $(window).height();

			if( winBot > objBot ){
				$(this).animate({
					marginRight: "-40px",
					marginLeft: "40px"
				}, 600, 'linear' );
			}
		});

		// slide in from left to right (always visible ) when obj is 50% in viewport
		$('.visible-slide-right').each(function() {
			var objBot = $(this).offset().top + ($(this).outerHeight() / 2);
			var winBot = $(window).scrollTop() + $(window).height();

			if( winBot > objBot ){
				$(this).animate({
					marginRight: "40px",
					marginLeft: "-40px"
				}, 600, 'linear' );
			}
		});

	});

});

$(function() {
  var $elements = $('.animateBlock.notAnimated'); //contains all elements of nonAnimated class
  var $window = $(window);
  $window.on('scroll', function(e) {
    $elements.each(function(i, elem) { //loop through each element
      if ($(this).hasClass('animated')) // check if already animated
        return;
      animateMe($(this));
    });
  });
});

function animateMe(elem) {
  var winTop = $(window).scrollTop(); // calculate distance from top of window
  var winBottom = winTop + $(window).height();
  var elemTop = $(elem).offset().top; // element distance from top of page
  var elemBottom = elemTop + $(elem).height();
  if ((elemBottom <= winBottom) && (elemTop >= winTop)) {
    // exchange classes if element visible
    $(elem).removeClass('notAnimated').addClass('animated');
  }
}

$(document).ready(function(){ $(window).scroll(function () { if ($(this).scrollTop() > 50) { $('#back-to-top').fadeIn(); }
 else { $('#back-to-top').fadeOut(); } }); $('#back-to-top').tooltip('show'); });
