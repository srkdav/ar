document.addEventListener("DOMContentLoaded", () => {
  const graphDiv = document.getElementById('graph');
  if (!graphDiv) {
    console.error('Error: Graph container not found!');
    return;
  }

  // Plotly Data
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

  Plotly.newPlot(graphDiv, data, layout)
    .then(() => {
      const canvas = graphDiv.querySelector('canvas');
      const texture = new THREE.CanvasTexture(canvas);

      const plane = document.querySelector('#plotly-plane');
      plane.setAttribute('material', { src: texture });
    })
    .catch(err => console.error('Error rendering Plotly graph:', err));
});
