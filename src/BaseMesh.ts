import { Mesh, MeshStandardMaterial } from "three";
import PBRTexturesLoader from "./PBRTexturesLoader";

const texturesLoader = new PBRTexturesLoader();

export default abstract class BaseMesh {
    
    protected material = new MeshStandardMaterial();
    public readonly mesh = new Mesh();
    
    constructor() {
    }

    public loadTextures(textureName: string, textureExtension: string): void {
        texturesLoader.loadPBRForMaterial(this.material, textureName, textureExtension);
    }

    
}