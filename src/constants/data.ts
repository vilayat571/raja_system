import { faUser } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IFeatures } from "./Features/data";



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

export interface ITeam extends IGallery {
  position: string;
  fullName: string;
}

export interface IMenu extends IFeatures {
  price: string;
}


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

export const teamData: ITeam[] = [
  {
    id: 1,
    img: "https://w0.peakpx.com/wallpaper/1019/191/HD-wallpaper-restaurant-and-bar-with-gorgeous-view-city-restaurant-view-bar.jpg",
    position: "CEO",
    fullName: "Javid Karimli",
  },
];
