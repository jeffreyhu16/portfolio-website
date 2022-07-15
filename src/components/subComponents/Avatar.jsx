import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Avatar() {

    function Model() {
        const gltf = useLoader(GLTFLoader, 'avatar.gltf');
        return <primitive object={gltf.scene} />
    }

    return (
        <Canvas camera={{ fov: 50 }}>
            <Suspense>
                <directionalLight intensity={2} position={[0, 0, 5]} />
                <Model />
            </Suspense>
        </Canvas>
    )
}