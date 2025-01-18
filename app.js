document.addEventListener("DOMContentLoaded", () => {
  // Get the 3D graph container
  const graphContainer = document.querySelector("#graph-container").object3D;

  // Initialize Three.js geometry for the scatter plot
  const scene = new THREE.Scene();

  // Data for the 3D scatter plot
  const data = [
    { x: 1, y: 1.5, z: 2, color: 0xff0000 }, // Red point
    { x: 2, y: 1, z: -1.5, color: 0x00ff00 }, // Green point
    { x: -1.5, y: 2, z: -0.5, color: 0x0000ff }, // Blue point
    { x: 0.5, y: -1, z: 1.5, color: 0xffff00 }, // Yellow point
  ];

  // Add points as spheres
  data.forEach((point) => {
    const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16); // Sphere for data point
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: point.color });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(point.x, point.y, point.z); // Set position in 3D space
    scene.add(sphere);
  });

  // Add axes (lines)
  const axesMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
  const axesPoints = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-2, 0, 0), new THREE.Vector3(2, 0, 0), // X-axis
    new THREE.Vector3(0, -2, 0), new THREE.Vector3(0, 2, 0), // Y-axis
    new THREE.Vector3(0, 0, -2), new THREE.Vector3(0, 0, 2), // Z-axis
  ]);
  const axes = new THREE.LineSegments(axesPoints, axesMaterial);
  scene.add(axes);

  // Add grid for reference
  const gridHelper = new THREE.GridHelper(4, 8);
  scene.add(gridHelper);

  // Convert Three.js scene to A-Frame
  graphContainer.add(scene);
});
