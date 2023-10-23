import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { MeshLine, MeshLineMaterial, MeshLineRaycast } from 'three';
import { WebGLBufferRenderer } from 'three';
let str="";
/*
var fs = require('browserify-fs');


	fs.writeFile('hello-world.txt', 'Hello world!\n', function() {
		fs.readFile('hello-world.txt', 'utf-8', function(err, data) {
			console.log(data);
		});
	});
*/


const rendered = new THREE.WebGLRenderer();
rendered.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(rendered.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight,0.1,1000);

const orbit = new OrbitControls(camera,rendered.domElement);

let flag=0;
let turn=0;
var data = [];
for(let i=0;i<10;i++){
	data.push(0);
}
let crow=0;
let vulture=0;
let red=0;
let green=-1;
let loc=0;
let crow_f=-1;
let kills=0;
let counter=0;

//scene.add(axesHelper);
camera.position.set(0,2,7);
orbit.update();
const geometry = new THREE.SphereGeometry( 0.3, 32,16 );
const material1 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const material2 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const material3 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const material4 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const material5 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const material6 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const material7 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const material8 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const material9 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const material10 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const material11 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material12 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material13 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material14 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material15 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material16 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material17 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material18 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const sphere1 = new THREE.Mesh( geometry, material1 );
const sphere2 = new THREE.Mesh( geometry, material2 );
const sphere3 = new THREE.Mesh( geometry, material3 );
const sphere4 = new THREE.Mesh( geometry, material4 );
const sphere5 = new THREE.Mesh( geometry, material5 );
const sphere6 = new THREE.Mesh( geometry, material6 );
const sphere7 = new THREE.Mesh( geometry, material7 );
const sphere8 = new THREE.Mesh( geometry, material8 );
const sphere9 = new THREE.Mesh( geometry, material9 );
const sphere10 = new THREE.Mesh( geometry, material10 );
const sphere11 = new THREE.Mesh( geometry, material11 );
const sphere12 = new THREE.Mesh( geometry, material12 );
const sphere13 = new THREE.Mesh( geometry, material13 );
const sphere14 = new THREE.Mesh( geometry, material14 );
const sphere15 = new THREE.Mesh( geometry, material15 );
const sphere16 = new THREE.Mesh( geometry, material16 );
const sphere17 = new THREE.Mesh( geometry, material17 );
const sphere18 = new THREE.Mesh( geometry, material18 );

scene.add( sphere1 );
scene.add( sphere2 );
scene.add( sphere3 );
scene.add( sphere4 );
scene.add( sphere5 );
scene.add( sphere6 );
scene.add( sphere7 );
scene.add( sphere8 );
scene.add( sphere9 );
scene.add( sphere10 );
scene.add(sphere11);
scene.add(sphere12);
scene.add(sphere13);
scene.add(sphere14);
scene.add(sphere15);
scene.add(sphere16);
scene.add(sphere17);
scene.add(sphere18);

sphere1.rotation.x=0.5 * Math.PI;
sphere1.position.set(0,0,-3);
sphere2.position.set(-2,0,2.7);
sphere3.position.set(2,0,2.7);
sphere4.position.set(-3,0,-1.3);
sphere5.position.set(3,0,-1.3);
sphere6.position.set(-0.63,0,-1.3);
sphere7.position.set(0.63,0,-1.3);
sphere8.position.set(0,0,1);
sphere9.position.set(-1.15,0,0.3);
sphere10.position.set(1.15,0,0.3);
sphere11.position.set(5,0,0);
sphere12.position.set(5,0,-1);
sphere13.position.set(5,0,-2);
sphere14.position.set(5,0,-3);
sphere15.position.set(5,0,1);
sphere16.position.set(5,0,2);
sphere17.position.set(5,0,3);
sphere18.position.set(-5,0,0);
const linematerial = new THREE.LineBasicMaterial( { color: 0xFFFFFF } );

const points = [];
points.push( new THREE.Vector3( 0, 0,-3 ) );
//points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( -2, 0, 2.7 ) );
points.push( new THREE.Vector3(3,0,-1.3));
points.push( new THREE.Vector3(-3,0,-1.3));
points.push( new THREE.Vector3( 2, 0, 2.7 ) );
points.push( new THREE.Vector3( 0, 0,-3 ) );

const geometry2 = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry2, linematerial );
scene.add( line );

const planeGeometry = new THREE.PlaneGeometry(8,8);
const planeMaterial = new THREE.MeshBasicMaterial({color:0xFFFFFF,side:THREE.DoubleSide});
const plane = new THREE.Mesh(planeGeometry,planeMaterial);
//scene.add(plane);
plane.rotation.x=0.5 * Math.PI;

//mouse = new THREE.Vector2();
const mousePosition = new THREE.Vector2();
const raycaster = new THREE.Raycaster();



