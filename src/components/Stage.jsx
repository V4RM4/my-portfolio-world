import { useGLTF } from '@react-three/drei'

export function Stage(props) {
  const { nodes, materials } = useGLTF('./models/Stage.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.cactus_01.geometry} material={materials['Material.018']} position={[-9.504, 0.494, -1.5]} rotation={[0, 0.492, 0]} scale={[0.102, 0.428, 0.162]} />
      <mesh geometry={nodes.cactus_02.geometry} material={materials['Material.019']} position={[-3.298, 0.848, -8.586]} rotation={[0, 0.059, 0]} scale={[0.162, 0.858, 0.162]} />
      <mesh geometry={nodes.cloud.geometry} material={nodes.cloud.material} position={[-5.105, 1.262, -23.575]} scale={1.815} />
      <mesh geometry={nodes.footing_02.geometry} material={materials['Material.037']} position={[0.068, 0.165, -0.085]} scale={4.923}>
        <mesh geometry={nodes.footing.geometry} material={materials['Material.036']} position={[-0.014, -0.066, 0.017]} scale={1.028} />
      </mesh>
      <mesh geometry={nodes.cloud001.geometry} material={nodes.cloud001.material} position={[1.403, 2.101, -24.368]} rotation={[0, 0.222, 0]} scale={1.4} />
      <mesh geometry={nodes.cloud002.geometry} material={nodes.cloud002.material} position={[9.071, 1.583, -24.139]} rotation={[0, 0.222, 0]} scale={2.408} />
    </group>
  )
}

useGLTF.preload('./models/Stage.gltf')