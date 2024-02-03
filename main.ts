input.onButtonPressed(Button.A, function () {
    motion.setPowers(MotorPower.ON)
    motion.driveStraight(20)
    basic.pause(200)
    motion.turnLeft(20)
    motion.driveStraight(20)
    basic.pause(200)
    motion.turnRight(20)
    motion.driveStraight(20)
    basic.pause(200)
    motion.turnRight(15)
    motion.driveStraight(15)
    basic.pause(200)
    motion.turnLeft(10)
    motion.driveStraight(10)
    basic.pause(500)
    motion.turnRight(10)
    motion.driveStraight(10)
    basic.pause(500)
    motion.turnRight(10)
    motion.driveStraight(10)
    basic.pause(500)
    motion.turnRight(10)
    motion.driveStraight(10)
    basic.pause(500)
    motion.turnLeft(10)
    motion.driveStraight(10)
    basic.pause(500)
    motion.driveStraight(10)
    basic.pause(500)
    motion.turnLeft(10)
    motion.driveStraight(10)
    basic.pause(500)
    motion.turnRight(10)
    motion.driveStraight(10)
    basic.pause(500)
    motion.turnRight(10)
    motion.driveStraight(10)
    basic.pause(500)
    motion.turnLeft(10)
    motion.driveStraight(10)
    basic.pause(500)
    motion.turnRight(10)
    motion.driveStraight(10)
    basic.pause(500)
    motion.turnLeft(10)
    motion.driveStraight(10)
    basic.pause(500)
    motion.turnRight(10)
    motion.driveStraight(10)
    motion.stop()
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `)
})
