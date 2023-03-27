let scene, camera, renderer, cube, wireframe, controls, gui;

init();
animate();

function init() {
  // calculate the appropriate scale factor for the cube based on the canvas dimensions
  const canvas = document.getElementById("my-canvas");
  const width = canvas.parentElement.clientWidth;
  const height = canvas.parentElement.clientHeight;
  console.log("w", width, " h", height);
  // create scene
  scene = new THREE.Scene();

  //   const size = 10; // size of the grid
  //   const divisions = 20; // number of grid divisions
  //   const color = 0xaaaaaa; // color of the grid lines
  //   const opacity = 0.3; // opacity of the grid lines

  //   const gridHelper = new THREE.GridHelper(size, divisions, color, color);
  //   gridHelper.material.opacity = opacity;
  //   gridHelper.material.transparent = true;
  //   scene.add(gridHelper);

  //   const gridHelper2 = new THREE.GridHelper(size, divisions, color, color);
  //   gridHelper2.rotation.x = Math.PI / 2; // align with Y axis
  //   gridHelper2.material.opacity = opacity;
  //   gridHelper2.material.transparent = true;
  //   scene.add(gridHelper2);

  // create a light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 0, 1);
  scene.add(light);

  // load the STL file
  const loader = new THREE.STLLoader();
  let mesh;
  loader.load("src/images/wolf.stl", (geometry) => {
    geometry.center();
    // create a material for the mesh
    const material = new THREE.MeshPhongMaterial({
    //   color: 0x808080,
    //   specular: 0x111111,
      shininess: 200,
    });

    mesh = new THREE.Mesh(geometry, material);

    mesh.castShadow = true;
    mesh.receiveShadow = true;
    // create the mesh and add it to the scene
    
    scene.add(mesh);
    mesh.scale.set(0.3, 0.3, 0.3);
    mesh.position.set(0, 0, 0);
    mesh.rotation.set( - Math.PI / 2, 0, 0);
    mesh.name = "Wolf";
  });

  // create camera
  camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    500
  );

  camera.position.z = 9;
  cameraOrtho = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 1, 10);
  cameraOrtho.position.z = 0;
