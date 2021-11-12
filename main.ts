basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() > 315 || input.compassHeading() < 45) {
        music.playMelody("C D E F E D E F ", 120)
    } else {
        music.stopAllSounds()
    }
})
