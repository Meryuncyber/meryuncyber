import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js';

// 🎯 Sahne ve kamera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / 300, 0.1, 1000);
camera.position.z = 5;

// 💡 Işık
const light = new THREE.PointLight(0x00ffff, 2, 100);
light.position.set(5, 5, 5);
scene.add(light);

// 🌀 3D Nesne (MerYunCyber küpü)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({
  color: 0x06b6d4,
  metalness: 0.6,
  roughness: 0.2
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 🎨 Renderer
const canvas = document.getElementById('three-logo');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(300, 300);

// 🕹️ Animasyon
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
