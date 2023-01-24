import React, { Fragment } from "react";
import Item from "./Item";
import { TItemList } from "./types";
import styles from "./styles.module.css";

interface IPresenter {
  itemList: TItemList;
}
const ItemList = ({ itemList }: IPresenter) => {
  return (
    <div className={styles.itemList}>
      {itemList?.map(({ header, options, text, itemId }) => (
        <Fragment key={itemId}>
          <Item header={header} options={options} text={text} />
        </Fragment>
      ))}
    </div>
  );
};

export default ItemList;
