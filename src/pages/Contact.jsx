
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import TypeIt from "typeit-react";
import {  CharacterDpose } from '../models';
import { Loading } from '../components'

// import "../assets/styles/pages/contact.css"
export default function ContactM() {

  return (
    <>
        <ContactMe />
    </>
  );
}

function ContactMe() {
    return (
        <>
        <section className="aboutme w-screen h-screen">
            <div className="container mx-auto h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="flex items-center">
                        <div className="w-full">
                            <h1 className="mb-5 text-4xl">Contact me</h1>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="name" className="block mb-2">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2">Email address</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2">Message</label>
                                    <textarea id="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" style={{ height: '150px' }}></textarea>
                                </div>
                                <button type="submit" className="w-full px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg focus:outline-none">Submit</button>
                            </div>
                        </div>
                    </div>
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
                                <CharacterDpose
                                selectedAnims={"dpose"}
                                position={[0.0, -5.8, -4.8]}
                                rotation={[5.0, 0.00, -0.1]}
                                scale={[3.9, 3.4, 3.9]}
                                />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}