define(['jquery'], function($){
	function banner(){
		$(function(){
				var oUl = $("#play").find("ul");
				var aLis = oUl.find("li");
				var aBtns = $("#play").find("ol").find("li");

				var timer = null; //每两秒切换一张图片
				var iNow = 0; //当前展示的图片的下标

				//给按钮添加点击，点击按钮的，切换图片
				aBtns.click(function(){
					iNow = $(this).index();
					tab();
				})

				//启动一个定时器，每隔两秒，切换一张图片
				timer = setInterval(function(){
					iNow++;
					tab();
				}, 2000);


				//给整个banner图添加移入移出
				$("#play").mouseenter(function(){
					clearInterval(timer);
				})

				$("#play").mouseleave(function(){
					timer = setInterval(function(){
						iNow++;
						tab();
					}, 2000);
				});

				function tab(){
					aBtns.attr("class", "").eq(iNow).attr("class", "active");
					//如果当前显示的下标为5的图片，应该让按钮0被选中
					if(iNow == aBtns.size()){
						aBtns.eq(0).attr("class", "active");
					}

					oUl.animate({top: -150 * iNow}, 500, function(){
						if(iNow == aBtns.size()){
							oUl.css("top", 0);
							iNow = 0;
						}
					})
				}
			})
	}

	return {
		banner: banner
	}
})