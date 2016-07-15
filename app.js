var data = [];
var data = [];
for (var i = 0; i < 2500; i++) {
    data.push([
        ['spacepunx', `spacepunx.jpg`],
        ['spacepunx', `spacepunx.jpg`],
        ['spacepunx', `spacepunx.jpg`],
        ['spacepunx', `spacepunx.jpg`]
    ]);
}
var example;
document.addEventListener('DOMContentLoaded', function () {
    var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
        backgroundColor: 'transparent'
    });
    var rowCount = 0,
        imgCount = 0;
    document.body.appendChild(renderer.view);
    // create the root of the scene graph
    var stage = new PIXI.Container();
    // create a texture from an image path
    window.onscroll = function () {
        stage.y = -window.pageYOffset;
    };
    data.forEach(function (row) {
        imgCount = 0;
        row.forEach(function (img) {
            var texture = PIXI.Texture.fromImage(img[1]);
            // create a new Sprite using the texture
            var imgSprite = new PIXI.Sprite(texture);
            if (!example) {
                example = imgSprite;
            }
            // center the sprite's anchor point
            imgSprite.anchor.x = 0;
            imgSprite.anchor.y = 0;
            // move the sprite to the center of the screen
            imgSprite.position.x = imgCount * 250;
            imgSprite.position.y = rowCount * 250;
            // console.log(imgSprite, imgCount, rowCount);
            imgSprite.height = 200;
            imgSprite.width = 200;
            stage.addChild(imgSprite);
            imgCount++;
        });
        rowCount++;
    });
    // start animating
    animate();

    function animate() {
        requestAnimationFrame(animate);
        // just for fun, let's rotate mr rabbit a little
        // example.rotation += 0.01;
        // render the container
        renderer.render(stage);
    }
});

