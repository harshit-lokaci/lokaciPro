import { useState } from "react";
import styles from "./PriceListAddOns.module.css";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";

const AddOns = (props) => {
  const { activeService, isOpen, onClose, addToCartHandler } = props;
  window.onclick = (event) =>
    event.target.id === "plContainer" ? onClose() : null;
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      onClose();
    }
  });
  const [activeAddOn, setActiveAddOn] = useState();

  const getDiscountedBasePrice = (basePrice, offerPercentage) => {
    // Parse and validate basePrice
    const bp = parseFloat(basePrice);
    const validBasePrice = !isNaN(bp) && bp > 0 ? bp : 0;

    // Parse and validate offerPercentage
    const dp = parseFloat(offerPercentage);
    const validOfferPercentage = !isNaN(dp) && dp >= 0 && dp <= 100 ? dp : 0;

    // Calculate discount and final price
    const discountAmt = validBasePrice * (validOfferPercentage / 100);
    const discountedPrice = validBasePrice - discountAmt;

    // Return a valid integer or 0 if calculation fails
    return Math.max(0, Math.round(discountedPrice));
  };

  const getFinalPrice = (discountedBasePrice, addOnBasePrice) => {
    // Parse and validate discountedBasePrice
    const dbp = parseFloat(discountedBasePrice);
    const validDiscountedBasePrice = !isNaN(dbp) && dbp >= 0 ? dbp : 0;

    // Parse and validate addOnBasePrice
    const abp = parseFloat(addOnBasePrice);
    const validAddOnBasePrice = !isNaN(abp) && abp >= 0 ? abp : 0;

    // Calculate total price
    const totalDiscountedPrice = validDiscountedBasePrice + validAddOnBasePrice;

    // Return a valid integer (rounded) or 0
    return Math.round(totalDiscountedPrice);
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContainer} id="plContainer">
        <div className={styles.mainContent}>
          <div className={styles.mainHeader}>
            <div className={styles.serviceName}>
              {activeService?.serviceName}
            </div>
            <div className={styles.discountedPrice}>
              <div className={styles.startingFrom}>Starting From</div>₹
              {getDiscountedBasePrice(
                activeService?.basePrice,
                activeService?.offerPercentage
              )}
            </div>
          </div>
          {activeService?.addOns?.length > 0 && (
            <div className={styles.addOnsList}>
              <div className={styles.addOnsListContainer}>
                {activeService?.addOns?.map((item, index) => (
                  <div
                    key={index}
                    className={styles.mainAddOnWrapper}
                    onClick={() => setActiveAddOn(item)}
                  >
                    <div className={styles.mainAddOnContainer}>
                      <div className={styles.leftWrapper}>
                        <div className={styles.iconWrapper}>
                          {activeAddOn?.labelId === item?.labelId ? (
                            <MdOutlineRadioButtonChecked size={24} />
                          ) : (
                            <MdOutlineRadioButtonUnchecked size={24} />
                          )}
                        </div>
                        <div className={styles.labelWrapper}>{item?.label}</div>
                      </div>
                      <div className={styles.rightWrapper}>
                        +₹{item?.disPrice}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className={styles.footer}>
            <div className={styles.countWrapper}>
              <div className={styles.basePriceFinal}>
                ₹
                {getFinalPrice(
                  parseInt(activeService?.basePrice),
                  activeAddOn?.orgPrice
                )}
              </div>
              <div className={styles.discountPriceFinal}>
                ₹
                {getFinalPrice(
                  getDiscountedBasePrice(
                    activeService?.basePrice,
                    activeService?.offerPercentage
                  ),
                  activeAddOn?.disPrice
                )}
              </div>
            </div>
            <div className={styles.addBtnWrapper}>
              <button
                className={styles.addBtn}
                onClick={() =>
                  addToCartHandler("add", activeService, activeAddOn)
                }
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
