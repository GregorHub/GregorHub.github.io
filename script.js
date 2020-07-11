
import * as THREE from '/three.module.js';
import {OrbitControls} from '/three.js-master/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from '/three.js-master/examples/jsm/loaders/GLTFLoader.js';


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.setClearColor( new THREE.Color("rgb(21, 29, 31)") )
camera.position.z = 14;
var controls = new OrbitControls( camera, renderer.domElement );

var light = new THREE.PointLight( new THREE.Color("rgb(210, 250, 250)"),1.3 ); // soft white light

light.position.z=50

scene.add( light );
light.castShadow=true
renderer.render( scene, camera );

//var loader =  GLTFLoader();

var loader = new GLTFLoader()

// Load a glTF resource
loader.load(
  // resource URL
  'scene.gltf',
  // called when the resource is loaded
  function ( gltf ) {

    scene.add( gltf.scene );

    gltf.animations; // Array<THREE.AnimationClip>
    gltf.scene; // THREE.Group
    gltf.scenes; // Array<THREE.Group>
    gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object

    gltf.scene.position.y=0
    gltf.scene.position.z=0

    var animate = function () {
      requestAnimationFrame( animate );

      gltf.scene.rotation.y += 0.003;
      

      renderer.render( scene, camera );
    };

animate()
    renderer.render( scene, camera );
  }

  
)

function  flyTheMoon(R,I,col){
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

var geometry = new THREE.SphereGeometry( getRndInteger(9,14)/100, 7, 4 );
var material = new THREE.MeshLambertMaterial ( {color: col} );
var sphere = new THREE.Mesh( geometry, material );
sphere.castShadow=true
scene.add( sphere );
var phi=10*Math.random();
var animspeed=Math.random()/100
  var animate = function () {
    requestAnimationFrame( animate );

    phi+=animspeed
    sphere.position.x = R*Math.cos(-phi);
    sphere.position.y = I*Math.cos(-phi);
    sphere.position.z = R*Math.sin(-phi);

    renderer.render( scene, camera );
  };

animate()
renderer.render( scene, camera );

}


flyTheMoon(7.3,0.2, new THREE.Color("rgb(15, 10, 10)"))
flyTheMoon(5.3,1, new THREE.Color("rgb(10, 20, 10)"))
flyTheMoon(9.3,0.5, new THREE.Color("rgb(20, 20, 10)"))
flyTheMoon(8.3,2, new THREE.Color("rgb(1, 10, 10)"))
flyTheMoon(6.3,0.8, new THREE.Color("rgb(10, 10, 10)"))
flyTheMoon(5.3,-2, new THREE.Color("rgb(20, 20, 22)"))

renderer.render( scene, camera );





