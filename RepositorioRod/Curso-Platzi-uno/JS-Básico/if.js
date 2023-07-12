var edad = 18;
if (edad === 18) {
    console.log ("Vas a votar por 1a. vez");
} else if(edad < 18){
            console.log("Sos un menor no votas!!!");
                    
        } else if (edad < 70){
                console.log(" te toca votar de nuevo");
                } else {
                    console.log ("No estas obligado a votar");
                    }

var jug = "piedra"
var com = "papel"
if (jug !== com) {
    if (jug == "piedra"){
        if (com == "papel") {
            console.log (jug + com + " Gana Computadora!!!");
        } else {
            console.log (jug + com + " Gana jugador!!!")
        }
    } else {
            if(jug == "papel") {
                if(com =="piedra"){
                    console.log(jug + com + " Gana jugador ")
                }    else {
                        console.log (jug + com + " Gana Computadora!!!")
                         }      
            } else {
                if(com =="piedra"){
                    console.log(jug + com + " Gana Computadora")
                }    else {
                        console.log (jug + com + " Gana Jugador!!!")
                         }      
     
            } 
    } 
} else {
    console.log("Empate");
}

                   