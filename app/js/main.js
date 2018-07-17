$(document).ready(function(){
    $(window).on("scroll touchmove", function () {
    $('.header').toggleClass('scrolled', $(document).scrollTop() > 0);
});
    $(".tabs_js li a").click(function(){
        $(this).parent().toggleClass("active");
        $(this).parent().siblings("li").removeClass("active");
        return false;
    });
    $(".btn_menu_js").click(function(){
        $(this).toggleClass("active");
        $(".drop_bar_js").toggleClass("active");
        $(".header").toggleClass("white_header");
        $("body").toggleClass("overflow_hidden");
    });
    $(".close_drop_js").click(function(){
        $(".drop_bar_js").removeClass("active");
        $(".btn_menu_js").removeClass("active");
        $(".header").removeClass("white_header");
        $("body").removeClass("overflow_hidden");
    });
    // go to  about 
        $(".go_next").on("click", function(e){
	        var anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $(anchor.attr('href')).offset().top
	        }, 777);
	        e.preventDefault();
	        return false;
	    });
	// go to top 
	$('.go_top').click(function () {
	    $('body,html').animate({
	        scrollTop: 0
	    }, 400);
	    return false;
	});

});
$('.owl_carousel_js').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    items:1
})
// etc products
$('.owl_carousel_js_2').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    dots: true,
    responsive:{
    	0:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
// slider portdolio
$('.owl_carousel_js_3').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    nav:true,
    dots: false,
    navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
    	0:{
            items:1
        },
        500:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// review portdolio
$('.owl_carousel_js_4').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    nav:true,
    dots: false,
    navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
    	0:{
            items:1
        },
        400:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
// clients portdolio
$('.owl_carousel_js_5').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    nav:true,
    dots: false,
    // autoWidth:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
    	0:{
            items:1
        },
        400:{
            items:3
        },
        1000:{
            items:4
        },
        1200:{
            items:5
        }
    }
})




// double owlCarousel
$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 3; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: false,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
    navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: true,
    margin:15,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100,
    responsive:{
        992:{
            margin:30
        }
    },
    navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});



