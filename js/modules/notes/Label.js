import { Vector3  }     from "../../libs/three.module.js";
import { get2dcoord }   from "./get2dcoord.js";
import { getDistance }  from "./getDistance.js";
import { createSprite } from "./sprite.js";

class Label {
    constructor(camera, model, renderer, scene) {

    let spriteBehindObject, pointPosition2d;
        
    const annotation = document.querySelector('.annotation');
    const sprite = createSprite();
    model.add(sprite);

    this.updateAnnotationOpacity = () =>{
        this.spriteBehindObject = getDistance(camera, model, sprite);
    };
    
    this.updateScreenPosition = () =>{
        this.pointPosition3d = new Vector3(.5, .5, .5);
        this.pointPosition2d = get2dcoord(renderer, camera, this.pointPosition3d);
        annotation.style.top = `${this.pointPosition2d.y}px`;
        annotation.style.left = `${this.pointPosition2d.x}px`;
        annotation.style.opacity = this.spriteBehindObject ? 0.05 : 1;
        sprite.material.opacity = this.spriteBehindObject ? 0.25 : 1;
    };
        
    this.tick = (delta) => {
            this.updateAnnotationOpacity();  
            this.updateScreenPosition();
        };
    };
};

export { Label };