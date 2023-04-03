import { WebGLRenderer, ACESFilmicToneMapping, sRGBEncoding } from "../../libs/three.module.js";

function createRenderer() {
    const canvas = document.querySelector('#scene-container');
    const renderer = new WebGLRenderer({
        alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = sRGBEncoding;
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.80;
    renderer.gammaFactor = 2.2;

    return renderer;
}

export { createRenderer };
