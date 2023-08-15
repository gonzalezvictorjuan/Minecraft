import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  85,
  window.innerWidth / window.innerHeight,
  1,
  5000
);

const orbit = new OrbitControls(camera, renderer.domElement);
const axies = {
  x: 500,
  y: 500,
  z: 500,
};
const axesHelper = new THREE.AxesHelper(axies.x, axies.y, axies.z);

scene.add(axesHelper);

camera.position.set(150, 160, 150);
orbit.update();

const planeGeometry = new THREE.PlaneGeometry(5000, 5000);
const planeMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

const gridHelper = new THREE.GridHelper(5000);
scene.add(gridHelper);

// const loader = new THREE.FontLoader();

// loader.load(
//   'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/fonts/helvetiker_regular.typeface.json',
//   (font) => {
//     const color = new THREE.Color();
//     color.setRGB(255, 250, 250);
//     const textMaterial = new THREE.MeshBasicMaterial({ color: color });

//     const opt = {
//       font: font,
//       size: 5,
//       height: 1,
//       curveSegments: 12,
//     };
//     const textGeoX = new THREE.TextGeometry('X', opt);
//     const textGeoY = new THREE.TextGeometry('Y', opt);
//     const textGeoZ = new THREE.TextGeometry('Z', opt);

//     const textX = new THREE.Mesh(textGeoX, textMaterial);
//     const textY = new THREE.Mesh(textGeoY, textMaterial);
//     const textZ = new THREE.Mesh(textGeoZ, textMaterial);

//     textX.position.x = axies.x;
//     textX.position.y = 0;
//     textX.position.z = 0;

//     textY.position.x = 0;
//     textY.position.y = axies.y;
//     textY.position.z = 0;

//     textZ.position.y = 0;
//     textZ.position.x = 0;
//     textZ.position.z = axies.z;

//     scene.add(textX);
//     scene.add(textY);
//     scene.add(textZ);
//   }
// );

const createSphere = (radio, x, y, z, color = 0x008f39) => {
  const anchoSegmentos = 32;
  const altoSegmentos = 32;

  const sphereGeometry = new THREE.SphereGeometry(
    radio,
    anchoSegmentos,
    altoSegmentos
  );
  const sphereMaterial = new THREE.MeshBasicMaterial({
    color: color,
    wireframe: false,
  });

  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);

  sphere.position.set(x, y, z);
};

const createCylinder = (radio, x, y, z, color = 0x008f39) => {
  const height = 20;
  const geometry = new THREE.CylinderGeometry(radio, radio, height, 32);

  const material = new THREE.MeshBasicMaterial({ color: color });
  const cylinder = new THREE.Mesh(geometry, material);
  scene.add(cylinder);
  cylinder.position.set(x, y, z);
};

// createSphere(30, 0, 64);
createCylinder(20, 0, 64);
createCylinder(80, 0, 150);

const coordenadas = [
  { x: 1000, y: 30, z: 0, color: 0x008f39 },
  { x: 809.017, y: 30, z: 587.785, color: 0xff0000 },
  { x: 309.017, y: 30, z: 951.057, color: 0x0000ff },
  { x: -309.017, y: 30, z: 951.057, color: 0xffff00 },
  { x: -809.017, y: 30, z: 587.785, color: 0xffc0cb },
  { x: -1000, y: 30, z: 0, color: 0xffa500 },
  { x: -809.017, y: 30, z: -587.785, color: 0x800080 },
  { x: -309.017, y: 30, z: -951.057, color: 0x808080 },
  { x: 309.017, y: 30, z: -951.057, color: 0xffffff },
  // { x: 809.017, y: 30, z: -587.785, color: 0xa32372 },
  { x: 1213.5256744358335, y: 30, z: -881.6776267349961, color: 0xa32372 },
];

coordenadas.forEach((c) => {
  // createSphere(250, c.x, c.y, c.z, c.color);
  createCylinder(250, c.x, c.y, c.z, c.color);
});
const animate = () => {
  renderer.render(scene, camera);
};

renderer.setAnimationLoop(animate);

// function detectarColisiones(coordenadas) {
//   const colisiones = [];

//   for (let i = 0; i < coordenadas.length; i++) {
//     const esfera1 = coordenadas[i];
//     const { x: x1, y: y1, z: z1 } = esfera1;
//     const radio1 = 250;

//     for (let j = i + 1; j < coordenadas.length; j++) {
//       const esfera2 = coordenadas[j];
//       const { x: x2, y: y2, z: z2 } = esfera2;
//       const radio2 = 250;

//       const distancia = Math.sqrt(
//         Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)
//       );
//       if (distancia <= radio1 + radio2) {
//         colisiones.push([esfera1, esfera2]);
//       }
//     }
//   }

//   return colisiones;
// }

// console.log(detectarColisiones(coordenadas));
