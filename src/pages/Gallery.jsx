// import { useState } from "react";
// import img1 from "../../public/assets/glow-salon.jpeg";
// import img2 from "../../public/assets/luminous-salon.jpeg";
// import img3 from "../../public/assets/sparkle-salon.jpeg";
// // import img4 from "../../public/assets/sparkle-salon.jpeg";
// import Footer from "../components/layout/Footer.jsx";
// import PageHeading from "../components/layout/PageHeading.jsx";
// // Image data
// const images = [
//   { id: 1, src: img1, alt: "Makeup and glamour" },
//   { id: 2, src: img2, alt: "Hairstyling and salon" },
//   {
//     id: 3,
//     src: "https://images.unsplash.com/photo-1574751790409-f9c46d321151?q=80&w=1770&auto=format&fit=crop",
//     alt: "Beauty and skincare",
//   },
//   { id: 4, src: img2, alt: "Nail art and manicure" },
//   { id: 5, src: img3, alt: "Men's grooming" },
//   {
//     id: 6,
//     src: "https://images.unsplash.com/photo-1553894781-a67b2d5f0d3a?q=80&w=1770&auto=format&fit=crop",
//     alt: "Fashion photoshoot",
//   },
//   { id: 7, src: img1, alt: "Elegant styling" },
//   { id: 8, src: img2, alt: "Relaxing spa treatment" },
//   { id: 9, src: img3, alt: "Relaxing spa treatment" },
// ];

// const Gallery = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imageLoadingStatus, setImageLoadingStatus] = useState({});

//   const handleImageLoad = (id) => {
//     setImageLoadingStatus((prev) => ({ ...prev, [id]: true }));
//   };

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = (e) => {
//     if (e.target.id === "modal-overlay" || e.target.id === "close-button") {
//       setModalOpen(false);
//       setSelectedImage(null);
//       document.body.style.overflow = "";
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-gray-50 text-gray-900 font-inter">
//         {/* Page Heading */}
//         <PageHeading
//           heading={"Moments of Beauty"}
//           paragraph={
//             "From trendy haircuts to relaxing spa treatments, we provide everything you need to look and feel your best."
//           }
//         />

//         {/* Gallery Grid */}
//         <main className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 p-8 max-w-6xl mx-auto">
//           {images.map((image) => (
//             <div
//               key={image.id}
//               className="relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] bg-white/70 border border-white/80 shadow-md backdrop-blur-md transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
//               onClick={() => openModal(image)}
//             >
//               {!imageLoadingStatus[image.id] && (
//                 <div className="absolute inset-0 bg-gray-300 animate-pulse" />
//               )}
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className={`w-full h-full object-cover transition-opacity duration-500 ${
//                   !imageLoadingStatus[image.id] ? "hidden" : "block"
//                 }`}
//                 onLoad={() => handleImageLoad(image.id)}
//               />
//             </div>
//           ))}
//         </main>

//         {/* Modal */}
//         {modalOpen && selectedImage && (
//           <div
//             id="modal-overlay"
//             className="fixed inset-0 bg-black/90 flex items-center justify-center z-[1000]"
//             onClick={closeModal}
//           >
//             <div className="relative w-[90%] max-w-4xl max-h-[90vh] overflow-hidden rounded-xl">
//               <img
//                 src={selectedImage.src}
//                 alt={selectedImage.alt}
//                 className="w-full h-full object-contain"
//               />
//               <button
//                 id="close-button"
//                 onClick={closeModal}
//                 className="absolute top-4 right-6 text-white text-5xl font-bold leading-none opacity-80 hover:opacity-100 transition"
//               >
//                 &times;
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Gallery;

import { useState } from "react";
import Footer from "../components/layout/Footer.jsx";
import PageHeading from "../components/layout/PageHeading.jsx";

// Image data
const images = [
  { id: 1, src: "/assets/glow-salon.jpeg", alt: "Makeup and glamour" },
  { id: 2, src: "/assets/luminous-salon.jpeg", alt: "Hairstyling and salon" },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1574751790409-f9c46d321151?q=80&w=1770&auto=format&fit=crop",
    alt: "Beauty and skincare",
  },
  { id: 4, src: "/assets/luminous-salon.jpeg", alt: "Nail art and manicure" },
  { id: 5, src: "/assets/sparkle-salon.jpeg", alt: "Men's grooming" },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1553894781-a67b2d5f0d3a?q=80&w=1770&auto=format&fit=crop",
    alt: "Fashion photoshoot",
  },
  { id: 7, src: "/assets/glow-salon.jpeg", alt: "Elegant styling" },
  { id: 8, src: "/assets/luminous-salon.jpeg", alt: "Relaxing spa treatment" },
  { id: 9, src: "/assets/sparkle-salon.jpeg", alt: "Relaxing spa treatment" },
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoadingStatus, setImageLoadingStatus] = useState({});

  const handleImageLoad = (id) => {
    setImageLoadingStatus((prev) => ({ ...prev, [id]: true }));
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = (e) => {
    if (e.target.id === "modal-overlay" || e.target.id === "close-button") {
      setModalOpen(false);
      setSelectedImage(null);
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-inter">
        {/* Page Heading */}
        <PageHeading
          heading="Moments of Beauty"
          paragraph="From trendy haircuts to relaxing spa treatments, we provide everything you need to look and feel your best."
        />

        {/* Gallery Grid */}
        <main className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 p-8 max-w-6xl mx-auto">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] bg-white/70 border border-white/80 shadow-md backdrop-blur-md transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
              onClick={() => openModal(image)}
            >
              {!imageLoadingStatus[image.id] && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse" />
              )}
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  !imageLoadingStatus[image.id] ? "hidden" : "block"
                }`}
                onLoad={() => handleImageLoad(image.id)}
              />
            </div>
          ))}
        </main>

        {/* Modal */}
        {modalOpen && selectedImage && (
          <div
            id="modal-overlay"
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[1000]"
            onClick={closeModal}
          >
            <div className="relative w-[90%] max-w-4xl max-h-[90vh] overflow-hidden rounded-xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
              <button
                id="close-button"
                onClick={closeModal}
                className="absolute top-4 right-6 text-white text-5xl font-bold leading-none opacity-80 hover:opacity-100 transition"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;

