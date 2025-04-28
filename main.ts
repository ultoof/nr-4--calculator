input.onButtonPressed(Button.A, function () {
    if (Stage == 1) {
        Number_1 += 1
        basic.showNumber(Number_1)
    } else {
        Number_2 += 1
        basic.showNumber(Number_2)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Stage != 2) {
        Stage += 1
        basic.showNumber(0)
    } else {
        Stage = 1
        basic.showNumber(Number_1 + Number_2)
        Number_1 = 0
        Number_2 = 0
        basic.pause(2000)
        basic.showNumber(0)
    }
})
let Number_2 = 0
let Number_1 = 0
let Stage = 0
basic.showNumber(0)
Stage = 1
