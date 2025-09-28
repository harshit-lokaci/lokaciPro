import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative py-20 px-4 bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Left Text */}
          <div className="order-2 lg:order-1">
            <motion.h2
              className="text-4xl font-extrabold mb-6 text-black leading-tight"
              variants={textVariants}
            >
              Our World of Beauty
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 leading-8 mb-8"
              variants={textVariants}
            >
              Welcome to our salon! We provide professional beauty and wellness
              services tailored to your needs. Our team of experts ensures every
              visit leaves you looking and feeling your best.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              variants={sectionVariants}
            >
              <motion.div
                className="text-center p-8 rounded-xl bg-gray-100 shadow-md hover:scale-105 transition-transform"
                variants={textVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold mb-2 text-black">500+</div>
                <div className="text-lg text-gray-500">Happy Clients</div>
              </motion.div>

              <motion.div
                className="text-center p-8 rounded-xl bg-gray-100 shadow-md hover:scale-105 transition-transform"
                variants={textVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold mb-2 text-black">10+</div>
                <div className="text-lg text-gray-500">Years Experience</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="order-1 lg:order-2 relative"
            variants={imageVariants}
          >
            <div className="w-full h-96 relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/assets/salonhero.jpeg"
                alt="Salon Interior"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
