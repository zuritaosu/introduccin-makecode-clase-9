sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Enemigo_2.say(":)", 500)
    otherSprite.setKind(mySprite.kind())
})
let Enemigo_2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 1 1 1 1 1 2 2 2 2 1 1 1 1 1 2 
    2 1 1 1 1 1 2 2 2 2 1 1 1 1 1 2 
    2 f f f 1 1 2 2 2 2 f f f 1 1 2 
    2 f f f 1 1 2 2 2 2 f f f 1 1 2 
    2 f f f 1 1 2 2 2 2 f f f 1 1 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 2 
    2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 2 
    2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
let Enemigo = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 1 1 1 1 1 7 7 7 7 1 1 1 1 1 7 
    7 1 1 1 1 1 7 7 7 7 1 1 1 1 1 7 
    7 f f f 1 1 7 7 7 7 f f f 1 1 7 
    7 f f f 1 1 7 7 7 7 f f f 1 1 7 
    7 f f f 1 1 7 7 7 7 f f f 1 1 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 
    7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 
    7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Enemy)
Enemigo_2 = sprites.create(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 1 1 1 1 1 9 9 9 9 1 1 1 1 1 9 
    9 1 1 1 1 1 9 9 9 9 1 1 1 1 1 9 
    9 f f f 1 1 9 9 9 9 f f f 1 1 9 
    9 f f f 1 1 9 9 9 9 f f f 1 1 9 
    9 f f f 1 1 9 9 9 9 f f f 1 1 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 4 4 4 9 9 9 9 9 9 9 9 
    9 9 9 9 9 4 4 4 9 9 9 9 9 9 9 9 
    9 9 9 9 9 4 4 4 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `, SpriteKind.Enemy)
Enemigo.setPosition(24, 27)
Enemigo_2.setPosition(128, 26)
controller.moveSprite(mySprite)
