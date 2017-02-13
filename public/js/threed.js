var scene, camera, loader, dae, renderer, light, controls;
var ball, court, v, initV, divider; // v for velocity vector
var keyboard = {};
var three_container;
function init() {
    three_container = $(".threeD");
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf2f2f2);
    loader = new THREE.ColladaLoader();
    initV = new THREE.Vector3(5, -1, 8);
    v = initV.clone() // v THREE
    divider = new THREE.Vector3(20, 20, 20);
    v.divide(divider); // v divide 60 its 60fps

    light1 = new THREE.AmbientLight(0x2e2e2e);
    light2 = new THREE.DirectionalLight(0xe8e8e8);
    scene.add(light1);
    scene.add(light2);
    camera = new THREE.PerspectiveCamera(75, 
                                    window.innerWidth/window.innerHeight, 
                                    0.1,
                                    1000);
    camera.position.set(-0.003, 0.626, 0.795);
//    controls = new THREE.OrbitControls(camera);
    camera.lookAt(new THREE.Vector3(0, 0, -11));
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    three_container.append(renderer.domElement);
    // ball loading 
    loader.load('3d/ball2.dae', function(dae){
        ball = dae.scene; 
        ball.position.set(-5.1, 3.2, -9.4);
        scene.add(ball);
    });
    // set loading
    loader.load('3d/asset2.dae', function(dae){
        court = dae.scene;
        scene.add(court);
        //controls.target = new THREE.Vector3(0, 0, -11);
    });
    render();
}
$(window).keydown(keydown)
$(window).keyup(keyup)
function keydown(e) {
    //e.preventDefault();
    keyboard[e.keyCode] = true;
}
function keyup(e) {
    //e.preventDefault();
    keyboard[e.keyCode] = false;
}

function render() {
    keycontroller();
    posController();
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

function posController() {
    if (ball && ball.position.y >= 0.12) {
        ball.position.add(v);
        v.add(new THREE.Vector3(0, -0.005, 0));
    }
    if (ball && ball.position.y < 0.12) {
        v.multiply(new THREE.Vector3(1, -1, 1));
        ball.position.add(v);
    }
    if (v.x > 0) v.x -= 0.005
    if (v.z > 0) v.z -= 0.005
}
function keycontroller () {
    if (keyboard[65]) ball.position.x -= 0.1;
    if (keyboard[68]) ball.position.x += 0.1;
    if (keyboard[87]) ball.position.y -= 0.1;
    if (keyboard[83]) ball.position.y += 0.1;
    if (keyboard[81]) ball.position.z += 0.1;
    if (keyboard[69]) ball.position.z -= 0.1;
    if (keyboard[82]) {
        ball.position.set(-5.1, 3.2, -9.4);
    
        v = initV.clone(); // v THREE
        v.divide(divider); // v divide 60 its 60fps

    }
}
function spike() {
    ball.position.set(-5.1, 3.2, -9.4);
    v = initV.clone(); // v THREE
    v.divide(divider); // v divide 60 its 60fps
}
$(".btnBlueGreen").click(function(){
    spike();
});
function updateColor(ambient, light) {
    light1.color.setHex(ambient);
    light2.color.setHex(light);

}
init();
