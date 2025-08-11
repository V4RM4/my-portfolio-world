import { Cylinder, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { Building } from "./Building";
import { MenuSpots } from "./MenuSpots";
import { CharacterController } from "./CharacterController";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      {/* Lights */}
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow color={"#dedaf4"} />

      {/* Background */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial blur={[400, 400]} resolution={1024} mixBlur={1} mixStrength={15} depthScale={1} minDepthThreshold={0.85} color={"#dbecfb"} metalness={0.6} roughness={0} />
      </mesh>

      {/* (City Building with Roof Garden by Anonymous [CC-BY] via Poly Pizza) - Thank you! */}
      <group position-y={-2}>
        <Building scale={[7, 7, 7]} position={[0, 5.5, -10]} rotation-y={1.6}/>
        <Building scale={[5, 5, 5]} position={[-8, 4, -2]} rotation-y={2.8}/>
        <Building scale={[5, 5, 5]} position={[8, 4, -2]} rotation-y={0.3}/>
      </group>
      
      {/* Stage */}
      <group position-y={-1}>
        <RigidBody colliders={false} type="fixed" position-y={-0.5}>
        <CylinderCollider args={[1/2, 5]}/>
        <Cylinder scale={[5, 1, 5]} receiveShadow>
            <meshStandardMaterial color={ "white"} />
        </Cylinder>
      </RigidBody>

      {/* Character */}
      <CharacterController />

      {/* Texts */}
      <MenuSpots />
      </group>
    </>
  );
};