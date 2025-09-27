import { motion } from "framer-motion";

const PageHeading = ({ heading, paragraph }) => {
  return (
    <motion.section
      className="
        bg-gradient-to-br from-[#164374] to-[#306390] 
        text-white text-center 
        px-8 py-26 pb-40 
        relative overflow-hidden
        shadow-[inset_0_-10px_20px_rgba(0,0,0,0.1)]
        [clip-path:ellipse(100%_80%_at_50%_0)]
      "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-extrabold mb-4">{heading}</h1>
      <p className="text-lg max-w-2xl mx-auto">{paragraph}</p>
    </motion.section>
  );
};

export default PageHeading;
