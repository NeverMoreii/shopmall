/*
	编写首页的js代码的
	遵从AMD规范

 */
define(["jquery"], function($){
	function index(){
		$.ajax({
			url: "../data/nav.json",
			type: "GET",
			success: function(res){
				alert("success");
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += "<a href=''>"+res[i].inner+"</a>";
				}
				$(".nav_list").html(html);
			}
		})
	}

	return {
		indexout: index
	}
});





define(["jquery"],function($){
	function navlist(){
		$.ajax({
			url:"../data/navlist.json",
			type:"GET",
			success: function(res){
				alert("success");
				//将数据进行解析，添加到页面上
				// var html = "";
				// for(var i = 0; i < res.length; i++){
				// 	html += "<a href=''>"+res[i].inner+"</a>";
				// }
				// $("body").html(html);
			}
		
		})
	}
	return {
		  navlistout:navlist
	}
})