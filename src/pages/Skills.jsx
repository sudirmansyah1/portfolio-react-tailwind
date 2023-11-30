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
    lua,
    postgresql,
    express,
    fastify,
    tailwind,
    vite,
    threejs
 } from "../components/skills"
 import { Canvas } from "@react-three/fiber";
 import { LazyLoadImage } from 'react-lazy-load-image-component';
 import { Loading } from '../components'
 import { CharacterSadIdle } from '../models';

const SkillList = [
    {
        label: "HTML",
        icon: html
    },
    {
        label: "CSS",
        icon: css
    },
    {
        label: "Javascript",
        icon: javascript
    },
    {
        label: "PHP",
        icon: php
    },
    {
        label: "Lua",
        icon: lua
    },
    {
        label: "GIT",
        icon: git
    },
    {
        label: "NodeJS",
        icon: nodejs
    },
    {
        label: "Bootstrap",
        icon: bootstrap
    },
    {
        label: "Codeigniter",
        icon: codeigniter
    },
    {
        label: "Tailwind",
        icon: tailwind
    },
    {
        label: "React",
        icon: react
    },
    {
        label: "Vite",
        icon: vite
    },
    {
        label: "Three JS",
        icon: threejs
    },
    {
        label: "Express",
        icon: express
    },
    {
        label: "Fastify",
        icon: fastify
    },
    {
        label: "Docker",
        icon: docker
    },
    {
        label: "Tibco",
        icon: tibco
    },
    {
        label: "MySQL",
        icon: mysql
    },
    {
        label: "PostgreSQL",
        icon: postgresql
    },
    {
        label: "Oracle SQL",
        icon: oracle
    }
]

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
                        {SkillList.map(({ icon, label }) => (
                            <SkillIcon icon={icon} name={label} />
                        ))}
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
      <LazyLoadImage
        src={icon}
        alt={name}
        className="w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-black transition duration-700 ease-in-out">
        <p className="text-center">{name}</p>
      </div>
    </div>
  );
};