/*		
function writing(){
	
	raycaster.setFromCamera(mousePosition,camera);
	
	const intersects = raycaster.intersectObjects(scene.children);
	console.log(intersects.length);
	for(let i=0;i<intersects;i++){
	if(intersects[i]==sphere1.id){
		console.log("njsands");
		str+="Sphere1 was clicked\n";
		txt.append("Sphere1 was clicked\n");
	}
	if(intersects[i]==sphere2.id){
		str+="Sphere2 was clicked\n";
	}
	if(intersects[i]==sphere3.id){
		str+="Sphere3 was clicked\n";
	}
	if(intersects[i]==sphere4.id){
		str+="Sphere4 was clicked\n";
	}
	if(intersects[i]==sphere5.id){
		str+="Sphere5 was clicked\n";
	}
	if(intersects[i]==sphere6.id){
		str+="Sphere6 was clicked\n";
	}
	if(intersects[i]==sphere7.id){
		str+="Sphere7 was clicked\n";
	}
	if(intersects[i]==sphere8.id){
		str+="Sphere8 was clicked\n";
	}
	if(intersects[i]==sphere9.id){
		str+="Sphere9 was clicked\n";
	}
	if(intersects[i]==sphere10.id){
		str+="Sphere10 was clicked\n";
	}
	if(intersects[i]==sphere11.id){
		str+="Sphere11 was clicked\n";
	}
	if(intersects[i]==sphere12.id){
		str+="Sphere12 was clicked\n";
	}
	if(intersects[i]==sphere13.id){
		str+="Sphere13 was clicked\n";
	}
	if(intersects[i]==sphere14.id){
		str+="Sphere14 was clicked\n";
	}
	if(intersects[i]==sphere15.id){
		str+="Sphere15 was clicked\n";
	}
	if(intersects[i]==sphere16.id){
		str+="Sphere16 was clicked\n";
	}
	if(intersects[i]==sphere17.id){
		str+="Sphere17 was clicked\n";
	}
	if(intersects[i]==sphere18.id){
		str+="Sphere18 was clicked\n";
	}
	else{
		str+="Unidentified area was clicked\n";
	}
}


}
*/

function selectCrow(){
	counter=0;
	raycaster.setFromCamera(mousePosition,camera);
	const intersects = raycaster.intersectObjects(scene.children);
	console.log(red);
	console.log(intersects.length)
	/*
	if(flag==1){
		red++;
	}
	*/
	if(red<14){
		for(let i=0;i<intersects.length;i++){
			if(intersects[i].object.id==sphere11.id){
				sphere11.visible=false;
				crow=1;
				str+="sphere11 was clicked\n";
				red++;
				break;
			}
			if(intersects[i].object.id==sphere12.id){
				sphere12.visible=false;
				crow=1;
				str+="sphere12 was clicked\n";
				red++;
				break;
			}
			if(intersects[i].object.id==sphere13.id){
				sphere13.visible=false;
				crow=1;
				str+="sphere13 was clicked\n";
				red++;
				break;
			}
			if(intersects[i].object.id==sphere14.id){
				sphere14.visible=false;
				crow=1;
				str+="sphere14 was clicked\n";
				red++;
				break;
			}
			if(intersects[i].object.id==sphere15.id){
				sphere15.visible=false;
				crow=1;
				str+="sphere15 was clicked\n";
				red++;
				break;
			}
			if(intersects[i].object.id==sphere16.id){
				sphere16.visible=false;
				crow=1;
				red++;
				str+="sphere16 was clicked\n";
				break;
			}
			if(intersects[i].object.id==sphere17.id){
				sphere17.visible=false;
				crow=1;
				red++;
				str+="sphere17 was clicked\n";
				break;
			}
		}
	}
	else{
		console.log("crow else");
		for(let i=0;i<intersects.length;i++){
			if(intersects[i].object.id==sphere1.id && data[0]==1){
				crow=1;
				crow_f=1;
				str+="sphere1 was clicked\n";
				return;
			}
			if(intersects[i].object.id==sphere2.id && data[1]==1){
				crow=1;
				crow_f=2;
				str+="sphere2 was clicked\n";
				return;
			}
			if(intersects[i].object.id==sphere3.id && data[2]==1){
				crow=1;
				crow_f=3;
				str+="sphere3 was clicked\n";
				return;
			}
			if(intersects[i].object.id==sphere4.id && data[3]==1){
				crow=1;
				crow_f=4;
				str+="sphere4 was clicked\n";
				return;
			}
			if(intersects[i].object.id==sphere5.id && data[4]==1){
				crow=1;
				crow_f=5;
				str+="sphere5 was clicked\n";
				return;
			}
			if(intersects[i].object.id==sphere6.id && data[5]==1){
				crow=1;
				crow_f=6;
				str+="sphere6 was clicked\n";
				return;
			}
			if(intersects[i].object.id==sphere7.id && data[6]==1){
				crow=1;
				crow_f=7;
				str+="sphere7 was clicked\n";
				return;
			}
			if(intersects[i].object.id==sphere8.id && data[7]==1){
				crow=1;
				crow_f=8;
				str+="sphere8 was clicked\n";
				return;
			}
			if(intersects[i].object.id==sphere9.id && data[8]==1){
				crow=1;
				crow_f=9;
				str+="sphere9 was clicked\n";
				return;
			}
			if(intersects[i].object.id==sphere10.id && data[9]==1){
				crow=1;
				crow_f=10;
				str+="sphere10 was clicked\n";
				return;
			}
		}
	}
}

