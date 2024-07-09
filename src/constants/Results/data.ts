import { faUser, faHotdog, faStar, faTruckPickup } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";



export interface IResults {
  id: number;
  icon: IconProp;
  title: string;
  description: string;
}


export const resultsFeatures: IResults[] = [
  {
    id: 1,
    icon: faHotdog,
    title: "30",
    description: "different meals",
  },

  {
    id: 2,
    icon: faUser,
    title: "120",
    description: "daily clients",
  },

  {
    id: 3,
    icon: faStar,
    title: "4.4",
    description: "google rating",
  },
  {
    id: 4,
    icon: faTruckPickup,
    title: "25",
    description: "delivery time",
  },
];



