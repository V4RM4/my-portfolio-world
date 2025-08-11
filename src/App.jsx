import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 6, 14], fov: 42 }}>
      {/* change the args for background screen color */}
      <color attach="background" args={["#d9edf8"]} />
      <Suspense>
        <Physics debug>
          <Experience />
        </Physics>
      </Suspense>
    </Canvas>
  );
}

export default App;