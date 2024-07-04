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
    href: "#raja-about",
  },
  {
    id: 2,
    text: "Menu",
    href: "#raja-menu",
  },
  {
    id: 3,
    text: "Contact",
    href: "#raja-contact",
  },
  {
    id: 4,
    text: "Gallery",
    href: "#raja-gallery",
  },
  {
    id: 5,
    text: "Team",
    href: "#raja-team",
  },
];
