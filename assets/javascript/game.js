let crystalGame = () =>{
//Global variables
var randNum;
var crys1 = Math.floor(Math.random() * 101) + 19;
var crys2 = Math.floor(Math.random() * 101) + 19;
var crys3 = Math.floor(Math.random() * 101) + 19;
var crys4 = Math.floor(Math.random() * 101) + 19;
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
});
$("#c2").on( "click", function(){
	total = total + crys2;
	document.getElementById("scoreCalc").innerHTML = total;
	console.log(crys2);
});
$("#c3").on( "click", function(){
	total = total + crys3;
	document.getElementById("scoreCalc").innerHTML = total;
	console.log(crys3);
});
$("#c4").on( "click", function(){
	total = total + crys4;
	document.getElementById("scoreCalc").innerHTML = total;
	console.log(crys4);
});


console.log(total);

}
crystalGame();