function moveCrow(){
	counter++;
	raycaster.setFromCamera(mousePosition,camera);
	const intersects = raycaster.intersectObjects(scene.children);
	if(crow==0){
		console.log("crow was 0 why")
		return;
	}
	if(red<14){
		for(let i=0;i<intersects.length;i++){
			console.log("hi");
			if(intersects[i].object.id==sphere1.id && data[0]==0){
				data[0]=1;
				sphere1.material.color.setHex(0x00ff00);
				crow=0;
				turn=1;
				console.log("sphere1");
				str+="Crow moved to sphere 1\n";
				red++;
				return;
			}
			if(intersects[i].object.id==sphere2.id && data[1]==0){
				data[1]=1;
				turn=1;
				sphere2.material.color.setHex(0x00ff00);
				crow=0;
				console.log("sphere2");
				str+="Crow moved to sphere 2\n";
				red++;
				return;
			}
			if(intersects[i].object.id==sphere3.id && data[2]==0){
				data[2]=1;
				turn=1;
				sphere3.material.color.setHex(0x00ff00);
				crow=0;
				console.log("sphere3");
				str+="Crow moved to sphere 3\n";
				red++;
				return;
			}
			if(intersects[i].object.id==sphere4.id && data[3]==0){
				data[3]=1;
				turn=1;
				sphere4.material.color.setHex(0x00ff00);
				crow=0;
				str+="Crow moved to sphere 4\n";
				console.log("sphere4");
				red++;
				return;
			}
			if(intersects[i].object.id==sphere5.id && data[4]==0){
				data[4]=1;
				turn=1;
				sphere5.material.color.setHex(0x00ff00);
				crow=0;
				str+="Crow moved to sphere 5\n";
				console.log("sphere5");
				red++;
				return;
			}
			if(intersects[i].object.id==sphere6.id && data[5]==0){
				data[5]=1;
				turn=1;
				sphere6.material.color.setHex(0x00ff00);
				crow=0;
				str+="Crow moved to sphere 6\n";
				console.log("sphere6");
				red++;
				return;
			}
			if(intersects[i].object.id==sphere7.id && data[6]==0){
				data[6]=1;
				turn=1;
				sphere7.material.color.setHex(0x00ff00);
				crow=0;
				str+="Crow moved to sphere 7\n";
				console.log("sphere7");
				red++;
				return;
			}
			if(intersects[i].object.id==sphere8.id && data[7]==0){
				data[7]=1;
				turn=1;
				sphere8.material.color.setHex(0x00ff00);
				crow=0;
				str+="Crow moved to sphere 8\n";
				console.log("sphere8");
				red++;
				return;
			}
			if(intersects[i].object.id==sphere9.id && data[8]==0){
				data[8]=1;
				turn=1;
				sphere9.material.color.setHex(0x00ff00);
				crow=0;
				str+="Crow moved to sphere 9\n";
				console.log("sphere9");
				red++;
				return;
			}
			if(intersects[i].object.id==sphere10.id && data[9]==0){
				data[9]=1;
				sphere10.material.color.setHex(0x00ff00);
				crow=0;
				console.log("sphere10");
				str+="Crow moved to sphere 10\n";
				turn=1;
				red++;
				return;
			}
		}
	}
	else{
		console.log("crow_f");
		console.log(crow_f);
		console.log(intersects);
		if(crow_f==1){
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere6.id && data[5]==0){
					data[0]=0;
					sphere1.material.color.setHex(0xffff00);
					sphere6.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 6 from 1\n";
					data[5]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere7.id && data[6]==0){
					data[0]=0;
					sphere1.material.color.setHex(0xffff00);
					sphere7.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 7 from 1\n";
					data[6]=1;
					turn=1;
					crow=0;
					return;
				}
			}
		}
		if(crow_f==2){
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere8.id && data[7]==0){
					data[1]=0;
					sphere2.material.color.setHex(0xffff00);
					sphere8.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 8 from 2\n";
					data[7]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere9.id && data[8]==0){
					data[1]=0;
					sphere2.material.color.setHex(0xffff00);
					sphere9.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 9 from 2\n";
					data[8]=1;
					turn=1;
					crow=0;
					return;
				}
			}
		}
		if(crow_f==3){
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere10.id && data[9]==0){
					data[2]=0;
					sphere3.material.color.setHex(0xffff00);
					sphere10.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 10 from 3\n";
					data[9]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere8.id && data[7]==0){
					data[2]=0;
					sphere3.material.color.setHex(0xffff00);
					str+="Crow moved to sphere 8 from 3\n";
					sphere8.material.color.setHex(0x00ff00);
					data[7]=1;
					turn=1;
					crow=0;
					return;
				}
			}
		}
		if(crow_f==4){
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere9.id && data[8]==0){
					data[3]=0;
					sphere4.material.color.setHex(0xffff00);
					sphere9.material.color.setHex(0x00ff00);
					data[8]=1;
					str+="Crow moved to sphere 9 from 4\n";
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere6.id && data[5]==0){
					data[3]=0;
					sphere4.material.color.setHex(0xffff00);
					sphere6.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 6 from 4\n";
					data[5]=1;
					turn=1;
					crow=0;
					return;
				}
			}
		}
		if(crow_f==5){
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere7.id && data[6]==0){
					data[4]=0;
					sphere5.material.color.setHex(0xffff00);
					sphere7.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 7 from 5\n";
					data[6]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere10.id && data[9]==0){
					data[4]=0;
					sphere5.material.color.setHex(0xffff00);
					sphere10.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 10 from 5\n";
					data[9]=1;
					turn=1;
					crow=0;
					return;
				}
			}
		}
		if(crow_f==6){
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere1.id && data[0]==0){
					data[5]=0;
					sphere6.material.color.setHex(0xffff00);
					sphere1.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 1 from 6\n";
					data[0]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere9.id && data[8]==0){
					data[5]=0;
					sphere6.material.color.setHex(0xffff00);
					sphere9.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 9 from 6\n";
					data[8]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere4.id && data[3]==0){
					data[5]=0;
					sphere6.material.color.setHex(0xffff00);
					sphere4.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 4 from 6\n";
					data[3]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere7.id && data[6]==0){
					data[5]=0;
					sphere6.material.color.setHex(0xffff00);
					sphere7.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 7 from 6\n";
					data[6]=1;
					turn=1;
					crow=0;
					return;
				}
			}
		}
		if(crow_f==7){
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere10.id && data[9]==0){
					data[6]=0;
					sphere7.material.color.setHex(0xffff00);
					sphere10.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 10 from 7\n";
					data[9]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere1.id && data[0]==0){
					data[6]=0;
					sphere7.material.color.setHex(0xffff00);
					sphere1.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 1 from 7\n";
					data[0]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere6.id && data[5]==0){
					data[6]=0;
					sphere7.material.color.setHex(0xffff00);
					sphere6.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 6 from 8\7\n";
					data[5]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere5.id && data[4]==0){
					data[6]=0;
					sphere7.material.color.setHex(0xffff00);
					sphere5.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 5 from 7\n";
					data[4]=1;
					turn=1;
					crow=0;
					return;
				}
			}
		}
		if(crow_f==8){
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere10.id && data[9]==0){
					data[7]=0;
					sphere8.material.color.setHex(0xffff00);
					sphere10.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 10 from 8\n";
					data[9]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere9.id && data[8]==0){
					data[7]=0;
					sphere8.material.color.setHex(0xffff00);
					sphere9.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 9 from 8\n";
					data[8]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere2.id && data[1]==0){
					data[7]=0;
					sphere8.material.color.setHex(0xffff00);
					sphere2.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 2 from 8\n";
					data[1]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere3.id && data[2]==0){
					data[7]=0;
					sphere8.material.color.setHex(0xffff00);
					sphere3.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 3 from 8\n";
					data[2]=1;
					turn=1;
					crow=0;
					return;
				}
			}
		}
		if(crow_f==9){
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere2.id && data[1]==0){
					data[8]=0;
					sphere9.material.color.setHex(0xffff00);
					sphere2.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 2 from 9\n";
					data[1]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere6.id && data[5]==0){
					data[8]=0;
					sphere9.material.color.setHex(0xffff00);
					sphere6.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 6 from 9\n";
					data[5]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere8.id && data[7]==0){
					data[8]=0;
					sphere9.material.color.setHex(0xffff00);
					sphere8.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 8 from 9\n";
					data[7]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere4.id && data[3]==0){
					data[8]=0;
					sphere9.material.color.setHex(0xffff00);
					sphere4.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 4 from 9\n";
					data[3]=1;
					turn=1;
					crow=0;
					return;
				}
			}
		}
		if(crow_f==10){
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere8.id && data[7]==0){
					data[9]=0;
					sphere10.material.color.setHex(0xffff00);
					sphere8.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 8 from 10\n";
					data[7]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere3.id && data[2]==0){
					data[9]=0;
					sphere10.material.color.setHex(0xffff00);
					sphere3.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 3 from 10\n";
					data[2]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere5.id && data[4]==0){
					data[9]=0;
					sphere10.material.color.setHex(0xffff00);
					sphere5.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 5 from 10\n";
					data[4]=1;
					turn=1;
					crow=0;
					return;
				}
				if(intersects[i].object.id==sphere7.id && data[6]==0){
					data[9]=0;
					sphere10.material.color.setHex(0xffff00);
					sphere7.material.color.setHex(0x00ff00);
					str+="Crow moved to sphere 7 from 10\n";
					data[6]=1;
					turn=1;
					crow=0;
					return;
				}
			}
		}
	}
	str+="No recognizable objects were detected\n";
}

