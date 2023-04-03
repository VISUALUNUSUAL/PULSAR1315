import { OrbitControls } from "../../libs/three/OrbitControls.js";  

function createOrbControls(camera, canvas) {
    
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.autoRotate = false;
    controls.autoRotateSpeed = -.3;
    controls.rotateSpeed = 0.5;
    controls.maxPolarAngle = Math.PI / 2;
    controls.zoomSpeed = 0.4;
    controls.minDistance = 1.5;  
    controls.maxDistance = 4;
    controls.target.set(0, 0, 0);

    controls.tick = () => controls.update();

    return controls;
}

export { createOrbControls };