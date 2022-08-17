let hand = 0
let pedra = 0
let papel = 0
let tesoura = 0
input.onButtonPressed(Button.A, function () {
    hand = randint(1, 3)
    pedra = 1
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    papel = 2
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    tesoura = 3
    basic.showLeds(`
        . # . # .
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        `)
})
basic.forever(function () {
	
})
