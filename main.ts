function activateTurbine () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    led.toggleAll();
basic.pause(onDuration)
    led.toggleAll();
pins.digitalWritePin(DigitalPin.P0, 0)
}
input.onButtonPressed(Button.A, function () {
    activateTurbine()
})
function win () {
    radio.sendString("I")
}
radio.onReceivedString(function (receivedString) {
    activity = true
    activityTime = input.runningTime()
    if (receivedString == "Start produksjon") {
        activateTurbine()
    } else if (receivedString == "Stopp produksjon") {
        win()
    } else if (receivedString == "reset") {
        control.reset()
    }
})
let activityTime = 0
let activity = false
let onDuration = 0
let turbineIsRunning = false
let turbineOnTime = 0
radio.setGroup(2)
basic.showIcon(IconNames.Happy)
// 15 sec timeout
let turbineTimeout = 15000
let activityTimeout = 15000
onDuration = 200
