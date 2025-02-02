import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Timer } from "three/addons/misc/Timer.js";
import GUI from "lil-gui";

// const gui = new GUI();
const randomBetween = (min, max) => Math.random() * (max - min) + min;

// Textures
const textureLoader = new THREE.TextureLoader();

// Ground Textures
const groundTexturePrefix = "./textures/ground/leafy_grass_1k/leafy_grass_";
const groundColorTexture = textureLoader.load(
	groundTexturePrefix + "diff_1k.jpg"
);
groundColorTexture.colorSpace = THREE.SRGBColorSpace;
const groundARMTexture = textureLoader.load(groundTexturePrefix + "arm_1k.jpg");
const groundNormalTexture = textureLoader.load(
	groundTexturePrefix + "nor_gl_1k.jpg"
);
const groundDisplacementTexture = textureLoader.load(
	groundTexturePrefix + "disp_1k.jpg"
);

groundColorTexture.repeat.set(3, 3);
groundColorTexture.wrapS = THREE.RepeatWrapping;
groundColorTexture.wrapT = THREE.RepeatWrapping;
groundARMTexture.repeat.set(3, 3);
groundARMTexture.wrapS = THREE.RepeatWrapping;
groundARMTexture.wrapT = THREE.RepeatWrapping;
groundNormalTexture.repeat.set(3, 3);
groundNormalTexture.wrapS = THREE.RepeatWrapping;
groundNormalTexture.wrapT = THREE.RepeatWrapping;
groundDisplacementTexture.repeat.set(3, 3);
groundDisplacementTexture.wrapS = THREE.RepeatWrapping;
groundDisplacementTexture.wrapT = THREE.RepeatWrapping;

//Tree Textures
//Tree Trunk Textures
///Users/dani/Desktop/projects/three-js/three-js-primitive-shape-scene/static/textures/trees/trunk/bark_brown_02_1k/bark_brown_02_arm_1k.jpg
const trunkTexturePrefix =
	"./textures/trees/trunk/bark_brown_02_1k/bark_brown_02_";
const trunkColorTexture = textureLoader.load(
	trunkTexturePrefix + "diff_1k.jpg"
);
// trunkColorTexture.colorSpace = THREE.SRGBColorSpace;
const trunkARMTexture = textureLoader.load(trunkTexturePrefix + "arm_1k.jpg");
const trunkBumpTexture = textureLoader.load(trunkTexturePrefix + "bump_1k.jpg");
const trunkDisplacementTexture = textureLoader.load(
	trunkTexturePrefix + "disp_1k.jpg"
);
const trunkNormalTexture = textureLoader.load(
	trunkTexturePrefix + "nor_gl_1k.jpg"
);

trunkColorTexture.repeat.set(2, 2);
trunkColorTexture.wrapS = THREE.RepeatWrapping;
trunkColorTexture.wrapT = THREE.RepeatWrapping;
trunkARMTexture.repeat.set(2, 2);
trunkARMTexture.wrapS = THREE.RepeatWrapping;
trunkARMTexture.wrapT = THREE.RepeatWrapping;
trunkBumpTexture.repeat.set(2, 2);
trunkBumpTexture.wrapS = THREE.RepeatWrapping;
trunkBumpTexture.wrapT = THREE.RepeatWrapping;
trunkDisplacementTexture.repeat.set(2, 2);
trunkDisplacementTexture.wrapS = THREE.RepeatWrapping;
trunkDisplacementTexture.wrapT = THREE.RepeatWrapping;
trunkNormalTexture.repeat.set(2, 2);
trunkNormalTexture.wrapS = THREE.RepeatWrapping;
trunkNormalTexture.wrapT = THREE.RepeatWrapping;

// Tree Leaves Textures
const leavesTexturePrefix =
	"./textures/trees/leaves/forest_leaves_03_1k/forest_leaves_03_";

const leavesColorTexture = textureLoader.load(
	leavesTexturePrefix + "diff_1k.jpg"
);
// leavesColorTexture.colorSpace = THREE.SRGBColorSpace;
const leavesARMTexture = textureLoader.load(leavesTexturePrefix + "arm_1k.jpg");
const leavesDisplacementTexture = textureLoader.load(
	leavesTexturePrefix + "disp_1k.jpg"
);
const leavesNormalTexture = textureLoader.load(
	leavesTexturePrefix + "nor_gl_1k.jpg"
);

