export const Cats_URL: string = "/Cats";
export const Run_URL: string = "/RunPage";
export const Action_URL: string = "/ActionPage";
export const Contacts_URL: string = "/ContactsPage";
export const delayButton: number = 265;

export type TItem = {
  id: number;
  name: string;
  weight: number;
  description: string;
  price: number;
  heart: boolean;
  count: number;
};

export type TItemData = TItem[];
