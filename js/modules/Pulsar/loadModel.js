import { GLTFLoader } from "../../libs/three/GLTFLoader.js";
import { bodyMaterial } from "./material.js";
async function loadModel(renderer, scene, manager) {

    const gltfLoader = new GLTFLoader(manager).setPath('../../../assets/models/');
    const gltf = await gltfLoader.loadAsync('model_02.gltf');
    gltf.scene.traverse(function (child) {
        if (child.isMesh) {
            child.material = bodyMaterial(scene);
                child.castShadow = true;
        }
    });
    
    const model = gltf.scene;
    model.position.y = 0.05;
    return model;
}

export {
    loadModel
};