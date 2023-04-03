import { Group, MeshStandardMaterial } from "../../libs/three.module.js";
import { params } from "../params.js";

class Pulsar extends Group {
    constructor(model) {

        super();
        this.meshes = model;
        this.add(this.meshes);

        this.updGeometry = () => {
            this.meshes.children[0].visible = params.atmo;
            this.meshes.children[1].visible = params.cst_out;
            this.meshes.children[2].visible = params.cst_in;
            this.meshes.children[3].visible = params.cr_out;
            this.meshes.children[4].visible = params.cr_in;
        }

        this.animation = () => {
            console.log('fired');

        }

        this.updMaterial = () => {
            this.meshes.traverse(function (child) {
                if (child.isMesh) {
                    child.material.roughness = params.roughness;
                    child.material.metalness = params.metalness;
                    child.material.clearcoat = params.clearcoat;
                }
            });
            this.meshes.children[0].material.color.set(params.color1);
            this.meshes.children[1].material.color.set(params.color2);
            this.meshes.children[2].material.color.set(params.color3);
            this.meshes.children[3].material.color.set(params.color4);
            this.meshes.children[4].material.color.set(params.color5);
        }

        this.updGeometry();
        this.updMaterial();

        this.tick = (delta) => {

        };
    };
}
export {
    Pulsar
};
