(function($) {
    "use strict";
    
    /*----------------------------
       stickey menu
    ----------------------------*/
    $(window).on('scroll',function() {    
           var scroll = $(window).scrollTop();
           if (scroll < 165) {
            $(".sticky-header").removeClass("sticky");
           }else{
            $(".sticky-header").addClass("sticky");
           }
    });

    /*----------------------------
    jQuery MeanMenu
    ------------------------------ */
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "9901",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });
    
    /* slider activation */
    $('.slider_list').owlCarousel({
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 1,
    });
    $('.features_product_active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 6,
        responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
            480:{
				items:2,
				nav:true
			},
            768:{
				items:3,
				nav:false
			},	
			992:{
				items:4,
				nav:false
			},
            1200:{
				items:5,
				nav:true,
				loop:false
			},
            1600:{
				items:7,
				nav:true,
				loop:false
			}
			
		  }
    });
    $('.shop-product_list').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 5,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
            480:{
				items:2,
				nav:true
			},
			768:{
				items:2,
				nav:false
			},	
			992:{
				items:3,
				nav:false
			},
            
			1300:{
				items:4,
				nav:true,
				loop:false
			},
	        1600:{
				items:5,
				nav:true,
				loop:false
			}

		  }
	});
    
    $('.best_selling_product_list').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 5,
        responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
            575:{
				items:2,
				nav:true
			},
			768:{
				items:2,
				nav:false
			},
            992:{
				items:3,
				nav:false
			},
			1500:{
				items:4,
				nav:true,
				loop:false
			}
		  }
    });   

	$('.category_product_active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 3,
        responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
            480:{
				items:2,
				nav:true
			},
            768:{
				items:3,
				nav:false
			},
			992:{
				items:2,
				nav:false
			},
            1200:{
				items:3,
				nav:false
			},
			
		  }
    });
    
    $('.brand_list_carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 5,
         responsiveClass:true,
		responsive:{
			320:{
				items:1,
				nav:true
			},
            480:{
				items:2,
				nav:true
			},
			768:{
				items:3,
				nav:false
			},
			991:{
				items:4,
				nav:false
			},	
			1200:{
				items:5,
				nav:false
			},
			
		  }
    });
	$('.features_product_three_active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 4,
        responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
            480:{
				items:2,
				nav:true
			},
			768:{
				items:3,
				nav:false
			},	
			992:{
				items:3,
				nav:false
			},
            1200:{
				items:4,
				nav:true,
				loop:false
			},
		  }
    });
	
	$('.features_product_four_active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 4,
        responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
            480:{
				items:2,
				nav:true
			},
			768:{
				items:2,
				nav:false
			},	
			992:{
				items:3,
				nav:false
			},
            1200:{
				items:4,
				nav:true,
				loop:false
			},
           
			
		  }
    });
	$('.pos_special_active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i> prev','next <i class="fa fa-angle-right"></i>'],
        items: 1,
    });
	$('.features_product_active_three').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 5,
        responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
            480:{
				items:2,
				nav:true
			},
			768:{
				items:3,
				nav:false
			},	
			992:{
				items:4,
				nav:false
			},
            1200:{
				items:5,
				nav:true,
				loop:false
			},
           
			
		  }
    });
	
	$('.features_product_active_four').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 5,
        responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
            480:{
				items:2,
				nav:true
			},
			768:{
				items:3,
				nav:false
			},	
			992:{
				items:4,
				nav:false
			},
            1200:{
				items:5,
				nav:true,
				loop:false
			},
           
			
		  }
    });
	
	$('.best_selling_product_three').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 1,
         responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			480:{
				items:1,
				nav:false
			},	
			992:{
				items:1,
				nav:false
			},

		  }
    }); 
	
	$('.related_product_active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 4,
         responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			480:{
				items:2,
				nav:false
			},
			768:{
				items:3,
				nav:false
			},	
			992:{
				items:4,
				nav:false
			},

		  }
    }); 
	
    $('.product_nav_active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items: 3,
    });
    
    $('.testimonial___wrapper').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
		autoplay: true,
    });
    /*------ Wow activation ----*/
    new WOW().init();
    

    /*--------------------------
     ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
	
    /*header_account slideToggle*/
    
    $(".account_inner > a").on("click", function() {
            $('.content-setting-dropdown').slideToggle('medium');
    }); 
	
	/*countdown activation*/
		
	 $('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<div class="countdown_area"><div class="single_coutdown"><div class="content-number">%D</div><div class="content-title">DAYS</div></div><div class="single_coutdown"><div class="content-number">%H</div><div class="content-title">HOURS</div></div><div class="single_coutdown"><div class="content-number">%M</div><div class="content-title">MINUTES</div></div><div class="single_coutdown"><div class="content-number">%S</div><div class="content-title">SECONDS</div></div></div>'));
	});
	});	
	
    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
	var CartPlusMinus = $('.cart-plus-minus');
	
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $('.qtybutton').on('click', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find('input').val(newVal);
    });
    /*----------------------------
    	slider-range here
    ------------------------------ */
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    /*------------------------
        video popup here
     -----------------------*/
    
    $('.video__trigger').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      zoom: {
          enabled: true,
      }
    });
    
    /*------------------------------
      Category menu Activation
    ------------------------------*/
    $(".button_categories h4 > a").on("click", function() {
        $('.categories_menu').slideToggle();
    });
    $('#cat_toggle li.has-sub > a,.shop_toggle li.has-sub > a').on('click', function(){
       $(this).removeAttr('href');
       var element = $(this).parent('li');
        if (element.hasClass('open')) {

           element.removeClass('open');

           element.find('li').removeClass('open');

           element.find('ul').slideUp();
       }
          else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
          }
         });
         $('#cat_toggle > ul > li.has-sub > a,.shop_toggle li.has-sub > a').append('<span class="holder"></span>');
    


})(jQuery);