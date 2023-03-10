import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Presenter from "./index";

export default {
  title: "Test/ItemList",
  component: Presenter,
} as ComponentMeta<typeof Presenter>;

const Template: ComponentStory<typeof Presenter> = (args) => (
  <Presenter {...args} />
);

export const ItemList1 = Template.bind({});
ItemList1.args = {
  itemList: [
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
      header: "Заголовок 2",
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
  ],
};

export const ItemList2 = Template.bind({});
ItemList2.args = {
  itemList: [
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
      header: "Заголовок 2",
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
    {
      itemId: 4,
      header: "Заголовок 4",
      options: ["элемент списка 1", "элемент списка 2", "элемент списка 3"],
      text: "какой-то текст 1 текст какой-то 1 какой-то",
    },
    {
      itemId: 5,
      header: "Заголовок 5",
      options: [
        "элемент списка 1",
        "элемент списка 2",
        "элемент списка 3",
        "элемент списка 4",
        "элемент списка 5",
      ],
      text: "какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то",
    },
    {
      itemId: 6,
      header: "Заголовок 6",
      options: ["элемент списка 1", "элемент списка 2", "элемент списка 3"],
      text: "какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то",
    },
  ],
};
