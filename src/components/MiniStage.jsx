import { useGLTF } from '@react-three/drei'

export function MiniStage(props) {
  const { nodes, materials } = useGLTF('./models/Stage.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.cloud.geometry} material={nodes.cloud.material} position={[-5.105, 1.262, -23.575]} scale={1.815} />
      <mesh geometry={nodes.footing_02.geometry} material={materials['Material.037']} position={[0.068, 0.165, -0.085]} scale={4.923}>
        <mesh geometry={nodes.footing.geometry} material={materials['Material.036']} position={[-0.014, -0.066, 0.017]} scale={1.028} />
      </mesh>
      <mesh geometry={nodes.cloud001.geometry} material={nodes.cloud001.material} position={[1.403, 4.101, -24.368]} rotation={[0, 0.222, 0]} scale={1.4} />
      <mesh geometry={nodes.cloud002.geometry} material={nodes.cloud002.material} position={[11.071, 2.583, -24.139]} rotation={[0, 0.222, 0]} scale={2.408} />
    </group>
  )
}

useGLTF.preload('./models/Stage.gltf')