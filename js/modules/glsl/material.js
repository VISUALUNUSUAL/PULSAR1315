import { MeshBasicMaterial, ShaderMaterial, DoubleSide } from "../../libs/three.module.js";


function glslMat() {
    
    const glsMaterial = new MeshBasicMaterial({
        color: 0xffff00,
        side: DoubleSide
    });

    return glsMaterial
}


function stndMat() {
    
    const stndMaterial = new MeshBasicMaterial({
        color: 0xffff00,
        side: DoubleSide
    });

    return stndMaterial
}

export { glslMat, stndMat }