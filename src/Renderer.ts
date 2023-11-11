import * as THREE from 'three';
import BaseMesh from './BaseMesh';
export default class Renderer 
{
    cube: any;
    private renderer: THREE.WebGLRenderer;
    private camera: THREE.PerspectiveCamera;
    private scene: THREE.Scene;

    constructor ()
    {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );

        // Ambient light

        const ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
        this.scene.add( ambientLight );

        // Main light source

        const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        directionalLight.position.x = 0.0,
        directionalLight.position.y = 1.0,
        directionalLight.position.z = 1.0,

        directionalLight.position.normalize();

        this.scene.add( directionalLight );

        // Distance fog

        this.scene.fog = new THREE.Fog( 0x3366ff, 0.1, 10 );
        
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );
        
        
        const geometry = new THREE.BoxGeometry( 1, 2, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );
    }
 
    public animate(): void
    {
        requestAnimationFrame( () => 
            {
                this.animate()
            } 
        );
        this.renderer.render( this.scene, this.camera );
    }

    public setCamera(lookAt: THREE.Vector3, lookFrom: THREE.Vector3): void {
        this.camera.position.set(lookFrom.x, lookFrom.y, lookFrom.z);
        this.camera.lookAt(lookAt.x, lookAt.y, lookAt.z);
    }

    public addMesh(baseMesh: BaseMesh): void {
        this.scene.add(baseMesh.mesh);
    }
}