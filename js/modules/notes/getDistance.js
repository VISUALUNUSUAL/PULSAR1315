function getDistance(camera, model, sprite) {

    const meshDistance = camera.position.distanceTo(model.position);
    const spriteDistance = camera.position.distanceTo(sprite.position);
    const spriteBehindObject = spriteDistance > meshDistance;
    
    return spriteBehindObject;
}

export { getDistance };
