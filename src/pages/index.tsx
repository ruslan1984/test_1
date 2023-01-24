import ItemList from "../modules/ItemList";
import { TItemList } from "../modules/ItemList/types";

interface IItemList {
  itemList: TItemList;
}

export default function Index({ itemList }: IItemList) {
  return <ItemList itemList={itemList} />;
}

export const getStaticProps = async () => {
  try {
    const itemList = [
      {
        itemId: 1,
        header: "Заголовок 1",
        options: [
          "элемент списка 1",
          "элемент списка 2",
          "элемент списка 3",
          "элемент списка 4",
          "элемент списка 5",
        ],
        text: "какой-то текст 1 текст какой-то 1 какой-то",
      },
      {
        itemId: 2,
        header: "Заголовок 21",
        options: ["элемент списка 1", "элемент списка 2", "элемент списка 3"],
        text: "какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то",
      },
      {
        itemId: 3,
        header: "Заголовок 3",
        options: [
          "элемент списка 1",
          "элемент списка 2",
          "элемент списка 3",
          "элемент списка 4",
        ],
        text: "какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то",
      },
    ];
    return {
      props: { itemList },
    };
  } catch (err: any) {
    console.error(err?.message);
  }
};
