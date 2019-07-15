import { Mesh, BoxGeometry, SphereGeometry, MeshPhongMaterial } from 'three';
import { ThreeBSP } from '../../index.js' 

export const meshFactory = () => {
  const box = new  Mesh(new BoxGeometry(500, 100, 100));
  const sphere = new  Mesh(new  SphereGeometry(100, 50, 50));

  const sBSP = new ThreeBSP(sphere);
  const bBSP = new ThreeBSP(box);

  const sub = bBSP.subtract(sBSP);
  const newMesh = sub.toMesh();

  newMesh.material = new  MeshPhongMaterial({ color: 0xdddddd, specular: 0x1a1a1a, shininess: 30, shading: THREE.FlatShading });

  return Object.assign({}, { csg: newMesh });
};