//   camera.position.set(
//     8.614691337984912,
//     -2.269079775611782,
//     3.5431662021267507
//   );
  console.log(camera.position);

  // create cube
  //   const geometry = new THREE.BoxGeometry(1);

  //   const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  //   cube = new THREE.Mesh(geometry, material);

  //   const canvasAspect = width / height;
  //   const cubeAspect = 1;
  //   const scaleFactor = canvasAspect > cubeAspect ? 1 / canvasAspect : 1;

  //   // apply the scale factor to the cube
  //   cube.scale.multiplyScalar(scaleFactor);
  //   scene.add(cube);
  // set initial rotation of cube
  // cube.rotation.x = 0.5;
  // cube.rotation.y = 0.5;

  // create wireframe
  //   wireframe = new THREE.LineSegments(
  //     new THREE.EdgesGeometry(geometry),
  //     new THREE.LineBasicMaterial({ color: 0xdddddd })
  //   );
  //   scene.add(wireframe);

  //   wireframe.scale.copy(cube.scale);
  //   wireframe.rotation.copy(cube.rotation);
  //   wireframe.visible = true;

  // create renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas, alpha: true });
  renderer.setClearColor(0xffffff, 0);
  // Set the renderer size to match the canvas dimensions
  renderer.setSize(width, height);

  // Create the controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.screenSpacePanning = true;
  controls.minDistance = 0;
  controls.maxDistance = 500;

  // create gui
  gui = new dat.GUI({ autoPlace: false });
  //   document.getElementById("gui-container").appendChild(gui.domElement);

  // add background color picker
  const bgColor = { color: "#ffffff" };
  gui
    .addColor(bgColor, "color")
    .name("Background Color")
    .onChange((color) => {
      renderer.setClearColor(color);
    });

  // add cube color picker
  const cubeColor = { color: "#ffffff" };
  gui
    .addColor(cubeColor, "color")
    .name("Cube Color")
    .onChange((color) => {
      cube.material.color.set(color);
    });

  // add wireframe color picker
  //   const wireframeColor = { color: "#ffffff" };
  //   gui
  //     .addColor(wireframeColor, "color")
  //     .name("Wireframe Color")
  //     .onChange((color) => {
  //       wireframe.material.color.set(color);
  //     });

  // add wireframe checkbox
  //   gui.add(wireframe, "visible").name("Wireframe");
  const cubeFolder = gui.addFolder("Cube");
  const cameraFolder = gui.addFolder("Camera");
  const controlsFolder = gui.addFolder("Controls");

  // Add controls to the control bar
  //   cubeFolder
  //     .add(cube.scale, "x", 0.1, 0.1, 0.1)
  //     .name("Scale X")
  //     .onChange((x) => {
  //       wireframe.scale.x = x;
  //     });
  //   cubeFolder
  //     .add(cube.scale, "y", 0.1, 0.1, 0.1)
  //     .name("Scale Y")
  //     .onChange((y) => {
  //       wireframe.scale.y = y;
  //     });
  //   cubeFolder
  //     .add(cube.scale, "z", 0.1, 0.1, 0.1)
  //     .name("Scale Z")
  //     .onChange((z) => {
  //       wireframe.scale.z = z;
  //     });
  //   cubeFolder.addColor(material, "color").name("Color");

  cameraFolder.add(camera.position, "x", -10, 10).name("Position X");
  cameraFolder.add(camera.position, "y", -10, 10).name("Position Y");
  cameraFolder.add(camera.position, "z", -10, 10).name("Position Z");
  cameraFolder
    .add(camera.rotation, "x", -Math.PI / 2, Math.PI / 2)
    .name("Rotation X");
  cameraFolder
    .add(camera.rotation, "y", -Math.PI / 2, Math.PI / 2)
    .name("Rotation Y");
  cameraFolder
    .add(camera.rotation, "z", -Math.PI / 2, Math.PI / 2)
    .name("Rotation Z");

  // add options to renderer folder
  // const rendererFolder = gui.addFolder('Renderer');
  // rendererFolder.add(renderer, 'antialias').name('Antialias');
  // rendererFolder.add(renderer, 'shadowMap.enabled').name('Shadows');
  // rendererFolder.add(renderer, 'shadowMap.type', {
  //     BasicShadowMap: THREE.BasicShadowMap,
  //     PCFShadowMap: THREE.PCFShadowMap,
  //     PCFSoftShadowMap: THREE.PCFSoftShadowMap
  // }).name('Shadow Type');
  // rendererFolder.open();

  // add options to controls folder
  controlsFolder.add(controls, "enableDamping").name("Enable Damping");
  controlsFolder.add(controls, "dampingFactor", 0, 1).name("Damping Factor");
  controlsFolder
    .add(controls, "screenSpacePanning")
    .name("Screen Space Panning");
  controlsFolder.add(controls, "minDistance", 0, 100).name("Minimum Distance");
  controlsFolder.add(controls, "maxDistance", 0, 500).name("Maximum Distance");
  controlsFolder.add(controls, "reset").name("Reset Camera");

  cubeFolder.open();
  cameraFolder.open();
  controlsFolder.open();
}

function animate() {
  //   cube.rotation.x += 0.001;
  //   cube.rotation.y += 0.001;

  //   wireframe.position.copy(cube.position);
  //   wireframe.rotation.copy(cube.rotation);
  //   wireframe.scale.copy(cube.scale);
  let wolf = scene.getObjectByName( "Wolf" );
  if(wolf){
    wolf.rotation.z += -.001
  }
  
  renderer.render(scene, camera);
  controls.update();
  requestAnimationFrame(animate);
}

// set the canvas height equal to its width whenever the window is resized
window.addEventListener(
  "resize",
  () => {
    const canvas = document.getElementById("my-canvas");
    const width = canvas.parentElement.clientWidth; // set the canvas clientWidth
    const height = canvas.parentElement.clientHeight; // set the canvas height equal to its width

    canvas.style.width = width;
    canvas.style.height = height;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  },
  false
);
