import { Color, Scene, FogExp2 } from "../../libs/three.module.js";

function createScene() {

    const scene = new Scene();
    // scene.background = new Color('skyblue');

    const color = 0x000000;
    const density = 0.15;
    scene.fog = new FogExp2(color, density);
    
    return scene;
}

export { createScene };