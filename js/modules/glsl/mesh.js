import { Mesh} from "../../libs/three.module.js";
import { createPlane }  from "./geometry.js";
import { glslMat, stndMat } from "./material.js";

function glslPlane() {
    
    const geometry = createPlane();
    const material = stndMat();
    const plane = new Mesh(geometry, material);
    
    return plane;
};

export { glslPlane };