function visibleagain(){
	turn=0;
		if(sphere11.visible==false){
			sphere11.visible=true;
			return;
		}
		if(sphere12.visible==false){
			sphere12.visible=true;
			return;
		}
		if(sphere13.visible==false){
			sphere13.visible=true;
			return;
		}
		if(sphere14.visible==false){
			sphere14.visible=true;
			return;
		}
		if(sphere15.visible==false){
			sphere15.visible=true;
			return;
		}
		if(sphere16.visible==false){
			sphere16.visible=true;
			return;
		}
		if(sphere17.visible==false){
			sphere17.visible=true;
			return;
		}
}

function selectVulture(){
	raycaster.setFromCamera(mousePosition,camera);
	const intersects = raycaster.intersectObjects(scene.children);
	if(green==-1){
		for(let i=0;i<intersects.length;i++){
			if(intersects[i].object.id==sphere18.id){
				sphere18.visible=false;
				vulture=1;
				str+="sphere18 was clicked\n";
				return;
			}
		}
	}
	else{
		for(let i=0;i<intersects.length;i++){
			if(intersects[i].object.id==loc){
				vulture=1;
				str=str+"clicked on sphere"+green+" \n";
				return;
			}
		}
	}
	
}

function moveVulture(){
	raycaster.setFromCamera(mousePosition,camera);
	const intersects = raycaster.intersectObjects(scene.children);
	if(green==-1){
		for(let i=0;i<intersects.length;i++){
			if(intersects[i].object.id==sphere1.id && data[0]==0){
				data[0]=2;
				sphere1.material.color.setHex(0xff0000);
				vulture=0;
				turn=0;
				green=1;
				loc=sphere1.id;
				str+="vulture moved to sphere 1\n";
				return;
			}
			if(intersects[i].object.id==sphere2.id && data[1]==0){
				data[1]=2;
				sphere2.material.color.setHex(0xff0000);
				vulture=0;
				turn=0;
				green=2;
				loc=sphere2.id;
				str+="vulture moved to sphere 2\n";
				return;
			}
			if(intersects[i].object.id==sphere3.id && data[2]==0){
				data[2]=2;
				sphere3.material.color.setHex(0xff0000);
				vulture=0;
				turn=0;
				green=3;
				loc=sphere3.id;
				str+="vulture moved to sphere 3\n";
				return;
			}
			if(intersects[i].object.id==sphere4.id && data[3]==0){
				data[3]=2;
				sphere4.material.color.setHex(0xff0000);
				vulture=0;
				turn=0;
				green=4;
				loc=sphere4.id;
				str+="vulture moved to sphere 4\n";
				return;
			}
			if(intersects[i].object.id==sphere5.id && data[4]==0){
				data[4]=2;
				sphere5.material.color.setHex(0xff0000);
				vulture=0;
				turn=0;
				green=5;
				loc=sphere5.id;
				str+="vulture moved to sphere 5\n";
				return;
			}
			if(intersects[i].object.id==sphere6.id && data[5]==0){
				data[5]=2;
				sphere6.material.color.setHex(0xff0000);
				vulture=0;
				turn=0;
				green=6;
				loc=sphere6.id;
				str+="vulture moved to sphere 6\n";
				return;
			}
			if(intersects[i].object.id==sphere7.id && data[6]==0){
				data[6]=2;
				sphere7.material.color.setHex(0xff0000);
				vulture=0;
				turn=0;
				green=7;
				loc=sphere7.id;
				str+="vulture moved to sphere 7\n";
				return;
			}
			if(intersects[i].object.id==sphere8.id && data[7]==0){
				data[7]=2;
				sphere8.material.color.setHex(0xff0000);
				vulture=0;
				turn=0;
				green=8;
				loc=sphere8.id;
				str+="vulture moved to sphere 8\n";
				return;
			}
			if(intersects[i].object.id==sphere9.id && data[8]==0){
				data[8]=2;
				sphere9.material.color.setHex(0xff0000);
				vulture=0;
				turn=0;
				green=9;
				loc=sphere9.id;
				str+="vulture moved to sphere 9\n";
				return;
			}
			if(intersects[i].object.id==sphere10.id && data[9]==0){
				data[9]=2;
				sphere10.material.color.setHex(0xff0000);
				vulture=0;
				turn=0;
				green=10;
				loc=sphere10.id;
				str+="vulture moved to sphere 10\n";
				return;
			}
		}
		str+="No recognizable objects were detected\n";
	}
	else{
		if(green==1){
			if(data[5]==1 && data[8]==0){
				data[5]=0;
				sphere6.material.color.setHex(0xffff00);
				sphere1.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[8]=2;
				data[0]=0;
				green=9;
				sphere9.material.color.setHex(0xff0000);
				str+="Auto kill\n";
				//moveVulture();
				vulture=0;
				loc=sphere9.id;
				return;
			}
			if(data[6]==1 && data[9]==0){
				data[6]=0;
				sphere7.material.color.setHex(0xffff00);
				sphere1.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[9]=2;
				data[0]=0;
				str+="Auto kill\n";
				green=10;
				sphere10.material.color.setHex(0xff0000);
				//moveVulture();
				vulture=0;
				loc=sphere10.id;
				return;
			}
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere6.id && data[5]==0){
					vulture=0;
					green=6;
					data[5]=2;
					data[0]=0;
					sphere1.material.color.setHex(0xffff00);
					sphere6.material.color.setHex(0xff0000);
					str+="Vulture moved from 1 to 6\n";
					turn=0;
					loc=sphere6.id;
					return;
				}
				if(intersects[i].object.id==sphere7.id && data[6]==0){
					vulture=0;
					green=7;
					data[6]=2;
					data[0]=0;
					sphere1.material.color.setHex(0xffff00);
					sphere7.material.color.setHex(0xff0000);
					str+="Vulture moved from 1 to 7\n";
					turn=0;
					loc=sphere7.id;
					return;
				}
			}
		}
		if(green==2){
			if(data[7]==1 && data[9]==0){
				data[7]=0;
				sphere8.material.color.setHex(0xffff00);
				sphere2.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[9]=2;
				str+="Auto kill\n";
				data[1]=0;
				green=10;
				sphere10.material.color.setHex(0xff0000);
				//moveVulture();
				vulture=0;
				loc=sphere10.id;
				return;
			}
			if(data[8]==1 && data[5]==0){
				data[8]=0;
				sphere9.material.color.setHex(0xffff00);
				sphere2.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[5]=2;
				str+="Auto kill\n";
				data[1]=0;
				green=6;
				sphere6.material.color.setHex(0xff0000);
				//moveVulture();
				vulture=0;
				loc=sphere6.id;
				return;
			}
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere9.id && data[8]==0){
					vulture=0;
					green=9;
					data[8]=2;
					data[1]=0;
					sphere2.material.color.setHex(0xffff00);
					sphere9.material.color.setHex(0xff0000);
					str+="Vulture moved from 2 to 9\n";
					turn=0;
					loc=sphere9.id;
					return;
				}
				if(intersects[i].object.id==sphere8.id && data[7]==0){
					vulture=0;
					green=8;
					data[7]=2;
					data[1]=0;
					sphere2.material.color.setHex(0xffff00);
					sphere8.material.color.setHex(0xff0000);
					str+="Vulture moved from 2 to 8\n";
					turn=0;
					loc=sphere8.id;
					return;
				}
			}
		}
		if(green==3){
			if(data[9]==1 && data[6]==0){
				data[9]=0;
				sphere10.material.color.setHex(0xffff00);
				sphere3.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[6]=2;
				str+="Auto kill\n";
				data[2]=0;
				green=7;
				sphere7.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere7.id;
				return;
			}
			if(data[7]==1 && data[8]==0){
				data[7]=0;
				sphere8.material.color.setHex(0xffff00);
				sphere3.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				str+="Auto kill\n";
				data[8]=2;
				data[2]=0;
				green=9;
				sphere9.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere9.id;
				return;
			}
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere10.id && data[9]==0){
					vulture=0;
					green=10;
					data[9]=2;
					data[2]=0;
					sphere3.material.color.setHex(0xffff00);
					sphere10.material.color.setHex(0xff0000);
					str+="Vulture moved from 3 to 9\n";
					turn=0;
					loc=sphere10.id;
					return;
				}
				if(intersects[i].object.id==sphere8.id && data[7]==0){
					vulture=0;
					green=8;
					data[7]=2;
					data[2]=0;
					sphere3.material.color.setHex(0xffff00);
					sphere8.material.color.setHex(0xff0000);
					str+="Vulture moved from 3 to 8\n";
					turn=0;
					loc=sphere8.id;
					return;
				}
			}
		}
		if(green==4){
			if(data[5]==1 && data[6]==0){
				data[5]=0;
				sphere6.material.color.setHex(0xffff00);
				sphere4.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[6]=2;
				str+="Auto kill\n";
				data[3]=0;
				green=7;
				sphere7.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere7.id;
				return;
			}
			if(data[8]==1 && data[7]==0){
				data[8]=0;
				sphere9.material.color.setHex(0xffff00);
				sphere4.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				str+="Auto kill\n";
				data[7]=2;
				data[3]=0;
				green=8;
				sphere8.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere8.id;
				return;
			}
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere6.id && data[5]==0){
					vulture=0;
					green=6;
					data[5]=2;
					data[3]=0;
					sphere4.material.color.setHex(0xffff00);
					sphere6.material.color.setHex(0xff0000);
					str+="Vulture moved from 4 to 6\n";
					turn=0;
					loc=sphere6.id;
					return;
				}
				if(intersects[i].object.id==sphere9.id && data[8]==0){
					vulture=0;
					green=9;
					data[8]=2;
					data[3]=0;
					sphere4.material.color.setHex(0xffff00);
					sphere9.material.color.setHex(0xff0000);
					str+="Vulture moved from 4 to 9\n";
					turn=0;
					loc=sphere9.id;
					return;
				}
			}
		}
		if(green==5){
			if(data[6]==1 && data[5]==0){
				data[6]=0;
				sphere7.material.color.setHex(0xffff00);
				sphere5.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				str+="Auto kill\n";
				data[5]=2;
				data[4]=0;
				green=6;
				sphere6.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere6.id;
				return;
			}
			if(data[9]==1 && data[7]==0){
				data[9]=0;
				sphere10.material.color.setHex(0xffff00);
				sphere5.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[7]=2;
				str+="Auto kill\n";
				data[4]=0;
				green=8;
				sphere8.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere8.id;
				return;
			}
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere10.id && data[9]==0){
					vulture=0;
					green=10;
					data[9]=2;
					data[4]=0;
					sphere5.material.color.setHex(0xffff00);
					sphere10.material.color.setHex(0xff0000);
					str+="Vulture moved from 5 to 10\n";
					turn=0;
					loc=sphere10.id;
					return;
				}
				if(intersects[i].object.id==sphere7.id && data[6]==0){
					vulture=0;
					green=7;
					data[6]=2;
					data[4]=0;
					sphere5.material.color.setHex(0xffff00);
					str+="Vulture moved from 5 to 7\n";
					sphere7.material.color.setHex(0xff0000);
					turn=0;
					loc=sphere7.id;
					return;
				}
			}
		}
		if(green==6){
			if(data[6]==1 && data[4]==0){
				data[6]=0;
				sphere7.material.color.setHex(0xffff00);
				sphere6.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[4]=2;
				str+="Auto kill\n";
				data[5]=0;
				green=5;
				sphere5.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere5.id;
				return;
			}
			if(data[8]==1 && data[1]==0){
				data[8]=0;
				sphere9.material.color.setHex(0xffff00);
				sphere6.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[1]=2;
				data[5]=0;
				str+="Auto kill\n";
				green=2;
				sphere2.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere2.id;
				return;
			}
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere1.id && data[0]==0){
					vulture=0;
					green=1;
					data[0]=2;
					data[5]=0;
					sphere6.material.color.setHex(0xffff00);
					sphere1.material.color.setHex(0xff0000);
					str+="Vulture moved from 6 to 1\n";
					turn=0;
					loc=sphere1.id;
					return;
				}
				if(intersects[i].object.id==sphere7.id && data[6]==0){
					vulture=0;
					green=7;
					data[6]=2;
					data[5]=0;
					sphere6.material.color.setHex(0xffff00);
					sphere7.material.color.setHex(0xff0000);
					str+="Vulture moved from 6 to 7\n";
					turn=0;
					loc=sphere7.id;
					return;
				}
				if(intersects[i].object.id==sphere9.id && data[8]==0){
					vulture=0;
					green=9;
					data[8]=2;
					data[5]=0;
					sphere6.material.color.setHex(0xffff00);
					sphere9.material.color.setHex(0xff0000);
					str+="Vulture moved from 6 to 9\n";
					turn=0;
					loc=sphere9.id;
					return;
				}
				if(intersects[i].object.id==sphere4.id && data[3]==0){
					vulture=0;
					green=4;
					data[3]=2;
					data[5]=0;
					sphere6.material.color.setHex(0xffff00);
					sphere4.material.color.setHex(0xff0000);
					str+="Vulture moved from 6 to 4\n";
					turn=0;
					loc=sphere4.id;
					return;
				}
			}
		}
		if(green==7){
			if(data[9]==1 && data[2]==0){
				data[9]=0;
				sphere10.material.color.setHex(0xffff00);
				sphere7.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[2]=2;
				data[6]=0;
				str+="Auto kill\n";
				green=3;
				sphere3.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere3.id;
				return;
			}
			if(data[5]==1 && data[3]==0){
				data[5]=0;
				sphere6.material.color.setHex(0xffff00);
				sphere7.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[3]=2;
				str+="Auto kill\n";
				data[6]=0;
				green=4;
				sphere4.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere4.id;
				return;
			}
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere1.id && data[0]==0){
					vulture=0;
					green=1;
					data[0]=2;
					data[6]=0;
					sphere7.material.color.setHex(0xffff00);
					sphere1.material.color.setHex(0xff0000);
					str+="Vulture moved from 7 to 1\n";
					turn=0;
					loc=sphere1.id;
					return;
				}
				if(intersects[i].object.id==sphere6.id && data[5]==0){
					vulture=0;
					green=6;
					data[5]=2;
					data[6]=0;
					sphere7.material.color.setHex(0xffff00);
					sphere6.material.color.setHex(0xff0000);
					str+="Vulture moved from 7 to 6\n";
					turn=0;
					loc=sphere6.id;
					return;
				}
				if(intersects[i].object.id==sphere10.id && data[9]==0){
					vulture=0;
					green=10;
					data[9]=2;
					data[6]=0;
					sphere7.material.color.setHex(0xffff00);
					sphere10.material.color.setHex(0xff0000);
					str+="Vulture moved from 7 to 10\n";
					turn=0;
					loc=sphere10.id;
					return;
				}
				if(intersects[i].object.id==sphere5.id && data[4]==0){
					vulture=0;
					green=5;
					data[4]=2;
					data[6]=0;
					sphere7.material.color.setHex(0xffff00);
					sphere5.material.color.setHex(0xff0000);
					str+="Vulture moved from 7 to 5\n";
					turn=0;
					loc=sphere5.id;
					return;
				}
			}
		}
		if(green==8){
			if(data[8]==1 && data[3]==0){
				data[8]=0;
				sphere9.material.color.setHex(0xffff00);
				sphere8.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				str+="Auto kill\n";
				data[3]=2;
				data[7]=0;
				green=4;
				sphere4.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere4.id;
				return;
			}
			if(data[9]==1 && data[4]==0){
				data[9]=0;
				sphere10.material.color.setHex(0xffff00);
				sphere8.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[4]=2;
				str+="Auto kill\n";
				data[7]=0;
				green=5;
				sphere5.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere5.id;
				return;
			}
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere2.id && data[1]==0){
					vulture=0;
					green=2;
					data[1]=2;
					data[7]=0;
					sphere8.material.color.setHex(0xffff00);
					sphere2.material.color.setHex(0xff0000);
					str+="Vulture moved from 8 to 2\n";
					turn=0;
					loc=sphere2.id;
					return;
				}
				if(intersects[i].object.id==sphere3.id && data[2]==0){
					vulture=0;
					green=3;
					data[2]=2;
					data[7]=0;
					sphere8.material.color.setHex(0xffff00);
					sphere3.material.color.setHex(0xff0000);
					str+="Vulture moved from 8 to 3\n";
					turn=0;
					loc=sphere3.id;
					return;
				}
				if(intersects[i].object.id==sphere9.id && data[8]==0){
					vulture=0;
					green=9;
					data[8]=2;
					data[7]=0;
					sphere8.material.color.setHex(0xffff00);
					sphere9.material.color.setHex(0xff0000);
					str+="Vulture moved from 8 to 9\n";
					turn=0;
					loc=sphere9.id;
					return;
				}
				if(intersects[i].object.id==sphere10.id && data[9]==0){
					vulture=0;
					green=10;
					data[9]=2;
					data[7]=0;
					sphere8.material.color.setHex(0xffff00);
					sphere10.material.color.setHex(0xff0000);
					str+="Vulture moved from 8 to 10\n";
					turn=0;
					loc=sphere10.id;
					return;
				}
			}
		}
		if(green==9){
			if(data[7]==1 && data[2]==0){
				data[7]=0;
				sphere8.material.color.setHex(0xffff00);
				sphere9.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[2]=2;
				data[8]=0;
				str+="Auto kill\n";
				green=3;
				sphere3.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere3.id;
				return;
			}
			if(data[5]==1 && data[0]==0){
				data[5]=0;
				sphere6.material.color.setHex(0xffff00);
				sphere9.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				str+="Auto kill\n";
				data[0]=2;
				data[8]=0;
				green=1;
				sphere1.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere1.id;
				return;
			}
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere2.id && data[1]==0){
					vulture=0;
					green=2;
					data[1]=2;
					data[8]=0;
					sphere9.material.color.setHex(0xffff00);
					sphere2.material.color.setHex(0xff0000);
					str+="Vulture moved from 9 to 2\n";
					turn=0;
					loc=sphere2.id;
					return;
				}
				if(intersects[i].object.id==sphere6.id && data[5]==0){
					vulture=0;
					green=6;
					data[5]=2;
					data[8]=0;
					sphere9.material.color.setHex(0xffff00);
					sphere6.material.color.setHex(0xff0000);
					str+="Vulture moved from 9 to 6\n";
					turn=0;
					loc=sphere6.id;
					return;
				}
				if(intersects[i].object.id==sphere8.id && data[7]==0){
					vulture=0;
					green=8;
					data[7]=2;
					data[8]=0;
					sphere9.material.color.setHex(0xffff00);
					sphere8.material.color.setHex(0xff0000);
					str+="Vulture moved from 9 to 8\n";
					turn=0;
					loc=sphere8.id;
					return;
				}
				if(intersects[i].object.id==sphere4.id && data[3]==0){
					vulture=0;
					green=4;
					data[3]=2;
					data[8]=0;
					sphere9.material.color.setHex(0xffff00);
					sphere4.material.color.setHex(0xff0000);
					str+="Vulture moved from 9 to 4\n";
					turn=0;
					loc=sphere4.id;
					return;
				}
			}
		}
		if(green==10){
			if(data[7]==1 && data[1]==0){
				data[7]=0;
				sphere8.material.color.setHex(0xffff00);
				sphere10.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[1]=2;
				str+="Auto kill\n";
				data[9]=0;
				green=2;
				sphere2.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere2.id;
				return;
			}
			if(data[6]==1 && data[0]==0){
				data[6]=0;
				sphere7.material.color.setHex(0xffff00);
				sphere10.material.color.setHex(0xffff00);
				kills++;
				visibleagain();
				data[0]=2;
				str+="Auto kill\n";
				data[9]=0;
				green=1;
				sphere1.material.color.setHex(0xff0000);
				vulture=0;
				loc=sphere1.id;
				return;
			}
			for(let i=0;i<intersects.length;i++){
				if(intersects[i].object.id==sphere5.id && data[4]==0){
					vulture=0;
					green=5;
					data[4]=2;
					data[9]=0;
					sphere10.material.color.setHex(0xffff00);
					sphere5.material.color.setHex(0xff0000);
					str+="Vulture moved from 10 to 5\n";
					turn=0;
					loc=sphere5.id;
					return;
				}
				if(intersects[i].object.id==sphere7.id && data[6]==0){
					vulture=0;
					green=7;
					data[6]=2;
					data[9]=0;
					sphere10.material.color.setHex(0xffff00);
					sphere7.material.color.setHex(0xff0000);
					str+="Vulture moved from 10 to 7\n";
					turn=0;
					loc=sphere7.id;
					return;
				}
				if(intersects[i].object.id==sphere8.id && data[7]==0){
					vulture=0;
					green=8;
					data[7]=2;
					data[9]=0;
					sphere10.material.color.setHex(0xffff00);
					sphere8.material.color.setHex(0xff0000);
					str+="Vulture moved from 10 to 8\n";
					turn=0;
					loc=sphere8.id;
					return;
				}
				if(intersects[i].object.id==sphere3.id && data[2]==0){
					vulture=0;
					green=3;
					data[2]=2;
					data[9]=0;
					sphere10.material.color.setHex(0xffff00);
					sphere3.material.color.setHex(0xff0000);
					str+="Vulture moved from 10 to 3\n";
					turn=0;
					loc=sphere3.id;
					return;
				}
			}
		}
	}
	str+="No recognizable objects were detected\n";
}

