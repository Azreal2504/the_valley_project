namespace SpriteKind {
    export const PressA = SpriteKind.create()
    export const Car = SpriteKind.create()
    export const Car2 = SpriteKind.create()
    export const Car3 = SpriteKind.create()
    export const ToolBar = SpriteKind.create()
    export const adjuster = SpriteKind.create()
    export const tile = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Outdoor Right`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level1`))
    tiles.coverAllTiles(assets.tile`Indoor Left`, assets.tile`myTile21`)
    tiles.coverAllTiles(assets.tile`Indoor Right`, assets.tile`myTile22`)
    tiles.coverAllTiles(assets.tile`Rotater`, assets.tile`myTile1`)
    tiles.placeOnTile(Playable_Character, tiles.getTileLocation(13, 25))
})
scene.onOverlapTile(SpriteKind.Car3, assets.tile`myTile2`, function (sprite, location) {
    Car32.destroy()
})
sprites.onDestroyed(SpriteKind.PressA, function (sprite) {
    timer.after(500, function () {
        Car_2.vy = -20
        color.FadeToWhite.startScreenEffect(4000)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Indoor Right`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level4`))
    tiles.coverAllTiles(assets.tile`Outdoor Left`, assets.tile`myTile21`)
    tiles.coverAllTiles(assets.tile`Outdoor Right`, assets.tile`myTile22`)
    tiles.placeOnTile(Playable_Character, tiles.getTileLocation(2, 8))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Valley.destroy()
    Press_A_To_Start.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Indoor Left`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level4`))
    tiles.coverAllTiles(assets.tile`Outdoor Left`, assets.tile`myTile21`)
    tiles.coverAllTiles(assets.tile`Outdoor Right`, assets.tile`myTile22`)
    tiles.placeOnTile(Playable_Character, tiles.getTileLocation(2, 8))
})
sprites.onDestroyed(SpriteKind.Car3, function (sprite) {
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.coverAllTiles(assets.tile`Outdoor Left`, assets.tile`myTile21`)
    tiles.coverAllTiles(assets.tile`Outdoor Right`, assets.tile`myTile22`)
    Playable_Character = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f e e f f f . . . . 
        . . . f f f e e e e f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e e e e e e e e e f . . 
        . . f e e f f f f f f e e f . . 
        . . f f f f 4 4 4 4 f f f f . . 
        . f f e 4 b f 4 4 f b 4 e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e e d d d d e e e f . . 
        . . . f e d 4 4 4 4 d e f . . . 
        . . 7 7 f 7 7 7 7 7 7 f 7 7 . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f f f 5 5 f f f 4 4 . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e . . e e . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(Playable_Character, tiles.getTileLocation(8, 2))
    scene.cameraFollowSprite(Playable_Character)
    controller.moveSprite(Playable_Character)
    Tool_Bar = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 f f f f f f f f f f f f f f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f f f f f f f f f f f f f f 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.ToolBar)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Outdoor Left`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level1`))
    tiles.coverAllTiles(assets.tile`Indoor Left`, assets.tile`myTile21`)
    tiles.coverAllTiles(assets.tile`Indoor Right`, assets.tile`myTile22`)
    tiles.coverAllTiles(assets.tile`Rotater`, assets.tile`myTile1`)
    tiles.placeOnTile(Playable_Character, tiles.getTileLocation(13, 25))
})
sprites.onDestroyed(SpriteKind.Car, function (sprite) {
    scroller.scrollBackgroundWithSpeed(0, 0)
    color.startFade(color.White, color.originalPalette, 2000)
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.coverAllTiles(assets.tile`Rotater`, assets.tile`myTile1`)
    Car_2 = sprites.create(assets.image`Tourist`, SpriteKind.Car2)
    scaling.scaleByPercent(Car_2, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    tiles.placeOnTile(Car_2, tiles.getTileLocation(0, 28))
    scene.cameraFollowSprite(Car_2)
    Car_2.vx = 40
    animation.runImageAnimation(
    Car_2,
    assets.animation`Animated Tourist`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Car2, assets.tile`Rotater`, function (sprite, location) {
    timer.throttle("Car turn", 10000000000, function () {
        Car32 = sprites.create(img`
            . . . . . . 8 8 c c 8 8 . . . . 
            . . . . . 8 6 6 6 6 6 6 8 . . . 
            . . . . 6 c 6 6 6 6 6 6 c 6 . . 
            . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
            . . . f 6 6 9 6 6 6 6 6 c 6 f . 
            . . . f 6 6 9 6 6 6 6 6 6 6 f . 
            . . . f 6 6 9 6 6 6 6 6 6 6 f . 
            . . . f 6 c 6 9 9 6 6 6 c 6 f . 
            . . . 8 6 c 8 c c c c 8 c 6 8 . 
            . . . 8 6 8 c b b b b c 8 6 8 . 
            . . . 8 6 8 b b b b b b 8 6 8 . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
            . . . f 8 d 8 8 8 8 8 8 d 8 f . 
            . . . f 8 6 d 8 8 8 8 d 6 8 f . 
            . . . f f 8 8 8 8 8 8 8 8 f f . 
            . . . . f f . . . . . . f f . . 
            `, SpriteKind.Car3)
        scaling.scaleByPercent(Car32, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        timer.after(500, function () {
            Car_2.destroy()
            scene.cameraFollowSprite(Car32)
            tiles.placeOnTile(Car32, tiles.getTileLocation(22, 28))
            Car32.vx = 0
            Car32.vy = -40
            Car32.setImage(img`
                . . . . . . 8 8 c c 8 8 . . . . 
                . . . . . 8 6 6 6 6 6 6 8 . . . 
                . . . . 6 c 6 6 6 6 6 6 c 6 . . 
                . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
                . . . f 6 6 9 6 6 6 6 6 c 6 f . 
                . . . f 6 6 9 6 6 6 6 6 6 6 f . 
                . . . f 6 6 9 6 6 6 6 6 6 6 f . 
                . . . f 6 c 6 9 9 6 6 6 c 6 f . 
                . . . 8 6 c 8 c c c c 8 c 6 8 . 
                . . . 8 6 8 c b b b b c 8 6 8 . 
                . . . 8 6 8 b b b b b b 8 6 8 . 
                . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
                . . . f 8 d 8 8 8 8 8 8 d 8 f . 
                . . . f 8 6 d 8 8 8 8 d 6 8 f . 
                . . . f f 8 8 8 8 8 8 8 8 f f . 
                . . . . f f . . . . . . f f . . 
                `)
            animation.runImageAnimation(
            Car32,
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
        })
        timer.after(2000, function () {
            color.FadeToBlack.startScreenEffect(500)
            timer.after(1000, function () {
                color.startFade(color.Black, color.originalPalette, 1000)
            })
        })
    })
})
let Tool_Bar: Sprite = null
let Car32: Sprite = null
let Playable_Character: Sprite = null
let Press_A_To_Start: TextSprite = null
let Valley: TextSprite = null
let Car_2: Sprite = null
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
Car_2 = sprites.create(assets.image`Tourist`, SpriteKind.Car)
animation.runImageAnimation(
Car_2,
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
Car_2.setPosition(100, 70)
scaling.scaleByPercent(Car_2, 70, ScaleDirection.Uniformly, ScaleAnchor.Middle)
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
    if (info.score() == 1) {
        Tool_Bar.setPosition(Playable_Character.x + 50, Playable_Character.y - 50)
    }
})
game.onUpdate(function () {
    if (Car_2.y <= -5) {
        Car_2.destroy()
    }
})
