import img1 from '../../assets/images/img9.jpeg'
import img2 from '../../assets/images/img2.jpeg'
import img3 from '../../assets/images/img3.jpeg'
import img4 from '../../assets/images/img4.jpeg'
import img5 from '../../assets/images/img5.jpeg'
import img6 from '../../assets/images/img6.jpeg'


export interface IGallery {
    id: number;
    img: string;
  }


export const galleryData: IGallery[] = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
  ];