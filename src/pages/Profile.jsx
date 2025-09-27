import { FaEdit, FaCalendarAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";

const upcomingAppointments = [
  { service: "Haircut", stylist: "Alice", date: "2025-10-05", time: "2:00 PM" },
  {
    service: "Manicure",
    stylist: "Sophia",
    date: "2025-10-12",
    time: "11:00 AM",
  },
];

const favoriteServices = ["Haircut", "Spa", "Manicure"];

const Profile = () => {
  return (
    <div className="font-poppins min-h-screen px-8 py-12 flex flex-col gap-12 bg-gradient-to-br from-[#f9f9fb] to-[#f0f4ff] text-[#222]">
      {/* Profile Header */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 mb-12 p-8 rounded-2xl bg-white/40 backdrop-blur-xl shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition-all"
        whileHover={{
          y: -4,
          boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
        }}
      >
        <motion.div
          className="w-[140px] h-[140px] flex items-center justify-center rounded-full border-[5px] border-white/50 bg-gradient-to-br from-[#f0f0f0] to-[#e6e6e6] text-gray-500 text-7xl shadow-[0_5px_18px_rgba(0,0,0,0.12)]"
          whileHover={{
            rotate: 5,
            scale: 1.06,
            borderColor: "#2575fc",
            boxShadow: "0 8px 24px rgba(37,117,252,0.3)",
          }}
        >
          <CgProfile />
        </motion.div>

        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#222]">
            Jane Doe
          </h1>
          <p className="text-gray-600 mt-1">jane.doe@example.com</p>
          <motion.button
            className="mt-4 flex items-center gap-2 bg-gradient-to-br from-[#6a11cb] to-[#2575fc] text-white font-medium text-sm px-6 py-2.5 rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-all"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 6px 20px rgba(106,17,203,0.25)",
              background: "linear-gradient(135deg, #5b0eb5, #1d63e6)",
            }}
          >
            <FaEdit /> Edit Profile
          </motion.button>
        </div>
      </motion.div>

      {/* Upcoming Appointments */}
      <h2 className="text-2xl font-semibold">Upcoming Appointments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {upcomingAppointments.map((appt, index) => (
          <motion.div
            key={index}
            className="bg-white/40 backdrop-blur-lg border-2 border-white/50 p-6 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] cursor-pointer transition-all"
            whileHover={{
              y: -6,
              scale: 1.03,
              borderColor: "#2575fc",
              boxShadow: "0 12px 28px rgba(0,0,0,0.14)",
            }}
          >
            <h3 className="text-lg font-semibold text-[#222] mb-2">
              {appt.service}
            </h3>
            <p className="flex items-center gap-2 text-gray-700 text-sm">
              <FaStar className="text-yellow-500" /> Stylist: {appt.stylist}
            </p>
            <p className="flex items-center gap-2 text-gray-600 text-sm mt-1">
              <FaCalendarAlt className="text-blue-600" /> {appt.date} at{" "}
              {appt.time}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Favorite Services */}
      <h2 className="text-2xl font-semibold">Favorite Services</h2>
      <div className="flex flex-wrap gap-4">
        {favoriteServices.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white/40 backdrop-blur-md border-2 border-white/50 px-5 py-2.5 rounded-xl shadow-[0_5px_16px_rgba(0,0,0,0.1)] text-[#333] font-medium text-sm cursor-pointer transition-all"
            whileHover={{
              y: -5,
              scale: 1.04,
              borderColor: "#6a11cb",
              boxShadow: "0 10px 22px rgba(106,17,203,0.18)",
            }}
          >
            {service}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
