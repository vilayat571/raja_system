import delivery from "../assets/images/delivery.png";
import foods from "../assets/images/foods.png";
import menu from "../assets/images/menu.png";

export interface IFeatures {
  id?: number;
  img: string;
  title: string;
  text: string;
}

export interface IMenu extends IFeatures {
  price: string;
}

export const featuresData: IFeatures[] = [
  {
    id: 1,
    img: delivery,
    title: "Speedy arrival",
    text: "Don't wait for dinner! Order from anywhere and get your meal at your doorstep in under 30 minutes.",
  },
  {
    id: 2,
    img: foods,
    title: "Natural foods",
    text: "We use farm-fresh ingredients, never anything artificial. Real food, real flavor! Just try and know!",
  },
  {
    id: 3,
    img: menu,
    title: "Available Price",
    text: "Delicious natural food at an affordable price! You don't have to break the bank to eat healthy :)",
  },
];

export const menuData: IMenu[] = [
  {
    id: 1,
    img: "https://monyo.az/uploads2/uploads2024-05/a_1983_20240509193308815830301.jpg",
    price: "3",
    text: " Tomata paste soy sauce garlic...",
    title: " Chilly Bryani",
  },
  {
    id: 1,
    img: "https://monyo.az/uploads2/uploads2024-05/a_1983_20240509193308815830301.jpg",
    price: "3",
    text: " Tomata paste soy sauce garlic...",
    title: " Chilly Bryani",
  },
  {
    id: 1,
    img: "https://monyo.az/uploads2/uploads2024-05/a_1983_20240509193308815830301.jpg",
    price: "3",
    text: " Tomata paste soy sauce garlic...",
    title: " Chilly Bryani",
  },
  {
    id: 1,
    img: "https://monyo.az/uploads2/uploads2024-05/a_1983_20240509193308815830301.jpg",
    price: "3",
    text: " Tomata paste soy sauce garlic...",
    title: " Chilly Bryani",
  },
  {
    id: 1,
    img: "https://monyo.az/uploads2/uploads2024-05/a_1983_20240509193308815830301.jpg",
    price: "3",
    text: " Tomata paste soy sauce garlic...",
    title: " Chilly Bryani",
  },
  {
    id: 1,
    img: "https://monyo.az/uploads2/uploads2024-05/a_1983_20240509193308815830301.jpg",
    price: "3",
    text: " Tomata paste soy sauce garlic...",
    title: " Chilly Bryani",
  },
];
