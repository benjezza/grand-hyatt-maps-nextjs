const homeColor = '#BD2137';
const altColor = '#202945';

export interface MarkerProps {
  index: number;
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

export const RunMarkers: MarkerProps[] = [
  {
    index: 0,
    order: 1,
    title: 'Grand Hyatt Melbourne',
    lng: 144.96968999086687,
    lat: -37.814759644486415,
    bearing: 0,
    description:
      'Located in the centre of Melbournes high fashion and fine dining scene on prestigious Collins Street, Grand Hyatt Melbourne is the citys centre of luxury.',
    image: './images/run/grandHyatt.webp',
    link: 'https://www.hyatt.com/en-US/hotel/australia/grand-hyatt-melbourne/melbo?src=corp_lclb_gmb_seo_melbo',
    nav: 'https://maps.app.goo.gl/GyQ8yA4RvnfdwZ5LA',
    color: homeColor,
    zoom: 14,
    offsetX: 0,
    offsetY: 150,
  },
  {
    index: 1,
    order: 2,
    title: 'Princes Park',
    lng: 144.96108537825174,
    lat: -37.791514116048866,
    bearing: 0,
    description:
      'A picturesque park that features a beautiful lake, plenty of green space, and various sports facilities. Take advantage of the wide paths and the flat terrain to go for a brisk jog or a leisurely stroll',
    image: './images/run/princesPark.webp',
    nav: 'https://maps.app.goo.gl/xquM399ch3QxokQY6',
    color: altColor,
    zoom: 14,
    offsetX: 0,
    offsetY: 150,
    length: "3.2 km's",
  },
  {
    index: 2,
    order: 3,
    title: 'The Tan',
    lng: 144.97449446019934,
    lat: -37.8300324702668,
    bearing: 40,
    description:
      "Earn serious Melbourne cred as you join local runners on this loop around the Royal Melbourne Botanic Gardens. Named for the Gardens, the Tan is one of Melbourne's most popular walking and running tracks, with plenty of shade, greenery, views of the Yarra River, and a challenging incline.",
    image: './images/run/theTan.webp',
    nav: 'https://maps.app.goo.gl/i24HsRu2rB4uGkkv8',
    color: altColor,
    zoom: 13.5,
    offsetX: 0,
    offsetY: 150,
    length: "3.9 km's",
  },
  {
    index: 3,
    order: 4,
    title: 'Yarra River Run - Long',
    lng: 144.9590882592546,
    lat: -37.822206531135855,
    bearing: 40,
    description:
      "The route takes you past some of Melbourne's most iconic landmarks, including the Crown Casino, Melbourne Exhibition Centre, and the Sea Life Melbourne Aquarium. The views along the river are stunning, with the sparkling water and lush greenery providing a scenic backdrop to your run.",
    image: './images/run/yarraLong.webp',
    nav: 'https://maps.app.goo.gl/yCUkamfaCRnK7jXN6',
    color: altColor,
    zoom: 13.5,
    offsetX: 60,
    offsetY: 150,
    length: "5.6 km's",
  },
  {
    index: 4,
    order: 5,
    title: 'Yarra River Run - Short',
    lng: 144.97410912541417,
    lat: -37.82044022362176,
    bearing: -40,
    description:
      "Starting at Federation Square, you'll make your way along the picturesque riverbank, taking in the stunning views and fresh air. As you cross the Swan Street Bridge, you'll see the Melbourne Cricket Ground (MCG) and the towering Rod Laver Arena, home to the Australian Open tennis tournament.",
    image: './images/run/yarraShort.webp',
    nav: 'https://maps.app.goo.gl/aPchcVkG9qVHNq7y6',
    color: altColor,
    zoom: 15,
    offsetX: 50,
    offsetY: 100,
    length: "2.8 km's",
  },
  {
    index: 4,
    order: 5,
    title: 'Treasury Gardens',
    lng: 144.9791522723083,
    lat: -37.81549532451862,
    bearing: 0,
    description:
      "Whether you're looking for a peaceful place to run or simply want to explore Melbourne's rich history and culture, a run around the Treasury Gardens is sure to be a memorable experience.",
    image: './images/run/treasury.webp',
    nav: 'https://maps.app.goo.gl/aYUuH4HF23TheVcR8',
    color: altColor,
    zoom: 15,
    offsetX: 0,
    offsetY: 150,
    length: "2.2 km's",
  },
  {
    index: 5,
    order: 6,
    title: 'Melbourne Cricket Ground',
    lng: 144.98133384283767,
    lat: -37.818880325174284,
    bearing: -60,
    description:
      "A run around the MCG is a great way to explore Melbourne's rich sporting heritage and take in the city's stunning sights and sounds.",
    image: './images/run/mcg.webp',
    nav: 'https://maps.app.goo.gl/3NSuTJzcJw2Ym9ve7',
    color: altColor,
    zoom: 15,
    offsetX: 90,
    offsetY: 150,
    length: "3.8 km's",
  },
  {
    index: 6,
    order: 7,
    title: 'Port Melbourne - St Kilda',
    lng: 144.95822341802696,
    lat: -37.85261933403467,
    bearing: 100,
    description:
      "As you run, you'll pass by some of Melbourne's most popular beaches, including South Melbourne Beach and Middle Park Beach, each with its unique charm and character. The path is flat and well-maintained, making it perfect for both runners and walkers alike.",
    image: './images/run/beach.webp',
    nav: 'https://maps.app.goo.gl/FkeHkJWvHEYuqumaA',
    color: altColor,
    zoom: 13,
    offsetX: 0,
    offsetY: 100,
    length: "4.1 km's",
  },
];
