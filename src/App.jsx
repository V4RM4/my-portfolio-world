import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense, useMemo } from "react";
import { Physics } from "@react-three/rapier";
import { Controls } from "./components/Controls";
import { KeyboardControls } from "@react-three/drei";

function App() {

  const controls = useMemo(() => [
    { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
    { name: Controls.backward, keys: ["ArrowDown", "KeyS"] },
    { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
    { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    { name: Controls.jump, keys: ["Space"] },
  ], [])
  return (
    <KeyboardControls map={controls}>
      <Canvas shadows camera={{ position: [0, 6, 14], fov: 49 }}>
        {/* change the args for background screen color */}
        <color attach="background" args={["#e3daf7"]} />
        <Suspense>
          <Physics debug>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  );
}

export default App;