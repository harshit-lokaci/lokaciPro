import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// React Icons imports
import { FaStar, FaHeart, FaAward, FaMagic, FaGem, FaLeaf, FaCrown } from "react-icons/fa";
import { MdSpa, MdStars } from "react-icons/md";

// Layout and Sub-components
import PageHeading from "../components/layout/PageHeading.jsx";
import Hero from "../components/aboutUs/Hero.jsx";
import Story from "../components/aboutUs/Story.jsx";
import Values from "../components/aboutUs/Values.jsx";
import Services from "../components/aboutUs/Services.jsx";
import Cta from "../components/aboutUs/CTA.jsx";
import Footer from "../components/layout/Footer.jsx";

// Data remains the same
const aboutData = {
	hero: {
		title: "The Art of Our Salon",
		subtitle: "Where beauty meets artistry and dreams come alive",
		stats: [
			{ number: "10K+", label: "Happy Clients" },
			{ number: "15+", label: "Expert Stylists" },
			{ number: "8", label: "Years Excellence" },
			{ number: "50+", label: "Awards Won" },
		],
	},
	story: {
		heading: "Our Story, Your Transformation",
		text1: "Born from a passion for beauty and a vision to create a sanctuary where every client discovers their inner radiance, Glamour Touch Salon has evolved into the premier destination for luxury beauty services.",
		text2: "Our journey began with a simple belief: that true beauty comes from confidence, and confidence comes from feeling extraordinary. Today, we continue to push the boundaries of beauty innovation while maintaining the personal touch that makes each visit unforgettable.",
		achievements: [
			"Premier Salon Award 2023",
			"Best Customer Service 2022",
			"Eco-Friendly Beauty Leader",
			"Top Rated Spa Experience",
		],
	},
	values: {
		heading: "The Glamour Touch Difference",
		cards: [
			{ icon: <FaStar />, title: "Unmatched Excellence", desc: "We use only premium, eco-friendly products for results that exceed expectations." },
			{ icon: <FaHeart />, title: "Passionate Artistry", desc: "Every service is a masterpiece crafted with love, skill, and attention to detail." },
			{ icon: <MdSpa />, title: "Luxurious Serenity", desc: "Step into our tranquil oasis designed to rejuvenate your body and soul." },
			{ icon: <FaGem />, title: "Premium Quality", desc: "Only the finest products and techniques for our discerning clientele." },
			{ icon: <FaMagic />, title: "Innovative Techniques", desc: "Cutting-edge methods combined with timeless beauty traditions." },
			{ icon: <FaLeaf />, title: "Sustainable Beauty", desc: "Committed to eco-friendly practices and sustainable beauty solutions." },
		],
	},
	services: {
		heading: "Our Signature Services",
		items: [
			{ icon: <FaCrown />, name: "Royal Hair Treatments", description: "Luxurious hair care with premium products" },
			{ icon: <MdStars />, name: "Glamour Makeup", description: "Professional makeup for any occasion" },
			{ icon: <MdSpa />, name: "Spa Wellness", description: "Rejuvenating treatments for body and mind" },
			{ icon: <FaGem />, name: "Bridal Packages", description: "Complete bridal beauty solutions" },
			{ icon: <FaMagic />, name: "Color Innovation", description: "Cutting-edge hair coloring techniques" },
			{ icon: <FaLeaf />, name: "Organic Treatments", description: "Natural and sustainable beauty care" },
		],
	},
};

