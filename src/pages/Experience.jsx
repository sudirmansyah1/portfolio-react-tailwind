
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Container } from '../models';
import { Loading } from '../components'

import "../assets/styles/pages/experience.css"
export default function Experience() {

  return (
    <>
        <ExperienceView />
    </>
  );
}

function ExperienceView() {
    return (
        <>

        <section className="experience w-screen h-screen bg-black text-white">
            <div className="experience-canvas relative">
                <div className="container mx-auto absolute top-0 left-0 right-0">
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-full mt-40">
                            <h1 className="text-center text-5xl md:text-5xl">Job Experience</h1>
                        </div>
                        
                    </div>
                </div>
                <Canvas
                    camera={{
                        position: [0, 0, 0.5],
                        fov: 100,
                        near: 0.1,
                        far: 100,
                    }} className="h-full w-full"
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
                        <Container
                        position={[0.1, -0.5, -0.8]}
                        rotation={[0.1, 0.00, 0.0]}
                        scale={[3.9, 3.4, 3.9]}
                        />
                    </Suspense>
                </Canvas>
                <div className="container mx-auto absolute top-0 left-0 right-0 h-full">
                    <div className="flex flex-col justify-center items-center h-full">
                        <div className="flex items-center justify-center h-full">
                            <div className="w-1/2">
                                <h3 className="text-center text-3xl">Pelindo Solusi Digital</h3>
                                <h5 className="text-center">Nov 2021 - Present</h5>
                                <p className="text-center">
                                    At Pelindo Solusi Digital, a subsidiary of PT Pelabuhan Indonesia (PELINDO), we specialize in IT solutions for port management. As a Developer Engineer within Pelindo Solusi Digital, my role revolves around meticulous bug fixing and handling change requests for existing applications. I'm also adept at seamlessly integrating applications and remain open to contributing to new projects as needed. This dynamic position allows me to constantly engage with diverse challenges in the realm of port IT solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}