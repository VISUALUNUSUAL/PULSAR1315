import { EffectComposer } from '../../libs/three/EffectComposer.js';
import { RenderPass } from '../../libs/three/RenderPass.js';
import { ShaderPass } from '../../libs/three/ShaderPass.js';
import { FXAAShader } from '../../libs/three/FXAAShader.js';
import { GlitchPass } from '../../libs/three/GlitchPass.js';

function createPostprocess(camera, scene, renderer) {
    
    // create composer instance
    const composer = new EffectComposer( renderer );
    
    // Raw pass
    const renderPass = new RenderPass( scene, camera );
    composer.addPass( renderPass );
    
    //FXAA Pass
    const fxaaPass = new ShaderPass( FXAAShader );
    const pixelRatio = renderer.getPixelRatio();

    fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( window.innerWidth * pixelRatio );
    fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( window.innerHeight * pixelRatio );
    
    composer.addPass( fxaaPass );

    // FX Glitch pass 
    //    const glitchPass = new GlitchPass();
    //    composer.addPass( glitchPass );  
    
    return composer
}

export { createPostprocess };

