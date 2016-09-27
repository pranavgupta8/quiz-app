$(document).ready(function(){

	$("#welcomeMsg").fadeIn("medium");

	$(".newGame").click(function(){
		newGame();
	});

	$(".nextQuestion").click(function(){
		nextQuestion();
	});



});

var i = 2;

function newGame() {
	
	$("#welcomeMsg").fadeOut("medium");
	$("#q1").css('display', 'inline');
	$("#a1").css('display', 'inline');
	$("div#welcomeMsg").css('display', 'inline');
}

function nextQuestion() {

	$("#q" + (i - 1)).css('display', 'none');
	$("#q" + i).css('display', 'inline');

	$("#a" + (i - 1)).css('display', 'none');
	$("#a" + i).css('display', 'inline');

	i += 1;
}