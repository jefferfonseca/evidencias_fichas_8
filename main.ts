input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    Coordenada_X += 1
    basic.showNumber(Coordenada_X)
    basic.pause(200)
    if (!(Validar_coordenas())) {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.AB, function () {
    Inicia_coordenadas()
})
function Inicia_coordenadas () {
    basic.clearScreen()
    Coordenada_X = 0
    Coordenada_Y = 0
    Numero_vuelos = 0
    led.plot(Coordenada_X, Coordenada_Y)
}
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    Coordenada_Y += 1
    basic.showNumber(Coordenada_Y)
    basic.pause(200)
    if (!(Validar_coordenas())) {
        basic.showIcon(IconNames.No)
    }
})
function Validar_coordenas () {
    if (Numero_vuelos <= 4 && (Coordenada_X <= 4 && Coordenada_Y <= 4)) {
        basic.clearScreen()
        Numero_vuelos += 1
        basic.showString("V = " + Numero_vuelos)
        basic.pause(500)
        led.plot(Coordenada_X, Coordenada_Y)
        return true
    } else {
        return false
    }
}
let Numero_vuelos = 0
let Coordenada_Y = 0
let Coordenada_X = 0
Inicia_coordenadas()
