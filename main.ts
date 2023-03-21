basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(100000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 80)
    basic.pause(1000)
    if ((21 as any) > (30 as any)) {
        basic.showNumber(input.temperature())
    } else {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            . . . . .
            # . # . #
            `)
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 130)
        music.playMelody("B C5 B C5 B C5 B C5 ", 140)
    }
})
