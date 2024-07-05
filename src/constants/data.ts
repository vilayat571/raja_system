import { faUser } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IFeatures } from "./Features/data";






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
    img: "https://monyo.az/uploads2/uploads2024-05/a_1983_20240505230548209156773.jpg",
    price: "20",
    title: "Beef burger",
  },
  {
    id: 2,
    img: "https://monyo.az/uploads2/uploads2024-05/a_1983_202405060031351856626688.jpg",
    price: "45",
    title: "Beef steak",
  },
  {
    id: 3,
    img: "https://monyo.az/uploads2/uploads2024-05/a_1983_20240505234512696829514.jpg",
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




