// Guardo en una variable el número de jugadas
alert("¿Todo listo para la guerra del cahipún?")
var numPlay = parseInt(prompt("¡Cuantas batallas te atreves a combatir conmigo?"))
console.log(numPlay)


var resul = (human, machine) => {
    return `${movePlay(human)} vs ${movePlay(machine)}`
}

// Opciones de jugadas 
var movePlay = (numero) => {
        switch (parseInt(numero)) {
            case 0:
                return "👊Piedra Mitológica"
                break;
            case 1:
                return "🖐Papel Mutilador "
                break;

            case 2:
                return "✌Tijera Ancestral"
                break;
        }
    }

    // For para hacer una jugada x el número de batallas ingresadas
for (i = 0; i < numPlay; i++) {
    var human = prompt("¡Que valiente¡ selecciona: 0 (👊), 1 (🖐) o 2 (✌)")
    var machine = Math.floor(Math.random() * 3)

    console.log(human, machine)
    alert(resul(human, machine))
    if (machine == human) {
        alert("Bandera blanca !Empatamos¡")
    } else if ((human == 0 && machine == 1) || (human == 1 && machine == 2) || (human == 2 && machine == 0)) {
        alert("He ganado esta batalla... PERDISTE!")
    } else if (human > 2) {
        alert("Estas nervioso, solo selecciona la jugada del 0 al 2.")
    } else {
        alert("Te he dejado ganar hoy.. SI GANASTE")
    }
}