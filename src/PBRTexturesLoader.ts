import { MeshStandardMaterial, TextureLoader } from "three";

const TextureMaps = {
    normals: "normals",
    roughness: "roughness",
    metallic: "metallic",
    albedo: "albedo"
};

export default class PBRTexturesLoader {
    private textureLoader = new TextureLoader();

    public loadPBRForMaterial = function(material: MeshStandardMaterial, texturePath: string, textureExtension: string): void {
    
        const allMapTypes = [
            TextureMaps.albedo,
            TextureMaps.roughness,
            TextureMaps.metallic,
            TextureMaps.normals
        ];    
        
        for (let i = 0; i < allMapTypes.length; i++) {
            const textureMap = allMapTypes[i];
    
            let typePath = "";
            if (textureMap === TextureMaps.normals) {
                typePath = "normals";
            } else if (textureMap === TextureMaps.roughness) {
                typePath = "roughness";
            } else if (textureMap === TextureMaps.albedo) {
                typePath = "albedo";
            } else if (textureMap === TextureMaps.metallic) {
                typePath = "metallic";
            }
    
            const textureURI = 'textures/' + texturePath + "_" + typePath + "." + textureExtension;
    
            const texture = this.textureLoader.load(textureURI);
            
            if (textureMap === TextureMaps.normals) {
                material.normalMap = texture;
            } else if (textureMap === TextureMaps.roughness) {
                material.roughnessMap = texture;
            } else if (textureMap === TextureMaps.albedo) {
                material.map = texture;
            } else if (textureMap === TextureMaps.metallic) {
                material.metalnessMap = texture;
            }
        }
    }
}