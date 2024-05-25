let puntosCine = 0;
let puntosGeneral = 0;
let nombre = "";
let pregunta = "preguntas/preguntaCulturaGeneral1.html";

function opcionCorrectaCine1(){
    puntosCine++;
    console.log(pregunta);
    window.location.href = "../correctes/correcteCine1.html";

};



function opcionIncorrectaCine1(){
 
    window.location.href = "../correctes/incorrecteCine1.html";
}




function opcionCorrectaCine2(){
    puntosCine++;
    window.location.href = "../correctes/correcteCine2.html";
};


function opcionIncorrectaCine2(){
    window.location.href = "../correctes/incorrecteCine2.html";
}