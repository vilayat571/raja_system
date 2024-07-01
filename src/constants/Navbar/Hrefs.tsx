export interface INavData {
  id?: number;
  text: string;
  href: string;
  styleT?:string
}

export const navData: INavData[] = [
  {
    id: 1,
    text: "About us",
    href: "#promotion",
  },
  {
    id: 2,
    text: "Menu",
    href: "#menu",
  },
  {
    id: 3,
    text: "Contact",
    href: "#contact",
  },
  {
    id: 4,
    text: "Gallery",
    href: "#gallery",
  },
  {
    id: 2,
    text: "Team",
    href: "#team",
  },
];
