import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Planet() {

    function Model() {
        const gltf = useLoader(GLTFLoader, 'planet/planet_scene.gltf');
        const ref = useRef();
    
        useFrame(({ clock }) => {
            ref.current.rotation.y = clock.getElapsedTime()
        });
        return <primitive ref={ref} object={gltf.scene} />
    }

    return (
        <Canvas camera={{ fov: 80 }}>
            <Suspense>
                <directionalLight intensity={0.5} position={[0, 0, 10]} />
                <Model />
            </Suspense>
        </Canvas>
    )
}