function crowWin(){
	if(green==1){
		if(data[5]==1 && data[6]==1 && data[8]==1 && data[9]==1){
			alert("Crows wins");
			str+="Crow wins\n";
			return;
		}
	}
	
	if(green==2){
		if(data[9]==1 && data[8]==1 && data[7]==1 && data[5]==1){
			alert("Crows wins");
			str+="Crow wins\n";
			return;
		}
	}
	if(green==3){
		if(data[9]==1 && data[8]==1 && data[7]==1 && data[6]==1){
			alert("Crows wins");
			str+="Crow wins\n";
			return;
		}
	}
	if(green==4){
		if(data[5]==1 && data[6]==1 && data[7]==1 && data[8]==1){
			alert("Crows wins");
			str+="Crow wins\n";
			return;
		}
	}
	if(green==5){
		if(data[5]==1 && data[6]==1 && data[7]==1 && data[9]==1){
			alert("Crows wins");
			str+="Crow wins\n";
			return;
		}
	}
	if(green==6){
		if(data[6]==1 && data[4]==1 && data[1]==1 && data[0]==1 && data[8]==0 && data[3]==0){
			alert("Crows wins");
			str+="Crow wins\n";
			return;
		}
	}
	if(green==7){
		if(data[3]==1 && data[4]==1 && data[5]==1 && data[0]==1 && data[9]==1 && data[2]==1){
			alert("Crows wins");
			str+="Crow wins\n";
			return;
		}
	}
	if(green==8){
		if(data[9]==1 && data[4]==1 && data[3]==1 && data[8]==1 && data[1]==1 && data[2]==1){
			alert("Crows wins");
			str+="Crow wins\n";
			return;
		}
	}
	if(green==9){
		if(data[0]==1 && data[1]==1 && data[5]==1 && data[3]==1 && data[7]==1 && data[2]==1){
			alert("Crows wins");
			str+="Crow wins\n";
			return;
		}
	}
	if(green==10){
		if(data[1]==1 && data[4]==1 && data[7]==1 && data[0]==1 && data[6]==1 && data[2]==1){
			alert("Crows wins");
			str+="Crow wins\n";
			return;
		}
	}
}

function onMouseMove( event ) 
{
    mousePosition.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mousePosition.y = - ( event.clientY / window.innerHeight ) * 2 + 1; 
}

let id;
function onClick( event ){
	//txt.append("hello  ");
	console.log(turn, crow);
	
	//sphere11.visible=false;
	//writing();
	if(turn==0 && crow==0){
		selectCrow();
	}
	if(turn==0 && crow==1){
		if(counter>=2){
			crow=0;
		}
		moveCrow();
		crowWin();
	}
	if(turn==1 && vulture==0){
		selectVulture();
	}
	if(turn==1 && vulture==1){
		moveVulture();
		if(kills>=4){
			alert("Vulture wins");
			str+="vulture wins\n";
		}
	}

}


//rendered.render(scene,camera);
function animate() {

	requestAnimationFrame( animate );
	orbit.update();
	rendered.render( scene, camera );
	

}
window.onload = function() 
{
document.getElementById('link').onclick = function(code) 
  {
this.href = 'data:text/plain;charset=utf-11,' + encodeURIComponent(str);
  
  };
};
window.addEventListener('mousemove',onMouseMove,false);
window.addEventListener('click',onClick); 
rendered.setAnimationLoop(animate);