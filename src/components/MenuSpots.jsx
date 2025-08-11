import { CylinderCollider, RigidBody } from "@react-three/rapier"
import { menu } from "../constants"
import { Cylinder, Text3D, Billboard } from "@react-three/drei"

export const MenuSpots = () => {
    // Making cylinder platforms with text for each menu item arranged in a circle
    return menu.flatMap((item, index) => (
        <group key={item.name}rotation-y={(index / menu.length) * Math.PI * 2}>
            <group position-x={3.5} position-z={-3.5}>
                <RigidBody colliders={false} type="fixed">
                    <CylinderCollider args={[0.3 / 2, 1.5]} />
                    <Cylinder scale={[1.5, 0.3, 1.5]}>
                        <meshStandardMaterial color={"white"} />
                    </Cylinder>
                </RigidBody>

                {/* Billboard locks the text facing the camera always */}
                <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
                    <Text3D font={"./fonts/Borel/Borel_Regular.json"} size={0.25} position-x={-1.2} position-y={0.25}>
                        {item.name}
                        <meshNormalMaterial />
                    </Text3D>
                </Billboard>
            </group>
        </group>
    ));
}

