import React from "react";
import { TItem } from "../types";
import styles from "./styles.module.css";

const Presenter = ({ header, options, text }: TItem) => {
  return (
    <div className={styles.item}>
      <h4>{header}</h4>
      <ul>
        {options?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{text}</p>
    </div>
  );
};

export default Presenter;
