import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const data = {
  branding: {
    primaryColor: "black",
    secondaryColor: "#fce4ec",
  },
  contact: {
    phone: "+1 234 567 890",
    email: "info@salon.com",
    address: "123 Salon Street, Noida, India",
    openingHours: [
      { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
  socialLinks: [
    { platform: "facebook", url: "https://facebook.com" },
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "whatsapp", url: "https://wa.me/1234567890" },
  ],
  services: {
    items: [
      { id: "1", title: "Haircut" },
      { id: "2", title: "Facial" },
      { id: "3", title: "Spa" },
    ],
  },
};

const socialIconMap = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
};

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return toast.error("Name is required!");
    if (!email.trim()) return toast.error("Email is required!");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return toast.error("Invalid email format!");

    if (!service) return toast.error("Please select a service!");
    if (!message.trim()) return toast.error("Message cannot be empty!");

    toast.success("Message sent successfully!");

    setName("");
    setEmail("");
    setService("");
    setMessage("");
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="contact"
      className="py-12 px-6 md:px-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-extrabold mb-4"
            style={{ color: data.branding.primaryColor }}
            variants={itemVariants}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-xl mx-auto"
            variants={itemVariants}
          >
            Ready for your beauty transformation? Contact us to book your
            appointment
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <motion.div className="flex flex-col gap-4" variants={itemVariants}>
              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105">
                <div
                  className="p-4 rounded-full"
                  style={{ backgroundColor: data.branding.secondaryColor }}
                >
                  <FaPhone
                    className="text-2xl"
                    style={{ color: data.branding.primaryColor }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600">{data.contact.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105">
                <div
                  className="p-4 rounded-full"
                  style={{ backgroundColor: data.branding.secondaryColor }}
                >
                  <FaEnvelope
                    className="text-2xl"
                    style={{ color: data.branding.primaryColor }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">{data.contact.email}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4 p-4 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105">
                <div
                  className="p-4 rounded-full"
                  style={{ backgroundColor: data.branding.secondaryColor }}
                >
                  <FaMapMarkerAlt
                    className="text-2xl"
                    style={{ color: data.branding.primaryColor }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Address</h3>
                  <p className="text-gray-600">{data.contact.address}</p>
                </div>
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <div className="bg-gray-100 p-6 rounded-xl">
                {data.contact.openingHours.map((schedule, i) => (
                  <div
                    key={i}
                    className="flex justify-between mb-2 text-gray-800 font-medium"
                  >
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {data.socialLinks.map((social, i) => {
                  const IconComponent = socialIconMap[social.platform];
                  return (
                    <motion.a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full shadow-md flex items-center justify-center"
                      style={{ backgroundColor: data.branding.primaryColor }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <IconComponent className="text-white text-lg" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select a service</option>
                  {data.services.items.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  placeholder="Tell us about your preferences..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 rounded-full font-bold text-white transition-all"
                style={{ backgroundColor: data.branding.primaryColor }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default GetInTouch;
