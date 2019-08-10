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
				
					
					// var i=$('.imgbigbox div').length;
					var i=5;
					var k=0;
					$(".imgbigbox .imgbox").eq(k).show()

					function show(){	
						if(k<5){
						$(".imgbigbox .imgbox").eq(k).show().siblings().hide();
						k++;
						}else{
							k=0;
							$(".imgbigbox .imgbox").eq(k).show().siblings().hide();
							k=k+1
						}
						
					}
					setInterval(show,1000)
					// show();
					// alert(k);
					$(".next").click(function(){
	
						if(k<5){
							$(".imgbigbox .imgbox").eq(k).show().siblings().hide();
							k++;
						}else{
							k=0;
							$(".imgbigbox .imgbox").eq(k).show().siblings().hide();
							k=k+1
						}

				})
				$(".prev").click(function(){
	
					if(k>0){
						$(".imgbigbox .imgbox").eq(k-1).show().siblings().hide();
						k--;
					}else{
						k=4;
						$(".imgbigbox .imgbox").eq(k).show().siblings().hide();
						k=k+1
					}

			})
				
					
					// $(".banner_r").mouseenter(function(){
					// 	clearInterval(sho)
					// })
					// var sho=setInterval(show,1000);

					
					// $(".prev").click(function(){	
					// 	if(k>0||k<i){
					// 		$(".imgbigbox .imgbox").eq(k).show().siblings().hide();
					// 		// alert(k);
					// 		k--
					// 		}else{
					// 			k=0
					// 		}
					// })
				
			
				
			})
	}

	return {
		indexout: index,
		slideout:slide,
		bannerout:banner
	}
});




