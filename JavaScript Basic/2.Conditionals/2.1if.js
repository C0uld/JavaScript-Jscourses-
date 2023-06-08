
/*
Ejercicio, reaizar un piedra, papel o tijeras, 
utilizando condicionales, una funcion que reciba el parametro con 
el que vamos a jugar, y me regrese si gane o perdí. 

Variables piedra, papel y tiejeras 
una funcion que utilice condicionales para validar si el parametro 
que le estoypasando gana o pierde. 
y que la funcion al final me regrese el resultado de si gané, o  perdí. 
*/

var rock = 1;
var paper = 2;
var scissors = 3;

function gameRPS(user) {
    const Machine = Math.floor(Math.random() * (4 - 1)) + 1;
    console.log(Machine);
    if (user == rock && Machine == scissors || user == paper && Machine == rock || user == scissors && Machine == paper) {
        console.log("The user wins");
    } else if (user == scissors && Machine == rock || user == rock && Machine == paper || user == paper && Machine == scissors){
        console.log("Game over");
    }else{
        console.log("Enter rock paper scissors words to play");
    }
};
gameRPS(rock)