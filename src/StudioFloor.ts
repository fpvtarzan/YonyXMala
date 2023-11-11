import { Vector3, BufferGeometry, BufferAttribute } from "three";
import BaseMesh from "./BaseMesh";

export default class StudioFloor extends BaseMesh {
    
    constructor(width: number, height: number, center: Vector3) {
        super();
        var geom = new BufferGeometry();

        const vertices = new Float32Array(
            [
                -width/2, 0, -height/2,
                width/2,  0, -height/2,
                -width/2, 0, height/2,
                width/2, 0, height/2,
            ]
        );

        const uvs = new Float32Array(
            [
                0.0, 0.0,
                1.0, 0.0,
                0.0, 1.0,
                1.0, 1.0
            ]
        );
        
        const indexes = [
            2, 1, 0, 1, 2, 3
        ];


        geom.setAttribute( 'position', new BufferAttribute( vertices, 3 ) );
        geom.setAttribute( 'uv', new BufferAttribute( uvs, 2 ) );

        geom.setIndex( indexes );
        geom.computeVertexNormals ();

        this.mesh.geometry = geom;
        this.mesh.material = this.material;

        this.mesh.position.set(center.x, center.y, center.z);
        
        this.loadTextures("shades-tile", "png");
    }


}