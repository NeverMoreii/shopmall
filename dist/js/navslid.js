
/*
	编写首页的js代码的
	遵从AMD规范

 */


define(["jquery"],function($){
	function slide(){
		$(function(){
			$(".nav_list,.navlist").mouseenter(function(){
					$(".navlist").stop().slideDown()
				}).mouseleave(function(){
					$(".navlist").stop().slideUp()
			})
		})
	}
	return {
		slideout:slide
  }
})