import React, { useEffect } from "react";
import styles from "./PriceListEachService.module.css";

const PriceListEachService = (props) => {
  const { item, activeServiceHandler } = props;

  useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", "#ECFAFF");
    } else {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = "#ECFAFF";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <div>
        <div>{item?.serviceName}</div>
        <div className={styles.basePrice}>₹{item?.basePrice}</div>
      </div>
      <div>
        <button
          className={styles.viewBtn}
          onClick={() => activeServiceHandler(item)}
        >
          View Discount
        </button>
      </div>
    </div>
  );
};

export default PriceListEachService;
