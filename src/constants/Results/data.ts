import { faUser } from "@fortawesome/free-solid-svg-icons";
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



