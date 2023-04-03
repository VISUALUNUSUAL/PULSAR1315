import { GridHelper, AxesHelper } from "../../libs/three.module.js";
import { params } from "../params.js";

class Helpers {
    constructor(scene) {
        const grid_size = 100;
        const grid_divisions = 500;
        const gridHelper = new GridHelper(grid_size, grid_divisions);
        const axesHelper = new AxesHelper(5);
        
        scene.add( gridHelper, axesHelper);
        
        this.updateHelpers = () => {
            gridHelper.visible = params.helper_grid;
            axesHelper.visible = params.helper_axis;
        };
        this.updateHelpers();
    };
};

export { Helpers };
