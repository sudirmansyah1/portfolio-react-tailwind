import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import TypeIt from "typeit-react";
import { CharacterSeat, Room } from '../models';
import { Loading } from '../components';

import "../assets/styles/pages/home.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Hero isMobile={isMobile} />
    </>
  );
}

function Hero({ isMobile }) {

  const characterPosition = isMobile ? [-0.1, -2.1, -9.5] : [2.9, -3.1, -7.5];
  const roomPosition = isMobile ? [-3.0, -2.0, -10.5] : [0.0, -3.0, -8.5];

  // Define newX, newY, newZ, newRoomX, newRoomY, newRoomZ based on screen size

  return (
    <>
      <section className="hero bg-black text-white">
        <div className="character relative h-screen">
          <Canvas
            camera={{
              position: [0, 0, 0.5],
              fov: 100,
              near: 0.1,
              far: 100,
            }}
            className="canvas-character"
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <Suspense fallback={<Loading />}>
              <Room
                position={roomPosition}
                rotation={[0.3, -10.2, -0]}
                scale={[0.5, 0.5, 0.5]}
              />
              <CharacterSeat
                selectedAnims={"Sitting"}
                position={characterPosition}
                rotation={[5.0, 0.00, -4.5]}
                scale={[3.9, 3.4, 3.9]}
              />
            </Suspense>
          </Canvas>

          {/* Other content */}
          <div className="container mx-auto text-hero">
            <div className="flex items-center h-screen">
              <h1 className="text-5xl p-10">
                <TypeIt>Welcome to my website.</TypeIt>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
