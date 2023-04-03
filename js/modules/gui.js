import GUI from '../libs/lilgui.js';
import { params } from "./params.js";
import { cam_view } from "./scene/animation.js";


function createGUI(pulsar, camera, helpers) {
    
    const gui = new GUI();
    
    // views
    const viewMode = {
        view_left:  function () {cam_view(camera, pulsar, 0);},
        view_right: function () {cam_view(camera, pulsar, 1);},
        view_front: function () {cam_view(camera, pulsar, 2);},
        view_back:  function () {cam_view(camera, pulsar, 3);}
    };
    
    //Scene helpers
    const folderHelpers = gui.addFolder('Helpers')
    folderHelpers.add(params, 'helper_axis').name('Оси').onChange(value => { helpers.updateHelpers(); });
    folderHelpers.add(params, 'helper_grid').name('Сетка').onChange(value => { helpers.updateHelpers(); });
    folderHelpers.close();
    
    //Layer visibility 
    const folderGeometry = gui.addFolder('Строение');
    folderGeometry.add(params, 'atmo').name('Атмосфера').onChange(value => { pulsar.updGeometry(); });
    folderGeometry.add(params, 'cst_out').name('внешняя кора').onChange(value => { pulsar.updGeometry(); });
    folderGeometry.add(params, 'cst_in').name('Внутренняя кора').onChange(value =>  { pulsar.updGeometry(); });
    folderGeometry.add(params, 'cr_out').name('Внешнее ядро').onChange(value => { pulsar.updGeometry(); });
    folderGeometry.add(params, 'cr_in').name('Внутреннее ядро').onChange(value => { pulsar.updGeometry(); });
    folderGeometry.close();
    
    //camera view mode 
    const folderCamera = gui.addFolder('Камера');
    folderCamera.add(viewMode, 'view_left').name('LEFT');
    folderCamera.add(viewMode, 'view_right').name('RIGHT');
    folderCamera.add(viewMode, 'view_front').name('FRONT');
    folderCamera.add(viewMode, 'view_back').name('BACK');
    folderCamera.close();
    
    //Material setup 
    const folderMaterials= gui.addFolder('Materials')
    folderMaterials.add(params, 'clearcoat', 0, 1, 0.01).onChange( value => { pulsar.updMaterial(); } );
    folderMaterials.add(params, 'roughness', 0, 1, 0.01).onChange( value => { pulsar.updMaterial(); } );
    folderMaterials.add(params, 'metalness', 0, 1, 0.01).onChange( value => { pulsar.updMaterial(); } );
    folderMaterials.close();
   
    //Material color
    const folderColors= gui.addFolder('Colors')
    folderColors.addColor( params, 'color1' ).onChange( value => { pulsar.updMaterial(); } );
    folderColors.addColor( params, 'color2' ).onChange( value => { pulsar.updMaterial(); } );
    folderColors.addColor( params, 'color3' ).onChange( value => { pulsar.updMaterial(); } );
    folderColors.addColor( params, 'color4' ).onChange( value => { pulsar.updMaterial(); } );
    folderColors.addColor( params, 'color5' ).onChange( value => { pulsar.updMaterial(); } );
    folderColors.close();
    
    return gui;
}

export { createGUI };