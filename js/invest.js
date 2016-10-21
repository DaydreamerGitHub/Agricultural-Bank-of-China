;(function($){
	
	init();
	function init(){
		var d=document.documentElement.clientWidth;
			document.getElementsByTagName('html')[0].style.fontSize=d/11.25+"px";
	
		var main=new IScroll("#main",{"click":true,"mouseWheel":true,"probeType":3});
		
	}
	var i=0;
	$("#v_listTab").find("span").on("click",function(){
			var inx=$(this).index();
			$(this).addClass("v_list_span").siblings().removeClass("v_list_span");
			$("#v_listDv").css({"transform":"translate("+(-inx*100)+"%)","transition":"1s"});
	})
	$(".v_list").on("swipeLeft",function(){
			i++;
			if(i>$("#v_listTab span").length-1){
				i=1;
			}
			$("#v_listTab span").eq(i).addClass("v_list_span").siblings().removeClass("v_list_span");
			$("#v_listDv").css({"transform":"translate("+(-i*100)+"%)","transition":"1s"});
	})
	$(".v_list").on("swipeRight",function(){
			i--;
			if(i<0){
				i=0;
			}
			$("#v_listTab span").eq(i).addClass("v_list_span").siblings().removeClass("v_list_span");
			$("#v_listDv").css({"transform":"translate("+(-i*100)+"%)","transition":"1s"});
	})
	$("#drawBack").on("click",function(){
		history.go(-1);
	})
})(Zepto)
