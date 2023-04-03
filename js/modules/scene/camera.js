import { PerspectiveCamera } from "../../libs/three.module.js";

function createCamera() {

    const fov = 50;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 100;

    const camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 1, 3);
    camera.lookAt(0, 0, 0);

    return camera;  
}

export { createCamera };