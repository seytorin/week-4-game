let crystalGame = () =>{
//Global variables
var randNum;
var wins = 0;
var losses = 0;
var crys1 = Math.floor(Math.random() * 12) + 1;
var crys2 = Math.floor(Math.random() * 12) + 1;
var crys3 = Math.floor(Math.random() * 12) + 1;
var crys4 = Math.floor(Math.random() * 12) + 1;
var total = 0;

let numGen = () => {
	// Create random number between 19-120
	randNum = Math.floor(Math.random() * 101) + 19;
	//Send randNum to html
	document.getElementById("randNum").innerHTML = randNum;
}
numGen();

//Pull random number on button click then add to total
$("#c1").on( "click", function(){
	total = total + crys1;
	document.getElementById("scoreCalc").innerHTML = total;
	console.log(total);
	if(randNum ===total){
	wins++;
	document.getElementById("wins").innerHTML = wins;
}
if(total > randNum){
	losses++;
	document.getElementById("losses").innerHTML = losses;
}
});
$("#c2").on( "click", function(){
	total = total + crys2;
	document.getElementById("scoreCalc").innerHTML = total;
	console.log(crys2);
	if(randNum ===total){
	wins++;
	document.getElementById("wins").innerHTML = wins;
}
if(total > randNum){
	losses++;
	document.getElementById("losses").innerHTML = losses;
}
});
$("#c3").on( "click", function(){
	total = total + crys3;
	document.getElementById("scoreCalc").innerHTML = total;
	console.log(crys3);
	if(randNum ===total){
	wins++;
	document.getElementById("wins").innerHTML = wins;
}
if(total > randNum){
	losses++;
	document.getElementById("losses").innerHTML = losses;
}
});
$("#c4").on( "click", function(){
	total = total + crys4;
	document.getElementById("scoreCalc").innerHTML = total;
	console.log(crys4);
	if(randNum ===total){
	wins++;
	document.getElementById("wins").innerHTML = wins;
}
if(total > randNum){
	losses++;
	document.getElementById("losses").innerHTML = losses;
}
});
console.log(total);
//Compare randNum with total



}
crystalGame();