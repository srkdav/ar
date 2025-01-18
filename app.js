document.addEventListener("DOMContentLoaded", () => {
  // Data for 3D Scatter Plot
  const data = [
    { x: 0, y: 1, z: 0, color: "red" },   // Point 1
    { x: 1, y: 2, z: -1, color: "green" }, // Point 2
    { x: -1, y: 3, z: -2, color: "blue" }, // Point 3
    { x: 2, y: 0.5, z: -0.5, color: "yellow" }, // Point 4
  ];

  // Get the marker element
  const marker = document.querySelector('a-marker');

  // Render each data point as a 3D sphere
  data.forEach((point) => {
    const sphere = document.createElement('a-sphere');
    sphere.setAttribute('position', `${point.x} ${point.y} ${point.z}`);
    sphere.setAttribute('radius', 0.1); // Adjust size of spheres
    sphere.setAttribute('color', point.color);
    marker.appendChild(sphere);
  });

  // Render lines connecting the points
  for (let i = 0; i < data.length - 1; i++) {
    const line = document.createElement('a-entity');
    line.setAttribute(
      'line',
      `start: ${data[i].x} ${data[i].y} ${data[i].z}; end: ${data[i + 1].x} ${data[i + 1].y} ${data[i + 1].z}; color: white`
    );
    marker.appendChild(line);
  }
});
