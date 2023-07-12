var numero=1
switch(numero){
    case 1:
        console.log("El UNO!!!");
    break;
}
var jug = "tijera"
var com = "papel"
switch(jug){
    case "piedra":
        switch(com){
            case "papel":
                console.log(jug + " " +com +" Gana Computadora");    
            break;
            case "tijera":
                console.log(jug + " " +com +" Gana Jugador");
            break;
            default:
                console.log(jug + " " +com +" Empate")
        }
        break;
    case "papel":
        switch(com){
            case "tijera":
                console.log(jug + " " +com +" Gana Computadora");    
            break;
            case "piedra":
                console.log(jug + " " +com +" Gana Jugador");
            break;
            default:
                console.log(jug + " " +com +" Empate")
        }
        break;
    default:
        switch(com){
            case "piedra":
                console.log(jug + " " +com +" Gana Computadora");    
            break;
            case "papel":
                console.log(jug + " " +com +" Gana Jugador");
            break;
            default:
                console.log(jug + " " +com +" Empate")
        }
        break
}
var regalo= "Computadora"
switch(regalo){
    case "computadora":
        console.log("Con mi computadora puedo programar usando JavaScript");
        break;
    case "celular":
        console.log("En mi celular puedo aprender usando la app de Platzi");
        break;
    case "cable":
        console.log("¡Hay un cable en mi bota!")
        break
    default:
        console.log("Artículo no encontrado");
}
var regalo= "Computadora"
if(regalo=="Computadora"){
    return("Con mi computadora puedo programar usando JavaScript");
} else {if(regalo=="celular"){
    return("En mi celular puedo aprender usando la app de Platzi");

        } else {if (regalo=="cable") {
        return ("¡Hay un cable en mi bota!");
            } else {
                return ("Artículo no encontrado");
            } 

            }
    
        }
        var regalo= "Computadora"
        if(regalo=="Computadora"){
            console.log("Con mi computadora puedo programar usando JavaScript");
        } 
        if(regalo=="celular"){
            console.log("En mi celular puedo aprender usando la app de Platzi");
        } 
        if (regalo=="cable") {
                console.log ("¡Hay un cable en mi bota!");
                    } 
        