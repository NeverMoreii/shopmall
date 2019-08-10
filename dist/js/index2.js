
/*
	编写首页的js代码的
	遵从AMD规范

 */
define(["jquery"],function($){
	function navlist(){
		$.ajax({
			url:"../data/navlist.json",
			type:"GET",
			success: function(res){
				// 将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += 		"<div class='box'>"+
					'<div class="title">'+ res[i].new +'</div>'+
					'<div>'+
						'<img src="'+res[i].src+'">'+
					'</div>'+
					'<div class="size">'+res[i].size+'</div>'+
					'<div class="pice">'+res[i].pice+'</div>'+
				'</div>';
				}
					$(".navlist").html(html)
			}
		
		})
	}
	return {
		  navlistout:navlist
	}
})

