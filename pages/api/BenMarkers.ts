const homeColor = '#BD2137';
const altColor = '#202945';


export interface MarkerProps {
  lng: number;
  lat: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  nav?: string;
  color?: string;
  order?: number;
  bearing?: number;
  zoom?: number;
  offsetX: number;
  offsetY: number;
  length?: string;
}

export const BenMarkers: MarkerProps[] = [
  {
    order: 1,
    title: 'Grand Hyatt Melbourne',
    lng: 144.96968999086687,
    lat: -37.814759644486415,
    bearing: 0,
    description:
      'Located in the centre of Melbournes high fashion and fine dining scene on prestigious Collins Street, Grand Hyatt Melbourne is the citys centre of luxury.',
    image: './images/run/grandHyatt.webp',
    link: 'https://www.hyatt.com/en-US/hotel/australia/grand-hyatt-melbourne/melbo?src=corp_lclb_gmb_seo_melbo',
    nav: 'https://goo.gl/maps/L7HLoqAfGv6PXcQn9',
    color: homeColor,
    zoom: 14,
    offsetX: 0,
    offsetY: 150,
  },
  {
    order: 2,
    title: 'Princes Park',
    lng: 144.96108537825174,
    lat: -37.791514116048866,
    bearing: 0,
    description:
      'A picturesque park that features a beautiful lake, plenty of green space, and various sports facilities. Take advantage of the wide paths and the flat terrain to go for a brisk jog or a leisurely stroll',
    image: './images/run/princesPark.webp',
    nav: 'https://goo.gl/maps/MHxpjN4WG5qtmN35A',
    color: altColor,
    zoom: 14,
    offsetX: 0,
    offsetY: 150,
    length: '3.2 km\'s'
  },
  {
    order: 5,
    title: 'Chin Chin',
    lng: 144.97036763976485,
    lat: -37.815578202205714,
    bearing: 0,
    description:
      'Chin Chin is a lively, modern Asian restaurant. The menu features a fusion of Thai, Chinese, and Vietnamese cuisine with a contemporary twist. The restaurant has a buzzing atmosphere with open kitchens, colorful decor, and a fun, energetic vibe.',
    image: './images/eateries/chinchin.webp',
    nav: 'https://goo.gl/maps/4eT9rvZhKYxzmUhA9',
    color: altColor,
    zoom: 14,
    offsetX: 0,
    offsetY: 150,
    length: '1.2 km\'s'
  },
];
