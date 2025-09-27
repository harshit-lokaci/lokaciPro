import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import styles from "./PriceListEachCategory.module.css";
import PriceListEachService from "./PriceListEachService";

const EachCategory = (props) => {
  const { itemPrice, activeServiceHandler, addToCartHandler } = props;
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={styles.eachCategory}>
      <div
        className={styles.categoryWrapper}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{itemPrice?.categoryName}</div>
        <div>
          <BiChevronDown size={24} />
        </div>
      </div>
      {isOpen && (
        <div>
          {itemPrice?.services?.map((item, index) => (
            <PriceListEachService
              key={index}
              item={item}
              activeServiceHandler={activeServiceHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EachCategory;
