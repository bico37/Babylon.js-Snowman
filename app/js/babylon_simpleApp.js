"use strict";
const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
class Playground {
    static CreateScene(engine, _canvas) {
        let scene = new BABYLON.Scene(engine);
        let camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 4, 0), scene);
        camera.setPosition(new BABYLON.Vector3(0, 10, 200));
        let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 10, 0), scene);
        light.intensity = 0.9;
        Playground.sphere1 = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 4, segments: 32 }, scene);
        Playground.sphere1.position.y = 1;
        Playground.sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 3, segments: 32 }, scene);
        Playground.sphere2.position.y = 4;
        Playground.sphere3 = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);
        Playground.sphere3.position.y = 6;
        var sphereNose = BABYLON.MeshBuilder.CreateCylinder("cone", { diameterTop: 0, diameterBottom: 1, height: 2 }, scene);
        sphereNose.rotation.x = Math.PI / 2;
        sphereNose.position.y = 5.9;
        sphereNose.position.x = 0;
        sphereNose.position.z = 1;
        var eyeL = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.3, segments: 32 }, scene);
        eyeL.position.y = 6.35;
        eyeL.position.x = 0.33;
        eyeL.position.z = 0.9;
        var eyeR = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.3, segments: 32 }, scene);
        eyeR.position.y = 6.35;
        eyeR.position.x = -0.33;
        eyeR.position.z = 0.9;
        Playground.hatBody = BABYLON.MeshBuilder.CreateCylinder("cylinder", { height: 2, diameter: 1.5 }, scene);
        Playground.hatBody.position.y = 7;
        Playground.hatFloor = BABYLON.MeshBuilder.CreateCylinder("cylinder", { height: 0.1, diameter: 3 }, scene);
        Playground.hatFloor.position.y = 6.7;
        Playground.sphereMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
        Playground.sphereMaterial.diffuseColor = BABYLON.Color3.White();
        Playground.sphere1.material = Playground.sphereMaterial;
        Playground.sphere2.material = Playground.sphereMaterial;
        Playground.sphere3.material = Playground.sphereMaterial;
        const noseMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
        noseMaterial.diffuseColor = new BABYLON.Color3(255 / 255, 200 / 255, 0 / 255);
        sphereNose.material = noseMaterial;
        const eyeMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
        eyeMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        eyeL.material = eyeMaterial;
        eyeR.material = eyeMaterial;
        Playground.hatMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
        Playground.hatMaterial.diffuseColor = new BABYLON.Color3(123 / 255, 63 / 255, 0);
        Playground.hatBody.material = Playground.hatMaterial;
        Playground.hatFloor.material = Playground.hatMaterial;
        var head = new BABYLON.Mesh("head", scene);
        Playground.sphere3.parent = head;
        sphereNose.parent = head;
        eyeL.parent = head;
        eyeR.parent = head;
        Playground.hatBody.parent = head;
        Playground.hatFloor.parent = head;
        scene.registerBeforeRender(() => {
            head.rotate(new BABYLON.Vector3(0, 1, 0), 0.05 * Playground.rotateSpeed);
            if (camera.position.z > 30) {
                camera.setPosition(camera.position.add(new BABYLON.Vector3(0, 0, -1.5)));
            }
            else {
                camera.attachControl(canvas, false);
                let inputElement = document.getElementById('input');
                if (inputElement) {
                    inputElement.style.display = "inline";
                    inputElement.style.marginLeft = "0";
                    inputElement.style.animation = "fromRight 1s linear";
                }
                setTimeout(() => {
                    let inputContent = document.getElementById("inputContent");
                    if (inputContent) {
                        inputContent.style.display = "inline";
                        inputContent.style.animation = "showOpa 0.4s linear";
                    }
                }, 1000);
            }
        });
        return scene;
    }
}
Playground.rotateSpeed = 1;
const scene = Playground.CreateScene(engine, canvas);
engine.runRenderLoop(() => {
    scene.render();
});
window.addEventListener('resize', () => {
    engine.resize();
});
