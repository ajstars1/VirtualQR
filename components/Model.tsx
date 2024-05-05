import { useGLTF } from '@react-three/drei';

const Model = () => {

    const glb = useGLTF(`/porsche_gt3_rs/scene.gltf`);

  return <primitive object={glb.scene} />;
}

export default Model