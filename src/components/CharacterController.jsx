import { CapsuleCollider, RigidBody, vec3 } from "@react-three/rapier";
import Character from "./Character";
import { useKeyboardControls } from "@react-three/drei";
import { Controls } from "./Controls";
import { PlayAudio } from "./PlayAudio";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const JUMP_FORCE = 0.02;
const MOVEMENT_SPEED = 0.1;
const MAX_VELOCITY = 3;

export const CharacterController = () => {
    // keyboard litstener for each direction and jumping
    const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
    const leftPressed = useKeyboardControls((state) => state[Controls.left]);
    const rightPressed = useKeyboardControls((state) => state[Controls.right]);
    const backwardPressed = useKeyboardControls((state) => state[Controls.backward]);
    const forwardPressed = useKeyboardControls((state) => state[Controls.forward]);

    // reference to the physics body of character
    const rigidbody = useRef();

    // for every frame to handle movement
    useFrame(() => {

        // how fast the character is currently moving
        const linearVelocity = rigidbody.current.linvel();
        let changeRotation = false;

        // a force object to push the character in different directions
        const impulse = {x: 0, y: 0, z: 0};
        
        // for jumping, obviously
        if (jumpPressed){
            impulse.y += JUMP_FORCE;
        }

        // push the character right if right keyboard press and below max velocity
        if (rightPressed && linearVelocity.x < MAX_VELOCITY){
            impulse.x += MOVEMENT_SPEED;
            changeRotation = true;
        }

        // same as above but left
        if (leftPressed && linearVelocity.x > -MAX_VELOCITY){
            impulse.x -= MOVEMENT_SPEED;
            changeRotation = true;
        }

        // same as above but mocing back
        if (backwardPressed  && linearVelocity.z < MAX_VELOCITY){
            impulse.z += MOVEMENT_SPEED;
            changeRotation = true;
        }

        // same as above but moving forward
        if (forwardPressed && linearVelocity.z > -MAX_VELOCITY){
            impulse.z -= MOVEMENT_SPEED;
            changeRotation = true;
        }

        // Apply the force to move the character
        rigidbody.current?.applyImpulse(impulse, true);

        // rotating the character based on movement direction
        if (changeRotation){
            const angle = Math.atan2(linearVelocity.x, linearVelocity.z);
            character.current.rotation.y = angle;
        }
    });

    const character = useRef();
    const resetPosition = () => {
        // resetting position on falling down
        rigidbody.current.setTranslation(vec3({x: 0, y: 0, z:0}));
    }
    
    return(
        <group>
            {/* physics body that can move and collide with things */}
            <RigidBody 
                ref={rigidbody} 
                colliders={false} 
                scale={[0.5, 0.5, 0.5]} 
                enabledRotations={[false, false, false]} 
                friction={2}
                onCollisionEnter={() => {
                    PlayAudio("boing")
                }}
                onIntersectionEnter={({other}) => {
                    if(other.rigidBodyObject.name === "void" ){
                        resetPosition();
                    }
                }}
            >
                {/* Invisible capsule shape for collision detection */}
                <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
                <group ref={character}>
                    <Character />
                </group>
            </RigidBody>
        </group>
    );
}