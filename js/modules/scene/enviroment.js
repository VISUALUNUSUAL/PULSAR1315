import { EquirectangularReflectionMapping } from "../../libs/three.module.js";
import { RGBELoader } from "../../libs/three/RGBELoader.js";

async function loadEnv(renderer, scene, manager) {

    const rgbeLoader = new RGBELoader(manager).setPath('../../assets/textures/');
    const texture = await rgbeLoader.loadAsync('studio_small_08_2k.hdr');
//    const texture = await rgbeLoader.loadAsync('nebula.hdr');

    texture.mapping = EquirectangularReflectionMapping;
    scene.environment = texture;
//    scene.background = texture;
}

export { loadEnv };

