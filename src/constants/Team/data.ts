import { IGallery } from "../Gallery/data";
import cooker from '../../assets/images/cooker.png';
import administrator from '../../assets/images/administrator.png';


export interface ITeam extends IGallery {
    position: string;
    fullName: string;
  }

export const teamData: ITeam[] = [
    {
      id: 1,
      img: cooker,
      position: "CEO",
      fullName: "Javid Karimli",
    },
    {
        id: 2,
        img: administrator,
        position: "CEO",
        fullName: "Javid Karimli",
      },
      {
        id: 3,
        img: cooker,
        position: "CEO",
        fullName: "Javid Karimli",
      },
  ];
  