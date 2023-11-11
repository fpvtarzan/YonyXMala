import * as THREE from 'three';
export default class Renderer 
{
    cube: any;
    renderer: any;
    camera: any;
    scene: any;
    constructor ()
    {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );
        
        
        const geometry = new THREE.BoxGeometry( 1, 2, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );
        
        this.camera.position.z = 5;
        
    }
 
    animate():void
    {
        const animator = this.animate
        requestAnimationFrame( () => 
            {
            this.animate
             } );
        this.renderer.render( this.scene, this.camera );
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    }
}