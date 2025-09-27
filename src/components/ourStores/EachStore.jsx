import React, { useRef } from "react";
import styles from "./EachStore.module.css";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const EachStore = ({ name, address, phone, whatsapp, images }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.card}>
      {/* Image Slider */}
      <div className={styles.sliderWrapper}>
        <button
          className={`${styles.chevron} ${styles.left}`}
          onClick={() => scroll("left")}
        >
          <FiChevronLeft size={22} />
        </button>

        <div ref={sliderRef} className={styles.imageSlider}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${name} slide ${index + 1}`}
              className={styles.image}
            />
          ))}
        </div>

        <button
          className={`${styles.chevron} ${styles.right}`}
          onClick={() => scroll("right")}
        >
          <FiChevronRight size={22} />
        </button>
      </div>

      {/* Store Details */}
      <div className={styles.details}>
        <div>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.address}>{address}</p>
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <a href={`tel:${phone}`} className={styles.phoneButton}>
            <FiPhoneCall size={18} /> Call
          </a>
          <a
            href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <FaWhatsapp size={18} /> WhatsApp
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionButton}
          >
            <FiMapPin size={18} /> Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default EachStore;
