import { CanvasTexture, SpriteMaterial, Sprite } from "../../libs/three.module.js";

function createSprite() {
    
    // Number
    
    const canvas = document.getElementById("number");
    const ctx = canvas.getContext("2d");
    const x = 32;
    const y = 32;
    const radius = 30;
    const startAngle = 0;
    const endAngle = Math.PI * 2;

    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fill();

    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.stroke();

    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.font = "32px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("1", x, y);
    
    const numberTexture = new CanvasTexture( document.querySelector("#number") );
    const spriteMaterial = new SpriteMaterial({
        map: numberTexture,
        alphaTest: 0.5,
        transparent: false,
        depthTest: false,
        depthWrite: false
    });

    const sprite = new Sprite(spriteMaterial);
    sprite.position.set(.5, .5, .5);
    sprite.scale.set(0.05, 0.05, 0.05);
    
    return sprite;
}

export { createSprite};
