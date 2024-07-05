import beef from '../../assets/images/beef.jpg';
import burger from '../../assets/images/burger.jpg';
import pokara from '../../assets/images/pakora.jpg';
import { IFeatures } from '../Features/data';


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