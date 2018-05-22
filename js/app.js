console.log("js file connected");

let teamPersonal = $('<p/>').text("I'm an avid ultimate frisbee player. Being apart of the team ELevate for the last 4 years has SOMETHING ABOUT SENSE OF COMMUNITY ETC. Every summer, I get to travel and compete in various midwest tournaments with some of my best friends.")
teamPersonal.attr({
	id: "teamPersonal",
	class: "statement-p"
});

let commPersonal = $('<p/>').text("CERSONALpsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim")
commPersonal.attr({
	id: "commPersonal",
	class: "statement-p"
});

let studentPersonal = $('<p/>').text("Changing careers and enrolling in General Assembly's WDI course is one of the most challenging things  I've ever done. I'm gratefully for the opportunity to learn to become a life long student.")
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