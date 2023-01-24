export type TItem = {
  header: string;
  options: string[];
  text: string;
};

export type TItemList = (TItem & { itemId: number })[];
