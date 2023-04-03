import { Universe } from './Universe.js';

async function main() {
    
    const container = document.querySelector('#scene-container'); 
    const world = new Universe(container); 
    await world.init(); 
    world.start();                    
}

main().catch((err) => {
  console.error(err);
}); 
