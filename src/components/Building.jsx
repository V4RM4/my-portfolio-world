import { useGLTF } from '@react-three/drei'

export function Building(props) {
  const { nodes, materials } = useGLTF('./models/Building.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat21} />
      <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat3} />
      <mesh geometry={nodes['Node-Mesh_2'].geometry} material={materials.mat17} />
      <mesh geometry={nodes['Node-Mesh_3'].geometry} material={materials.mat15} />
      <mesh geometry={nodes['Node-Mesh_4'].geometry} material={materials.mat24} />
      <mesh geometry={nodes['Node-Mesh_5'].geometry} material={materials.mat9} />
      <mesh geometry={nodes['Node-Mesh_6'].geometry} material={materials.mat20} />
      <mesh geometry={nodes['Node-Mesh_7'].geometry} material={materials.mat10} />
      <mesh geometry={nodes['Node-Mesh_8'].geometry} material={materials.mat12} />
      <mesh geometry={nodes['Node-Mesh_9'].geometry} material={materials.mat7} />
      <mesh geometry={nodes['Node-Mesh_10'].geometry} material={materials.mat18} />
      <mesh geometry={nodes['Node-Mesh_11'].geometry} material={materials.mat25} />
      <mesh geometry={nodes['Node-Mesh_12'].geometry} material={materials.mat16} />
      <mesh geometry={nodes['Node-Mesh_13'].geometry} material={materials.mat23} />
    </group>
  )
}

useGLTF.preload('./models/Building.glb')
