// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const categories = {
//   "Gallery 1": [
//   //  "../../public/images/gallery1/image1.jpg",
//    "../../public/images/New folder/gallery1/image1.jpg",
//    "../../public/images/New folder/gallery1/image2.jpg",
//    "../../public/images/New folder/gallery1/image3.jpg",
//    "../../public/images/New folder/gallery1/image4.jpg",
//    "../../public/images/New folder/gallery1/image5.jpg",
//    "../../public/images/New folder/gallery1/image6.jpg",
//    "../../public/images/New folder/gallery1/image7.jpg",
//    "../../public/images/New folder/gallery1/image8.jpg",
//    "../../public/images/New folder/gallery1/image9.jpg",
//    "../../public/images/New folder/gallery1/image10.jpg",
//   ],
//   "Gallery 2": [
//    "../../public/images/New folder/gallery2/image1.jpg",
//    "../../public/images/New folder/gallery2/image2.jpg",
//    "../../public/images/New folder/gallery2/image3.jpg",
//    "../../public/images/New folder/gallery2/image4.jpg",
//    "../../public/images/New folder/gallery2/image5.jpg",
//    "../../public/images/New folder/gallery2/image6.jpg",
//    "../../public/images/New folder/gallery2/image7.jpg",
//    "../../public/images/New folder/gallery2/image8.jpg",
//    "../../public/images/New folder/gallery2/image9.jpg",
//    "../../public/images/New folder/gallery2/image10.jpg",
//   ],
//   "Gallery 3": [
//    "../../public/images/New folder/gallery3/image1.jpg",
//    "../../public/images/New folder/gallery3/image2.jpg",
//    "../../public/images/New folder/gallery3/image3.jpg",
//    "../../public/images/New folder/gallery3/image4.jpg",
//    "../../public/images/New folder/gallery3/image5.jpg",
//    "../../public/images/New folder/gallery3/image6.jpg",
//    "../../public/images/New folder/gallery3/image7.jpg",
//    "../../public/images/New folder/gallery3/image8.jpg",
//    "../../public/images/New folder/gallery3/image9.jpg",
//    "../../public/images/New folder/gallery3/image10.jpg",
//   ],
// };

// export default function Gallery() {
//   const [activeCategory, setActiveCategory] = useState(Object.keys(categories)[0]);

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-6xl px-4 mx-auto">
//         {/* العنوان */}
//         <h2 className="mb-8 text-4xl font-bold text-center">معرض الأعمال</h2>

//         {/* أزرار الأقسام */}
//         <div className="flex flex-wrap justify-center gap-4 mb-10">
//           {Object.keys(categories).map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-6 py-2 rounded-full text-lg font-medium transition ${
//                 activeCategory === category
//                   ? "bg-green-500 text-white"
//                   : "bg-white text-gray-700 shadow hover:bg-green-100"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* الصور */}
//         <motion.div
//           layout
//           className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5"
//         >
//           <AnimatePresence>
//             {categories[activeCategory].map((src, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.4 }}
//                 className="overflow-hidden shadow-lg cursor-pointer rounded-xl group"
//               >
//                 <img
//                   src={src}
//                   alt=""
//                   className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
//                 />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// ======================================================================================
// ======================================================================================
// ======================================================================================
// ======================================================================================
// ======================================================================================
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

 

// export default function GalleryParallax() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const images = sectionRef.current.querySelectorAll(".gallery-img");

//     images.forEach((img, i) => {
//       gsap.fromTo(
//         img,
//         {
//           y: i % 2 === 0 ? -50 : 50, // parallax البداية
//           rotation: i % 2 === 0 ? -3 : 3, // swing البداية
//         },
//         {
//           y: i % 2 === 0 ? 50 : -50,
//           rotation: i % 2 === 0 ? 3 : -3,
//           scrollTrigger: {
//             trigger: img,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//           ease: "sine.inOut",
//         }
//       );
//     });
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-20 bg-gray-100">
//       {Object.entries(categories).map(([title, images], index) => (
//         <div key={index} className="mb-16">
//           <h2 className="mb-8 text-3xl font-bold text-center">{title}</h2>
//           <div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3">
//             {images.map((src, idx) => (
//               <div
//                 key={idx}
//                 className="overflow-hidden shadow-lg rounded-xl"
//               >
//                 <img
//                   src={src}
//                   alt=""
//                   className="gallery-img w-full h-[300px] object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }

// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = {
  "Gallery 1": [
    "/images/New folder/gallery1/image1.jpg",
    "/images/New folder/gallery1/image2.jpg",
    "/images/New folder/gallery1/image3.jpg",
    "/images/New folder/gallery1/image4.jpg",
    "/images/New folder/gallery1/image5.jpg",
    "/images/New folder/gallery1/image6.jpg",
    "/images/New folder/gallery1/image7.jpg",
    "/images/New folder/gallery1/image8.jpg",
    "/images/New folder/gallery1/image9.jpg",
    "/images/New folder/gallery1/image10.jpg",
  ],
  "Gallery 2": [
    "/images/New folder/gallery2/image1.jpg",
    "/images/New folder/gallery2/image2.jpg",
    "/images/New folder/gallery2/image3.jpg",
    "/images/New folder/gallery2/image4.jpg",
    "/images/New folder/gallery2/image5.jpg",
    "/images/New folder/gallery2/image6.jpg",
    "/images/New folder/gallery2/image7.jpg",
    "/images/New folder/gallery2/image8.jpg",
    "/images/New folder/gallery2/image9.jpg",
    "/images/New folder/gallery2/image10.jpg",
  ],
  "Gallery 3": [
    "/images/New folder/gallery3/image1.jpg",
    "/images/New folder/gallery3/image2.jpg",
    "/images/New folder/gallery3/image3.jpg",
    "/images/New folder/gallery3/image4.jpg",
    "/images/New folder/gallery3/image5.jpg",
    "/images/New folder/gallery3/image6.jpg",
    "/images/New folder/gallery3/image7.jpg",
    "/images/New folder/gallery3/image8.jpg",
    "/images/New folder/gallery3/image9.jpg",
    "/images/New folder/gallery3/image10.jpg",
  ],
};

export default function CinematicGallery() {
  const sectionsRef = useRef([]);

  // مجموعات التأثيرات المختلفة لكل Gallery
  const effectsSets = [
    // مجموعة تأثيرات Gallery 1
    [
      (img, scrollTrigger) =>
        gsap.fromTo(
          img,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, scrollTrigger }
        ),
      (img, scrollTrigger) =>
        gsap.fromTo(
          img,
          { rotation: -10, y: 100, opacity: 0 },
          { rotation: 0, y: 0, opacity: 1, scrollTrigger }
        ),
      (img, scrollTrigger) =>
        gsap.fromTo(
          img,
          { filter: "blur(10px)", opacity: 0.5 },
          { filter: "blur(0px)", opacity: 1, scrollTrigger }
        ),
      (img, scrollTrigger) =>
        gsap.fromTo(
          img,
          { y: 50, scale: 0.95, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, scrollTrigger }
        ),
    ],
    // مجموعة تأثيرات Gallery 2 (تأثيرات مختلفة)
    [
      (img, scrollTrigger) =>
        gsap.fromTo(
          img,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, scrollTrigger }
        ),
      (img, scrollTrigger) =>
        gsap.fromTo(
          img,
          { rotationX: 90, opacity: 0 },
          { rotationX: 0, opacity: 1, scrollTrigger }
        ),
      (img, scrollTrigger) =>
        gsap.fromTo(
          img,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, scrollTrigger }
        ),
      (img, scrollTrigger) =>
        gsap.fromTo(
          img,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, scrollTrigger }
        ),
    ],
    // مجموعة تأثيرات Gallery 3 (تأثيرات مختلفة تانية)
    [
      (img, scrollTrigger) =>
        gsap.fromTo(
          img,
          { filter: "grayscale(100%)", opacity: 0 },
          { filter: "grayscale(0%)", opacity: 1, scrollTrigger }
        ),
      (img, scrollTrigger) =>
        gsap.fromTo(
          img,
          { rotationY: 180, opacity: 0 },
          { rotationY: 0, opacity: 1, scrollTrigger }
        ),
      (img, scrollTrigger) =>
        gsap.fromTo(
          img,
          { scale: 1.2, opacity: 0 },
          { scale: 1, opacity: 1, scrollTrigger }
        ),
      (img, scrollTrigger) =>
        gsap.fromTo(
          img,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, scrollTrigger }
        ),
    ],
  ];

  useEffect(() => {
    sectionsRef.current.forEach((section, galleryIdx) => {
      const images = section.querySelectorAll(".main-img");
      const effects = effectsSets[galleryIdx] || effectsSets[0]; // لو gallery أكثر من 3 ناخد المجموعة الأولى

      images.forEach((img, idx) => {
        const effectFn = effects[idx % effects.length];
        effectFn(img, {
          trigger: img,
          start: "top 90%",
          end: "center 60%",
          scrub: true,
        });
      });
    });
  }, []);

  return (
    <div className="p-8 space-y-20 text-white bg-black">
      {Object.entries(categories).map(([title, images], idx) => (
        <section
          key={title}
          ref={(el) => (sectionsRef.current[idx] = el)}
          className="flex flex-col items-center justify-center min-h-screen"
        >
          <h2 className="mb-8 text-4xl">{title}</h2>
          <div className="grid w-full max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
            {images.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt={`${title} image ${i + 1}`}
                  className="object-cover w-full h-48 main-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
