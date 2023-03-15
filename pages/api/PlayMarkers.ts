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
  zoom?: number;
  bearing?: number;
}

export const PlayMarkers: MarkerProps[] = [
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
    description:
      'The Melbourne Cricket Ground, also known locally as "The G", is an Australian sports stadium located in Yarra Park, Melbourne, Victoria.',
    image: './images/entertainment/mcg.webp',
    link: 'https://www.mcg.org.au/',
    nav: 'https://goo.gl/maps/hk4P6ntHJv2X5gfm9',
    color: markerColor,
  },
  {
    index: 2,
    order: 3,
    title: 'Marvel Stadium',
    lng: 144.94759936480523,
    lat: -37.81641159935394,
    description:
      'Marvel Stadium is a multi-purpose sports and entertainment stadium in the Docklands.',
    image: './images/entertainment/marvelStadium.webp',
    link: 'https://marvelstadium.com.au/',
    nav: 'https://goo.gl/maps/eC8avN6CTKJoPyEPA',
    color: markerColor,
  },
  {
    index: 3,
    order: 4,
    title: 'Rod Laver Arena',
    lng: 144.97859996285538,
    lat: -37.82147943090867,
    description:
      'Rod Laver Arena is a multipurpose arena located within Melbourne Park. The arena is the main venue for the Australian Open',
    image: './images/entertainment/rodLaver.webp',
    link: 'https://rodlaverarena.com.au/',
    nav: 'https://goo.gl/maps/3sE47NdeztTnsRoR8',
    color: markerColor,
  },
  {
    index: 4,
    order: 5,
    title: 'AAMI Stadium',
    lng: 144.98371224861512,
    lat: -37.82491959261415,
    description:
      'The first purpose built rectangular stadium in Melbourne, AAMI Stadium is an outdoor sports stadium in the Sports and Entertainment Precinct',
    image: './images/entertainment/aami.webp',
    link: 'https://aamipark.com.au/',
    nav: 'https://goo.gl/maps/qeNc95s2oBZYZsNw8',
    color: markerColor,
  },
  {
    index: 5,
    order: 6,
    title: "Her Majesty's Theatre",
    lng: 144.96973892223951,
    lat: -37.81087738127987,
    description:
      'Her Majestys Theatre is renowned for hosting world-class productions, including musicals, opera, ballet, and theatre performances.',
    image: './images/entertainment/herMagestys.webp',
    link: 'https://hmt.com.au/',
    nav: 'https://goo.gl/maps/hQwz8P5dYV7Fg1vX9',
    color: markerColor,
  },
  {
    index: 6,
    order: 7,
    title: 'Princess Theatre',
    lng: 144.97251753286636,
    lat: -37.81072190223214,
    description:
      "Princess Theatre is another historic theatre in Melbourne's CBD, which opened in 1857, and is known for hosting major theatre productions and musicals, as well as for its stunning architecture and ornate interior design.",
    image: './images/entertainment/princessTheatre.webp',
    link: 'https://marrinergroup.com.au/venues/princess-theatre',
    nav: 'https://goo.gl/maps/9Rr5z5k5B5Wwz8ZG8',
    color: markerColor,
  },
  {
    index: 7,
    order: 8,
    title: 'Athenaeum Theatre',
    lng: 144.96745768257196,
    lat: -37.81496064388782,
    description:
      "Athenaeum Theatre is a heritage-listed theatre located in the heart of Melbourne's CBD, which hosts a range of cultural events, including comedy, theatre, live music, and cinema screenings.",
    image: './images/entertainment/athanaeum.webp',
    link: 'https://www.athenaeumtheatre.com.au/',
    nav: 'https://goo.gl/maps/TBbBeYc3W8yv9XN26',
    color: markerColor,
  },
  {
    index: 8,
    order: 9,
    title: 'State Theatre',
    lng: 144.96883245494146,
    lat: -37.82142640696663,
    description:
      'State Theatre is a grand, historic theatre located within the Arts Centre Melbourne complex, which hosts a range of performing arts events, including ballet, opera, theatre, and musicals, and is renowned for its stunning architecture and world-class performances.',
    image: './images/entertainment/stateTheatre.webp',
    link: 'https://www.artscentremelbourne.com.au/visit/theatres-and-spaces/state-theatre',
    nav: 'https://goo.gl/maps/itcQ2LJyxb4nMTrC9',
    color: markerColor,
  },
  {
    index: 9,
    order: 10,
    title: 'Palais Theatre',
    lng: 144.97602304900087,
    lat: -37.86759735111839,
    description:
      'Palais Theatre is a historic entertainment venue located in St Kilda, Melbourne, which has hosted a variety of performances, including concerts, comedy shows, theatre productions, and film screenings, and is known for its unique Art Deco architecture and beachfront location.',
    image: './images/entertainment/palaisTheatre.webp',
    link: 'https://palaistheatre.com.au/',
    nav: 'https://goo.gl/maps/f8T9AnX9CJ34CCsA7',
    color: markerColor,
  },
  {
    index: 10,
    order: 11,
    title: 'Regent Theatre',
    lng: 144.96761564361685,
    lat: -37.815324034945164,
    description:
      'Regent Theatre is a grand, heritage-listed theatre  which hosts a range of world-class productions, including musicals, opera, ballet, and theatre performances, and is renowned for its stunning architecture and luxurious interior design.',
    image: './images/entertainment/regentTheatre.webp',
    link: 'https://marrinergroup.com.au/venues/regent-theatre',
    nav: 'https://goo.gl/maps/YhzFYapvPKM1QmuA9',
    color: markerColor,
  },
  {
    index: 11,
    order: 12,
    title: 'NGV',
    lng: 144.96924679084174,
    lat: -37.82252553411874,
    description:
      'NGV (National Gallery of Victoria) is the oldest and most visited art museum in Australia,  which houses an extensive collection of artworks from around the world, including contemporary art, indigenous art, Asian art, and European art, and hosts a range of temporary exhibitions and events throughout the year.',
    image: './images/entertainment/ngv.webp',
    link: 'https://www.ngv.vic.gov.au/',
    nav: 'https://goo.gl/maps/iYcrDfzVZdGhsbRx9',
    color: markerColor,
  },
  {
    index: 12,
    order: 13,
    title: 'Melbourne Museum',
    lng: 144.97173944766473,
    lat: -37.80329365268665,
    description:
      'Melbourne Museum is a museum located in Carlton Gardens, Melbourne, which showcases the natural and cultural history of the city and the state of Victoria through its permanent and temporary exhibitions, including dinosaur skeletons, Aboriginal culture, immigration history, and local flora and fauna.',
    image: './images/entertainment/melbMuseaum.webp',
    link: 'https://museumsvictoria.com.au/melbournemuseum/',
    nav: 'https://goo.gl/maps/48fvRgLK8jyAtsvD6',
    color: markerColor,
  },
  {
    index: 13,
    order: 14,
    title: 'Block Arcade',
    lng: 144.96444178233162,
    lat: -37.815494026253766,
    description:
      "Block Arcade is a heritage-listed shopping arcade located in Melbourne's CBD, which features a stunning Victorian-era design with intricate mosaic floors, high glass ceilings, and boutique shops selling luxury fashion, jewelry, and artisanal goods.",
    image: './images/entertainment/blockArcade.webp',
    link: 'https://theblock.com.au/',
    nav: 'https://goo.gl/maps/2SWCtHmZtKTXBAGT7',
    color: markerColor,
  },
  {
    index: 14,
    order: 15,
    title: 'Royal Arcade',
    lng: 144.96408595800094,
    lat: -37.81453508158954,
    description:
      "Royal Arcade is a historic shopping arcade which was opened in 1870 and is known for its elegant architecture, including the iconic Gaunt's Clock, as well as its range of boutique shops selling luxury fashion, jewelry, and souvenirs.",
    image: './images/entertainment/royalArcade.webp',
    link: 'https://royalarcade.com.au/',
    nav: 'https://goo.gl/maps/2SWCtHmZtKTXBAGT7',
    color: markerColor,
  },
  {
    index: 15,
    order: 16,
    title: 'QV',
    lng: 144.96557067410524,
    lat: -37.8106628194089,
    description:
      'QV is a shopping and entertainment precinct which features a variety of retail stores, restaurants, cafes, and entertainment venues, including a cinema and a bowling alley. ',
    image: './images/entertainment/qv.webp',
    link: 'https://www.qv.com.au/',
    nav: 'https://goo.gl/maps/kxKjgoLLz7DRfy2h9',
    color: markerColor,
  },
  {
    index: 16,
    order: 17,
    title: 'Melbourne Central',
    lng: 144.96286316797986,
    lat: -37.810399697644996,
    description:
      'Melbourne Central is a shopping center which features over 300 retail stores, restaurants, and entertainment venues, as well as a cinema and a public transport hub.',
    image: './images/entertainment/melbCentral.webp',
    link: 'https://www.melbournecentral.com.au/home',
    nav: 'https://goo.gl/maps/BXZsBbtcdsivfRFw7',
    color: markerColor,
  },
  {
    index: 17,
    order: 18,
    title: 'St Kilda Beach',
    lng: 144.97388825130977,
    lat: -37.86777800620921,
    description:
      'St Kilda Beach features a long stretch of sandy beach, a pier with stunning views of the city skyline, and a range of cafes, bars, and restaurants along the Esplanade. The beach is also known for its iconic attractions, such as Luna Park amusement park, the St Kilda Sea Baths, and the Sunday St Kilda Esplanade Market.',
    image: './images/entertainment/stKildaBeach.webp',
    link: 'https://stkildamelbourne.com.au/things-to-do-see/beach-outdoors/',
    nav: 'https://goo.gl/maps/KNh7VHfjJFakPHth9',
    color: markerColor,
  },
  {
    index: 18,
    order: 19,
    title: 'Eureka Tower',
    lng: 144.96472769434274,
    lat: -37.82135474654384,
    description:
      ' The tower features a public observation deck, known as the Eureka Skydeck, which provides stunning panoramic views of Melbourne and its surroundings, as well as a range of dining and entertainment venues.',
    image: './images/entertainment/eurekaTower.webp',
    link: 'https://www.eurekaskydeck.com.au/',
    nav: 'https://goo.gl/maps/69TxYzKjgKPfBpK17',
    color: markerColor,
  },
  {
    index: 19,
    order: 20,
    title: 'Aquarium',
    lng: 144.9582093690864,
    lat: -37.820649639651904,
    description:
      'SEA LIFE Melbourne Aquarium is a popular attraction which showcases a range of marine creatures and habitats from around the world, including sharks, penguins, crocodiles, and tropical fish.',
    image: './images/entertainment/quarium.webp',
    link: 'https://www.sydneyaquarium.com.au/',
    nav: 'https://goo.gl/maps/jw7RWYq3zE4jW4Bh6',
    color: markerColor,
  },
  {
    index: 20,
    order: 21,
    title: 'IMAX Theatre',
    lng: 144.97062220217043,
    lat: -37.80360725821795,
    description:
      "IMAX Melbourne is a cinema which features the world's largest cinema screen, measuring at 32 meters wide and 23 meters tall. The cinema provides a unique movie experience by showing a range of movies in high-quality 3D and ultra-high-definition projection",
    image: './images/entertainment/imax.webp',
    link: 'https://www.imax.com.au/',
    nav: 'https://goo.gl/maps/2PSxndFCDUkuzsNL6',
    color: markerColor,
  },
  {
    index: 21,
    order: 22,
    title: 'Ian Potter Centre',
    lng: 144.9697459097149,
    lat: -37.81706054902487,
    description:
      'An art museum located in Federation Square in Melbourne, which is dedicated to showcasing Australian art and design from the colonial period to contemporary times.',
    image: './images/entertainment/ianPotter.webp',
    link: 'https://www.ngv.vic.gov.au/ian-potter-centre/',
    nav: 'https://goo.gl/maps/hXieumKjFzv1FXwY6',
    color: markerColor,
  },
  {
    index: 22,
    order: 23,
    title: 'ACMI',
    lng: 144.96869479426036,
    lat: -37.8176095730666,
    description:
      'ACMI (Australian Centre for the Moving Image) is a museum which is dedicated to the art, history, and culture of film, television, and digital media. ',
    image: './images/entertainment/acmi.webp',
    link: 'https://www.acmi.net.au/',
    nav: 'https://goo.gl/maps/MvU6FhU6bCMCFLNDA',
    color: markerColor,
  },
  {
    index: 23,
    order: 24,
    title: 'Royal Botanic Gardens Victoria',
    lng: 144.98012410768132,
    lat: -37.83024428961003,
    description:
      'Featureing a diverse collection of plant species from around the world, ornamental gardens, lakes, and walking paths, historic buildings, such as the Melbourne Observatory and the Shrine of Remembrance, and hosts a range of events and exhibitions throughout the year, including music concerts, outdoor cinema screenings, and art installations. The Royal Botanic Gardens Victoria is a popular destination for locals and tourists alike, providing a peaceful retreat from the bustling city.',
    image: './images/entertainment/royalBotanical.webp',
    link: 'https://www.rbg.vic.gov.au/',
    nav: 'https://goo.gl/maps/BGwyfj2Qw3pwDXuM9',
    color: markerColor,
  },
  {
    index: 24,
    order: 25,
    title: 'Queen Victoria Market',
    lng: 144.9568091286428,
    lat: -37.80759409393903,
    description:
      'Queen Victoria Market is a bustling hub of activity, where locals and visitors can explore a wide range of stalls selling fresh produce, gourmet foods, unique gifts, and souvenirs, and immerse themselves in the vibrant atmosphere.',
    image: './images/entertainment/vicMarkets.webp',
    link: 'https://qvm.com.au/',
    nav: 'https://goo.gl/maps/dRZpRJmewKvC8dPz9',
    color: markerColor,
  },
  {
    index: 25,
    order: 26,
    title: 'Shrine of Remembrance',
    lng: 144.9734452997465,
    lat: -37.83052592272331,
    description:
      'Shrine of Remembrance is a war memorial, which was built to honor the memory of Australian men and women who served in various conflicts, and features stunning architecture, exhibits, and collections, as well as hosting a range of commemorative events and ceremonies throughout the year.',
    image: './images/entertainment/shrine.webp',
    link: 'https://www.shrine.org.au/',
    nav: 'https://goo.gl/maps/4jzD6enB4iq1XU8b7',
    color: markerColor,
  },
];
