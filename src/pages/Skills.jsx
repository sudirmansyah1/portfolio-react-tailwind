import React,  { Suspense } from 'react';
import { 
    bootstrap,
    codeigniter,
    css,
    docker,
    git,
    html,
    javascript,
    mysql,
    nodejs,
    oracle,
    php,
    react,
    tibco,
    lua
 } from "../assets/skills"
 import { Canvas } from "@react-three/fiber";
 import { Loading } from '../components'
 import { CharacterSadIdle } from '../models';

export default function Skills() {
  return (
    <section className="Skills w-screen h-screen">
        <div className="container mx-auto h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="flex items-center">
                    <Canvas
                        camera={{
                            position: [0, 0, 0.5],
                            fov: 100,
                            near: 0.1,
                            far: 100,
                        }}
                        >
                        <directionalLight position={[0, 0, 1]} intensity={2.5} />
                        <ambientLight intensity={1} />
                        <pointLight position={[5, 10, 0]} intensity={2} />
                        <spotLight
                            position={[10, 10, 10]}
                            angle={0.15}
                            penumbra={1}
                            intensity={2}
                        />
                        <Suspense fallback={<Loading />}>
                            <CharacterSadIdle
                            selectedAnims={"Sad"}
                            position={[0.0, -4.0, -4.0]}
                            rotation={[4.7, 0.00, 0.0]}
                            scale={[3.9, 3.4, 3.9]}
                            />
                        </Suspense>
                    </Canvas>
                </div>
                <div className="flex items-center">
                    <div className="flex flex-wrap justify-center items-center h-screen mt-20 sm:mt-0 sm:py-20 sm:px-5">
                        <SkillIcon icon={html} name="HTML" />
                        <SkillIcon icon={css} name="CSS" />
                        <SkillIcon icon={javascript} name="Javascript" />
                        <SkillIcon icon={php} name="PHP" />
                        <SkillIcon icon={lua} name="Lua" />
                        <SkillIcon icon={git} name="GIT" />
                        <SkillIcon icon={nodejs} name="NodeJS" />
                        <SkillIcon icon={bootstrap} name="Bootstrap" />
                        <SkillIcon icon={codeigniter} name="Codeigniter" />
                        <SkillIcon icon={react} name="React" />
                        <SkillIcon icon={docker} name="Docker" />
                        <SkillIcon icon={tibco} name="Tibco" />
                        <SkillIcon icon={mysql} name="MySQL" />
                        <SkillIcon icon={oracle} name="Oracle" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

const SkillIcon = ({ icon, name }) => {
  return (
    <div className="flex justify-center relative w-20 h-20 md:w-15 md:h-15 rounded-full overflow-hidden shadow-md bg-gray-200 hover:bg-gray-900 hover:text-white mr-2 md:mr-3 transition duration-300 ease-in-out">
      <img
        src={icon}
        alt={name}
        className="w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        <p className="text-center">{name}</p>
      </div>
    </div>
  );
};