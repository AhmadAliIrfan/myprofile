var buttonColors = ["green","red","yellow","blue"];
var userChosenPattern = [];
var gamePattern = [];
var level = 0;
var start = 0;

function playSound(name){
audio = new Audio("sounds/"+name+".mp3");
audio.play();}

function animatePress(currentColor){
$("#"+currentColor).addClass("pressed");
setTimeout(function() {
$("#"+currentColor).removeClass("pressed");}, 100);
}

function nextSequence(){
start = 1;
var randomNumber = Math.round(Math.random()*3);
var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

switch(randomChosenColor){

case "red": 

$("#red").delay(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
break;

case "green": 

$("#green").delay(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
break;

case "blue":

$("#blue").delay(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
break;

case "yellow":

$("#yellow").delay(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
break;

default:

}



$("#level-title").text("Level "+level);

level++;

console.log(gamePattern);

}


function checkInputs(a , b){

	for(i = 0; i <= a.length-1; i++){


		if(a[i] !== b[i]){


			return false;

		}else{

		var result = true;


		}

	}

	return result;
}

function startOver(){

gamePattern =[];
userChosenPattern = [];
level = 0;
start = 0;
$("#level-title").text("Press A Key to Start");

}


$(".btn").click(function(event){


userChosenPattern.push(event.target.id);
playSound(event.target.id);
animatePress(event.target.id);


	if(gamePattern.length === userChosenPattern.length){

 		if(checkInputs(gamePattern,userChosenPattern) == true){


 			setTimeout(function(){

 				nextSequence();
 				userChosenPattern = [];

 			}, 1000);


 		}else{

 			$("body").addClass("game-over");

 			setTimeout(function(){

			$("body").removeClass("game-over");

				userChosenPattern = [];
				gamePattern = [];

				$("#level-title").text("Game Over");

 			})


 		}


	}	

});



$(".bttn").click(function(){



$(".bttn").addClass("pressed");


startOver();

setTimeout(function(){

$(".bttn").removeClass("pressed");

},100)

})



$(document).keydown(function(event){


if((event.key === "A" || event.key === "a") && start === 0){

userChosenPattern=[];

nextSequence();

}



})

