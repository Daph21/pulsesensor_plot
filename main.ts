let RawPulseSensorSignal = 0
basic.showString("PS")
basic.forever(function () {
    RawPulseSensorSignal = pins.analogReadPin(AnalogPin.P2)
    led.plotBarGraph(
    RawPulseSensorSignal,
    1023
    )
})
