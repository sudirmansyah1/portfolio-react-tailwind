import React from 'react';
import { Spinner } from "@material-tailwind/react";
import { Html } from "@react-three/drei";

const Loading = () => {
    return (
    <Html>
        <Spinner className="h-16 w-16 text-gray-900/50" />
    </Html>);
};

export default Loading;