leavesColorTexture.repeat.set(0.8, 0.8);
leavesColorTexture.wrapS = THREE.RepeatWrapping;
leavesColorTexture.wrapT = THREE.RepeatWrapping;
leavesARMTexture.repeat.set(2, 2);
leavesARMTexture.wrapS = THREE.RepeatWrapping;
leavesARMTexture.wrapT = THREE.RepeatWrapping;
leavesDisplacementTexture.repeat.set(2, 2);
leavesDisplacementTexture.wrapS = THREE.RepeatWrapping;
leavesDisplacementTexture.wrapT = THREE.RepeatWrapping;
leavesNormalTexture.repeat.set(2, 2);
leavesNormalTexture.wrapS = THREE.RepeatWrapping;
leavesNormalTexture.wrapT = THREE.RepeatWrapping;

// House Textures
// House Walls Textures
const wallsTexturePrefix =
	"./textures/house/walls/planks_brown_10_1k/planks_brown_10_";

const wallsColorTexture = textureLoader.load(
	wallsTexturePrefix + "diff_1k.jpg"
);
// wallsColorTexture.colorSpace = THREE.SRGBColorSpace;
const wallsARMTexture = textureLoader.load(wallsTexturePrefix + "arm_1k.jpg");
const wallsDisplacementTexture = textureLoader.load(
	wallsTexturePrefix + "disp_1k.jpg"
);
const wallsNormalTexture = textureLoader.load(
	wallsTexturePrefix + "nor_gl_1k.jpg"
);

wallsColorTexture.repeat.set(2, 2);
wallsColorTexture.wrapS = THREE.RepeatWrapping;
wallsColorTexture.wrapT = THREE.RepeatWrapping;
wallsARMTexture.repeat.set(2, 2);
wallsARMTexture.wrapS = THREE.RepeatWrapping;
wallsARMTexture.wrapT = THREE.RepeatWrapping;
wallsDisplacementTexture.repeat.set(2, 2);
wallsDisplacementTexture.wrapS = THREE.RepeatWrapping;
wallsDisplacementTexture.wrapT = THREE.RepeatWrapping;
wallsNormalTexture.repeat.set(2, 2);
wallsNormalTexture.wrapS = THREE.RepeatWrapping;
wallsNormalTexture.wrapT = THREE.RepeatWrapping;

// House Roof Textures
const roofTexturePrefix =
	"./textures/house/roof/wood_peeling_paint_weathered_1k/wood_peeling_paint_weathered_";

const roofColorTexture = textureLoader.load(roofTexturePrefix + "diff_1k.jpg");
// roofColorTexture.colorSpace = THREE.SRGBColorSpace;
const roofARMTexture = textureLoader.load(roofTexturePrefix + "arm_1k.jpg");
const roofDisplacementTexture = textureLoader.load(
	roofTexturePrefix + "disp_1k.jpg"
);
const roofNormalTexture = textureLoader.load(
	roofTexturePrefix + "nor_gl_1k.jpg"
);

roofColorTexture.repeat.set(4, 1);
roofColorTexture.wrapS = THREE.RepeatWrapping;
roofColorTexture.wrapT = THREE.RepeatWrapping;
roofARMTexture.repeat.set(4, 1);
roofARMTexture.wrapS = THREE.RepeatWrapping;
roofARMTexture.wrapT = THREE.RepeatWrapping;
roofDisplacementTexture.repeat.set(4, 1);
roofDisplacementTexture.wrapS = THREE.RepeatWrapping;
roofDisplacementTexture.wrapT = THREE.RepeatWrapping;
roofNormalTexture.repeat.set(4, 1);
roofNormalTexture.wrapS = THREE.RepeatWrapping;
roofNormalTexture.wrapT = THREE.RepeatWrapping;

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
	leafMax: 0.4,
	leafMin: 0.7,
	leafDistribution: 0.8,
};

// Canvas & Scene
const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();

