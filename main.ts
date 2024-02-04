radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hi!")
    radio.sendString("My name is NAME, What’s your name?")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("PUTWHATEVERYOUWANTHERETOSEND")
    radio.sendString("PUTWHATEVERYOUWANTHERETOSEND")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("I am good, Thank you.")
    radio.sendString("What are you doing?")
})
radio.setGroup(1)
