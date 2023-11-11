import { Vector3 } from "three";
import Renderer from "./Renderer";
import StudioFloor from "./StudioFloor";


const wheelOfFortuneCenter = new Vector3(0, 40, 0); // High up
const cameraPosition = new Vector3(wheelOfFortuneCenter.x - 5.0, wheelOfFortuneCenter.y + 1.25, wheelOfFortuneCenter.z);

// Create the threejs renderer
const renderer = new Renderer();

// Set the camera to focus on the wheel of fortune center
renderer.setCamera(wheelOfFortuneCenter, cameraPosition);

const studioFloor = new StudioFloor(12.0, 8.0, wheelOfFortuneCenter);

renderer.addMesh(studioFloor);

renderer.animate();
