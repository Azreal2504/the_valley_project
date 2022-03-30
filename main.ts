namespace SpriteKind {
    export const PressA = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.PressA, function (sprite) {
    timer.after(500, function () {
        Car.vy = -20
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Valley.destroy()
    Press_A_To_Start.destroy()
})
let Press_A_To_Start: TextSprite = null
let Valley: TextSprite = null
let Car: Sprite = null
scene.setBackgroundImage(img`
    3333333333333333333333dddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddd33333333333333333333333333333333333
    3333333333333333333333dddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddd33333333333333333333333333333333333
    333333333333333333333ddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddd33333333333333333333333333333333333
    33333333333333333333dddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddd33333333333333333333333333333333333
    33333333333333333333dddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddd33333333333333333333333333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccc3ccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddd33333333333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddd3333333333333333333333333333333333
    33333333333333333ddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccc3ccccccccccccfffddddd333333333333333333333333333333333
    3333333333333333dddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddd33333333333333333333333333333333
    33333333333333333ddddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddd33333333333333333333333333333333
    33333333333333333ddddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccfffddddddd3333333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddd333333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffddddddddd33333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddd33333333333333333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddd333333333333333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddd3333333333333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddddd33333333333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddddd33333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddddddddd33333333333
    3333333333333333333ddddddddddd3ddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddddddd333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddddddd333333333333
    3333333333333333333ddddddddddddddddddddfffcccccccccccc3cccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddddddd333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddddddd3333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddddd33333333333333
    3333333333333333333ddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddddd33333333333333
    3333333333333333333ddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddddd33333333333333
    3333333333333333333ddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddddd333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccfffdddddddddddddddddddddd3333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddd3333333333333333
    33333333333333333ddddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddd3333333333333333
    33333333333333333ddddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccccccccccccccccfffdddddddddddddddddddddd3333333333333333
    333333333333333ddddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    33333333333333dddddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    3333333333333333ddddddddddddddd3dddddddfffccccccccccccccccccc3ccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    333333333333333333dddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    33333333333333333333dddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    333333333333333333333ddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    333333333333333333333ddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    333333333333333333333ddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddd3dddddddd33333333333333333
    333333333333333333333ddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    3333333333333333333333dddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    3333333333333333333333dddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    3333333333333333333333dddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    3333333333333333333333dddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    3333333333333333333333dddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddd3333333333333333
    3333333333333333333333dddddddddd3ddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddddd333333333333333
    3333333333333333333333dddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddddd33333333333333
    3333333333333333333333dddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddddd33333333333333
    333333333333333333333ddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddddddd3333333333333
    333333333333333333333ddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddddddd333333333333
    333333333333333333333ddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddddddddd3333333333
    333333333333333333333ddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccc3ccccccccccccfffdddddddddddddddddddddddddddd3333333333
    333333333333333333333ddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddddddddddd333333333
    333333333333333333333ddddddddddddddddddfffcccccccccccccccccccccccc3cccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddddddddd33333333333
    33333333333333333333dddddddddddddd3ddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddddddd3333333333333
    33333333333333333333dddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddddd33333333333333
    33333333333333333333dddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddddd333333333333333
    3333333333333333333ddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddd3333333333333333
    3333333333333333333ddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffddddddddddddddddd3ddd33333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff3dddddddddddddddddddd333333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddddddddddd33333333333333333333
    33333333333333333ddddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffddddddddddddddddd333333333333333333333
    33333333333333333ddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddd333333333333333333333
    3333333333333333dddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddd3333333333333333333333
    333333333333333ddddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddd333333333333333333333333
    3333333333333ddddddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddd3333333333333333333333333
    333333333333dddddddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddd3333333333333333333333333
    3333333333333ddddddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddd33333333333333333333333333
    33333333333333dddddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddd33333333333333333333333333
    333333333333333ddddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddd333333333333333333333333333
    3333333333333333dddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    3333333333333333dddddddddddddddddddddddfffcccccccccccccc3cccccccccccccc3ccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    33333333333333333ddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555ccccccccccccccccccccccc3cccccccccccccfffddddddddddd333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddd333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddd33333333333333333333333333
    333333333333333333dddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddd33333333333333333333333333
    333333333333333333dddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddd3333333333333333333333333
    33333333333333333ddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddd3333333333333333333333333
    3333333333333333dddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddd333333333333333333333333
    3333333333333333dddddddd3ddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddd333333333333333333333333
    333333333333333ddddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddd33333333333333333333333
    33333333333333dddddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddd33333333333333333333333
    3333333333333ddddddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddd3333333333333333333333
    3333333333dddddddddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddd333333333333333333333
    33333333333ddddddddddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddddddddddd33333333333333333333
    3333333333333ddddddddddddddddddddddddddfff3ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddddddddddd33333333333333333333
    33333333333333dddddddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddd3dddddddddddd3333333333333333333
    3333333333333333dddddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddd33333333333333333
    3333333333333333dddddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddd3333333333333333
    33333333333333333ddddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffddddddddddddddddddddddd333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddddd33333333333333
    333333333333333333dddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddddd33333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddddd3333333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddddddddd333333333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddddd3333333333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddddddd333333333333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccc3ccccccccccccc555ccccccccccccccccccc3cccccccccccccccccfffddddddddddddddd33333333333333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddddd333333333333333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfff3dddddddddddd3333333333333333333333333
    3333333333333333333ddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddddd3333333333333333333333333
    333333333333333333dddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddddd33333333333333333333333333
    333333333333333333dddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffddddddddddd333333333333333333333333333
    333333333333333333dddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffddddddddddd333333333333333333333333333
    33333333333333333ddddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffddddddddddd333333333333333333333333333
    33333333333333333ddddddddddddddddddddddfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    3333333333333333dddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    333333333333333ddddddddddddddddddddddddfffccccccccccccccccccccccccccccccccccccc555cccccccccccccccccccccccccccccccccccccfffdddddddddd3333333333333333333333333333
    `)
scroller.scrollBackgroundWithSpeed(0, 50)
Car = sprites.create(assets.image`Tourist`, SpriteKind.Player)
animation.runImageAnimation(
Car,
[img`
    . . . . . . 8 8 c c 8 8 . . . . 
    . . . . . 8 6 6 6 6 6 6 8 . . . 
    . . . . 6 c 6 6 6 6 6 6 c 6 . . 
    . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
    . . . f 6 6 9 6 6 6 6 6 c 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . c 6 c 6 9 9 6 6 6 c 6 c . 
    . . . 8 6 c 8 c c c c 8 c 6 8 . 
    . . . 8 6 8 c b b b b c 8 6 8 . 
    . . . 8 6 8 b b b b b b 8 6 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . f 8 d 8 8 8 8 8 8 d 8 f . 
    . . . f 8 6 d 8 8 8 8 d 6 8 f . 
    . . . f f 8 8 8 8 8 8 8 8 f f . 
    . . . . c c . . . . . . c c . . 
    `,img`
    . . . . . . 8 8 c c 8 8 . . . . 
    . . . . . 8 6 6 6 6 6 6 8 . . . 
    . . . . 6 c 6 6 6 6 6 6 c 6 . . 
    . . . 8 6 c 6 6 6 6 6 6 c 6 8 . 
    . . . c 6 9 6 6 6 6 6 6 c 6 c . 
    . . . f 6 9 6 6 6 6 6 6 6 6 f . 
    . . . f 6 9 6 6 6 6 6 6 6 6 f . 
    . . . f 6 c 9 9 6 6 6 6 c 6 f . 
    . . . 8 6 c 8 c c c c 8 c 6 8 . 
    . . . 8 6 8 c b b b b c 8 6 8 . 
    . . . 8 6 8 b b b b b b 8 6 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . c 8 d 8 8 8 8 8 8 d 8 c . 
    . . . f 8 6 d 8 8 8 8 d 6 8 f . 
    . . . f f 8 8 8 8 8 8 8 8 f f . 
    . . . . f c . . . . . . c f . . 
    `,img`
    . . . . . . 8 8 c c 8 8 . . . . 
    . . . . . 8 6 6 6 6 6 6 8 . . . 
    . . . . 6 c 6 6 6 6 6 6 c 6 . . 
    . . . 8 6 c 6 6 6 6 6 6 c 6 8 . 
    . . . f 6 6 6 6 6 6 6 6 c 6 f . 
    . . . c 9 6 6 6 6 6 6 6 6 6 c . 
    . . . f 9 6 6 6 6 6 6 6 6 6 f . 
    . . . f 9 c 6 6 6 6 6 6 c 6 f . 
    . . . 8 6 c 8 c c c c 8 c 6 8 . 
    . . . 8 6 8 c b b b b c 8 6 8 . 
    . . . 8 6 8 b b b b b b 8 6 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . c 8 d 8 8 8 8 8 8 d 8 c . 
    . . . c 8 6 d 8 8 8 8 d 6 8 c . 
    . . . f f 8 8 8 8 8 8 8 8 f f . 
    . . . . f f . . . . . . f f . . 
    `,img`
    . . . . . . 8 8 c c 8 8 . . . . 
    . . . . . 8 6 6 6 6 6 6 8 . . . 
    . . . . 6 c 6 6 6 6 6 6 c 9 . . 
    . . . 8 6 c 6 6 6 6 6 6 c 9 8 . 
    . . . f 6 6 6 6 6 6 6 6 c 9 f . 
    . . . f 6 6 6 6 6 6 6 6 6 6 f . 
    . . . c 6 6 6 6 6 6 6 6 6 6 c . 
    . . . f 6 c 6 6 6 6 6 6 c 6 f . 
    . . . 8 6 c 8 c c c c 8 c 6 8 . 
    . . . 8 6 8 c b b b b c 8 6 8 . 
    . . . 8 6 8 b b b b b b 8 6 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . f 8 d 8 8 8 8 8 8 d 8 f . 
    . . . c 8 6 d 8 8 8 8 d 6 8 c . 
    . . . c f 8 8 8 8 8 8 8 8 f c . 
    . . . . f f . . . . . . f f . . 
    `,img`
    . . . . . . 8 8 c c 8 8 . . . . 
    . . . . . 8 6 6 6 9 9 6 8 . . . 
    . . . . 6 c 6 6 6 6 6 9 c 6 . . 
    . . . 8 6 c 6 6 6 6 6 9 c 6 8 . 
    . . . f 6 6 6 6 6 6 6 9 c 6 f . 
    . . . f 6 6 6 6 6 6 6 6 6 6 f . 
    . . . f 6 6 6 6 6 6 6 6 6 6 f . 
    . . . c 6 c 6 6 6 6 6 6 c 6 c . 
    . . . 8 6 c 8 c c c c 8 c 6 8 . 
    . . . 8 6 8 c b b b b c 8 6 8 . 
    . . . 8 6 8 b b b b b b 8 6 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . f 8 d 8 8 8 8 8 8 d 8 f . 
    . . . f 8 6 d 8 8 8 8 d 6 8 f . 
    . . . c c 8 8 8 8 8 8 8 8 c c . 
    . . . . f f . . . . . . f f . . 
    `,img`
    . . . . . . 8 8 c c 8 8 . . . . 
    . . . . . 8 6 6 9 9 6 6 8 . . . 
    . . . . 6 c 6 6 6 6 9 6 c 6 . . 
    . . . 8 6 c 6 6 6 6 9 6 c 6 8 . 
    . . . f 6 6 6 6 6 6 9 6 c 6 f . 
    . . . f 6 6 6 6 6 6 6 6 6 6 f . 
    . . . f 6 6 6 6 6 6 6 6 6 6 f . 
    . . . c 6 c 6 6 6 6 6 6 c 6 c . 
    . . . 8 6 c 8 c c c c 8 c 6 8 . 
    . . . 8 6 8 c b b b b c 8 6 8 . 
    . . . 8 6 8 b b b b b b 8 6 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . f 8 d 8 8 8 8 8 8 d 8 f . 
    . . . f 8 6 d 8 8 8 8 d 6 8 f . 
    . . . f c 8 8 8 8 8 8 8 8 c f . 
    . . . . c f . . . . . . f c . . 
    `],
50,
true
)
Car.setPosition(100, 70)
scaling.scaleByPercent(Car, 70, ScaleDirection.Uniformly, ScaleAnchor.Middle)
Valley = textsprite.create("Valley", 0, 7)
Valley.setMaxFontHeight(10)
Valley.setOutline(1, 15)
Valley.setPosition(80, 10)
scaling.scaleByPercent(Valley, 80, ScaleDirection.Horizontally, ScaleAnchor.Middle)
Press_A_To_Start = textsprite.create("Press A To Start", 0, 5)
Press_A_To_Start.setMaxFontHeight(5)
Press_A_To_Start.setPosition(80, 100)
Press_A_To_Start.setOutline(1, 15)
Press_A_To_Start.setKind(SpriteKind.PressA)
game.onUpdate(function () {
    if (Car.y <= -5) {
        Car.destroy()
    }
})
