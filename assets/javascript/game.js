//Global variables
var wins = 0;
var losses = 0;
var crys1;
var crys2;
var crys3;
var crys4;
var total;
var randNum;
//function that contains game
let crystalGame = () =>{

//function to reset select variables after win/loss
let setVar = () =>{

crys1 = Math.floor(Math.random() * 12) + 1;
crys2 = Math.floor(Math.random() * 12) + 1;
crys3 = Math.floor(Math.random() * 12) + 1;
crys4 = Math.floor(Math.random() * 12) + 1;
total = 0;
}

setVar();
let numGen = () => {
	
	// Create random number between 19-120
	 randNum = Math.floor(Math.random() * 101) + 19;
	//Send randNum to html
	document.getElementById("randNum").innerHTML = randNum;
}
numGen();
//Compares randNum to total and increments win or losses accordingly.  Then inserts total into html
let winLoss = () =>{
	document.getElementById("scoreCalc").innerHTML = total;
	
	if(randNum ===total){
	wins++;
	setVar();
	numGen();
	document.getElementById("wins").innerHTML = wins;
	
}
if(total > randNum){
	losses++;
	document.getElementById("losses").innerHTML = losses;
	setVar();
	numGen();
	
}
}

//Pull random number on button click then add to total
$("#c1").on( "click", function(){
	total = total + crys1;
	winLoss();
});
$("#c2").on( "click", function(){
	total = total + crys2;
	winLoss();
});
$("#c3").on( "click", function(){
	total = total + crys3;
	winLoss();
});
$("#c4").on( "click", function(){
	total = total + crys4;
	winLoss();
});

//Compare randNum with total



}
crystalGame();