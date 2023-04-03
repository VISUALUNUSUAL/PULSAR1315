//three js scene setup
import { loadEnv }           from './modules/scene/enviroment.js';   // HDRI enviroment from .hdr file (async)
import { createCamera }      from './modules/scene/camera.js';       // setup camera (fov, frustrum, position)
import { createScene }       from './modules/scene/scene.js';        // create three.js Scene object, fog setup
import { createRenderer }    from './modules/scene/renderer.js';     // create three.js Renderer object, before postprocessing.
import { createPostprocess } from './modules/scene/postprocessing.js';     // create three.js Renderer object, before postprocessing.
import { createLights }      from './modules/scene/lights.js';       // create scene lights (ambient, directional)
import { createOrbControls } from './modules/scene/controls.js';     // orbit controls: camera control around a point
import { Helpers }           from './modules/scene/helpers.js';      // create visual helpers for dev/debug (grid, axes, lights, etc)

//gltf model setup
import { glslPlane }        from './modules/glsl/mesh.js';          // Load 3d model (geomtery + materials) from .gltf file (async)

import { loadModel }        from './modules/Pulsar/loadModel.js';   // Load 3d model (geomtery + materials) from .gltf file (async)
import { Pulsar }           from './modules/Pulsar/Pulsar.js';      // create an object with 3d model and set of interactive functions  
import { Label }            from './modules/notes/Label.js';        // create an object with 3d model and set of interactive functions  

//Utils (resize, stats, loading..)
import { Loop }             from './modules/utils/Loop.js';         // Class for animating objects from scene with constant fps
import { loading }          from './modules/utils/loadingManager.js';   // loading manager for loading textures and assets
import { Resizer }          from './modules/utils/Resizer.js';      // resize app window on the fly. 
import { stats }            from './modules/utils/stats.js';        // FPS counter widget for dev/debug only

import { createGUI }        from './modules/gui.js';                // lil.gui dev/debug UI widget

let camera, renderer, scene, loop, controls;
let loader, pulsar, helpers; 

let postprocessing;

class Universe {

    // Create an instance of the threejs app 
    constructor(container) {


        const version = 0.11;
        document.title = 'PULSAR 1315 v.' + version;

        // Loading bar
        loader = loading();

        // Setup default camera settings
        camera = createCamera();

        // Create scene object and fog settings
        scene = createScene();

        // Setup render output with toneMapping, gammaFactor, etc.
        renderer = createRenderer();
        container.append(renderer.domElement);

        // Post processing render  output
        // TODO: move to updatable class
        postprocessing = createPostprocess(camera, scene, renderer);

        // Scene helpers (grid, axes, lights, etc)
        helpers = new Helpers(scene);

        // Create Animation objects array
        loop = new Loop(camera, scene, renderer, postprocessing);


        const geo = glslPlane();
        scene.add(geo);


        // Light sources for 3d scene  
        const { ambientLight, mainLight } = createLights();
        scene.add(ambientLight, mainLight);

        // Orbit controls init
        controls = createOrbControls(camera, renderer.domElement);
        loop.updatables.push(controls);

        // Utils
        const resizer = new Resizer(container, camera, renderer);

        // FPS counter
        const statistics = stats();
        document.body.appendChild(statistics.dom);
        loop.updatables.push(statistics);
    }

    async init() {
        // Load env. maps and hdri
        await loadEnv(renderer, scene, loader);

        // Load GLTF model
        const model = await loadModel(renderer, scene, loader);

        // Create 3D Object group
        pulsar = new Pulsar(model);
        scene.add(pulsar);

        //  move to 3d object class constructor
        const label = new Label(camera, pulsar, renderer, scene);
        loop.updatables.push(label);

        createGUI(pulsar, camera, helpers);
    }
    
    render() { renderer.render(scene, camera); }
    start() { loop.start(); }
    stop() { loop.stop(); }
}

export { Universe };