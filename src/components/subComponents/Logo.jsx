import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Logo() {

    function Model() {
        const gltf = useLoader(GLTFLoader, 'scene.gltf');
        const ref = useRef();
    
        useFrame(({ clock }) => {
            ref.current.rotation.y = clock.getElapsedTime()
        })
    
        return <primitive ref={ref} object={gltf.scene} />
    }

    return (
        <Canvas className='logo' camera={{ fov: 50 }}>
            <Suspense>
                <directionalLight intensity={0.7} position={[0, 0, 10]} />
                <Model />
            </Suspense>
        </Canvas>
    )
}