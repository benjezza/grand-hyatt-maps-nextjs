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
    title: 'Eau De Vie',
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
    title: 'Trinket Bar Melbourne',
    lng: 100,
    lat: -20,
    description:
      'A cozy bar with a vintage decor, serving creative cocktails and small plates',
    image: './images/TrinketBarMelbourne.jpg',
    link: 'https://www.trinketbar.com/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 2,
    title: 'Garden State Hotel',
    lng: 100,
    lat: -20,
    description:
      'A sprawling pub with multiple bars and outdoor areas, serving pub classics and craft beers',
    image: './images/GardenStateHotel.jpg',
    link: 'https://gardenstatehotel.com.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 3,
    title: 'Duke of Wellington',
    lng: 100,
    lat: -20,
    description:
      'A classic pub with a warm atmosphere and a menu of pub fare and local beers',
    image: './images/DukeofWellington.jpg',
    link: 'https://dukeofwellington.com.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 4,
    title: "Nick & Nora's",
    lng: 100,
    lat: -20,
    description:
      'A stylish cocktail bar inspired by the glamour of the 1920s, serving a range of classic and contemporary drinks',
    image: './images/NickAndNoras.jpg',
    link: 'https://nickandnoras.com.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 5,
    title: 'Siglo',
    lng: 100,
    lat: -20,
    description:
      'An elegant rooftop bar with panoramic views of the city, serving cocktails and wine',
    image: './images/Siglo.jpg',
    link: 'https://melbourne.supernormal.net.au/siglo/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 6,
    title: 'Gin Palace',
    lng: 100,
    lat: -20,
    description:
      'A sophisticated bar specializing in gin, with a long list of classic and creative gin-based cocktails',
    image: './images/GinPalace.jpg',
    link: 'https://www.ginpalace.com.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 7,
    title: 'Bar Margaux',
    lng: 100,
    lat: -20,
    description:
      'A French-style brasserie and bar, with a focus on classic cocktails and natural wines',
    image: './images/BarMargaux.jpg',
    link: 'https://www.barmargaux.com.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 8,
    title: 'Lui Bar',
    lng: 100,
    lat: -20,
    description:
      'A sophisticated bar on the 55th floor of the Rialto building, with panoramic views and a range of cocktails and wine',
    image: './images/LuiBar.jpg',
    link: 'https://www.luibar.com.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 9,
    title: 'Riverland bar',
    lng: 100,
    lat: -20,
    description:
      'A lively bar and beer garden on the Yarra River, with a range of craft beers, cocktails, and pub fare',
    image: './images/RiverlandBar.jpg',
    link: 'https://www.riverlandbar.com/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 10,
    title: 'Arbory',
    lng: 100,
    lat: -20,
    description:
      'A spacious bar and restaurant overlooking the Yarra River, with an extensive drinks list and a menu of modern Australian cuisine',
    image: './images/Arbory.jpg',
    link: 'https://arbory.com.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 11,
    title: 'Madam Brussels',
    lng: 100,
    lat: -20,
    description:
      'A quirky rooftop bar inspired by 1950s garden parties, with a range of cocktails and a playful food menu',
    image: './images/MadamBrussels.jpg',
    link: 'https://madambrussels.com/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 12,
    title: 'Ms Collins',
    lng: 100,
    lat: -20,
    description:
      'A glamorous venue with multiple bars and dining spaces, offering a range of cocktails, wines, and Asian-inspired cuisine',
    image: './images/MsCollins.jpg',
    link: 'https://www.mscollins.com.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 13,
    title: 'Cookie',
    lng: 100,
    lat: -20,
    description:
      'A popular bar and restaurant in a historic building, with a long list of beers, cocktails, and Thai-inspired food',
    image: './images/Cookie.jpg',
    link: 'https://www.cookie.net.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 14,
    title: 'Goldilocks Bar',
    lng: 100,
    lat: -20,
    description:
      'A rooftop bar with panoramic views of the city, offering a range of cocktails and pub fare',
    image: './images/GoldilocksBar.jpg',
    link: 'https://goldilocksbar.com.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 15,
    title: '28 SkyBar Melbourne',
    lng: 100,
    lat: -20,
    description:
      'A rooftop bar on the 28th floor of the Crown Metropol hotel, with panoramic views and a range of cocktails and small plates',
    image: './images/28SkyBarMelbourne.jpg',
    link: 'https://www.28skybar.com.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 16,
    title: 'State of Grace',
    lng: 100,
    lat: -20,
    description:
      'A multi-level bar and restaurant with a Victorian decor, serving a range of cocktails, wines, and modern Australian cuisine',
    image: './images/StateofGrace.jpg',
    link: 'https://stateofgracemelbourne.com.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 17,
    title: 'Crafty Squire',
    lng: 100,
    lat: -20,
    description:
      'A traditional English-style pub with a range of craft beers and classic pub fare',
    image: './images/CraftySquire.jpg',
    link: 'https://www.thecraftysquire.com.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 18,
    title: 'Her',
    lng: 100,
    lat: -20,
    description:
      'A sleek bar with a focus on gin and botanicals, serving a range of cocktails and modern Australian cuisine',
    image: './images/Her.jpg',
    link: 'https://www.herbar.com.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
  {
    index: 19,
    title: 'Ponyfish Island',
    lng: 100,
    lat: -20,
    description:
      'A bar and grill on a pontoon under the Southbank pedestrian bridge, with a range of drinks and pub fare',
    image: './images/PonyfishIsland.jpg',
    link: 'https://ponyfish.com.au/',
    nav: 'https://goo.gl/maps/XXXXXX',
    color: markerColor,
  },
];
