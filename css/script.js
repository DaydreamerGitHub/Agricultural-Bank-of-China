

//页脚点击切换
;(function(){
	document.documentElement.style.fontSize=document.documentElement.offsetWidth/11.25+'px';
	$("#footer section").on("click",function(){
		var index = $(this).index();
		for(var i=0;i<$("#footer section").length;i++){
			$(this).siblings().find("span").removeClass("footerblue"+i);
		}
		$(this).find("span").addClass("footerblue"+index);
		$(this).siblings().find("p").removeClass("footercolor0");
		$(this).find("p").addClass("footercolor0");
	})


})(Zepto);