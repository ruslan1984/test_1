import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Item from "./index";

export default {
  title: "Test/Item",
  component: Item,
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => <Item {...args} />;

export const Option1 = Template.bind({});
Option1.args = {
  header: "Заголовок 1",
  options: [
    "элемент списка 1",
    "элемент списка 2",
    "элемент списка 3",
    "элемент списка 4",
    "элемент списка 5",
  ],
  text: "какой-то текст 1 текст какой-то 1 какой-то",
};

export const Option2 = Template.bind({});
Option2.args = {
  header: "Заголовок 2",
  options: ["элемент списка 1", "элемент списка 2", "элемент списка 3"],
  text: "какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то",
};

export const Option3 = Template.bind({});

Option3.args = {
  header: "Заголовок 3",
  options: [
    "элемент списка 1",
    "элемент списка 2",
    "элемент списка 3",
    "элемент списка 4",
  ],
  text: "какой-то текст 1 текст какой-то 1 какой-то текст 1 текст какой-то 1 какой-то",
};
