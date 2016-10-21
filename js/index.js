window.onload=function(){
;(function($){
	/*swiper-container
	swiper-wrapper
	swiper-slide*/


	/*var wayImg =new Swiper(".swiper-container",{
			loop:true,
			mode:'horizontal',
			autoplay:800,
			autoplayDisableOnInteraction:false
		})*/

/*var gdd = new IScroll("#sec1",{click:true});*/

/*var i = 0;
	var len = $(".oow img").length-1;

	$(".oow").swipeLeft(function(){
		i++;
		auto();
	}).swipeRight(function(){
		i--;
		auto();
	})

	function auto(){
		if(i<0){
			i=len;
		}
		if(i>len){
			i=0;
		}
		$("ul").animate({"left":-i*100+"%"},1500);
	}

	timer=setInterval(stt,2000);
	
	function stt(){
		i++;
		auto();
	}*/





	

	/*var gundong = new IScroll("#weixin",{click:true});

	var gundong1 = new IScroll("#tongxun",{click:true});

	var gundong2 = new IScroll("#faxian",{click:true});

	var gundong3 = new IScroll("#wo",{click:true});


oow();

function oow(){
	$(document).on("click","a",function(e){
		e.preventDefault();//取消所有A的默认样式
	}).on("tap","a",function(){
		var hef = $(this).attr("href");
		$(hef).css("left",0).siblings().css("left",-100+"%");
		if($(this).parent().parent().parent()[0].nodeName=="FOOTER"){
			$(this).addClass("bg").parent().siblings().find("a").removeClass("bg");
		}
	})
}*/

//渐变
/*background:linear-gradient(to bottom,#889AFE 0%,#3858F9 100%);*/

})(Zepto)
}