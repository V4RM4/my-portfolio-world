import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense, useMemo } from "react";
import { Physics } from "@react-three/rapier";
import { Controls } from "./components/Controls";
import { KeyboardControls, Loader, useFont, useProgress } from "@react-three/drei";
import { Leva } from "leva";
import { TextDisplay } from "./components/TextDisplay";

function App() {
  useFont.preload('./fonts/Borel/Borel_Regular.json')
  const controls = useMemo(() => [
    { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
    { name: Controls.backward, keys: ["ArrowDown", "KeyS"] },
    { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
    { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    { name: Controls.jump, keys: ["Space"] },
  ], [])

  const {progress} = useProgress();
  return (
    <KeyboardControls map={controls}>
      <Leva hidden />
      <Canvas shadows camera={{ position: [0, 6, 14], fov: 49 }}>
        {/* change the args for background screen color */}
        <color attach="background" args={["#e3daf7"]} />
        <Suspense>
          <Physics>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
      <Loader />
      {progress === 100}
      <TextDisplay />
    </KeyboardControls>
  );
}

export default App;