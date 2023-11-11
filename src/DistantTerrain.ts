import { Vector3, BufferGeometry, BufferAttribute } from "three";
import BaseMesh from "./BaseMesh";

export default class DistantTerrain extends BaseMesh {
    
    constructor(width: number, height: number, center: Vector3) {
        super();
        var geom = new BufferGeometry();

        const xResolution = 256;
        const yResolution = 256;

        const vertices = new Float32Array((xResolution + 1) * (yResolution + 1) * 3);
        
        for (let i = 0; i <= xResolution; i++) {
            const xRatio = i / xResolution;
            const x = xRatio * width;
            for (let j = 0; j <= yResolution; j++) {
                const yRatio = j / xResolution;
                const y = yRatio * yRatio;

                vertices[(i * xResolution + j) * 3 + 0] = x;
                vertices[(i * xResolution + j) * 3 + 1] = x;
                vertices[(i * xResolution + j) * 3 + 2] = x;
            }
        }
        

        // const uvs = new Float32Array(
        //     [
        //         0.0, 0.0,
        //         1.0, 0.0,
        //         0.0, 1.0,
        //         1.0, 1.0
        //     ]
        // );
        
        const indexes = [
            2, 1, 0, 1, 2, 3
        ];


        geom.setAttribute( 'position', new BufferAttribute( vertices, 3 ) );
        // geom.setAttribute( 'uv', new BufferAttribute( uvs, 2 ) );

        geom.setIndex( indexes );
        geom.computeVertexNormals ();

        this.mesh.geometry = geom;
        this.mesh.material = this.material;

        this.mesh.position.set(center.x, center.y, center.z);
        
        // this.loadTextures("shades-tile", "png");
    }


}