import { PlaneGeometry } from "../../libs/three.module.js";

function createPlane() {
    
    const geometry = new PlaneGeometry(1, 1);
    
    return geometry
}

export { createPlane };