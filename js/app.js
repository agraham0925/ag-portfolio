console.log("js file connected");

('#popcornProject').hover(
	function () {
		$(this).css({"background-color": "black"});
	},
	function () {
		$(this).hide();
	}
);