const homeColor = '#bd2238';
const markerColor = '#b000b5';
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

export const markers: MarkerProps[] = [
  {
    index: 0,
    title: 'Grand Hyatt Melbourne',
    lng: 144.96968999086687,
    lat: -37.814759644486415,
    description:
      'Located in the centre of Melbournes high fashion and fine dining scene on prestigious Collins Street, Grand Hyatt Melbourne is the citys centre of luxury.',
    image: './images/grandHyatt.jpg',
    link: 'https://www.hyatt.com/en-US/hotel/australia/grand-hyatt-melbourne/melbo?src=corp_lclb_gmb_seo_melbo',
    nav: 'https://goo.gl/maps/L7HLoqAfGv6PXcQn9',
    color: homeColor,
  },
  {
    index: 0,
    title: 'Gimlet at Canvendish House ',
    lng: 144.9693301007055,
    lat: -37.81589182936585,
    description:
      'Gimlet at Cavendish House is a modern Australian restaurant. The menu features contemporary takes on classic dishes, as well as an extensive cocktail list. The restaurant has a chic, Art Deco-inspired design with a stunning marble bar, plush furnishings, and a sophisticated atmosphere.',
    image: './images/gimlet.jpg',
    link: 'https://gimlet.melbourne/',
    nav: 'https://goo.gl/maps/PXgCKK24cbSTqLQBA',
    color: markerColor,
  },
  {
    index: 1,
    title: 'Grill Americano',
    lng: 144.9707472855327,
    lat: -37.81527396055715,
    description:
      'Grill Americano Melbourne is an American-style steakhouse. The menu features a range of classic steakhouse dishes, as well as burgers, sandwiches, and salads. The restaurant has a sleek, contemporary design with a lively bar area and outdoor seating.',
    image: './images/grillAmericano.jpg',
    link: 'http://www.grillamericano.com/',
    nav: 'https://goo.gl/maps/a85mjfShX1QjkqaQA',
    color: markerColor,
  },
  {
    index: 2,
    title: "Cecconi's Flinders Lane restaurant & bar",
    lng: 144.97253397768142,
    lat: -37.815042122892045,
    description:
      "Cecconi's Flinders Lane restaurant & bar is an Italian restaurant and bar. The menu features traditional Italian dishes with a modern twist, using only the freshest ingredients. The restaurant also boasts an extensive wine list and a chic, contemporary decor that creates a sophisticated dining atmosphere.",
    image: './images/cecconi.jpg',
    link: 'https://www.cecconi.com/',
    nav: 'https://goo.gl/maps/9bQUeCAd8aedY1YDA',
    color: markerColor,
  },
  {
    index: 3,
    title: 'Chin Chin',
    lng: 144.97036763976485,
    lat: -37.815578202205714,
    description:
      'Chin Chin is a lively, modern Asian restaurant. The menu features a fusion of Thai, Chinese, and Vietnamese cuisine with a contemporary twist. The restaurant has a buzzing atmosphere with open kitchens, colorful decor, and a fun, energetic vibe.',
    image: './images/chinchin.jpg',
    link: 'https://www.chinchinrestaurant.com.au/',
    nav: 'https://goo.gl/maps/4eT9rvZhKYxzmUhA9',
    color: markerColor,
  },
  {
    index: 4,
    title: 'SupernormaL',
    lng: 144.96840844535689,
    lat: -37.815932660223815,
    description:
      'Supernormal is a modern Asian restaurant. The menu features a creative fusion of Japanese, Chinese, and Korean cuisine with an emphasis on shared plates and fresh ingredients. The restaurant has a sleek, contemporary design with a long open kitchen, a bustling bar, and a rooftop terrace.',
    image: './images/supernormal.jpg',
    link: 'https://www.supernormal.net.au/',
    nav: 'https://goo.gl/maps/LT3e5wF3ixyfV752A',
    color: markerColor,
  },
  {
    index: 5,
    title: 'Philippe',
    lng: 144.97007218529205,
    lat: -37.814758107832475,
    description:
      'Philippe is a French-inspired bistro. The menu features classic French dishes with a modern twist, using the finest local and imported ingredients. The restaurant has a cozy, rustic decor with exposed brick walls, wooden tables, and a lively atmosphere.',
    image: './images/philippe.jpg',
    link: 'https://www.philipperestaurant.com.au/',
    nav: 'https://goo.gl/maps/fwn56vpW6BNCPazQ8',
    color: markerColor,
  },
  {
    index: 6,
    title: 'Il Solito Posto',
    lng: 144.97035858035534,
    lat: -37.81489345809314,
    description:
      'Il Solito Posto is an Italian restaurant. The menu features traditional Italian dishes made with fresh, seasonal ingredients. The restaurant has a warm, inviting atmosphere with a classic Italian decor, complete with white tablecloths, candles, and an extensive wine list.',
    image: './images/ilSolitoPosto.jpg',
    link: 'https://ilsolitoposto.com.au/',
    nav: 'https://goo.gl/maps/qT6WzVvgXQqdFJvP9',
    color: markerColor,
  },
  {
    index: 7,
    title: 'Lucy Liu Kitchen and Bar',
    lng: 144.96995582685383,
    lat: -37.81598808228898, 
    description:
      'Lucy Liu Kitchen and Bar is an Asian fusion restaurant. The menu features a creative blend of Asian flavors with a modern twist, using fresh, locally sourced ingredients. The restaurant has a vibrant, stylish atmosphere with street art, colorful lanterns, and a bustling bar.',
    image: './images/lucyLiu.jpg',
    link: 'https://lucylius.com.au/',
    nav: 'https://goo.gl/maps/vLzBpB4cWq6Ud5rh7',
    color: markerColor,
  },
  {
    index: 8,
    title: 'Coda Melbourne',
    lng: 144.96988903137049,
    lat: -37.81576017243801,
    description:
      'Coda Melbourne is a modern Vietnamese restaurant. The menu features innovative, contemporary Vietnamese dishes with a focus on fresh, seasonal ingredients. The restaurant has a chic, stylish atmosphere with a long bar, a bustling open kitchen, and a courtyard for outdoor dining.',
    image: './images/codaMelbourne.jpg',
    link: 'https://www.codarestaurant.com.au/',
    nav: 'https://goo.gl/maps/Bfkq17aaJCTLyxNJA',
    color: markerColor,
  },
  {
    index: 9,
    title: 'Tonka',
    lng: 144.97141606450262,
    lat: -37.81571075145217,
    description:
      'Tonka is a modern Indian restaurant. The menu features creative, contemporary Indian cuisine with an emphasis on seasonal and locally sourced ingredients. The restaurant has a stylish, industrial design with an open kitchen, a cocktail bar, and a private dining room.',
    image: './images/tonka.jpg',
    link: 'https://www.tonkarestaurant.com.au/',
    nav: 'https://goo.gl/maps/PX8UJra6RJya9Kav6',
    color: markerColor,
  },
  {
    index: 10,
    title: 'Lee Ho Fook',
    lng: 144.97130981678316,
    lat: -37.81559253853016,
    description:
      'Lee Ho Fook is a modern Chinese restaurant. The menu features creative, contemporary Chinese dishes with an emphasis on locally sourced ingredients. The restaurant has a trendy, intimate atmosphere with a sleek, minimalist design and a focus on seasonal produce.',
    image: './images/leehofook.jpg',
    link: 'https://www.leehofook.com.au/',
    nav: 'https://goo.gl/maps/pPYAf8NKVQ7Lmeyu9',
    color: markerColor,
  },
  {
    index: 11,
    title: 'Botswana Butchery Melbourne',
    lng: 144.97230628188774,
    lat: -37.814763188463985, 
    description:
      'Botswana Butchery Melbourne is a fine dining restaurant. The menu features a selection of premium meats, seafood, and game dishes, as well as an extensive wine list. The restaurant has a sophisticated, elegant atmosphere with plush furnishings, crystal chandeliers, and a stunning city view.',
    image: './images/botswanaButchery.jpg',
    link: 'http://www.botswanabutchery.com.au/',
    nav: 'https://goo.gl/maps/FSdeLFR9Li2Qou7R9',
    color: markerColor,
  },
  {
    index: 12,
    title: 'The French Brasserie',
    lng: 144.97158027326796,
    lat: -37.81545447410336,
    description:
      'The French Brasserie is a traditional French restaurant. The menu features classic French dishes made with authentic techniques and high-quality ingredients. The restaurant has a sophisticated, Parisian-inspired decor with polished wood, ornate mirrors, and vintage posters.',
    image: './images/frenchBrasserie.jpg',
    link: 'https://www.thefrenchbrasserie.com.au/',
    nav: 'https://goo.gl/maps/qAGLbBYxNWpxnF2F6',
    color: markerColor,
  },
  {
    index: 13,
    title: 'Flower Drum Restaurant Melbourne',
    lng: 144.96924488539622,
    lat: -37.811871450217446,
    description:
      'Flower Drum is a renowned Cantonese restaurant. The menu features classic Cantonese dishes made with premium ingredients, as well as a selection of fine wines and spirits. The restaurant has a timeless, elegant atmosphere with Chinese decor, linen tablecloths, and a welcoming ambience.',
    image: './images/flowerDrum.jpg',
    link: 'https://www.flowerdrum.melbourne/',
    nav: 'https://goo.gl/maps/csuAbLQaLTcinyW57',
    color: markerColor,
  },
  {
    index: 14,
    title: 'Robata',
    lng: 144.97253879072898,
    lat: -37.815632840796674,
    description:
      'Robata is a Japanese izakaya-style restaurant. The menu features a variety of small plates and skewers, as well as larger shared dishes, all cooked over a traditional robata grill. The restaurant has a casual, lively atmosphere with an open kitchen, a bar, and communal tables.',
    image: './images/robata.jpg',
    link: 'https://www.robata.com.au/',
    nav: 'https://goo.gl/maps/RLDivWuWyT5z69tv6',
    color: markerColor,
  },
  {
    index: 15,
    title: 'Attica',
    lng: 144.99732773219907,
    lat: -37.876931999205325,
    description:
      'Attica is a world-renowned fine dining restaurant. The menu features innovative, modern Australian cuisine with an emphasis on native ingredients and sustainable practices. The restaurant has a warm, welcoming atmosphere with an open kitchen, a cozy fireplace, and a lush garden.',
    image: './images/attica.jpg',
    link: 'https://www.attica.com.au/',
    nav: 'https://goo.gl/maps/JLjtjWA5gvSz8fHT9',
    color: markerColor,
  },
  {
    index: 16,
    title: 'Vue De Monde',
    lng: 144.95760490194615,
    lat: -37.81867980111774,
    description:
      'Vue De Monde is a renowned fine dining restaurant. The menu features contemporary Australian cuisine with a focus on seasonal, locally sourced ingredients. The restaurant has a sophisticated, modern design with floor-to-ceiling windows and stunning city views.',
    image: './images/vueDeMonde.jpg',
    link: 'https://www.vuedemonde.com.au/',
    nav: 'https://goo.gl/maps/Xb32SonHuWrXznVF9',
    color: markerColor,
  },
  {
    index: 17,
    title: 'Donovans',
    lng: 144.97511704974872,
    lat: -37.868528692019986,
    description:
      'Donovans is a classic Australian restaurant located in St Kilda. The menu features a range of dishes with a focus on seafood, as well as an extensive wine list. The restaurant has a relaxed, beachy atmosphere with a stunning waterfront location, a bar, and outdoor seating.',
    image: './images/donovans.jpg',
    link: 'https://www.donovans.com.au/',
    nav: 'https://goo.gl/maps/4ecRG6VnYd7yk3SX7',
    color: markerColor,
  },
  {
    index: 18,
    title: 'Di Stasio Citta',
    lng: 144.97418258995248,
    lat: -37.8142410394539,
    description:
      'Di Stasio Citta is an Italian restaurant and bar located in St Kilda. The menu features classic Italian dishes made with high-quality ingredients, as well as a curated selection of wines and cocktails. The restaurant has a sleek, contemporary design with an open kitchen, a long bar, and a sophisticated, urban vibe.',
    image: './images/diStasioCitta.jpg',
    link: 'https://www.distasio.com.au/',
    nav: 'https://goo.gl/maps/x9mBqukACgGcMUBy8',
    color: markerColor,
  },
  {
    index: 19,
    title: 'Nomad',
    lng: 144.96831040742822,
    lat: -37.816189704885865,
    description:
      'Nomad Melbourne is a wine bar and restaurant located in Flinders Lane. The menu features a range of Mediterranean-inspired dishes with a focus on wood-fired cooking and shareable plates, using locally sourced and sustainable ingredients. The restaurant has a warm and inviting atmosphere with a rustic design and an extensive wine list.',
    image: './images/nomad.jpg',
    link: 'https://nomad.melbourne/',
    nav: 'https://goo.gl/maps/JPTtH7S74a5GUdi3A',
    color: markerColor,
  },
  {
    index: 20,
    title: 'Movida',
    lng: 144.96919826569106,
    lat: -37.81669685487993,
    description:
      'Movida is a renowned Spanish restaurant. The menu features classic Spanish tapas and larger shared plates made with high-quality ingredients and traditional techniques. The restaurant has a lively, energetic atmosphere with an open kitchen, a bar, and outdoor seating.',
    image: './images/movida.jpg',
    link: 'https://www.movida.com.au/',
    nav: 'https://goo.gl/maps/aNpURPsvyHELPdJw5',
    color: markerColor,
  },
];
