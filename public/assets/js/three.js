//  Set the width and height to equal the window size
const width = window.innerWidth;
const height = window.innerHeight;

//  Create the scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

//  Create the renderer and add it to the html document
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement); //  This adds the renderer to the html5 <canvas> element

//  Create the cube and make it green
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);

//  Create the light so we can see
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);

//  Add the items to the scene
scene.add(cube);
scene.add(directionalLight);

//  Adjust the camera position
camera.position.z = 5;

/**
 * @function animate
 * Controls the re-rendering of each frame when there is a defined change in the scene
 */
function animate() {
    //  Informs the browser that an animation is about to occur in the animate (this) function.
    requestAnimationFrame(animate);
    //  Increases the cubes x and y rotation values by 0.1
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    //  Re-renders the scene after the change in rotation
    renderer.render(scene, camera);
}

animate();