const homeColor = '#bd2238';
const markerColor = '#1f2a44';
export interface MarkerProps {
  index: number;
  lng: number;
  lat: number;
  title: string;
  description: string;
  image: string;
  link: string;
  nav?: string;
  color?: string;
  order?: number;
}

export const RunMarkers: MarkerProps[] = [
  {
    index: 0,
    order: 1,
    title: 'Grand Hyatt Melbourne',
    lng: 144.96968999086687,
    lat: -37.814759644486415,
    description:
      'Located in the centre of Melbournes high fashion and fine dining scene on prestigious Collins Street, Grand Hyatt Melbourne is the citys centre of luxury.',
    image: './images/entertainment/grandHyatt.webp',
    link: 'https://www.hyatt.com/en-US/hotel/australia/grand-hyatt-melbourne/melbo?src=corp_lclb_gmb_seo_melbo',
    nav: 'https://goo.gl/maps/L7HLoqAfGv6PXcQn9',
    color: homeColor,
  },
  {
    index: 1,
    order: 2,
    title: 'MCG',
    lng: 144.9834020407374,
    lat: -37.81995531191525,
    description: 'The Melbourne Cricket Ground, also known locally as "The G", is an Australian sports stadium located in Yarra Park, Melbourne, Victoria.',
    image: './images/entertainment/mcg.webp',
    link: 'https://www.mcg.org.au/',
    nav: 'https://goo.gl/maps/hk4P6ntHJv2X5gfm9',
    color: markerColor,
  },
];
