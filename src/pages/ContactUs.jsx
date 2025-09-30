import React from "react";
import { motion } from "framer-motion";
// import GetInTouch from "../../Components/salon/GetInTouch";
// import Footer from "../../Components/salon/Footer";
// import Heading from "../../Components/Layout/Heading";
import GetInTouch from "../components/home/GetInTouch";
import Footer from "../components/layout/Footer";
import PageHeading from "../components/layout/PageHeading";


const ContactUs = () => {
  return (
    <>
      <PageHeading
        heading={"Get in Touch With Us"}
        paragraph={
          "We’d love to hear from you! Book an appointment, ask a question, or just say hello."
        }
      />
      <motion.div
        className="bg-white text-gray-900 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* Contact Form Section */}
        <GetInTouch />

        {/* Map Section */}
        <section className="px-6 py-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black">
            Visit Us
          </h2>
          <iframe
            title="Salon Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086111625195!2d-122.41941518468165!3d37.774929779759385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8a2e2f9b%3A0x1234567890abcdef!2sSalon%20Location!5e0!3m2!1sen!2sus!4v1695656789012!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] rounded-2xl shadow-md border-0"
          ></iframe>
        </section>
      </motion.div>

      <Footer />
    </>
  );
};

export default ContactUs;
