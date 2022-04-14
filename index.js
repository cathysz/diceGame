var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);
var image1 =  "images/dice"+randomNumber1+".png";
var image2 =  "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);



if(randomNumber1>randomNumber2){
gameResult = "Player 1 wins!";
} else if (randomNumber1<randomNumber2){
  gameResult = "Player 2 wins!";
} else {
gameResult ="Draw";
}

document.querySelector("h1").innerHTML= gameResult;
