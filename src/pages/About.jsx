import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import TypeIt from "typeit-react";
import {  CharacterWaving } from '../models';
import { Loading } from '../components'

export default function About() {

  return (
    <>
        <AboutMe />
    </>
  );
}

function AboutMe() {
    return (
        <>
        <section className="aboutme w-screen h-screen">
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
                                <CharacterWaving
                                selectedAnims={"Waving"}
                                position={[0.5, -6.0, -3.6]}
                                rotation={[5.0, 0.00, -0.1]}
                                scale={[3.9, 3.4, 3.9]}
                                />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <h1 className="text-5xl mb-5">About Me</h1>
                            <p>
                                <TypeIt>
                                    Hello, my name is Sudirmansyah. I graduated from Mercu Buana University with a degree in Computer Engineering. Currently, I work at one of the state-owned enterprise subsidiaries, PT Pelindo Solusi Digital, as a developer engineer. I find great joy in delving into new concepts, especially within the realm of programming. Exploring new avenues to sharpen my skills is something that truly excites me. I'm thrilled to have the opportunity for you to get to know me through my portfolio website.
                                </TypeIt>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}