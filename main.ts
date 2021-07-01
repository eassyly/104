let A1 = 0
let A = 0
let B1 = 0
let B = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    while (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        while (input.buttonIsPressed(Button.B)) {
            B = randint(0, 9)
            basic.showString("" + (B))
            basic.pause(100)
            B1 = 1
        }
        while (input.buttonIsPressed(Button.A)) {
            A = randint(1, 9)
            basic.showString("" + (A))
            basic.pause(100)
            A1 = 1
        }
    }
    while (A1 == 1 && B1 == 1) {
        if (A > B) {
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . .
                . # . . .
                # . . . .
                `)
            A1 = 0
            B1 = 0
            basic.pause(100)
        }
        if (A < B) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . . . # .
                . . . . #
                `)
            A1 = 0
            B1 = 0
            basic.pause(100)
        }
        if (A == B) {
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
            A1 = 0
            B1 = 0
            basic.pause(100)
        }
    }
})
