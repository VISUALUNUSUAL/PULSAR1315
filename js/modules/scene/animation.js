import { Group } from "../../libs/three.module.js";

function cam_view(camera, group, i){

    let x = 0;
    let y = 0;
    let z = 3;
    let r = 0;
    
    const groupC = new Group();
    groupC.add(camera)

    switch(i) {
      case 0:
        y = 0;
        r = -Math.PI/4;
        break;
      case 1:
        y = 0;
        r = Math.PI/4;
        break;
      case 2:
        y = 1;
        r = 0;
        break;
      case 3:
        y = 0;
        r = Math.PI;
        break;
      default:
        // code block
    }

    gsap.to(group.rotation,  { duration: 1.5, ease: "power2.inOut", y: r });
    gsap.to(camera.position, { duration: 1.5, ease: "power2.inOut", x: x });
    gsap.to(camera.position, { duration: 1.5, ease: "power2.inOut", y: y });
    gsap.to(camera.position, { duration: 1.5, ease: "power2.inOut", z: z });
};

export { cam_view };