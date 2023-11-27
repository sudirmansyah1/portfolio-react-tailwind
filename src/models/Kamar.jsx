import { useFrame } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, Html } from "@react-three/drei";

import Kamar3d from "../assets//3D/kamar.glb"
export function Room(props) {
  const meshRef = useRef();

  const { nodes, materials } = useGLTF(Kamar3d);
  return (
    <group {...props} dispose={null}>
      <group position={[-17.042, 7.693, 15.735]} scale={0.766}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.material_0}
          position={[-3.713, -0.64, 1.527]}
          rotation={[0.081, 0.691, -3.126]}
        />
      </group>
      <group
        position={[-0.391, 0.106, 0.016]}
        rotation={[1.573, -0.45, -1.571]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_94.geometry}
          material={materials["book_cover.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_95.geometry}
          material={materials["stacked_paper.001"]}
        />
      </group>
      <group
        position={[-0.368, 0.111, 0.015]}
        rotation={[1.571, -0.427, -1.572]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_97.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_98.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[-0.352, 0.085, 0.032]}
        rotation={[1.57, -0.323, -1.575]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_100.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_101.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group position={[-0.286, 0.1, 0.032]} rotation={[1.57, -0.218, -1.573]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_103.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_104.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[-0.297, 0.116, 0.021]}
        rotation={[1.569, -0.22, -1.575]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_106.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_107.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group position={[-0.314, 0.114, 0.018]} rotation={[1.57, -0.22, -1.575]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_109.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_110.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group position={[-0.27, 0.099, 0.02]} rotation={[1.57, -0.217, -1.574]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_112.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_113.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[-0.146, 0.103, 0.018]}
        rotation={[1.571, -0.2, -1.569]}
        scale={1.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_115.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_116.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[-0.193, 0.12, 0.018]}
        rotation={[1.572, -0.206, -1.567]}
        scale={1.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_118.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_119.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[-0.175, 0.122, 0.017]}
        rotation={[1.569, -0.205, -1.569]}
        scale={1.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_121.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_122.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[-0.164, 0.104, 0.012]}
        rotation={[1.571, -0.204, -1.569]}
        scale={1.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_124.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_125.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[-0.222, 0.091, 0.021]}
        rotation={[1.571, -0.214, -1.569]}
        scale={1.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_127.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_128.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[-0.233, 0.123, 0.014]}
        rotation={[1.57, -0.214, -1.572]}
        scale={1.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_130.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_131.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[-0.251, 0.118, 0.018]}
        rotation={[1.57, -0.215, -1.573]}
        scale={1.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_133.geometry}
          material={materials["book_cover.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_134.geometry}
          material={materials["stacked_paper.001"]}
        />
      </group>
      <group
        position={[-0.129, 0.119, 0.016]}
        rotation={[1.571, -0.201, -1.569]}
        scale={1.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_136.geometry}
          material={materials["book_cover.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_137.geometry}
          material={materials["stacked_paper.001"]}
        />
      </group>
      <group
        position={[-0.111, 0.123, 0.017]}
        rotation={[1.571, -0.201, -1.568]}
        scale={1.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_139.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_140.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[-0.095, 0.091, 0.019]}
        rotation={[1.571, -0.152, -1.569]}
        scale={1.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_142.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_143.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[-0.036, 0.105, 0.025]}
        rotation={[1.571, -0.106, -1.569]}
        scale={1.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_145.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_146.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[-0.048, 0.123, 0.015]}
        rotation={[1.572, -0.106, -1.569]}
        scale={1.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_148.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_149.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[-0.066, 0.12, 0.018]}
        rotation={[1.57, -0.108, -1.57]}
        scale={1.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_151.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_152.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[-8.222, 6.22, 7.145]}
        rotation={[3.06, -1.567, -Math.PI]}
        scale={[0.205, 0.111, 0.205]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_270.geometry}
          material={materials.Basic_Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_271.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group
        position={[-0.018, 0.104, 0.024]}
        rotation={[1.571, -0.102, -1.571]}
        scale={1.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_154.geometry}
          material={materials.book_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_155.geometry}
          material={materials.stacked_paper}
        />
      </group>
      <group
        position={[10.893, 13.617, 9.903]}
        rotation={[0.004, 0.008, 0.003]}
        scale={[14.241, 14.241, 12.272]}
      >
        <group
          position={[-0.015, 0.104, 0.001]}
          rotation={[1.571, -0.102, -1.571]}
          scale={1.045}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_31.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.063, 0.12, -0.005]}
          rotation={[1.57, -0.108, -1.57]}
          scale={1.045}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_35.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.045, 0.123, -0.008]}
          rotation={[1.572, -0.106, -1.569]}
          scale={1.045}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_37.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.033, 0.105, 0.002]}
          rotation={[1.571, -0.106, -1.569]}
          scale={1.045}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_40.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_41.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.092, 0.091, -0.004]}
          rotation={[1.571, -0.152, -1.569]}
          scale={1.045}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_43.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_44.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.108, 0.123, -0.006]}
          rotation={[1.571, -0.201, -1.568]}
          scale={1.045}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_46.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_47.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.126, 0.119, -0.007]}
          rotation={[1.571, -0.201, -1.569]}
          scale={1.045}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_49.geometry}
            material={materials["book_cover.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_50.geometry}
            material={materials["stacked_paper.001"]}
          />
        </group>
        <group
          position={[-0.248, 0.118, -0.005]}
          rotation={[1.57, -0.215, -1.573]}
          scale={1.045}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_52.geometry}
            material={materials["book_cover.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_53.geometry}
            material={materials["stacked_paper.001"]}
          />
        </group>
        <group
          position={[-0.23, 0.123, -0.009]}
          rotation={[1.57, -0.214, -1.572]}
          scale={1.045}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_55.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_56.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.219, 0.091, -0.002]}
          rotation={[1.571, -0.214, -1.569]}
          scale={1.045}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_58.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_59.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.161, 0.104, -0.011]}
          rotation={[1.571, -0.204, -1.569]}
          scale={1.045}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_61.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_62.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.172, 0.122, -0.006]}
          rotation={[1.569, -0.205, -1.569]}
          scale={1.045}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_64.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_65.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.19, 0.12, -0.005]}
          rotation={[1.572, -0.206, -1.567]}
          scale={1.045}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_67.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_68.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.143, 0.103, -0.006]}
          rotation={[1.571, -0.2, -1.569]}
          scale={1.045}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_70.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_71.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.267, 0.099, -0.003]}
          rotation={[1.57, -0.217, -1.574]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_73.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_74.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.311, 0.114, -0.005]}
          rotation={[1.57, -0.22, -1.575]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_76.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_77.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.294, 0.116, -0.002]}
          rotation={[1.569, -0.22, -1.575]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_79.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_80.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.283, 0.1, 0.009]}
          rotation={[1.57, -0.218, -1.573]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_82.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_83.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.349, 0.085, 0.008]}
          rotation={[1.57, -0.323, -1.575]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_85.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_86.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.365, 0.111, -0.008]}
          rotation={[1.571, -0.427, -1.572]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_88.geometry}
            material={materials.book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_89.geometry}
            material={materials.stacked_paper}
          />
        </group>
        <group
          position={[-0.388, 0.106, -0.007]}
          rotation={[1.573, -0.45, -1.571]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_91.geometry}
            material={materials["book_cover.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_92.geometry}
            material={materials["stacked_paper.001"]}
          />
        </group>
      </group>
      <group
        position={[2.755, 13.626, 9.951]}
        rotation={[-0.006, -0.005, 0]}
        scale={9.808}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_166.geometry}
          material={materials["Material.020"]}
          position={[0.009, 0.147, -0.015]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_168.geometry}
          material={materials["Material.020"]}
          position={[0.013, 0.118, 0.018]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_170.geometry}
          material={materials["Material.020"]}
          position={[-0.02, 0.149, -0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_172.geometry}
          material={materials["Material.020"]}
          position={[-0.008, 0.152, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_174.geometry}
          material={materials["Material.020"]}
          position={[0.028, 0.182, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_176.geometry}
          material={materials["Material.020"]}
          position={[0.007, 0.092, 0.019]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_178.geometry}
          material={materials["Material.020"]}
          position={[-0.02, 0.158, 0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_180.geometry}
          material={materials["Material.020"]}
          position={[0.025, 0.065, -0.023]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_182.geometry}
          material={materials["Material.020"]}
          position={[0.048, 0.243, 0.011]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_184.geometry}
          material={materials["Material.020"]}
          position={[0.005, 0.212, -0.035]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_186.geometry}
          material={materials["Material.020"]}
          position={[-0.011, 0.209, 0.041]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_188.geometry}
          material={materials["Material.020"]}
          position={[-0.004, 0.055, -0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_190.geometry}
          material={materials["Material.020"]}
          position={[0.013, 0.206, 0.018]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_192.geometry}
          material={materials["Material.020"]}
          position={[0.021, 0.16, -0.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_194.geometry}
          material={materials["Material.020"]}
          position={[-0.013, 0.195, 0.004]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_164.geometry}
          material={materials["Material.020"]}
          position={[0.018, 0.151, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_196.geometry}
          material={materials["Material.020"]}
          position={[-0.009, 0.338, 0.018]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_198.geometry}
          material={materials["Material.019"]}
          position={[0.001, 0.084, 0.001]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_200.geometry}
          material={materials["Material.020"]}
          position={[0.091, 0.28, -0.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_202.geometry}
          material={materials["Material.020"]}
          position={[-0.033, 0.269, -0.071]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_204.geometry}
          material={materials["Material.020"]}
          position={[0.057, 0.379, 0.012]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_206.geometry}
          material={materials["Material.020"]}
          position={[0.018, 0.307, -0.027]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_208.geometry}
          material={materials["Material.020"]}
          position={[0.019, 0.304, -0.028]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_210.geometry}
          material={materials["Material.020"]}
          position={[0.056, 0.374, 0.015]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_212.geometry}
          material={materials["Material.020"]}
          position={[0.007, 0.373, 0.027]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_214.geometry}
          material={materials["Material.020"]}
          position={[0.008, 0.369, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_216.geometry}
          material={materials["Material.020"]}
          position={[-0.022, 0.362, -0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_218.geometry}
          material={materials["Material.020"]}
          position={[-0.023, 0.361, -0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_220.geometry}
          material={materials["Material.020"]}
          position={[0.002, 0.236, -0.021]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_222.geometry}
          material={materials["Material.020"]}
          position={[0.04, 0.298, 0.075]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_224.geometry}
          material={materials["Material.020"]}
          position={[0.039, 0.299, 0.074]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_226.geometry}
          material={materials["Material.020"]}
          position={[-0.018, 0.227, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_228.geometry}
          material={materials["Material.020"]}
          position={[0.029, 0.36, -0.001]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_230.geometry}
          material={materials["Material.020"]}
          position={[-0.013, 0.229, 0.015]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_232.geometry}
          material={materials["Material.020"]}
          position={[0.028, 0.357, -0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_234.geometry}
          material={materials["Material.020"]}
          position={[0.096, 0.341, 0.021]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_236.geometry}
          material={materials["Material.020"]}
          position={[0.095, 0.341, 0.023]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_238.geometry}
          material={materials["Material.020"]}
          position={[0.016, 0.212, -0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_240.geometry}
          material={materials["Material.020"]}
          position={[-0.033, 0.307, 0.085]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_242.geometry}
          material={materials["Material.020"]}
          position={[-0.034, 0.307, 0.084]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_244.geometry}
          material={materials["Material.020"]}
          position={[0.014, 0.322, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_246.geometry}
          material={materials["Material.020"]}
          position={[0.013, 0.32, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_248.geometry}
          material={materials["Material.020"]}
          position={[0.004, 0.347, -0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_250.geometry}
          material={materials["Material.020"]}
          position={[0.001, 0.344, -0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_252.geometry}
          material={materials["Material.020"]}
          position={[-0.037, 0.336, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_254.geometry}
          material={materials["Material.020"]}
          position={[-0.038, 0.332, -0.001]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_256.geometry}
          material={materials["Material.020"]}
          position={[-0.004, 0.31, -0.084]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_258.geometry}
          material={materials["Material.020"]}
          position={[-0.002, 0.31, -0.083]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_260.geometry}
          material={materials["Material.020"]}
          position={[0.007, 0.219, 0.018]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_262.geometry}
          material={materials["Material.020"]}
          position={[-0.003, 0.228, -0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_264.geometry}
          material={materials["Material.020"]}
          position={[-0.052, 0.292, 0.037]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_266.geometry}
          material={materials["Material.020"]}
          position={[-0.053, 0.293, 0.034]}
        />
      </group>
      <group
        position={[-5.014, 8.375, 9.088]}
        rotation={[Math.PI, -0.175, Math.PI]}
        scale={9.341}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_287.geometry}
          material={materials["Material.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_288.geometry}
          material={materials.Screen}
        />
      </group>
      <group
        position={[-10.629, 8.375, 9.101]}
        rotation={[-Math.PI, 0.175, -Math.PI]}
        scale={9.341}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_290.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_291.geometry}
          material={materials.Screen}
        />
      </group>
      <group
        position={[-16.421, 6.831, 18.312]}
        rotation={[0, -1.571, 0]}
        scale={3.941}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_301.geometry}
          material={materials["Material.016"]}
          position={[0.216, 0, 0.599]}
          rotation={[0, 0.781, 0]}
        />
      </group>
      <group position={[10.52, 15.665, -14.569]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.Nikon}
        />
      </group>
      <group
        position={[-8.984, 14.675, 10.027]}
        rotation={[3.029, 0, Math.PI]}
        scale={18.154}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
        >
        <Html position={[0, 0, 0]} scale={[0.078,0.093,0.05]} transform>
              <TvTexture />
        </Html>  
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.Screen}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_275.geometry}
        material={materials.Screen}
        position={[-7.594, 5.711, 1.186]}
        rotation={[0, -0.284, 0]}
        scale={2.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials["Material.014"]}
        position={[6.314, 5.902, 6.554]}
        rotation={[-0.193, 0, 0]}
        scale={[-13.684, -1.865, -18.739]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials["Material.016"]}
        position={[5.774, 4.373, -0.444]}
        scale={[5.771, 8.268, 6.29]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_277.geometry}
        material={materials.Leather_blue}
        position={[-5.556, 4.537, 2.392]}
        rotation={[0, -0.284, 0]}
        scale={[2.043, 2.143, 2.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials["Material.016"]}
        position={[-10.9, 1.817, -12.215]}
        scale={[0.861, 1, 1.122]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_157.geometry}
        material={materials.Screen}
        position={[-0.579, 8.513, 8.26]}
        scale={[0.917, 1.173, 1.173]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_159.geometry}
        material={materials.material_0}
        position={[0.132, 8.09, 5.95]}
        scale={1.173}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_268.geometry}
        material={materials.BlackPlastic}
        position={[-5.652, 6.228, 7.489]}
        rotation={[3.06, -1.567, -Math.PI]}
        scale={[1.159, 0.14, 3.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_303.geometry}
        material={materials.Screen}
        position={[10.979, 17.258, -3.708]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.136, 1.493, 2.136]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_305.geometry}
        material={materials.Leather_blue}
        position={[10.428, 12.677, 1.05]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1.817, 6.578, 1.799]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_307.geometry}
        material={materials.Leather_blue}
        position={[10.47, 11.902, -7.294]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1.83, 4.37, 1.83]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_279.geometry}
        material={materials.Screen}
        position={[-7.655, 5.742, 1.181]}
        rotation={[0, -0.284, 0]}
        scale={2.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_281.geometry}
        material={materials.Screen}
        position={[-3.132, 5.737, 2.499]}
        rotation={[-Math.PI, 0.284, 0]}
        scale={-2.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_309.geometry}
        material={materials.material_0}
        position={[11.251, 11.163, -1.78]}
        scale={[0.833, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_311.geometry}
        material={materials.material_0}
        position={[11.463, 11.163, -1.78]}
        scale={[0.833, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_283.geometry}
        material={materials.Screen}
        position={[-5.541, 1.095, 2.246]}
        rotation={[0, -0.284, 0]}
        scale={[1.527, 0.512, 1.527]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials["Material.002"]}
        position={[5.931, 2.532, -0.099]}
        scale={4.278}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_293.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials["Material.003"]}
        position={[5.837, 11.373, 9.46]}
        rotation={[0, 1.571, 0]}
        scale={0.772}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials["Material.003"]}
        position={[8.962, 7.511, -17.409]}
        rotation={[Math.PI, -0.017, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_299.geometry}
        material={materials["Material.002"]}
        position={[10.178, 1.578, 0.642]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials["Material.016"]}
        position={[-6.015, 5.573, 8.309]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_273.geometry}
        material={materials["Material.009"]}
        position={[-7.775, 6.012, 7.194]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_285.geometry}
        material={materials.Screen}
        position={[-5.541, 2.065, 2.246]}
        rotation={[0, -0.284, 0]}
        scale={[1.174, 0.569, 1.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_161.geometry}
        material={materials.material_0}
        position={[-0.596, 8.65, 5.669]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.115}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.Leather_blue}
        position={[6.009, 5.351, -2.479]}
        scale={[8.049, 7.242, 8.918]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.Screen}
        position={[-9.495, 3.979, -13.341]}
        scale={[5.068, 5.888, 6.604]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_295.geometry}
        material={materials.Nikon}
        position={[11.695, 12.7, 0.745]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_313.geometry}
        material={materials["Material.018"]}
        position={[0, -4.453, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_297.geometry}
        material={materials.Nikon}
        position={[-16.286, 12.721, 17.234]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
    </group>
  );
}

function HtmlContent(props) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01; // Rotating the HTML content (optional)
  });

  return (
    <mesh position={props.position} scale={props.scale} ref={ref}>
      <planeBufferGeometry args={[1, 1]} />
      <meshBasicMaterial attach="material" transparent opacity={0.9}>
        <canvasTexture attach="map" />
      </meshBasicMaterial>
      {props.children}
    </mesh>
  );
}

useGLTF.preload(Kamar3d);

function TvTexture() {
  return (<div><iframe style={{width: '100%', height: '100%'}} src="https://www.youtube.com/embed/jSlJscFUa24?si=Q6IMmhapfyMyWmQp?autoplay=1&enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>)
}