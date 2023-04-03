import { DirectionalLight, HemisphereLight } from "../../libs/three.module.js";

function createLights(scene) {

    const ambientLight = new HemisphereLight(0xffffff, 0xffffff, 0.1);
    ambientLight.color.setHSL(0.6, 1, 0.6);
    ambientLight.groundColor.setHSL(0.095, 1, 0.75);
    ambientLight.position.set(0, 10, 0);
    
    const mainLight  = new DirectionalLight(0xffffff, 0.9);
    mainLight.color.setHSL(0.1, 1, 0.95);
    mainLight.position.set(10, 10, 10);

    return { ambientLight, mainLight };
}

export { createLights };
