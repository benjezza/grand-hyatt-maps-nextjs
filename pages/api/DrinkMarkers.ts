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
}

export const DrinkMarkers: MarkerProps[] = [
  {
    index: 0,
    title: 'Grand Hyatt Melbourne',
    lng: 144.96968999086687,
    lat: -37.814759644486415,
    description:
      'Located in the centre of Melbournes high fashion and fine dining scene on prestigious Collins Street, Grand Hyatt Melbourne is the citys centre of luxury.',
    image: './images/grandHyatt.webp',
    link: 'https://www.hyatt.com/en-US/hotel/australia/grand-hyatt-melbourne/melbo?src=corp_lclb_gmb_seo_melbo',
    nav: 'https://goo.gl/maps/L7HLoqAfGv6PXcQn9',
    color: homeColor,
  },
  {
    index: 1,
    title: 'Eau De Vie',
    lng: 144.97157559684894,
    lat: -37.815798014824985,
    description:
      'A stylish cocktail bar with an extensive whiskey collection and a hidden entrance',
    image: './images/drinkeries/EauDeVieMelbourne.webp',
    link: 'https://eaudevie.com.au/melbourne/',
    nav: 'https://goo.gl/maps/2vAVLgXoKVsCmunR8',
    color: markerColor,
  },
  {
    index: 2,
    title: 'Trinket Bar',
    lng: 144.97135715522234,
    lat: -37.81525708857579,
    description:
      'A cozy bar with a vintage decor, serving creative cocktails and small plates',
    image: './images/drinkeries/TrinketBarMelbourne.webp',
    link: 'https://trinketbar.com.au/',
    nav: 'https://goo.gl/maps/UN3XqGxQ9U5MBprD6',
    color: markerColor,
  },
  {
    index: 3,
    title: 'Garden State Hotel',
    lng: 144.9710690708324,
    lat: -37.815364999077204,
    description:
      'A sprawling pub with multiple bars and outdoor areas, serving pub classics and craft beers',
    image: './images/drinkeries/GardenStateHotel.webp',
    link: 'https://gardenstatehotel.com.au/',
    nav: 'https://goo.gl/maps/UJU8Rd7XaqLi7GHn8',
    color: markerColor,
  },
  {
    index: 4,
    title: 'Duke of Wellington',
    lng: 144.97007409248974,
    lat: -37.816488156984384,
    description:
      'A classic pub with a warm atmosphere and a menu of pub fare and local beers',
    image: './images/drinkeries/DukeofWellington.webp',
    link: 'https://dukeofwellington.com.au/',
    nav: 'https://goo.gl/maps/AqVEQaWSJoCSqtYi6',
    color: markerColor,
  },
  {
    index: 5,
    title: "Nick & Nora's",
    lng: 144.97049910420426,
    lat: -37.81347282562266,
    description:
      'A stylish cocktail bar inspired by the glamour of the 1920s, serving a range of classic and contemporary drinks',
    image: './images/drinkeries/NickAndNoras.webp',
    link: 'https://nickandnoras.com.au/',
    nav: 'https://goo.gl/maps/wedVwkDUhxXb6gYU9',
    color: markerColor,
  },
  {
    index: 6,
    title: 'Siglo',
    lng: 144.97260643766276,
    lat: -37.810876440789364,
    description:
      'An elegant rooftop bar with panoramic views of the city, serving cocktails and wine',
    image: './images/drinkeries/Siglo.webp',
    link: 'http://www.siglobar.com.au/',
    nav: 'https://goo.gl/maps/N2KXpBQ5Kcv26imC6',
    color: markerColor,
  },
  {
    index: 7,
    title: 'Gin Palace',
    lng: 144.96748863601226,
    lat: -37.81384613548868,
    description:
      'A sophisticated bar specializing in gin, with a long list of classic and creative gin-based cocktails',
    image: './images/drinkeries/GinPalace.webp',
    link: 'https://www.ginpalace.com.au/',
    nav: 'Gin Palace',
    color: markerColor,
  },
  {
    index: 8,
    title: 'Bar Margaux',
    lng: 144.9691460286361,
    lat: -37.81051958439722,
    description:
      'A French-style brasserie and bar, with a focus on classic cocktails and natural wines',
    image: './images/drinkeries/BarMargaux.webp',
    link: 'https://www.barmargaux.com.au/',
    nav: 'https://goo.gl/maps/v1iGATj8nbF642E86',
    color: markerColor,
  },
  {
    index: 9,
    title: 'Lui Bar',
    lng: 144.9576815245773,
    lat: -37.8189101624136,
    description:
      'A sophisticated bar on the 55th floor of the Rialto building, with panoramic views and a range of cocktails and wine',
    image: './images/drinkeries/LuiBar.webp',
    link: 'https://www.luibar.com//',
    nav: 'https://goo.gl/maps/WMPNiGcQ9AMPLNGL9',
    color: markerColor,
  },
  {
    index: 10,
    title: 'Riverland bar',
    lng: 144.96875061326926,
    lat: -37.81872853165454,
    description:
      'A lively bar and beer garden on the Yarra River, with a range of craft beers, cocktails, and pub fare',
    image: './images/drinkeries/RiverlandBar.webp',
    link: 'https://www.riverlandbar.com/',
    nav: 'https://goo.gl/maps/g1RDp8W6QT9XzRkm8',
    color: markerColor,
  },
  {
    index: 11,
    title: 'Arbory',
    lng: 144.9662071437812,
    lat: -37.81904387469866,
    description:
      'A spacious bar and restaurant overlooking the Yarra River, with an extensive drinks list and a menu of modern Australian cuisine',
    image: './images/drinkeries/Arbory.webp',
    link: 'https://arbory.com.au/',
    nav: 'https://goo.gl/maps/9Q2BwSuy2smtLRaKA',
    color: markerColor,
  },
  {
    index: 12,
    title: 'Madam Brussels',
    lng: 144.97151390747578,
    lat: -37.81203954800826,
    description:
      'A quirky rooftop bar inspired by 1950s garden parties, with a range of cocktails and a playful food menu',
    image: './images/drinkeries/MadamBrussels.webp',
    link: 'https://madambrussels.com/',
    nav: 'https://goo.gl/maps/CJb2cu8CcoFK6EGJ9',
    color: markerColor,
  },
  {
    index: 13,
    title: 'Ms Collins',
    lng: 144.96060235201972,
    lat: -37.81746562880844,
    description:
      'A glamorous venue with multiple bars and dining spaces, offering a range of cocktails, wines, and Asian-inspired cuisine',
    image: './images/drinkeries/MsCollins.webp',
    link: 'https://www.mscollins.com.au/',
    nav: 'https://goo.gl/maps/55eXZVB3pQsyC3VF8',
    color: markerColor,
  },
  {
    index: 14,
    title: 'Cookie',
    lng: 144.96515981341255,
    lat: -37.81201016328581,
    description:
      'A popular bar and restaurant in a historic building, with a long list of beers, cocktails, and Thai-inspired food',
    image: './images/drinkeries/Cookie.webp',
    link: 'https://www.cookiemelbourne.com.au/',
    nav: 'https://goo.gl/maps/TM9xA1KRkGfP4okE8',
    color: markerColor,
  },
  {
    index: 15,
    title: 'Goldilocks Bar',
    lng: 144.96510810140396,
    lat: -37.81182265680808,
    description:
      'A rooftop bar with panoramic views of the city, offering a range of cocktails and pub fare',
    image: './images/drinkeries/GoldilocksBar.webp',
    link: 'https://goldilocksbar.com.au/',
    nav: 'https://goo.gl/maps/2fR51TieoCdk9S358',
    color: markerColor,
  },
  {
    index: 16,
    title: '28 SkyBar',
    lng: 144.95762006746597,
    lat: -37.825775013524904,
    description:
      'A rooftop bar on the 28th floor of the Crown Metropol hotel, with panoramic views and a range of cocktails and small plates',
    image: './images/drinkeries/28SkyBarMelbourne.webp',
    link: 'https://www.crownmelbourne.com.au/bars/28-skybar-lounge',
    nav: 'https://goo.gl/maps/eYhhCWRvoHaYPEEQ9',
    color: markerColor,
  },
  {
    index: 17,
    title: 'State of Grace',
    lng: 144.95698146382549,
    lat: -37.81973415291653,
    description:
      'A multi-level bar and restaurant with a Victorian decor, serving a range of cocktails, wines, and modern Australian cuisine',
    image: './images/drinkeries/StateofGrace.webp',
    link: 'https://stateofgracemelbourne.com.au/',
    nav: 'https://goo.gl/maps/RCJrbirUg6H7pDR38',
    color: markerColor,
  },
  {
    index: 18,
    title: 'Crafty Squire',
    lng: 144.96829265094095,
    lat: -37.81376295969466,
    description:
      'A traditional English-style pub with a range of craft beers and classic pub fare',
    image: './images/drinkeries/CraftySquire.webp',
    link: 'https://www.thecraftysquire.com.au/',
    nav: 'https://goo.gl/maps/P7k9GLwzpaGfU8Xj8',
    color: markerColor,
  },
  {
    index: 19,
    title: 'Her',
    lng: 144.9641594063675,
    lat: -37.811515536662924,
    description:
      'A sleek bar with a focus on gin and botanicals, serving a range of cocktails and modern Australian cuisine',
    image: './images/drinkeries/Her.webp',
    link: 'http://www.her.melbourne/',
    nav: 'https://goo.gl/maps/26DknxxTzsH9gXRc8',
    color: markerColor,
  },
  {
    index: 20,
    title: 'Ponyfish Island',
    lng: 144.96497259469226,
    lat: -37.8198449177806,
    description:
      'A bar and grill on a pontoon under the Southbank pedestrian bridge, with a range of drinks and pub fare',
    image: './images/drinkeries/PonyfishIsland.webp',
    link: 'https://www.ponyfishisland.com.au/',
    nav: 'https://goo.gl/maps/S5osKyXxnSfa2NRS7',
    color: markerColor,
  },
];
