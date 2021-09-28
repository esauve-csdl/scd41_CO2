let CO2 = 0
SCD41.init()
serial.redirectToUSB()
basic.forever(function () {
    CO2 = SCD41.get_co2()
    serial.writeLine("" + (CO2))
    basic.pause(5000)
    basic.showIcon(IconNames.Heart)
})
