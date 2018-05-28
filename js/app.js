console.log("js file connected");

let teamPersonal = $('<p/>').text("I'm an avid ultimate frisbee player and have played for the mixed club team ELevate the last 5 summers.")
teamPersonal.attr({
	id: "teamPersonal",
	class: "statement-p"
});

let commPersonal = $('<p/>').text("Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim")
commPersonal.attr({
	id: "commPersonal",
	class: "statement-p"
});

let studentPersonal = $('<p/>').text("I strive to find the best possible solutions. I believe the way to find them is through continued education and constantly looking for opportunities to learn more.")
studentPersonal.attr({
	id: "studentPersonal",
	class: "statement-p"
});

$('#teammate').hover(function() {

		$('#teamOriginal').hide();
		$('#teammate').append(teamPersonal);

	}, function(){
		teamPersonal.remove();
		$('#teamOriginal').show();
	}
);

$('#communicator').hover(function() {

		$('#commOriginal').hide();
		$('#communicator').append(commPersonal);

	}, function(){
		commPersonal.remove();
		$('#commOriginal').show();
	}
);

$('#student').hover(function() {

		$('#studentOriginal').hide();
		$('#student').append(studentPersonal);

	}, function(){
		studentPersonal.remove();
		$('#studentOriginal').show();
	}
);