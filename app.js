document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM Content Loaded: Initializing Plotly and AR.js');

  // Step 1: Select the container for the Plotly graph
  const graphDiv = document.getElementById('graph');
  if (!graphDiv) {
    console.error('Error: Graph container not found!');
    return;
  }

  // Step 2: Plotly Data and Layout
  const data = [
    {
      x: [1, 2, 3],
      y: [4, 5, 6],
      z: [7, 8, 9],
      type: 'scatter3d',
      mode: 'markers',
      marker: {
        size: 8,
        color: [10, 20, 30], // Color based on Z-axis
        colorscale: 'Viridis',
      },
    },
  ];

  const layout = {
    title: '3D Scatter Plot',
    scene: {
      xaxis: { title: 'X Axis' },
      yaxis: { title: 'Y Axis' },
      zaxis: { title: 'Z Axis' },
    },
  };

  // Step 3: Render Plotly Graph
  Plotly.newPlot(graphDiv, data, layout)
    .then(() => {
      console.log('Plotly graph rendered successfully.');

      // Step 4: Capture Plotly Graph as Texture
      const plotCanvas = graphDiv.querySelector('canvas');
      if (!plotCanvas) {
        console.error('Error: Plotly canvas not found!');
        return;
      }
      const texture = new THREE.CanvasTexture(plotCanvas);

      // Step 5: Apply Texture to AR.js Plane
      const arPlane = document.querySelector('#plotly-plane');
      if (arPlane) {
        arPlane.setAttribute('material', { src: texture });
        console.log('Plotly graph successfully applied to AR plane.');
      } else {
        console.error('Error: AR.js plane not found!');
      }
    })
    .catch((err) => console.error('Error rendering Plotly graph:', err));
});
