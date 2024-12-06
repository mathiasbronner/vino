export type Data = {
  id: number;
  name: string;
  title: string;
  country: string;
  communes: string[];
  grapes: string[];
  grapeDescription: string;
  province: string;
  region: string;
  shortDescription: string;
  description: string;
  geographyDescription: string;
  historyDescription: string;
};

export const data: Data[] = [
  {
    id: 1,
    name: "barolo",
    title: "Barolo",
    country: "Italy",
    communes: [
      "La Morra",
      "Serralunga d’Alba",
      "Monforte d’Alba",
      "Castiglione Falletto",
      "Barolo",
    ],
    grapes: ["Nebbiolo"],
    grapeDescription:
      "Nebbiolo is a native black grape variety of Piedmont that gives birth to some of the most iconic Italian red wines, known for their high tannins, bold structure, and longevity.",
    province: "Cuneo",
    region: "Piedmont",
    shortDescription:
      "Barolo is a world-renowned red wine known as the 'King of Wines' from Piedmont, Italy.",
    description:
      "Barolo is a robust, full-bodied wine with aromas of roses, tar, and truffles, aged to develop extraordinary complexity.",
    geographyDescription:
      "Nestled in the Langhe hills, Barolo's vineyards benefit from unique soil compositions and microclimates ideal for Nebbiolo.",
    historyDescription:
      "The origins of Barolo trace back to the 19th century, becoming a symbol of Italian winemaking excellence and tradition.",
  },
  {
    id: 2,
    name: "chianti-classico",
    title: "Chianti Classico",
    country: "Italy",
    communes: [
      "Greve in Chianti",
      "Radda in Chianti",
      "Gaiole in Chianti",
      "Castellina in Chianti",
    ],
    grapes: ["Sangiovese"],
    grapeDescription:
      "Sangiovese is Italy’s most widely planted grape, known for its versatility, bright acidity, and flavors of red fruits and herbs.",
    province: "Florence and Siena",
    region: "Tuscany",
    shortDescription:
      "Chianti Classico is a distinguished red wine produced in the heart of Tuscany.",
    description:
      "This wine is characterized by flavors of cherry, leather, and spice, often enhanced by oak aging for balance and depth.",
    geographyDescription:
      "Chianti Classico vineyards lie between Florence and Siena, defined by hilly terrain and rich, galestro soils.",
    historyDescription:
      "Chianti Classico’s roots date back to the 13th century, evolving into one of Italy’s most famous wine appellations.",
  },
  {
    id: 3,
    name: "brunello-di-montalcino",
    title: "Brunello di Montalcino",
    country: "Italy",
    communes: ["Montalcino"],
    grapes: ["Sangiovese Grosso"],
    grapeDescription:
      "Sangiovese Grosso, a variant of Sangiovese, produces concentrated, age-worthy wines with bold structure and dark fruit flavors.",
    province: "Siena",
    region: "Tuscany",
    shortDescription:
      "Brunello di Montalcino is a premier Italian red wine made exclusively from Sangiovese Grosso.",
    description:
      "Known for its elegance and power, Brunello di Montalcino offers notes of cherry, plum, and earthy undertones with significant aging potential.",
    geographyDescription:
      "Montalcino's vineyards are elevated, providing ideal conditions for cultivating high-quality Sangiovese.",
    historyDescription:
      "First produced in the 19th century, Brunello di Montalcino achieved DOCG status in 1980, signifying its exceptional quality.",
  },
  {
    id: 4,
    name: "amarone-della-valpolicella",
    title: "Amarone della Valpolicella",
    country: "Italy",
    communes: ["Fumane", "Marano", "Negrar", "San Pietro in Cariano"],
    grapes: ["Corvina", "Rondinella", "Molinara"],
    grapeDescription:
      "Corvina, Rondinella, and Molinara are traditional varieties used in Amarone, known for their rich flavors and suitability for the appassimento process.",
    province: "Verona",
    region: "Veneto",
    shortDescription:
      "Amarone is a luxurious, full-bodied red wine from the Valpolicella region of Veneto.",
    description:
      "This wine is made using partially dried grapes, resulting in concentrated flavors of dried fruit, chocolate, and spice.",
    geographyDescription:
      "The Valpolicella region's rolling hills and diverse soil types provide optimal conditions for crafting Amarone.",
    historyDescription:
      "Amarone’s distinctive style emerged in the mid-20th century, becoming a hallmark of Veneto’s winemaking tradition.",
  },
  {
    id: 5,
    name: "prosecco",
    title: "Prosecco",
    country: "Italy",
    communes: ["Conegliano", "Valdobbiadene"],
    grapes: ["Glera"],
    grapeDescription:
      "Glera is a white grape variety known for its light, aromatic profile, essential in crafting Prosecco's fresh and bubbly style.",
    province: "Treviso",
    region: "Veneto",
    shortDescription:
      "Prosecco is Italy's iconic sparkling wine, celebrated for its freshness and versatility.",
    description:
      "With crisp notes of green apple, pear, and citrus, Prosecco is a refreshing and approachable sparkling wine.",
    geographyDescription:
      "Prosecco production is centered in Veneto’s hilly areas, offering an ideal climate for growing Glera.",
    historyDescription:
      "Prosecco has a long history, but its modern fame grew in the 20th century, becoming synonymous with Italian celebrations.",
  },
];
