$(document).ready(function(){

	$("#welcomeMsg").fadeIn("fast");

	$("#progress").show(function(){
		for(var i=1; i<=5; i++){
			$(this).append("<h6 id=_"+i+"Done>"+i+"</h6>");
		}
	});

	$(".newGame").click(function(){
		newGame();
	});

	$(".optionsBox li").click(function(){
		
		alert("option clicked");
		var choice = $(this).val();
		
		if(j==1) {
			
			if(choice == q1.ans){
				$(".answer").html("<h6 style="color: white; background-color: steelblue;">Correct<br>Answer!</h6>");
				$("_" + (j-1) +"Done").css('color', 'green');
				score += 1;	
			}
			
			else{
				$(".answer").html("<h6 style="color: white; background-color: steelblue;">Incorrect<br>Answer!</h6>");
				$("_" + (j-1) +"Done").css('color', 'red');	
			}
		}


		else if(j==2) {
			
			if(choice == q2.ans){
				$(".answer").html("<h6 style="color: white; background-color: steelblue;">Correct<br>Answer!</h6>");
				$("_" + j +"Done").css('color', 'green');
				score += 1;
			}
			
			else{
				$(".answer").html("<h6 style="color: white; background-color: steelblue;">Incorrect<br>Answer!</h6>");
				$("_" + j +"Done").css('color', 'red');	
			}
		}


		else if(j==3) {
			
			if(choice == q2.ans){
				$(".answer").html("<h6 style="color: white; background-color: steelblue;">Correct<br>Answer!</h6>");
				$("_" + j +"Done").css('color', 'green');
				score += 1;	

			}
			
			else{
				$(".answer").html("<h6 style="color: white; background-color: steelblue;">Incorrect<br>Answer!</h6>");
				$("_" + j +"Done").css('color', 'red');	
			}
		}


		else if(j==4) {
			
			if(choice == q4.ans){
				$(".answer").html("<h6 style="color: white; background-color: steelblue;">Correct<br>Answer!</h6>");
				$("_" + j +"Done").css('color', 'green');	
				score += 1;
			}
			
			else{
				$(".answer").html("<h6 style="color: white; background-color: steelblue;">Incorrect<br>Answer!</h6>");
				$("_" + j +"Done").css('color', 'red');	
			}
		}


		if(j==5) {
			
			if(choice == q5.ans){
				$(".answer").html("<h6 style="color: white; background-color: steelblue;">Correct<br>Answer!</h6>");
				$("_" + j +"Done").css('color', 'green');	
				score += 1;
			}
			
			else{
				$(".answer").html("<h6 style="color: white; background-color: steelblue;">Incorrect<br>Answer!</h6>");
				$("_" + j +"Done").css('color', 'red');	
			}
		}

		nextQuestion();
	});

});

var j = 1;
var score=0;

var q1 = {

	ques: "How was our World created? (in hypothesion)",
	opt: ["God's magic", "Nebula Burst","Already existed", "Fission reactions"],
	ans: this['opt[1]']
};

var q2 = {

	ques: "What is a Black Hole?",
	opt: ["a Celestial body", "a black colored hole","a region of Spacetime", "a star"],
	ans: this['opt[2]']
};

var q3 = {

	ques: "How much Gravity is there on Earth's Moon?",
	opt: ["same as Earth", "twice","one-sixth", "no gravity"],
	ans: this['opt[2]']
}

var q4 = {

	ques: "What Galaxy is our Solar System located in?",
	opt: ["Milky Way Galaxy", "Orion Galaxy","No galaxy. Universe.", "none of the above"],
	ans: this['opt[0]']
}

var q5 = {

	ques: "How many Moons does Jupiter have?",
	opt: ["only Earth has Moon", "Eight","Sixty Three", "One"],
	ans: this['opt[2]']
}

var questionSet = [q1, q2, q3, q4, q5];

function newGame() {
	
	$("#endMsg").hide();

	$("#welcomeMsg").hide();

	$(".questions").html("<h2>"+ (questionSet[0]).ques +"</h2>");
	
	$(".optionsBox ul").html("");
	for(var i=0; i<2; i++){
		$(".options > ul").append("<li class='_" + (i+1) + "'value='"+ i +"'><h3>" + q1.opt[i] + "</h3></li>");
	}
	for(var i=2; i<4; i++){
		$(".options2 > ul").append("<li class='_" + (i+1) + "'value='"+ i +"'><h3>" + q1.opt[i] + "</h3></li>");
	}
	
}

function nextQuestion() {

	if (j<=4){
	
		$(".questions").html("<h2>"+ (questionSet[j-1]).ques +"</h2>");
	
		$(".optionsBox ul").html("");
			for(var i=0; i<2; i++){
			$(".options > ul").append("<li class='_" + (i+1) + "'value='"+ i +"'><h3>" + qj.opt[i] + "</h3></li>");
		}
		for(var i=2; i<4; i++){
			$(".options2 > ul").append("<li class='_" + (i+1) + "'value='"+ i +"'><h3>" + qj.opt[i] + "</h3></li>");
		}
		j += 1;
	}

	else {
		$(".questions").html('');
		$("ul").html('');
		$("#endMsg").html('End of Game!<br>Total Score: <br><b>' + score + ' Correct</b> out of 5.').show();
		
		j=1;
	}
}