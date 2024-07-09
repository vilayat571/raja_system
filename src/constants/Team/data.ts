import { IGallery } from "../Gallery/data";
import cooker from '../../assets/images/cooker.jpeg';
import administrator from '../../assets/images/administrator.jpeg';
import ceo from '../../assets/images/ceo.jpeg';


export interface ITeam extends IGallery {
    position: string;
    fullName: string;
  }

export const teamData: ITeam[] = [
    {
      id: 1,
      img: cooker,
      position: "Cooker",
      fullName: "Imran Zzem",
    },
    {
        id: 2,
        img: ceo,
        position: "CEO",
        fullName: "Javıd Karımlı",
      },
      {
        id: 3,
        img: administrator,
        position: "Adminstrator",
        fullName: "Royal Aghadadash",
      },
  ];
  