import { Clock } from "../../libs/three.module.js";

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer, compose) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.comp = compose;
        this.updatables = [];
    }
    
    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick();
            this.comp.render(this.scene, this.camera);
        });
    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        // only call the getDelta function once per frame!
        const delta = clock.getDelta();
        for (const object of this.updatables) {
            object.tick(delta);
        }
    }
}

export { Loop };