var colors = [
  "#2C3039",
  "#8A94A7",
  "#1D2026",
  "#02CBB1",
  "#0270D7",
  "#00BFFB",
  "#474C59",
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

for (var i = 0; i < 20; i++) {
  var x1 = Math.random() * 100;
  var y1 = Math.random() * 100;
  var x2 = Math.random() * 100;
  var y2 = Math.random() * 100;
  var x3 = Math.random() * 100;
  var y3 = Math.random() * 100;
  var color = getRandomColor();
  var opacity = Math.random() * 0.7 + 0.3;
  var shape = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  shape.setAttribute(
    "points",
    x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3
  );
  shape.setAttribute("fill", color);
  shape.setAttribute("fill-opacity", opacity);
  document.querySelector("svg").appendChild(shape);
}





