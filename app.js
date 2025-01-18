document.addEventListener("DOMContentLoaded", () => {
  const graphDiv = document.createElement("div");
  graphDiv.style.width = "500px";
  graphDiv.style.height = "500px";
  graphDiv.style.position = "absolute";
  graphDiv.style.top = "-9999px"; // Hide it off-screen
  document.body.appendChild(graphDiv);

  // Plotly 3D Graph Data
  const data = [
    {
      x: [1, 2, 3],
      y: [4, 5, 6],
      z: [7, 8, 9],
      type: "scatter3d",
      mode: "markers",
      marker: {
        size: 8,
        color: [10, 20, 30],
        colorscale: "Viridis",
      },
    },
  ];

  const layout = {
    title: "3D Scatter Plot",
    scene: {
      xaxis: { title: "X Axis" },
      yaxis: { title: "Y Axis" },
      zaxis: { title: "Z Axis" },
    },
  };

  // Render Plotly Graph
  Plotly.newPlot(graphDiv, data, layout).then(() => {
    const canvas = graphDiv.querySelector("canvas");
    const texture = new THREE.CanvasTexture(canvas);

    // Apply texture to the AR.js plane
    const graphPlane = document.querySelector("#graph-plane");
    graphPlane.setAttribute("material", { src: texture });
  });
});
