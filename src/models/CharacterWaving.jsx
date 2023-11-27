import { useEffect, useRef } from "react";
import { act, useFrame } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

import characterWaving from "../../public/assets/3D/characterWaving.glb";
import Waving from "../../public/assets/3D/Waving.fbx";
export function CharacterWaving({selectedAnims, ...props}){
    const group = useRef();
    const { nodes, materials } = useGLTF(characterWaving);

    // Store animations in an object for easier access
    const animations = {
        Waving: useFBX(Waving).animations,
        // Add more animations here as needed
    };

    const { actions, mixer } = useAnimations(animations.Waving, group);

    useEffect(() => {
        const selectedAnimation = animations[selectedAnims];
        if (selectedAnimation) {
        mixer.stopAllAction();
        const newActions = selectedAnimation.map((clip) => mixer.clipAction(clip));
        newActions.forEach((action) => action.play());
        }
    }, [selectedAnims, mixer, animations]);


    return (
        <group ref={group} {...props} dispose={null}>
          <group name="Sketchfab_Scene">
            <primitive object={nodes.Hips} />
            <skinnedMesh
              name="EyeLeft"
              geometry={nodes.EyeLeft.geometry}
              material={materials.Wolf3D_Eye}
              skeleton={nodes.EyeLeft.skeleton}
              morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
              morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
              name="EyeRight"
              geometry={nodes.EyeRight.geometry}
              material={materials.Wolf3D_Eye}
              skeleton={nodes.EyeRight.skeleton}
              morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
              morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
              name="Wolf3D_Head"
              geometry={nodes.Wolf3D_Head.geometry}
              material={materials.Wolf3D_Skin}
              skeleton={nodes.Wolf3D_Head.skeleton}
              morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
              morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
              name="Wolf3D_Teeth"
              geometry={nodes.Wolf3D_Teeth.geometry}
              material={materials.Wolf3D_Teeth}
              skeleton={nodes.Wolf3D_Teeth.skeleton}
              morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
              morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
              geometry={nodes.Wolf3D_Body.geometry}
              material={materials.Wolf3D_Body}
              skeleton={nodes.Wolf3D_Body.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
              material={materials.Wolf3D_Outfit_Bottom}
              skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
              material={materials.Wolf3D_Outfit_Footwear}
              skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Wolf3D_Outfit_Top.geometry}
              material={materials.Wolf3D_Outfit_Top}
              skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Wolf3D_Hair.geometry}
              material={materials.Wolf3D_Hair}
              skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Wolf3D_Glasses.geometry}
              material={materials.Wolf3D_Glasses}
              skeleton={nodes.Wolf3D_Glasses.skeleton}
            />
          </group>
        </group>
      );
}


useGLTF.preload(characterWaving);
useFBX.preload(Waving);