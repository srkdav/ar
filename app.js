document.addEventListener("DOMContentLoaded", () => {
  // Get the 3D chart container
  const chartContainer = document.querySelector("#chart-container").object3D;

  // Create a Three.js Scene for the 3D chart
  const scene = new THREE.Scene();

  // Create material for lines (axes)
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

  // Data points: sales, revenue, and region
  const dataPoints = [
    { x: 1, y: 2, z: 3, color: 0xff0000 }, // Region 1
    { x: 2, y: 1, z: 4, color: 0x00ff00 }, // Region 2
    { x: 3, y: 3, z: 2, color: 0x0000ff }, // Region 3
    { x: 4, y: 4, z: 1, color: 0xffff00 }, // Region 4
  ];

  // Add each data point as a sphere
  dataPoints.forEach((point) => {
    const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16); // Small sphere for the data point
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: point.color });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(point.x, point.y, point.z); // Position based on x, y, z
    scene.add(sphere);
  });

  // Create X, Y, Z axes
  const axesPoints = [
    // X-axis (Sales)
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(5, 0, 0),
    // Y-axis (Revenue)
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 5, 0),
    // Z-axis (Region)
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 5),
  ];

  const axesGeometry = new THREE.BufferGeometry().setFromPoints(axesPoints);
  const axes = new THREE.LineSegments(axesGeometry, lineMaterial);
  scene.add(axes);

  // Attach the Three.js scene to the A-Frame chart container
  chartContainer.add(scene);

  // Add axis labels using A-Frame text
  const labels = [
    { text: "Sales", position: [5.2, 0, 0] },
    { text: "Revenue", position: [0, 5.2, 0] },
    { text: "Region", position: [0, 0, 5.2] },
  ];

  labels.forEach((label) => {
    const text = document.createElement("a-text");
    text.setAttribute("value", label.text);
    text.setAttribute("color", "white");
    text.setAttribute("side", "double");
    text.setAttribute("position", label.position.join(" "));
    document.querySelector("a-marker").appendChild(text);
  });
});
