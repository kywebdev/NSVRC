$(document).ready(function(){

   // back to top smooth scrolling
   $('a[href^="#"]').on('click',function (e) {
	   e.preventDefault();

	   var target = this.hash;
	   var $target = $(target);

	   $('html, body').stop().animate({
		   'scrollTop': -90 + $target.offset().top
	   }, 900, 'swing', function () {
	   });
   });


		// jquery media queries
		function resizeRelatedStory(width){
		  if ( width <= 940) {
		   $(".related-story").appendTo(".main-content");
		  }
		  else {
			$(".related-story").appendTo(".sidebar");
		  }
		}
		resizeRelatedStory( $(window).width() );
			$(window).on('resize', function(){
				resizeRelatedStory( $(this).width() );
		});
    
        // jquery media queries
		function resizeBlogSidebar(width){
		  if ( width <= 940) {
		   $(".blog-side").appendTo(".main-content");
		  }
		  else {
			$(".blog-side").appendTo(".sidebar");
		  }
		}
		resizeBlogSidebar( $(window).width() );
			$(window).on('resize', function(){
				resizeBlogSidebar( $(this).width() );
		});

		function resizeDayOfWeek(width){
		  if ( width <= 500) {
		   $(".sun").text("S");
			$(".mon").text("M");
			$(".tue").text("T");
			$(".wed").text("W");
			$(".thu").text("T");
			$(".fri").text("F");
			$(".sat").text("S");
		  }
		  else if ( width <= 825) {
			$(".sun").text("Sun");
			$(".mon").text("Mon");
			$(".tue").text("Tue");
			$(".wed").text("Wed");
			$(".thu").text("Thu");
			$(".fri").text("Fri");
			$(".sat").text("Sat");
		  }
		  else {
			$(".sun").text("Sunday");
			$(".mon").text("Monday");
			$(".tue").text("Tuesday");
			$(".wed").text("Wednesday");
			$(".thu").text("Thursday");
			$(".fri").text("Friday");
			$(".sat").text("Saturday");
		  }
		}
		resizeDayOfWeek( $(window).width() );
			$(window).on('resize', function(){
				resizeDayOfWeek( $(this).width() );
		});

    function resizeContactInfo(width){
      if ( width <= 685) {
       $(".contact-info").prependTo(".contact-form");
      }
      else {
        $(".contact-info").insertAfter(".contact-form");
      }
    }
    resizeContactInfo( $(window).width() );
		$(window).on('resize', function(){
			resizeContactInfo( $(this).width() );
		});

		// search bar toggle
		$('.search').click(function() {
			$('.search-dropdown').toggleClass("show-search");
			$('.search').toggleClass("search-active");
		});
    
        // show account menu on click
		$('.menu-hover').click(function() {
			$('.dropdown-menu').show();
		});

		// mobile menu
		$('#menu').slicknav();
		$( function() {
			$( '.desktop .main-nav li:has(ul)' ).doubleTapToGo();
		});

		// change background color on menu click
		$('.slicknav_btn').on('click', function(e) {

			if ($(".slicknav_btn").hasClass("slicknav_collapsed")) {
				$(".mobile").addClass('light-menu');
				$(".mobile").removeClass('dark-menu');
			} else {
				$(".mobile").removeClass('light-menu');
				$(".mobile").addClass('dark-menu');
			}

		});

		// keeps calendar cell height consistent
        $('.cal-date').matchHeight();
    		

		// ------------- STYLE GUIDE ONLY -------------

		// code block toggle
		$('.code-toggle').click(function(e) {
			$(this).next().slideToggle();
		});


});
