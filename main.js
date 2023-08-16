// --------------------------
// Setup
// --------------------------
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// --------------------------
// Initialise objects
// --------------------------
const ambientLight = new THREE.AmbientLight(0x00FF00);
ambientLight.intensity = 0.3;
ambientLight.position.set(0, 5, 0);

const rectLight1 = new THREE.RectAreaLight(0xFFFFFF, 2, 10, 10);
rectLight1.position.set(0, 0, -5);
rectLight1.lookAt(0, 0, 0);

const rectLight2 = new THREE.RectAreaLight(0xFFFFFF, 2, 10, 10);
rectLight2.position.set(-5, 0, 0);
rectLight2.lookAt(0, 0, 0);

const rectLight3 = new THREE.RectAreaLight(0xFFFFFF, 2, 10, 10);
rectLight3.position.set(5, 0, 0);
rectLight3.lookAt(0, 0, 0);

scene.add(rectLight1);
scene.add(rectLight2);
scene.add(rectLight3);
scene.add(ambientLight);

const meshLoader = new GLTFLoader();

// let coin;
// meshLoader.load( 'meshes/coin.glb', function ( gltf ) {

//     coin = gltf.scene.children[0];
//     coin.rotation.x = Math.PI / 3;
    
// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );

let pc;
meshLoader.load( 'meshes/pc.gltf', function ( gltf ) {

    pc = gltf.scene.children[0];
    pc.position.y -= 0.2;
    
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

// const geometry = new THREE.SphereGeometry(1.3);
// const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

camera.position.z = 0.7;

// --------------------------
// Rendering
// --------------------------
function animate() {
    requestAnimationFrame(animate);

    // Changes to objects in scene
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // cube.rotation.z += 0.01;

    // coin.rotation.x += 0.01;
    // coin.rotation.z += 0.01;

    pc.rotation.y += 0.01;

    // Update screen
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
}

// Start
animate();