console.log("加载成功");
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"parabola": "parabola",
		"index": "index",
		"slide": "slide",
	},
	shim: {
		//设置jquery-cookie依赖于jquery开发的
		"jquery-cookie": ["jquery"],
		//抛物线不支持AMD规范
		"parabola": {
			exports: "_"
		}
	}
})


require(["index"], function(index){
	index.indexout();
	index.slideout();
	index.bannerout()
});
