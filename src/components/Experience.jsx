import { ContactShadows, Cylinder, Environment, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier";
import { Building } from "./Building";
import { MenuSpots } from "./MenuSpots";
import { CharacterController } from "./CharacterController";
import { Stage } from "./Stage";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      {/* Lights */}
      <Environment preset="sunset" />
      <directionalLight position={[5, 5, 5]} intensity={0.3} castShadow color={"#dedaf4"} />

      {/* Background */}

      {/* (City Building with Roof Garden by Anonymous [CC-BY] via Poly Pizza) - Thank you! */}
      <group position-y={-2}>
        <Building scale={[7, 7, 7]} position={[0, 5, -10]} rotation-y={1.6}/>
        <Building scale={[5, 5, 5]} position={[-8, 3.5, -2]} rotation-y={2.8}/>
        <Building scale={[5, 5, 5]} position={[8, 3.5, -2]} rotation-y={0.3}/>
      </group>
      
      {/* Stage */}
      <group position-y={-1}>
        {/* Floor */}
        <RigidBody colliders={false} type="fixed" name="void">
            <mesh position={[0, -0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[50, 50]} />
                <meshBasicMaterial color={"#e3daf7"} toneMapped={false} />
            </mesh>

            {/* Colliding body to bring the character back to stage */}
            <CuboidCollider position={[0, -3.5, 0]} args={[50, 0.1, 50]} sensor />
        </RigidBody>

        <ContactShadows frames={1} position={[0, -0.88, 0]} scale={80} opacity={0.42} far={50} blur={0.8} color={"#aa9acd"} /> 

        <Stage position-y={-1}/>
        <RigidBody colliders={false} type="fixed" position-y={-0.5}>
        <CylinderCollider args={[1/2, 5]}/>
      </RigidBody>

      {/* Character */}
      <CharacterController />

      {/* Texts */}
      <MenuSpots />
      </group>
    </>
  );
};