/*
	编写首页的js代码的
	遵从AMD规范

 */
define(["jquery"], function($){
	function index(){
		$.ajax({
			url: "../data/data2.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				
				
				var html = "";
				
				for(var i = 0; i < res.length; i++){
						var html2 = "";
						html += "<a href=''>"+res[i].inner+"</a>";
						var tit=res[i].weather;
					for(var k= 0 ; k < tit.length; k++){	
						html2 += "<div class='box'>"+
						'<div class="title">'+ tit[k].new +'</div>'+
						'<div>'+
							'<img src="'+tit[k].src+'">'+
						'</div>'+
						'<div class="size">'+tit[k].size+'</div>'+
						'<div class="pice">'+tit[k].pice+'</div>'+
					'</div>';
					}
					$("<div class='newbox'></div>").html(html2).css("display","none").appendTo(".navlist");
		
			
				}
				
				$(".nav_list").html(html);
				
				
			}
		})
	}


	function slide(){
		$(function(){
			$(".nav_list").on(
				"mouseenter","a",function(){
					var i =$(this).index();
						$(".navlist").stop().slideDown();
						$(".newbox").eq(i).css("display","block").siblings().hide()
					}
			)

			$(".nav_list,.navlist").mouseleave(function(){
				$(".navlist").stop().slideUp();
			})
			$(".navlist").mouseenter(function(){
				$(".navlist").stop().slideDown();
			})
			
		})
	}



	function banner(){
			$(function(){


				var index=0;
				$(".next").click(function(){
					index++;
					if(index>4){
						index=0
					}
					$(".imgbigbox div").eq(index).fadeIn().siblings().fadeOut();
					$(".navsml ul li").eq(index).addClass("active").siblings().removeClass("active");
				})

				$(".prev").click(function(){
					index--;
					if(index<0){
						index=4
					}
					$(".imgbigbox div").eq(index).fadeIn().siblings().fadeOut();
					$(".navsml ul li").eq(index).addClass("active").siblings().removeClass("active");
				})

				$(".navsml ul li").click(function(){
					index=$(this).index();
					$(this).addClass("active").siblings().removeClass("active");
					$(".imgbigbox div").eq(index).fadeIn().siblings().fadeOut()
				})
				
				var time=setInterval(function(){
					index++;
					if(index>4){
						index=0
					}
					$(".imgbigbox div").eq(index).fadeIn().siblings().fadeOut();
					$(".navsml ul li").eq(index).addClass("active").siblings().removeClass("active");
					
				},3000)

			})
	}

	return {
		indexout: index,
		slideout:slide,
		bannerout:banner
	}
});




