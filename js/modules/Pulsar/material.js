import { MeshPhysicalMaterial, RepeatWrapping, CanvasTexture, Vector2 } from "../../libs/three.module.js";
import { FlakesTexture } from "./FlakesTexture.js";

// MeshPhysicalMaterial 
function bodyMaterial(scene) {
    const texture = new CanvasTexture(new FlakesTexture());
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;

    //repeat the wrapping 10 (x) and 6 (y) times
    texture.repeat.x = 16;
    texture.repeat.y = 8;

    const ballMaterial = {
        clearcoat: 0.0,
        metalness: 0.9,
        roughness: 0.5,
        color: 0x8418ca,
        //        normalMap: texture,
        //        normalScale: new Vector2(0.15, 0.15),
        envMap: scene.environment
    };

    //add material setting
    let material = new MeshPhysicalMaterial(ballMaterial);


    return material;
}

export { bodyMaterial };