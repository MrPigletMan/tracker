radio.onReceivedNumber(function (receivedNumber) {
    RecievedForceY = receivedNumber
})
radio.onReceivedValue(function (name, value) {
    RecievedForceX = value
})
let Arrow = 0
let RecievedForceX = 0
let RecievedForceY = 0
radio.setGroup(4)
radio.setTransmitPower(100)
basic.forever(function () {
    radio.sendNumber(input.magneticForce(Dimension.Y))
    radio.sendValue("Y", input.magneticForce(Dimension.X))
    if (input.magneticForce(Dimension.X) < RecievedForceX) {
        Arrow += 0.5
    }
    if (input.magneticForce(Dimension.X) > RecievedForceX) {
        Arrow += -0.5
    }
    if (input.magneticForce(Dimension.Y) < RecievedForceY) {
        Arrow += 0.5
    }
    if (input.magneticForce(Dimension.Y) > RecievedForceY) {
        Arrow += -0.5
    }
    basic.showArrow(Arrow)
})
