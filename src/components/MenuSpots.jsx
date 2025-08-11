import { CylinderCollider, RigidBody } from "@react-three/rapier"
import { menu } from "../constants"
import { Text3D, Billboard, Center, Sphere } from "@react-three/drei"
import { useControls } from "leva";
import { MiniStage } from "./MiniStage";

export const MenuSpots = () => {

    // for the menu item glass spheres
    const config = useControls({
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: { value: 10, min: 1, max: 32, step: 1 },
    resolution: { value: 2048, min: 256, max: 2048, step: 256 },
    transmission: { value: 1, min: 0, max: 1 },
    roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
    thickness: { value: 0, min: 0, max: 10, step: 0.01 },
    ior: { value: 1, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0, min: 0, max: 1 },
    anisotropy: { value: 0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 1, min: 0, max: 1 },
    attenuationDistance: { value: 1, min: 0, max: 10, step: 0.01 },
    attenuationColor: "#ffffff",
    color: "#befffdff",
    bg: "#ffffff",
  });

    // Making cylinder platforms with text for each menu item arranged in a circle
    return menu.flatMap((item, index) => (
        <group key={item.name} rotation-y={(index / menu.length) * Math.PI * 2}>
            <group position-x={3.5} position-z={-3.5}>
                <RigidBody colliders={false} type="fixed" name={`menu-${item.name}`}>
                    <CylinderCollider args={[0.3 / 2, 1.5]} />
                    <MiniStage scale={[0.3, 0.3, 0.3]}/>
                </RigidBody>
                
                {/* sensor for collision detection */}
                <RigidBody colliders={false} type="fixed" sensor name={`menu-sensor-${item.name}`}>
                    <CylinderCollider args={[1.5, 2]} position={[0, 0, 0]} />
                </RigidBody>
                <Sphere scale={1.5}>
                    <meshPhysicalMaterial {...config} />
                </Sphere>

                {/* Billboard locks the text facing the camera always */}
                <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
                    <Center position-y={0.5}>
                        <Text3D font={"./fonts/Borel/Borel_Regular.json"} size={0.25} position-x={-1.2} position-y={0.25} color="red">
                            {item.name}
                            <meshNormalMaterial />
                        </Text3D>
                    </Center>
                </Billboard>
            </group>
        </group>
    ));
}

