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

  // Add a ground plane for reference
  const ground = document.createElement('a-plane');
  ground.setAttribute('position', '0 0 0'); // Position at the marker's base
  ground.setAttribute('rotation', '-90 0 0'); // Horizontal ground plane
  ground.setAttribute('width', '5'); // Adjust size
  ground.setAttribute('height', '5');
  ground.setAttribute('color', 'gray');
  ground.setAttribute('opacity', '0.5'); // Semi-transparent
  marker.appendChild(ground);

  // Add a light source for better visuals
  const light = document.createElement('a-light');
  light.setAttribute('type', 'point');
  light.setAttribute('position', '2 4 2'); // Above and to the side of the plot
  marker.appendChild(light);

  // Render each data point as a 3D sphere
  data.forEach((point) => {
    const sphere = document.createElement('a-sphere');
    sphere.setAttribute('position', `${point.x} ${point.y} ${point.z}`);
    sphere.setAttribute('radius', 0.15); // Adjust size of spheres
    sphere.setAttribute('color', point.color);

    // Add interactivity to the sphere
    sphere.addEventListener('click', () => {
      alert(`You clicked on point (${point.x}, ${point.y}, ${point.z})`);
    });

    marker.appendChild(sphere);

    // Add labels for each data point
    const text = document.createElement('a-text');
    text.setAttribute('value', `(${point.x}, ${point.y}, ${point.z})`);
    text.setAttribute('position', `${point.x} ${point.y + 0.2} ${point.z}`); // Slightly above the sphere
    text.setAttribute('align', 'center'); // Centered text
    text.setAttribute('color', 'white'); // White text
    marker.appendChild(text);
  });

  // Render lines connecting the points
  for (let i = 0; i < data.length - 1; i++) {
    const line = document.createElement('a-entity');
    line.setAttribute(
      'line',
      `start: ${data[i].x} ${data[i].y} ${data[i].z}; end: ${data[i + 1].x} ${data[i + 1].y} ${data[i + 1].z}; color: cyan`
    );
    marker.appendChild(line);
  }
});
