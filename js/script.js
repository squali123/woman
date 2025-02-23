$(function(){
    $(".ngv_sub").hide();
    $(".ngv").mouseenter(function(){
        $(this).children().children(".ngv_sub").stop().slideDown();
    });
    $(".ngv").mouseleave(function(){
        $(this).children().children(".ngv_sub").stop().slideUp();
    });

});
$(function(){
    $(".ngv_sub").mouseenter(function(){
        $(this).siblings().addClass("active");
    });
    $(".ngv_sub").mouseleave(function(){
        $(this).siblings().removeClass("active");
    });
});

// 아코디언언
$(function(){
    $(".mo_sub>ul>li").click(function(){
        $(this).children(".text_info").slideToggle();
        $(this).siblings().children(".text_info").slideUp();
    });
});
$(function(){
	$(".mo_sub>ul>li").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
		}
	});
});

$(function(){
    $(".menu>a>img").click(function(){
      $("#ngv_mo").addClass('on');
    });
  });
  $(function(){
    $(".close").click(function(){
      $("#ngv_mo").removeClass('on');
    });
});

// section1
const mySwiper1 = new Swiper('.mySwiper1', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    
    navigation: {
      nextEl: ".swiper_buton_next1",
      prevEl: ".swiper_buton_prev1",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
});
  
  
$('.swiper_buton_stop1').click(function () {
  
    if ($(this).hasClass('play')) {
      mySwiper1.autoplay.start();
    } else {
      mySwiper1.autoplay.stop();
    }
    $(this).toggleClass('play');
})
  
  
var swiper = new Swiper(".mySwiper2", {
    watchSlidesProgress: true,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper_buton_next2",
      prevEl: ".swiper_buton_prev2",
    },
    breakpoints: {
      450:{
        slidesPerView: 5,
      },
      800:{
        slidesPerView: 8,
      },
    },
});

// section2
$(function(){
    $(".tab_wrap>li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
      });
    $(".cont2").hide();
    $(".cont3").hide();
    $(".tab_wrap>li:nth-child(1)").click(function(){
        $(".cont1").show();
        $(".cont2").hide();
        $(".cont3").hide();
    });
    $(".tab_wrap>li:nth-child(2)").click(function(){
        $(".cont2").show();
        $(".cont1").hide();
        $(".cont3").hide();
    });
    $(".tab_wrap>li:nth-child(3)").click(function(){
        $(".cont3").show();
        $(".cont1").hide();
        $(".cont2").hide();
    });
});
