import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/layout/Footer.jsx";
import PageHeading from "../components/layout/PageHeading.jsx";

// React Icons
import {
  FiScissors,
  FiEdit2,
  FiSmile,
  FiHeart,
  FiStar,
  FiCoffee,
  FiMessageSquare,
  FiChevronDown,
} from "react-icons/fi";

// --- data ---
const servicesData = [
  {
    id: 1,
    title: "Haircuts & Styling",
    description:
      "Trendy cuts, blow-dry, and professional styling for every occasion.",
    icon: <FiScissors size={24} />,
  },
  {
    id: 2,
    title: "Hair Coloring",
    description:
      "Balayage, highlights, global color, and root touch-ups with premium products.",
    icon: <FiEdit2 size={24} />,
  },
  {
    id: 3,
    title: "Manicure & Pedicure",
    description:
      "Relaxing nail care, cuticle treatment, and spa pedicures for healthy hands & feet.",
    icon: <FiSmile size={24} />,
  },
  {
    id: 4,
    title: "Facials & Skincare",
    description:
      "Hydrating facials, clean-ups, and glow treatments customized for your skin.",
    icon: <FiHeart size={24} />,
  },
  {
    id: 5,
    title: "Makeup Services",
    description:
      "Bridal, party, and casual makeup by our professional makeup artists.",
    icon: <FiStar size={24} />,
  },
  {
    id: 6,
    title: "Spa & Massage",
    description:
      "Head, body, and relaxation therapies to refresh your mind and body.",
    icon: <FiCoffee size={24} />,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Book an Appointment",
    desc: "Choose your service and book online or call us.",
  },
  {
    step: "02",
    title: "Consultation",
    desc: "Our experts will understand your needs and preferences.",
  },
  {
    step: "03",
    title: "Pampering Session",
    desc: "Sit back, relax, and enjoy your luxurious treatment.",
  },
  {
    step: "04",
    title: "Aftercare Advice",
    desc: "We provide tips to maintain your look even after you leave.",
  },
];

const testimonials = [
  {
    name: "Sophia Miller",
    role: "Regular Client",
    feedback:
      "The best salon experience I’ve ever had. My hair has never looked this good!",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Emma Wilson",
    role: "Bride-to-be",
    feedback:
      "They did my bridal makeup and it was flawless. Highly recommend!",
    avatar: "https://i.pravatar.cc/100?img=17",
  },
  {
    name: "Olivia Brown",
    role: "Spa Lover",
    feedback: "The spa session was so relaxing. I felt completely rejuvenated!",
    avatar: "https://i.pravatar.cc/100?img=19",
  },
];

const faqs = [
  {
    q: "Do I need to book an appointment in advance?",
    a: "Yes, we recommend booking in advance to ensure availability, especially on weekends.",
  },
  {
    q: "Which hair color brands do you use?",
    a: "We use premium, ammonia-free products from L’Oréal and Wella for safe, lasting results.",
  },
  {
    q: "Do you offer bridal packages?",
    a: "Yes! We have customized bridal packages including hair, makeup, and pre-wedding treatments.",
  },
  {
    q: "Is home service available?",
    a: "Currently, we provide in-salon services only. Home service will be available soon.",
  },
];

// motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <motion.div
        className="font-poppins bg-white text-black overflow-x-hidden leading-relaxed pb-8"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* Hero Section */}
        <PageHeading
          heading="Pamper Yourself With Our Salon Service"
          paragraph="From trendy haircuts to relaxing spa treatments, we provide everything you need to look and feel your best."
        />

        {/* Services Grid */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-center text-4xl font-extrabold mb-12 relative text-black after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-blue-800 after:rounded-full">
            Our Services
          </h2>
          <motion.div
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {servicesData.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white p-10 rounded-2xl text-center border border-gray-200 shadow-md hover:shadow-xl transition-transform"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mx-auto mb-6 text-white shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-center text-4xl font-extrabold mb-12 relative text-black after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-blue-800 after:rounded-full">
            How It Works
          </h2>

          <motion.div
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                className="bg-white p-10 rounded-2xl text-center border border-gray-200 shadow-md hover:shadow-xl transition-transform"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Step Number Circle */}
                <div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mx-auto mb-6 text-white font-extrabold text-xl shadow-md">
                  {step.step}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-center text-4xl font-extrabold mb-12 relative text-black after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-blue-800 after:rounded-full">
            What Our Clients Say
          </h2>
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-2xl text-center shadow-md border border-gray-200"
                variants={itemVariants}
              >
                <FiMessageSquare
                  size={40}
                  className="mx-auto mb-4 text-blue-800"
                />
                <p className="italic text-black mb-4">{t.feedback}</p>
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-blue-400 mx-auto mb-3 shadow-md"
                />
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <span className="text-gray-500 text-sm">{t.role}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-center text-4xl font-extrabold mb-12 relative text-black after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-blue-800 after:rounded-full">
            Frequently Asked Questions
          </h2>
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
                variants={itemVariants}
              >
                <div
                  className="flex justify-between items-center cursor-pointer text-lg font-semibold text-black"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <motion.div
                    className="w-6 h-6"
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      className="pt-4 text-gray-600"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <motion.section
          className="bg-gray-900 text-white text-center px-6 py-20 rounded-3xl shadow-inner mx-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold mb-4">
            Ready for a Makeover?
          </h2>
          <p className="mb-8 text-lg">
            Book your appointment today and let us pamper you like never before.
          </p>
          <motion.button
            className="bg-blue-800 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </motion.section>
      </motion.div>
      <Footer />
    </>
  );
};

export default Services;
