import {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
// useGLTF -> allows us to import 3D models
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  // Importing pre-made 3D computer model
  const computer = useGLTF('./desktop_pc/scene.gltf');
  
  return(
    <mesh> 
      {/* Inside mesh we have to create light otherwise we won't be able to see anything, it is like a torch
      that is projected to our 3d object.*/}
      <hemisphereLight 
        intensity={1.5} 
        groundColor='black'
      />
      <pointLight intensity={2}/>
      <spotLight
        position={[0,2.8, 0]}
        // angle={0.12}
        // penumbra={1}
        intensity={100} 
        // castShadow 
        // shadow-mapSize-width={1024}
        // shadow-mapSize-height={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0,-3,-2] : [0,-3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
    />
    </mesh>
  )   
}        
const ComputersCanvas = () =>{
  const [isMobile, setIsMobile] = useState(false);

  // This useEffect is only changing the isMobile variable
  // which we will pass to computers component
  useEffect(() => {
    // Add a event listner for changes to the screen
    //size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    // Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    //define the fallback function to handle changes in the media query
    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches);
    }
    // Since we are in react so we have to add a 
    // event listner and then we have to remove it
    // Add a callback function as a listner for changes to the media query
    mediaQuery.addEventListener('change',
    handleMediaQueryChange);

    return()=>{
      mediaQuery.removeEventListener('change',
      handleMediaQueryChange);
    }
  })
  
  return (
    <>
      <Canvas
        frameloop='demand'
        shadows
        camera={{position: [20,3,5], fov:25}} // Through this we look into our 3d model,
        // The position from which we are looking and the fov or field of view
        gl={{preserveDrawingBuffer:true}} // to properly render our model
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2} // This will allow us to rotate the 3 model only in  a specific angle steamline
            minPolarAngle={Math.PI / 2} // Not like in all direction up, down, left, right etc
          />
          <Computers isMobile={isMobile}/>
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  )
}
export default ComputersCanvas