document.addEventListener("DOMContentLoaded", () => {
  // Get the 3D graph container
  const graphContainer = document.querySelector("#graph-container").object3D;

  // Three.js Scene for the 3D Graph
  const scene = new THREE.Scene();

  // Create a material for the axes and grid
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

  // Data for the 3D scatter plot
  const data = [
    { x: 1, y: 2, z: 3, color: 0xff0000 }, // Red point
    { x: -2, y: 1, z: -1, color: 0x00ff00 }, // Green point
    { x: 2, y: -1, z: 2, color: 0x0000ff }, // Blue point
    { x: -1, y: -2, z: 0, color: 0xffff00 }, // Yellow point
  ];

  // Add each point as a sphere
  data.forEach((point) => {
    const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: point.color });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(point.x, point.y, point.z);
    scene.add(sphere);
  });

  // Create X, Y, Z axes
  const axesPoints = [
    // X-axis
    new THREE.Vector3(-3, 0, 0),
    new THREE.Vector3(3, 0, 0),
    // Y-axis
    new THREE.Vector3(0, -3, 0),
    new THREE.Vector3(0, 3, 0),
    // Z-axis
    new THREE.Vector3(0, 0, -3),
    new THREE.Vector3(0, 0, 3),
  ];

  const axesGeometry = new THREE.BufferGeometry().setFromPoints(axesPoints);
  const axes = new THREE.LineSegments(axesGeometry, lineMaterial);
  scene.add(axes);

  // Add a grid for reference
  const gridHelper = new THREE.GridHelper(6, 12);
  scene.add(gridHelper);

  // Attach the Three.js scene to the A-Frame graph container
  graphContainer.add(scene);
});
