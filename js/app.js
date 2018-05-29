console.log("js file connected");

let teamPersonal = $('<p/>').text("I'm an avid ultimate frisbee player, playing for the mixed club team ELevate for five summers.")
teamPersonal.attr({
	id: "teamPersonal",
	class: "statement-p"
});

let commPersonal = $('<p/>').text("I am mindful of what others are saying, ask clarifying questions, and rephrase to ensure understanding.")
commPersonal.attr({
	id: "commPersonal",
	class: "statement-p"
});

let studentPersonal = $('<p/>').text("I believe the way to find best possible solutions is through continued education.")
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