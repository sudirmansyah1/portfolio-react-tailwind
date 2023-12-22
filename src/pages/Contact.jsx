
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {  CharacterDpose } from '../models';
import { Loading } from '../components'
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

export default function ContactM() {

  return (
    <>
        <ContactMe />
    </>
  );
}

function ContactMe() {
    const [CaptchToken, setCaptchaToken] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const captchaRef = useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    
    const onSubmitContact = async (data) => {
        try {
            setLoading(true);
            if (CaptchToken !== null) {
                emailjs.init("kONQgEOLZmcKgH8Vp");

                const emailParams = {
                  name: data.name,
                  email: data.email,
                  message: data.message,
                  'g-recaptcha-response': CaptchToken
                };
                
                emailjs.send("service_tns6r3f", "template_7o0hx6d", emailParams)
                .then(function(response) {
                    Swal.fire({
                        title: "Success!",
                        text: "We have successfully received your email and will review it promptly.",
                        icon: "success"
                    });
                    reset();
                    captchaRef.current.reset();
                    setLoading(false);
                }, function(error) {
                    Swal.fire({
                        title: "Failed!",
                        text: "Failed to send an email to us.",
                        icon: "error"
                    });
                    captchaRef.current.reset();
                    setLoading(false);
                });
                
            } else {
                Swal.fire({
                    title: "Failed!",
                    text: "Failed validation your captcha!",
                    icon: "error"
                });
                captchaRef.current.reset();
                setLoading(false);
            }
            
        } catch (e) {
            console.log(e.message);
            
            setLoading(false);
        }
        captchaRef.current.resetCaptcha()
    };

    return (
        <>
        <section className="aboutme w-screen h-screen">
            <div className="container mx-auto h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="flex items-center">
                        <div className="w-full">
                            <h1 className="mb-5 text-4xl">Contact me</h1>
                            <div className="grid grid-cols-1 gap-4">
                                <form onSubmit={handleSubmit(onSubmitContact)}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="block mb-2">
                                        Name
                                        </label>
                                        <input
                                        type="text"
                                        id="name"
                                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                                            errors.name ? 'border-red-500' : 'border-gray-500'
                                        } shadow-md`}
                                        {...register('name', {
                                            required: 'Name is required',
                                        })}
                                        />
                                        {errors.name && (
                                        <span className="text-sm text-red-500">{errors.name.message}</span>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="block mb-2">
                                        Email address
                                        </label>
                                        <input
                                        type="email"
                                        id="email"
                                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                                            errors.email ? 'border-red-500' : 'border-gray-500'
                                        } shadow-md`}
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'Entered value does not match email format',
                                            },
                                        })}
                                        />
                                        {errors.email && (
                                        <span className="text-sm text-red-500">{errors.email.message}</span>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="block mb-2">
                                        Message
                                        </label>
                                        <textarea
                                        id="message"
                                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                                            errors.message ? 'border-red-500' : 'border-gray-500'
                                        } h-60 shadow-md`}
                                        {...register('message', {
                                            required: 'Message is required',
                                        })}
                                        ></textarea>
                                        {errors.message && (
                                        <span className="text-sm text-red-500">
                                            {errors.message.message}
                                        </span>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <ReCAPTCHA
                                            ref={captchaRef}
                                            sitekey="6LcR6DkpAAAAACHpmmDlFG-haApAMEMNSERxxI-g"
                                            onChange={setCaptchaToken}
                                        />
                                    </div>
                                    <button type="submit" className="w-full px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg focus:outline-none" disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit'}</button>
                                </form>
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