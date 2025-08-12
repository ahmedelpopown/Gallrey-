import { Canvas } from "@react-three/fiber";
import Scene3D from "../components/model/Scene3D";
import SwiperLandingPage from "./SwiperLandingPage";
import Stats from "../components/CounterSection";
 export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden ">
      {/* الخلفية السوداء */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          // backgroundColor: "black",
          zIndex: 0,
 
        }}
      />

      {/* الـ Swiper خلف الموديل */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none", // لو مش عايز تفاعل عليه
          // opacity: 0.01 , // تقدر تقلل الشفافية لو حابب
        }}
      
      >
        <SwiperLandingPage />
      </div>

      {/* الموديل فوق الـ Swiper */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
         height:"100%",
         width:"40%",
          left: "70%",
    top: "50%",
        }}
     
     >
     <Scene3D/>

 
      


      </div>

 
      {/* المحتوى فوق الكل */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          color: "white",
           
          textAlign: "center",
          height:"100%",
        }}
     className="flex flex-col w-[40%] flex-nowrap items-start justify-start mt-4  h-[100%] "
     
     >
 
       <div className="w-[100%] h-[70%] text-black flex flex-col   items-start justify-end mt-4 ml-10">
         <h1 className="mb-4 text-4xl font-bold">A Journey Through Colors and Creativity</h1>
        <p className="text-sm font-semibold leading-relaxed text-start">
A curated collection of paintings and sketches showcasing the artist’s creative journey and unique vision
   </p>
   
       </div>
     
 
        
        

      </div>
    </section>
  );
}
