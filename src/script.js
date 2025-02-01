import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Timer } from "three/addons/misc/Timer.js";
import GUI from "lil-gui";

// const gui = new GUI();
const randomBetween = (min, max) => Math.random() * (max - min) + min;

// Values
const houseValues = {
	width: 4,
	wallHeight: 2.5,
	roofHeight: 1.5,
};

const treeValues = {
	minHeight: 3,
	maxHeight: 5,
	minRadius: 0.1,
	maxRadius: 0.45,
};

// Canvas & Scene
const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();

// Ground
const ground = new THREE.Mesh(
	new THREE.PlaneGeometry(20, 20, 100, 100),
	new THREE.MeshStandardMaterial()
);
ground.rotation.x = -Math.PI * 0.5;
scene.add(ground);

// House
const house = new THREE.Group();
scene.add(house);

// Walls
const walls = new THREE.Mesh(
	new THREE.BoxGeometry(
		houseValues.width,
		houseValues.wallHeight,
		houseValues.width
	),
	new THREE.MeshStandardMaterial()
);
walls.position.y = houseValues.wallHeight / 2;
house.add(walls);

// Roof
const roof = new THREE.Mesh(
	new THREE.ConeGeometry(3.5, houseValues.roofHeight, 4),
	new THREE.MeshStandardMaterial()
);
roof.position.y += houseValues.wallHeight + houseValues.roofHeight / 2;
roof.rotation.y = Math.PI * 0.25; //The axis is y (the vertical axis) and the amount is Math.PI * 0.25 which is 1/8 of a circle:
house.add(roof);

// Trees
const trunkMaterial = new THREE.MeshStandardMaterial();
const leafMaterial = new THREE.MeshStandardMaterial();

const trees = new THREE.Group();
scene.add(trees);

for (let i = 0; i < 20; i++) {
	const radius = randomBetween(treeValues.minRadius, treeValues.maxRadius);
	const radiusDifference = Math.random() * 0.15;
	const trunkheight = randomBetween(
		treeValues.minHeight,
		treeValues.maxHeight
	);
	const trunkGeometry = new THREE.CylinderGeometry(
		radius - radiusDifference,
		radius + radiusDifference,
		trunkheight,
		10
	);

	const angle = Math.random() * Math.PI * 2;
	const distributionRadius = houseValues.width + Math.random() * 5; //TODO: this may need to get smaller when the alpha map is applied ot the borders of the ground
	const x = Math.sin(angle) * distributionRadius;
	const z = Math.cos(angle) * distributionRadius;
	const y = trunkheight / 2;

	const tree = new THREE.Mesh(trunkGeometry, trunkMaterial);
	tree.position.set(x, y, z);

	trees.add(tree);
}

// Lights

// Ambient light
const ambientLight = new THREE.AmbientLight("#ffffff", 0.5);
scene.add(ambientLight);

// Directional light
const directionalLight = new THREE.DirectionalLight("#ffffff", 1.5);
directionalLight.position.set(3, 2, -8);
scene.add(directionalLight);

// Window
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

window.addEventListener("resize", () => {
	// Update sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Update camera
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	// Update renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Camera
const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	0.1,
	100
);
camera.position.x = 4;
camera.position.y = 2;
camera.position.z = 5;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Animate
const timer = new Timer();

const tick = () => {
	// Timer
	timer.update();
	const elapsedTime = timer.getElapsed();

	// Update controls
	controls.update();

	// Render
	renderer.render(scene, camera);

	// Call tick again on the next frame
	window.requestAnimationFrame(tick);
};

tick();