// Ground
const ground = new THREE.Mesh(
	new THREE.PlaneGeometry(20, 20, 100, 100),
	new THREE.MeshStandardMaterial({
		map: groundColorTexture,
		aoMap: groundARMTexture,
		// roughnessMap: groundARMTexture,
		metalnessMap: groundARMTexture,
		displacementMap: groundDisplacementTexture,
		displacementScale: 0.2,
		normalMap: groundNormalTexture,
	})
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
	new THREE.MeshStandardMaterial({
		color: "#d1cabe",
		map: wallsColorTexture,
		aoMap: wallsARMTexture,
		roughnessMap: wallsARMTexture,
		metalnessMap: wallsARMTexture,
		// displacementMap: wallsDisplacementTexture,
		normalMap: wallsNormalTexture,
	})
);
walls.position.y = houseValues.wallHeight / 2;
house.add(walls);

// Roof
const roof = new THREE.Mesh(
	new THREE.ConeGeometry(3.5, houseValues.roofHeight, 4),
	new THREE.MeshStandardMaterial({
		map: roofColorTexture,
		aoMap: roofARMTexture,
		roughnessMap: roofARMTexture,
		metalnessMap: roofARMTexture,
		// displacementMap: roofDisplacementTexture,
		normalMap: roofNormalTexture,
	})
);
roof.position.y += houseValues.wallHeight + houseValues.roofHeight / 2;
roof.rotation.y = Math.PI * 0.25; //The axis is y (the vertical axis) and the amount is Math.PI * 0.25 which is 1/8 of a circle:
house.add(roof);

// Trees
const trunkMaterial = new THREE.MeshStandardMaterial({
	map: trunkColorTexture,
	aoMap: trunkARMTexture,
	roughnessMap: trunkARMTexture,
	metalnessMap: trunkARMTexture,
	bumpMap: trunkBumpTexture,
	bumpScale: 3,
	// displacementMap: trunkDisplacementTexture,
	// displacementScale: 0.1,
	// displacementBias: -0.1,
	normalMap: trunkNormalTexture,
});
const leafMaterial = new THREE.MeshStandardMaterial({
	color: "#aaffaa",
	map: leavesColorTexture,
	aoMap: leavesARMTexture,
	metalnessMap: leavesARMTexture,
	roughnessMap: leavesARMTexture,
	displacementMap: leavesDisplacementTexture,
	displacementScale: 0.01,
	normalMap: leavesNormalTexture,
});

const trees = new THREE.Group();
scene.add(trees);

for (let i = 0; i < 15; i++) {
	const tree = new THREE.Group();

	const trunkRadius = randomBetween(
		treeValues.minRadius,
		treeValues.maxRadius
	);
	const trunkRadiusDifference = Math.random() * 0.15;
	const trunkHeight = randomBetween(
		treeValues.minHeight,
		treeValues.maxHeight
	);
	const trunkGeometry = new THREE.CylinderGeometry(
		trunkRadius - trunkRadiusDifference,
		trunkRadius + trunkRadiusDifference,
		trunkHeight,
		10
	);

	const angle = Math.random() * Math.PI * 2;
	const distributionRadius = houseValues.width + Math.random() * 5; //TODO: this may need to get smaller when the alpha map is applied ot the borders of the ground
	const x = Math.sin(angle) * distributionRadius;
	const z = Math.cos(angle) * distributionRadius;
	const y = trunkHeight / 2;

	const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
	trunk.position.set(x, y, z);

	tree.add(trunk);

	// Leaves
	for (let i = 0; i < 25; i++) {
		var leaf = new THREE.Mesh(
			new THREE.SphereGeometry(
				randomBetween(treeValues.leafMin, treeValues.leafMax),
				10,
				10
			),
			leafMaterial
		);
		leaf.position.set(
			randomBetween(
				x - treeValues.leafDistribution,
				x + treeValues.leafDistribution
			),
			randomBetween(
				trunkHeight - treeValues.leafDistribution,
				trunkHeight + treeValues.leafDistribution
			),
			randomBetween(
				z - treeValues.leafDistribution,
				z + treeValues.leafDistribution
			)
		);

		tree.add(leaf);
	}

	trees.add(tree);
}

// Little Plants :)
// Flowers

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