const AboutUs = () => {
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const smoothOpacity = useSpring(heroOpacity, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % aboutData.services.items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    show: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div ref={containerRef} className="bg-white text-[#212529] overflow-x-hidden relative">
      <PageHeading heading={"The Art of Our Salon"} paragraph={"We are dedicated to making you look and feel amazing. Our team combines expertise and creativity to provide top-notch beauty and wellness services tailored just for you."}/>
      
      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[150px] h-[150px] bg-[radial-gradient(circle,#164374,transparent_60%)] opacity-10 rounded-full filter blur-[40px] animate-pulse"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[200px] h-[200px] bg-[radial-gradient(circle,#2c3e50,transparent_60%)] opacity-[0.08] rounded-full filter blur-[50px] animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-[100px] h-[100px] bg-[radial-gradient(circle,#164374,transparent_60%)] opacity-[0.05] rounded-full filter blur-[30px] animate-ping"></div>
      </div>

      <Hero heroRef={heroRef} y={heroY} opacity={smoothOpacity} data={aboutData.hero} />
      
      <Story data={aboutData.story} staggerContainer={staggerContainer} staggerItem={staggerItem} />

      <Values data={aboutData.values} staggerContainer={staggerContainer} staggerItem={staggerItem} />

      <Services data={aboutData.services} activeService={activeService} setActiveService={setActiveService} />

      <Cta />
      
      <Footer />
    </div>
  );
};

export default AboutUs;



// import { useRef } from "react";
// import { useScroll, useTransform } from "framer-motion";

// import Hero from "../components/aboutUs/Hero.jsx";
// import Story from "../components/aboutUs/Story.jsx";
// import Values from "../components/aboutUs/Values.jsx";
// import Services from "../components/aboutUs/Services.jsx";
// import CTA from "../components/aboutUs/CTA.jsx";
// import PageHeading from "../components/layout/PageHeading.jsx";

// // Example aboutData (you can move this into a separate JSON/data file if needed)
// const aboutData = {
//   hero: {
//     title: "About Us",
//     subtitle:
//       "We build modern, scalable, and user-friendly digital solutions for ambitious businesses.",
//     stats: [
//       { number: "250+", label: "Projects Delivered" },
//       { number: "120+", label: "Happy Clients" },
//       { number: "15+", label: "Years of Experience" },
//     ],
//   },
// };

// const AboutUs = () => {
//   const heroRef = useRef(null);

//   // Scroll animations
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const smoothOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

//   return (
//     <>
//       <PageHeading
//         heading="Pamper Yourself With Our Salon About"
//         paragraph="From trendy haircuts to relaxing spa treatments, we provide everything you need to look and feel your best."
//       />

//       {/* Pass data + animations to Hero */}
//       <Hero aboutData={aboutData} heroY={heroY} smoothOpacity={smoothOpacity} />

//       <Story />
//       <Values />
//       <Services />
//       <CTA />
//     </>
//   );
// };

// export default AboutUs;

// import { useState, useEffect, useRef } from "react";
// import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";

// // React Icons imports
// import {
//   FaStar,
//   FaHeart,
//   FaAward,
//   FaMagic,
//   FaGem,
//   FaLeaf,
//   FaCrown,
//   FaChevronDown,
//   FaCalendarAlt,
//   FaPhone,
//   FaMapMarkerAlt
// } from "react-icons/fa";
// import { MdSpa, MdStars } from "react-icons/md";

// // import Footer from '../../components/salon/Footer';
// import PageHeading from "../components/layout/PageHeading.jsx";

// // Data remains the same
// const aboutData = {
// 	hero: {
// 		title: "About Us",
// 		subtitle: "Where beauty meets artistry and dreams come alive",
// 		stats: [
// 			{ number: "10K+", label: "Happy Clients" },
// 			{ number: "15+", label: "Expert Stylists" },
// 			{ number: "8", label: "Years Excellence" },
// 			{ number: "50+", label: "Awards Won" },
// 		],
// 	},
// 	story: {
// 		heading: "Our Story, Your Transformation",
// 		text1: "Born from a passion for beauty and a vision to create a sanctuary where every client discovers their inner radiance, Glamour Touch Salon has evolved into the premier destination for luxury beauty services.",
// 		text2: "Our journey began with a simple belief: that true beauty comes from confidence, and confidence comes from feeling extraordinary. Today, we continue to push the boundaries of beauty innovation while maintaining the personal touch that makes each visit unforgettable.",
// 		achievements: [
// 			"Premier Salon Award 2023",
// 			"Best Customer Service 2022",
// 			"Eco-Friendly Beauty Leader",
// 			"Top Rated Spa Experience",
// 		],
// 	},
// 	values: {
// 		heading: "The Glamour Touch Difference",
// 		cards: [
// 			{
// 				icon: <FaStar />,
// 				title: "Unmatched Excellence",
// 				desc: "We use only premium, eco-friendly products for results that exceed expectations.",
// 			},
// 			{
// 				icon: <FaHeart />,
// 				title: "Passionate Artistry",
// 				desc: "Every service is a masterpiece crafted with love, skill, and attention to detail.",
// 			},
// 			{
// 				icon: <MdSpa />,
// 				title: "Luxurious Serenity",
// 				desc: "Step into our tranquil oasis designed to rejuvenate your body and soul.",
// 			},
// 			{
// 				icon: <FaGem />,
// 				title: "Premium Quality",
// 				desc: "Only the finest products and techniques for our discerning clientele.",
// 			},
// 			{
// 				icon: <FaMagic />,
// 				title: "Innovative Techniques",
// 				desc: "Cutting-edge methods combined with timeless beauty traditions.",
// 			},
// 			{
// 				icon: <FaLeaf />,
// 				title: "Sustainable Beauty",
// 				desc: "Committed to eco-friendly practices and sustainable beauty solutions.",
// 			},
// 		],
// 	},
// 	services: {
// 		heading: "Our Signature Services",
// 		items: [
// 			{
// 				icon: <FaCrown />,
// 				name: "Royal Hair Treatments",
// 				description: "Luxurious hair care with premium products",
// 			},
// 			{
// 				icon: <MdStars />,
// 				name: "Glamour Makeup",
// 				description: "Professional makeup for any occasion",
// 			},
// 			{
// 				icon: <MdSpa />,
// 				name: "Spa Wellness",
// 				description: "Rejuvenating treatments for body and mind",
// 			},
// 			{
// 				icon: <FaGem />,
// 				name: "Bridal Packages",
// 				description: "Complete bridal beauty solutions",
// 			},
// 			{
// 				icon: <FaMagic />,
// 				name: "Color Innovation",
// 				description: "Cutting-edge hair coloring techniques",
// 			},
// 			{
// 				icon: <FaLeaf />,
// 				name: "Organic Treatments",
// 				description: "Natural and sustainable beauty care",
// 			},
// 		],
// 	},
// };


// const AboutUs = () => {
//   const [activeService, setActiveService] = useState(0);
//   const containerRef = useRef(null);
//   const heroRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });
  
//   const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
//   const smoothOpacity = useSpring(heroOpacity, { stiffness: 50, damping: 20 });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveService(prev => (prev + 1) % aboutData.services.items.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const staggerItem = {
//     hidden: { y: 50, opacity: 0, scale: 0.8 },
//     show: { 
//       y: 0, 
//       opacity: 1, 
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15
//       }
//     }
//   };

//   const CounterAnimation = ({ end, duration = 2, suffix = "" }) => {
//     const [count, setCount] = useState(0);
//     const countRef = useRef(null);
//     const isInView = useInView(countRef);

//     useEffect(() => {
//       if (isInView) {
//         let start = 0;
//         const endValue = parseInt(end);
//         if (isNaN(endValue)) return;
//         const increment = endValue / (duration * 60);
//         const timer = setInterval(() => {
//           start += increment;
//           if (start >= endValue) {
//             setCount(endValue);
//             clearInterval(timer);
//           } else {
//             setCount(Math.floor(start));
//           }
//         }, 1000 / 60);
//         return () => clearInterval(timer);
//       }
//     }, [isInView, end, duration]);

//     return <span ref={countRef}>{count}{suffix}</span>;
//   };

//   return (
//     <div ref={containerRef} className="bg-white text-[#212529] overflow-x-hidden relative">
//       <PageHeading heading={"About Our Salon"} paragraph={"We are dedicated to making you look and feel amazing. Our team combines expertise and creativity to provide top-notch beauty and wellness services tailored just for you."}/>
      
//       {/* Animated Background Elements */}
//       <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
//         <div className="absolute top-[10%] left-[5%] w-[150px] h-[150px] bg-[radial-gradient(circle,#164374,transparent_60%)] opacity-10 rounded-full filter blur-[40px] animate-pulse"></div>
//         <div className="absolute bottom-[15%] right-[10%] w-[200px] h-[200px] bg-[radial-gradient(circle,#2c3e50,transparent_60%)] opacity-[0.08] rounded-full filter blur-[50px] animate-bounce"></div>
//         <div className="absolute top-1/2 left-1/2 w-[100px] h-[100px] bg-[radial-gradient(circle,#164374,transparent_60%)] opacity-[0.05] rounded-full filter blur-[30px] animate-ping"></div>
//       </div>

//       {/* Parallax Hero Section */}
//       <motion.section 
//         ref={heroRef}
//         className="relative h-fit flex items-center justify-center text-center overflow-hidden w-full py-24"
//         style={{ y: heroY, opacity: smoothOpacity }}
//       >
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579247854898-d8f94e9f90c1?q=80&w=1770&auto=format&fit=crop')] bg-cover bg-center z-10"></div>
//         <div className="absolute inset-0 bg-white/70 z-20"></div>
        
//         <div className="relative z-30 w-full flex items-center justify-center flex-col p-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 100, scale: 0.5 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
//             className="text-[clamp(3rem,8vw,5rem)] font-extrabold tracking-[-2px] text-[#212529]"
//             style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}
//           >
//             {aboutData.hero.title}
//           </motion.h1>
          
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="text-[clamp(1rem,3vw,1.5rem)] mt-4 max-w-[600px] text-[#212529]"
//           >
//             {aboutData.hero.subtitle}
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 1 }}
//             className="flex flex-wrap justify-center gap-8 mt-12"
//           >
//             {aboutData.hero.stats.map((stat, idx) => (
//               <motion.div
//                 key={idx}
//                 className="bg-white/90 p-6 w-[200px] rounded-xl border border-[#e9ecef] backdrop-blur-lg transition-all duration-300 ease-in-out shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] text-center"
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="text-4xl font-bold text-[#164374]">
//                   <CounterAnimation end={stat.number.replace(/\D/g, '')} suffix={stat.number.replace(/\d/g, '')} />
//                 </div>
//                 <div className="text-sm text-[#212529] mt-2">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl text-[#212529]"
//           >
//             <FaChevronDown />
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Story Section */}
//       <section className="py-24 px-4 sm:px-12 relative z-10 bg-white">
//         <div className="container mx-auto">
//           <motion.div
//             className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:px-16"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <motion.div variants={staggerItem} className="lg:pr-8 lg:order-1 order-2">
//               <h2 className="text-5xl font-extrabold mb-6 text-[#212529]">
//                 {aboutData.story.heading}
//               </h2>
//               <div className="space-y-4 text-[#212529]/90">
//                 <p className="leading-loose">{aboutData.story.text1}</p>
//                 <p className="leading-loose">{aboutData.story.text2}</p>
//               </div>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
//                 {aboutData.story.achievements.map((achievement, idx) => (
//                   <motion.div
//                     key={idx}
//                     className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-[#e9ecef]"
//                     whileHover={{ scale: 1.02 }}
//                   >
//                     <FaAward className="text-[#164374] text-xl" />
//                     <span className="text-sm">{achievement}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               variants={staggerItem}
//               className="relative rounded-2xl overflow-hidden shadow-2xl lg:order-2 order-1"
//             >
//               <div className="relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop"
//                   alt="Salon Interior"
//                   className="w-full h-full object-cover block"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#164374]/10 to-[#2c3e50]/10"></div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-16 px-4 sm:px-10 lg:px-40 relative bg-gray-50">
//         <div className="container mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center text-5xl mb-16 text-[#212529] font-bold"
//           >
//             {aboutData.values.heading}
//           </motion.h2>
          
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             {aboutData.values.cards.map((card, idx) => (
//               <motion.div
//                 key={idx}
//                 className="relative p-10 rounded-2xl text-center border border-[#e9ecef] overflow-hidden bg-white/90 shadow-[0_4px_15px_rgba(0,0,0,0.05)] group"
//                 variants={staggerItem}
//                 whileHover={{ y: -10, scale: 1.02 }}
//               >
//                 <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#164374] rounded-full filter blur-2xl opacity-10 group-hover:scale-[3] transition-transform duration-500 ease-in-out"></div>
                
//                 <motion.div className="text-5xl text-[#164374] mb-6 relative z-10">
//                   {card.icon}
//                 </motion.div>
//                 <h3 className="text-2xl font-semibold mb-4 relative z-10 text-[#212529]">{card.title}</h3>
//                 <p className="leading-relaxed text-[#212529]/90 relative z-10">{card.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Services Showcase */}
//       <section className="py-16 px-4 bg-white">
//         <div className="container mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-center text-5xl mb-16 text-[#212529] font-bold"
//           >
//             {aboutData.services.heading}
//           </motion.h2>
          
//           <div className="flex justify-center gap-6 flex-wrap">
//             {aboutData.services.items.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 className={`w-full max-w-[400px] min-h-[200px] p-8 rounded-xl text-center cursor-pointer border-2 transition-all duration-400 ease-in-out text-[#212529] group ${activeService === idx ? 'bg-[#164374] border-[#164374] text-white -translate-y-2.5' : 'bg-transparent border-[#e9ecef] hover:bg-[#164374] hover:border-[#164374] hover:-translate-y-2.5'}`}
//                 onClick={() => setActiveService(idx)}
//               >
//                 <div className={`text-4xl mb-4 transition-colors duration-400 ${activeService === idx ? 'text-white' : 'text-[#164374] group-hover:text-white'}`}>{service.icon}</div>
//                 <h3 className={`text-xl font-semibold mb-2 ${activeService !== idx && 'group-hover:text-white'}`}>{service.name}</h3>
//                 <p className={`text-sm leading-normal transition-colors duration-400 ${activeService === idx ? 'text-white/90' : 'text-[#6c757d] group-hover:text-white/90'}`}>{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Enhanced CTA Section */}
//       <section className="py-8 px-4 sm:px-8 lg:px-32 text-center">
//         <div className="container mx-auto">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="bg-white/80 p-8 sm:p-16 rounded-3xl border border-[#e9ecef] shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
//           >
//             <motion.h2
//               className="text-4xl sm:text-5xl font-bold text-[#212529] mb-6"
//             >
//               Ready for Your Transformation?
//             </motion.h2>
            
//             <p className="max-w-xl mx-auto mb-8 text-[#6c757d]">
//               Join thousands of satisfied clients who've discovered their most beautiful selves at Glamour Touch Salon.
//             </p>
            
//             <div className="flex justify-center gap-6 flex-col sm:flex-row items-center">
//               <motion.button
//                 className="w-full sm:w-auto py-4 px-8 rounded-full border-none text-base font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 ease-in-out bg-[#164374] text-white hover:bg-[#0056b3]"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <FaCalendarAlt />
//                 Book Your Appointment
//               </motion.button>
              
//               <motion.button
//                 className="w-full sm:w-auto py-4 px-8 rounded-full text-base font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 ease-in-out bg-transparent text-[#164374] border-2 border-[#164374] hover:bg-[#164374] hover:text-white"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <FaPhone />
//                 Call Us Now
//               </motion.button>
//             </div>
            
//             <div className="mt-10 flex justify-center gap-4 sm:gap-8 flex-wrap">
//               <div className="flex items-center gap-2 text-[#212529]">
//                 <FaMapMarkerAlt />
//                 Address...
//               </div>
//               <div className="flex items-center gap-2 text-[#212529]">
//                 <FaPhone />
//                 (555) 123-456-789
//               </div>
//               <div className="flex items-center gap-2 text-[#212529]">
//                 <FaStar />
//                 4.9/5 Rating
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//       {/* <Footer/> */}
//     </div>
//   );
// };

// export default AboutUs;