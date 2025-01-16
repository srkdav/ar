document.addEventListener("DOMContentLoaded", () => {
  const graphDiv = document.getElementById('graph');

  // Define Plotly Data and Layout
  const data = [
    {
      x: [1, 2, 3],
      y: [4, 5, 6],
      z: [7, 8, 9],
      type: 'scatter3d',
      mode: 'markers',
      marker: { size: 8, color: [10, 20, 30], colorscale: 'Viridis' },
    },
  ];

  const layout = { title: '3D Scatter Plot' };

  // Render Plotly Graph
  Plotly.newPlot(graphDiv, data, layout).then(() => {
    const canvas = graphDiv.querySelector('canvas');
    const texture = new THREE.CanvasTexture(canvas);

    // Apply Texture to AR.js Plane
    const plotlyPlane = document.querySelector('#plotly-plane');
    plotlyPlane.setAttribute('material', { src: texture });
  });
});
