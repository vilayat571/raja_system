import { faUser } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IFeatures } from "./Features/data";
import beef from '../assets/images/beef.jpg';
import burger from '../assets/images/burger.jpg';
import pokara from '../assets/images/pakora.jpg';





export interface IResults {
  id: number;
  icon: IconProp;
  title: string;
  description: string;
}


export interface IMenu extends IFeatures {
  price: string;
}


export const menuData: IMenu[] = [
  {
    id: 1,
    img: burger,
    price: "20",
    title: "Beef burger",
  },
  {
    id: 2,
    img: beef,
    price: "45",
    title: "Beef steak",
  },
  {
    id: 3,
    img: pokara,
    price: "14",
    title: "Onion pakora",
  },
];

export const resultsFeatures: IResults[] = [
  {
    id: 1,
    icon: faUser,
    title: "20",
    description: "different meals",
  },

  {
    id: 2,
    icon: faUser,
    title: "20",
    description: "different meals",
  },

  {
    id: 3,
    icon: faUser,
    title: "20",
    description: "different meals",
  },
  {
    id: 4,
    icon: faUser,
    title: "20",
    description: "different meals",
  },
];




