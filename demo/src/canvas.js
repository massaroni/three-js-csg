import { PerspectiveCamera, Scene, WebGLRenderer  } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export const renderer = () => {
  const scene = new  Scene();
  const cam = new  PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1 / 10000);

  const controls = new OrbitControls(cam);

  const rend = new  WebGLRenderer();
  rend.setSize(window.innerWidth, window.innerHeight);
  rend.setClearColor(0xff6347);
  cam.position.z = 1000;

  const app = Object.assign({}, {
    scene,
    cam,
    rend,
    controls,
  });


  return app;
};
