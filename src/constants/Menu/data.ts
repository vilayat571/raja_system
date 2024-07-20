import { IFeatures } from '../Features/data';
import pokara from '../../assets/images/pakora.jpg'

export interface IMenu extends IFeatures {
    price: string;
    id?:number | undefined
  }

export const menuData: IMenu[] = [
    {
      id: 1,
      img: 'https://monyo.az/uploads2/uploads2024-05/a_1983_202405060007201190313090.jpg',
      price: "24",
      title: "Chicken Biryani",
    },
    {
      id: 2,
      img: 'https://monyo.az/uploads2/uploads2024-05/a_1983_20240506000559301490274.jpg',
      price: "28",
      title: "Lamb Biryani",
    },
    {
      id: 3,
      img: pokara,
      price: "14",
      title: "Onion pakora",
    },
    {
      id: 4,
      img: 'https://monyo.az/uploads2/uploads2024-05/a_1983_202405060013201733174608.jpg',
      price: "23",
      title: "Butter chicken masala",
    },
    {
      id: 5,
      img: 'https://monyo.az/uploads2/uploads2024-05/a_1983_20240524170617640224024.jpg',
      price: "8",
      title: "Panir parota",
    },
    {
      id: 6,
      img: 'https://monyo.az/uploads2/uploads2024-05/a_1983_202405241707042011207405.jpg',
      price: "7",
      title: "Qobi parota",
    },
  ];