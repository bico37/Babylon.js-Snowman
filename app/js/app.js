"use strict";
function changeHatColor(r, g, b) {
    Playground.hatMaterial.diffuseColor = new BABYLON.Color3(r / 255, g / 255, b / 255);
    Playground.hatBody.material = Playground.hatMaterial;
    Playground.hatFloor.material = Playground.hatMaterial;
}
function changeSnowmanColor(id) {
    console.log(id);
    let hexCode = id.value;
    Playground.sphereMaterial.diffuseColor = BABYLON.Color3.FromHexString(hexCode);
    Playground.sphere1.material = Playground.sphereMaterial;
    Playground.sphere2.material = Playground.sphereMaterial;
    Playground.sphere3.material = Playground.sphereMaterial;
}
function changeSpeed(speed) {
    console.log(speed);
    let speedMult = parseFloat(speed.value);
    Playground.rotateSpeed = speedMult;
}
