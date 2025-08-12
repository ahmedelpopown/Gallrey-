 
// import React, { useRef, useEffect, useState, useMemo } from "react";
// import { OrbitControls, useGLTF, Points, PointMaterial } from "@react-three/drei";
// import * as THREE from "three";
// import { Canvas } from "@react-three/fiber";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Stats from "../CountUp";

// gsap.registerPlugin(ScrollTrigger);



// function Model(props) {
//   const { scene } = useGLTF("/models/sketchbook.glb");
//   const ref = useRef();
//   const [scale, setScale] = useState(1);
// useEffect(() => {
//   if (ref.current) {
//     const box = new THREE.Box3().setFromObject(ref.current);
//     const size = box.getSize(new THREE.Vector3());
//     const maxSize = Math.max(size.x, size.y, size.z);
//     const desiredSize = 2.5; // الحجم اللي عايزه ثابت

//     if (maxSize > 0) {
//       const newScale = desiredSize / maxSize;
//       setScale(newScale);
//     }
//   }
// }, [scene]);

 

//   return <primitive ref={ref} object={scene} scale={scale} {...props} />;
// }

// export default function Scene3D() {
//   return (
   
//       <div style={{ position: "sticky", top: 0, height: "300px",width:"300px" }}>
//         <Canvas
//           style={{ width: "100%", height: "100%", display: "block" }}
//           camera={{ position: [0, 8, 1] }}
//         >
//           <Starfield />
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[5, 5, 5]} />
//           <Model position={[0, 6, 0]} />
//           <OrbitControls />
//         </Canvas>

//       </div>
 
//   );
// }

// function Starfield() {
//   const points = useMemo(() => {
//     const temp = [];
//     for (let i = 0; i < 5000; i++) {
//       temp.push(
//         (Math.random() - 0.5) * 100,
//         (Math.random() - 0.5) * 100,
//         (Math.random() - 0.5) * 100
//       );
//     }
//     return new Float32Array(temp);
//   }, []);

//   return (
//     <Points positions={points} stride={3} frustumCulled={false}>
//       <PointMaterial color="white" size={0.01} sizeAttenuation={true} />
//     </Points>
//   );
// }


import React, { useRef, useEffect, useState } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Model(props) {
  const { scene } = useGLTF("/models/sketchbook.glb");
  const ref = useRef();
  const [scale, setScale] = useState(1);

  // حساب حجم الموديل وتثبيت الحجم
  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current);
      const size = box.getSize(new THREE.Vector3());
      const maxSize = Math.max(size.x, size.y, size.z);
      const desiredSize = 2.5; // الحجم المطلوب

      if (maxSize > 0) {
        const newScale = desiredSize / maxSize;
        setScale(newScale);
      }
    }
  }, [scene]);

  // حركة الطفو (انعدام الجاذبية)
  useFrame((state) => {
    if (ref.current) {
      // حركة فوق وتحت
      ref.current.position.y = 6 + Math.sin(state.clock.elapsedTime) * 0.2;
      // دوران بسيط
      ref.current.rotation.y += 0.002;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return <primitive ref={ref} object={scene} scale={scale} {...props} />;
}

export default function Scene3D() {
  return (
    <div style={{ position: "sticky", top: 0, height: "400px", width: "400px" }}>
      <Canvas
        style={{ width: "100%", height: "100%", display: "block" }}
        camera={{ position: [0, 8, 1] }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[6, 5, 5]} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
