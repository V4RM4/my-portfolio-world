import { Cylinder, OrbitControls } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { Building } from "./Building";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      {/* Lights */}
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow color={"#dedaf4"} />

      {/* Background (City Building with Roof Garden by Anonymous [CC-BY] via Poly Pizza) - Thank you! */}
      <Building scale={[7,7,7]} position={[0, 5, -10]} rotation-y={1.6}/>
      <Building scale={[5,5,5]} position={[-8, 4, -2]} rotation-y={2.8}/>
      <Building scale={[5,5,5]} position={[8, 4, -2]} rotation-y={0.3}/>
      
      {/* Stage */}
      <RigidBody colliders={false} type="fixed" position-y={-0.5}>
        <CylinderCollider args={[1/2, 5]}/>
        <Cylinder scale={[5, 1, 5]} receiveShadow>
            <meshStandardMaterial color={ "white"} />
        </Cylinder>
      </RigidBody>
    </>
  );
};