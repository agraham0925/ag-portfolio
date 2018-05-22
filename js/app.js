console.log("js file connected");

let teamPersonal = $('<p/>').text("PERSONALpsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim")
teamPersonal.attr('id', "teamPersonal");

$('#teammate').hover(
		function() {
		console.log(this)

		$('#teamOriginal').hide();
		$('#teammate').append(teamPersonal);


		// newText.appendTo('p');

		//on hover hide my text and replace with new text and background
		// on remove hover, revert to original
	}
);


// $("p").hover(function(){
//     $(this).css("background-color", "yellow");
//     }, function(){
//     $(this).css("background-color", "pink");
// });