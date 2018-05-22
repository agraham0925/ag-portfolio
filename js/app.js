console.log("js file connected");

let teamPersonal = $('<p/>').text("TERSONALpsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim")
teamPersonal.attr('id', "teamPersonal");

let commPersonal = $('<p/>').text("CERSONALpsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim")
commPersonal.attr('id', "commPersonal")

let studentPersonal = $('<p/>').text("SERSONALpsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim")
studentPersonal.attr('id', "studentPersonal")

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