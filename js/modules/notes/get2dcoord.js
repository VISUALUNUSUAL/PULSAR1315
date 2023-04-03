import { Vector3 } from "../../libs/three.module.js";

function get2dcoord(renderer, camera, vec) {
    const vector = new Vector3( vec.x, vec.y, vec.z );
    const canvas = renderer.domElement;
    vector.project(camera);
    vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));
    
    return vector;
}

export { get2dcoord };
