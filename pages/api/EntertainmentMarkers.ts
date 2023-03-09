const markerColor = '#007299';
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
}

export const EntertainmentMarkers: MarkerProps[] = [
  {
    index: 0,
    title: 'Entertainment One',
    lng: 144.9715862787901,
    lat: -37.81580054933883,
    description:
      'A stylish cocktail bar with an extensive whiskey collection and a hidden entrance',
    image: './images/EauDeVieMelbourne.jpg',
    link: 'https://eaudevie.com.au/melbourne/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 1,
    title: 'Entertainment Two',
    lng: 144.9715845787901,
    lat: -37.86540054933883,
    description:
      'A cozy bar with a vintage decor, serving creative cocktails and small plates',
    image: './images/TrinketBarMelbourne.jpg',
    link: 'https://www.trinketbar.com/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
];
