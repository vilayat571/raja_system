import delivery from "../assets/images/delivery.png";
import foods from "../assets/images/foods.png";
import menu from "../assets/images/menu.png";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IFeatures {
  id?: number;
  img: string;
  title: string | undefined;
  text?: string;
}

export interface IGallery {
  id: number;
  img: string;
}

export interface IResults {
  id: number;
  icon: IconProp;
  title: string;
  description: string;
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
    img: "https://monyo.az/uploads2/uploads2024-05/a_1983_20240505230548209156773.jpg",
    price: "3",
    title: " Chilly Bryani",
  },
  {
    id: 2,
    img: "https://monyo.az/uploads2/uploads2024-05/a_1983_202405060031351856626688.jpg",
    price: "3",
    title: " Chilly Bryani",
  },
  {
    id: 3,
    img: "https://monyo.az/uploads2/uploads2024-05/a_1983_20240505234512696829514.jpg",
    price: "3",
    title: " Chilly Bryani",
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

export const galleryData: IGallery[] = [
  {
    id: 1,
    img: "https://w0.peakpx.com/wallpaper/1019/191/HD-wallpaper-restaurant-and-bar-with-gorgeous-view-city-restaurant-view-bar.jpg",
  },
  {
    id: 2,
    img: "https://w0.peakpx.com/wallpaper/1019/191/HD-wallpaper-restaurant-and-bar-with-gorgeous-view-city-restaurant-view-bar.jpg",
  },
  {
    id: 3,
    img: "https://w0.peakpx.com/wallpaper/1019/191/HD-wallpaper-restaurant-and-bar-with-gorgeous-view-city-restaurant-view-bar.jpg",
  },
  {
    id: 11,
    img: "https://w0.peakpx.com/wallpaper/1019/191/HD-wallpaper-restaurant-and-bar-with-gorgeous-view-city-restaurant-view-bar.jpg",
  },
  {
    id: 12,
    img: "https://w0.peakpx.com/wallpaper/1019/191/HD-wallpaper-restaurant-and-bar-with-gorgeous-view-city-restaurant-view-bar.jpg",
  },
  {
    id: 13,
    img: "https://w0.peakpx.com/wallpaper/1019/191/HD-wallpaper-restaurant-and-bar-with-gorgeous-view-city-restaurant-view-bar.jpg",
  },
];
