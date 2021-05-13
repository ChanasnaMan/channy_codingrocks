controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say("Hey, I don't have a sword!", 1000)
    pause(2000)
    mySprite.startEffect(effects.confetti, 2000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.say("Hey, I have a sword here!", 1000)
    pause(2000)
    mySprite2.startEffect(effects.fire, 2000)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Figure1`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`Figure2`, SpriteKind.Player)
mySprite.setPosition(129, 45)
mySprite2.setPosition(24, 70)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
scene.setBackgroundImage(assets.image`Background`)
