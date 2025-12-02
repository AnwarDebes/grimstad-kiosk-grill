export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image?: string
  popular?: boolean
}

export interface MenuCategory {
  id: string
  name: string
  icon: string
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    id: "hamburger",
    name: "Hamburger",
    icon: "🍔",
    items: [
      {
        id: "hamburger",
        name: "Hamburger",
        description: "Hamburger med salat, mais, løk, tomat, agurk og hamburgerdressing.",
        price: 110,
        image: "/images/juicy-beef-hamburger-with-lettuce-tomato-onion-cuc.webp",
        popular: true,
      },
      {
        id: "kyllingburger",
        name: "Kyllingburger",
        description: "120g. kyllingburger med hamburgerdressing, salat, mais, løk, tomat og agurk.",
        price: 118,
        image: "/images/crispy-golden-chicken-burger-with-lettuce-tomato-o.webp",
      },
      {
        id: "vegetar-fava-burger",
        name: "Vegetar Fava Burger",
        description: "150g. vegetarburger med hamburgerdressing, salat, mais, løk, tomat og agurk.",
        price: 118,
        image: "/images/vegetarian-fava-bean-burger-with-fresh-lettuce-tom.png",
      },
      {
        id: "tex-mex-burger",
        name: "Tex-Mex Burger",
        description: "Med hamburgerdressing, salat, mais, tomat, løk og agurk. Velg mellom 120g eller 150g.",
        price: 135,
        image: "/images/spicy-tex-mex-burger-combo-with-jalapenos-fries-an.webp",
       
      },
      {
        id: "hamburger-meny",
        name: "Hamburger Meny",
        description:
          "Hamburger med salat, mais, løk, tomat, agurk og hamburgerdressing. Meny kommer med pommes og drikke.",
        price: 166,
        image: "/images/hamburger-meal-combo-with-golden-french-fries-and-.webp",
      },
      {
        id: "lovstekburger",
        name: "Løvstekburger",
        description: "120g. løvstek med hamburgerdressing, salat, mais, løk, tomat og agurk.",
        price: 118,
        image: "/images/beef-steak-burger-meal-with-crispy-fries-and-refre.png",
      },
      {
        id: "lovstekburger-meny",
        name: "Løvstekburger Meny",
        description:
          "120g. løvstek med hamburgerdressing, salat, mais, løk, tomat og agurk. Meny kommer med pommes og drikke.",
        price: 174,
        image: "/images/beef-steak-burger-meal-with-crispy-fries-and-refre-menu.png",
      },
      {
        id: "kyllingburger-meny",
        name: "Kyllingburger Meny",
        description:
          "120g. kyllingburger med hamburgerdressing, salat, mais, løk, tomat og agurk. Meny kommer med pommes og drikke.",
        price: 174,
        image: "/images/crispy-chicken-burger-combo-meal-with-french-fries.webp",
      },
      {
        id: "tex-mex-burger-meny",
        name: "Tex-Mex Burger Meny",
        description:
          "Med hamburgerdressing, salat, mais, tomat, løk og agurk. Velg mellom 120g eller 150g. Meny kommer med pommes og drikke.",
        price: 191,
        image: "/images/spicy-tex-mex-burger-combo-with-jalapenos-fries-an.webp",
      },
      {
        id: "vegetar-fava-burger-meny",
        name: "Vegetar Fava Burger Meny",
        description:
          "150g. vegetarburger med hamburgerdressing, salat, mais, løk, tomat og agurk. Meny kommer med pommes og drikke.",
        price: 174,
        image: "/images/vegetarian-fava-bean-burger-with-fresh-lettuce-tom-menu.png",
      },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    icon: "🍕",
    items: [
      {
        id: "margherita",
        name: "Margherita",
        description: "Pizza med tomatsaus og ost. Velg størrelse.",
        price: 147,
        image: "/images/classic-margherita-pizza-with-melted-mozzarella-ch.webp",
      },
      {
        id: "hawaii",
        name: "Hawaii",
        description: "Pizza med tomatsaus, ost, skinke og ananas. Velg størrelse.",
        price: 179,
        image: "/images/hawaiian-pizza-with-ham-pineapple-chunks-melted-ch.webp",
      },
      {
        id: "var-spesial",
        name: "Vår Spesial",
        description: "Pizza med tomatsaus, ost, marinert biff, marinert kylling, rødløk, mais og jalapeños.",
        price: 208,
        image: "/images/loaded-special-pizza-with-grilled-beef-chicken-red.webp",
        popular: true,
      },
      {
        id: "kebabpizza",
        name: "Kebabpizza",
        description: "Pizza med tomatsaus, ost, rødløk, mais og jalapeños. Toppes med kebabkjøtt.",
        price: 208,
        image: "/images/kebab-pizza-topped-with-sliced-doner-meat-red-onio.webp",
        popular: true,
      },
      {
        id: "vegetarpizza",
        name: "Vegetarpizza",
        description: "Pizza med tomatsaus, ost, løk, tomatskiver, paprika, mais og champignon. Velg størrelse.",
        price: 172,
        image: "/images/vegetarian-pizza-with-colorful-bell-peppers-mushro.png",
      },
      {
        id: "biffen",
        name: "Biffen",
        description: "Pizza med tomatsaus, ost, marinert biff og bacon. Velg størrelse.",
        price: 204,
        image: "/images/beef-pizza-with-marinated-beef-and-bacon.png",
      },
    ],
  },
  {
    id: "kebab",
    name: "Kebab",
    icon: "🥙",
    items: [
      {
        id: "kebabrull",
        name: "Kebabrull",
        description: "Rull med kebabkjøtt, salat, agurk, løk, mais og kebabdressing.",
        price: 147,
        image: "/images/kebab-wrap-roll-with-meat-lettuce-and-sauce.webp",
        popular: true,
      },
      {
        id: "kyllingrull",
        name: "Kyllingrull",
        description: "Rull med marinert kylling, salat, agurk, løk, mais og hvitløksdressing.",
        price: 147,
        image: "/images/chicken-wrap-roll-with-lettuce-garlic-sauce.webp",
      },
      {
        id: "kebab-i-pita",
        name: "Kebab i Pita",
        description: "Pitabrød fylt med kebabkjøtt, salat, agurk, løk, mais og kebabdressing.",
        price: 147,
        image: "/images/pita-bread-stuffed-with-kebab-meat-and-vegetables.webp",
      },
      {
        id: "kebabrull-pommes",
        name: "Kebabrull m/ Pommes",
        description: "Rull med kebabkjøtt, pommes frites, salat, agurk, løk, mais og kebabdressing.",
        price: 172,
        image: "/images/kebab-wrap-with-french-fries-inside.webp",
      },
      {
        id: "kebabtallerken",
        name: "Kebabtallerken",
        description: "Tallerken med kebabkjøtt, pommes frites, salat, agurk, løk, mais og kebabdressing.",
        price: 172,
        image: "/images/kebab-plate-with-meat-fries-and-salad.webp",
        popular: true,
      },
    ],
  },
  {
    id: "pita",
    name: "Pita",
    icon: "🫓",
    items: [
      {
        id: "pita-lovstek",
        name: "Pita m/ Løvstek",
        description: "Pitabrød med 120g. løvstek, kinakål, mais, løk, tomat, agurk og hvitløksdressing.",
        price: 159,
        image: "/images/beef-steak-pita-with-lettuce-onion-tomato-and-garlic.png",
      },
      {
        id: "pita-marinert-biff",
        name: "Pita m/ Marinert Biff",
        description: "Pitabrød fylt med 150g. biff, kinakål, mais, løk, tomat, agurk og hvitløksdressing.",
        price: 166,
        image: "/images/beef-pita-with-marinated-beef-and-lettuce-onion-tomato-and-garlic.png",
      },
      {
        id: "pita-marinert-kylling",
        name: "Pita m/ Marinert Kylling",
        description: "Pitabrød fylt med 150g. marinert kylling, kinakål, mais, løk, tomat, agurk og hvitløksdressing.",
        price: 166,
        image: "/images/chicken-pita-with-marinated-chicken-and-lettuce-onion-tomato-and-garlic.png",
      },
    ],
  },
  {
    id: "snadderloff",
    name: "Snadderloff",
    icon: "🥖",
    items: [
      {
        id: "snadderloff-kjottdeig",
        name: "Snadderloff m/ Kjøttdeig",
        description: "Snadderloff med Kinakål, hvitløksdressing og ost.",
        price: 122,
        image: "/images/baguette-sandwich-with-ground-beef-and-cheese.webp",
      },
      {
        id: "snadderloff-kjottdeig-bacon",
        name: "Snadderloff m/ Kjøttdeig & Bacon",
        description: "Snadderloff med Kinakål, hvitløksdressing og ost.",
        price: 135,
        image: "/images/baguette-sandwich-with-beef-bacon-and-melted-chees.webp",
        popular: true,
      },
      {
        id: "snadderloff-marinert-kylling",
        name: "Snadderloff m/ Marinert Kylling",
        description: "Snadderloff med Kinakål, hvitløksdressing og ost.",
        price: 135,
        image: "/images/baguette-with-grilled-chicken-and-garlic-sauce.webp",
      },
      {
        id: "snadderloff-marinert-biff",
        name: "Snadderloff m/ Marinert Biff",
        description: "Snadderloff med Kinakål, hvitløksdressing og ost.",
        price: 135,
        image: "/images/baguette-sandwich-with-marinated-beef-strips.webp",
      },
    ],
  },
  {
    id: "tallerken",
    name: "Tallerken",
    icon: "🍽️",
    items: [
      {
        id: "nuggetstallerken",
        name: "Nuggetstallerken",
        description: "8 stk. nuggets med salat, pommes frites og sweet chilli saus. Valgfri drikke.",
        price: 198,
        image: "/images/chicken-nuggets-plate-with-fries-and-salad.webp",
      },
      {
        id: "biffsnadder",
        name: "Biffsnadder",
        description: "150g. Serveres med marinert biff, paprika, løk, salat, pommes frites og bearnaisesaus.",
        price: 217,
        image: "/images/marinated-beef-plate-with-peppers-onions-fries.webp",
      },
      {
        id: "kyllingsnadder",
        name: "Kyllingsnadder",
        description: "150g. Serveres med marinert kylling, paprika, løk, salat, pommes frites og hvitløksdressing.",
        price: 217,
        image: "/images/grilled-chicken-plate-with-vegetables-and-fries.webp",
        popular: true,
      },
      {
        id: "lovstektallerken",
        name: "Løvstektallerken",
        description: "120g. Serveres med løvstek, salat, pommes frites og bearnaisesaus. Valgfri drikke.",
        price: 217,
        image: "/images/beef-steak-plate-with-salad-fries-bearnaise.webp",
      },
    ],
  },
  {
    id: "ekstra",
    name: "Ekstra",
    icon: "🍟",
    items: [
      {
        id: "fries-liten",
        name: "Fries Liten",
        description: "Liten fries.",
        price: 48,
        image: "/images/small-portion-golden-crispy-french-fries.webp",
      },
      {
        id: "fries-stor",
        name: "Fries Stor",
        description: "Stor fries.",
        price: 78,
        image: "/images/large-portion-golden-crispy-french-fries.webp",
        popular: true,
      },
    ],
  },
  {
    id: "drikke",
    name: "Drikke",
    icon: "🥤",
    items: [
      {
        id: "imsdal-vann",
        name: "Imsdal Vann",
        description: "Velg mellom 0,3l og 0,5l.",
        price: 30,
        image: "/images/clear-plastic-water-bottle-imsdal-norwegian.webp",
      },
      {
        id: "pepsi-max",
        name: "Pepsi Max",
        description: "0,5l Pepsi Max.",
        price: 44,
        image: "/images/pepsi-max-bottle-blue-label-cola-drink.webp",
      },
      {
        id: "solo",
        name: "Solo",
        description: "0,5l Solo.",
        price: 44,
        image: "/images/solo-orange-soda-bottle-norwegian-soft-drink.webp",
      },
      {
        id: "coca-cola",
        name: "Coca-Cola",
        description: "0,5l Coca-Cola.",
        price: 44,
        image: "/images/coca-cola-classic-bottle-red-label.webp",
      },
      {
        id: "coca-cola-uten-sukker",
        name: "Coca-Cola Uten Sukker",
        description: "0,5l Coca-Cola Uten Sukker.",
        price: 44,
        image: "/images/coca-cola-zero-sugar-bottle-black-label.webp",
      },
      {
        id: "sprite",
        name: "Sprite",
        description: "0,5l Sprite.",
        price: 44,
        image: "/images/sprite-lemon-lime-soda-bottle-green-label.webp",
      },
      {
        id: "fanta-appelsin",
        name: "Fanta Appelsin",
        description: "0,5l Fanta Appelsin.",
        price: 44,
        image: "/images/fanta-orange-soda-bottle-bright-orange-color.webp",
      },
      {
        id: "urge",
        name: "Urge",
        description: "0,5l Urge.",
        price: 44,
        image: "/images/urge-citrus-soda-bottle-norwegian-green-yellow.webp",
      },
      {
        id: "powerade-sport",
        name: "Powerade Sport",
        description: "500ml Powerade Sport.",
        price: 44,
      
      },
      {
        id: "powerade-mango",
        name: "Powerade Mango",
        description: "500ml Powerade Mango.",
        price: 44,
        
      },
      {
        id: "pepsi-original",
        name: "Pepsi Original",
        description: "0,5l Pepsi Original.",
        price: 47,
        image: "/pepsi-original-cola-bottle-classic-blue-red.jpg",
      },
      {
        id: "grimstad-brus-sitron-ingefaer",
        name: "Grimstad Brus Sitron & Ingefær",
        description: "0,33l Grimstad Brus.",
        price: 57,
        
      },
      {
        id: "grimstad-brus-okologisk-appelsin",
        name: "Grimstad Brus Økologisk Appelsin",
        description: "0,33l Grimstad Brus.",
        price: 57,
      },
      {
        id: "grimstad-brus-cuba-kuba",
        name: "Grimstad Brus Cuba Kuba",
        description: "0,33l Grimstad Brus.",
        price: 57,
      },
    ],
  },
  {
    id: "energidrikk",
    name: "Energidrikk",
    icon: "⚡",
    items: [
      {
        id: "red-bull-aprikos",
        name: "Red Bull Aprikos",
        description: "250ml Red Bull Aprikos.",
        price: 33,
      },
      {
        id: "red-bull-yellow",
        name: "Red Bull Yellow",
        description: "250ml Red Bull Yellow Edition.",
        price: 33,
        image: "/images/red-bull-yellow-energy-drink-bottle.webp",
      },
      {
        id: "red-bull-regular",
        name: "Red Bull Regular",
        description: "Velg mellom 250ml, 355ml eller 473ml.",
        price: 34,
        popular: true,
        image: "/images/red-bull-energy-drink-bottle.webp",
      },
      {
        id: "red-bull-sukkerfri",
        name: "Red Bull Sukkerfri",
        description: "Velg mellom 250ml, 355ml eller 473ml.",
        price: 34,
        image: "/images/red-bull-sugar-free-energy-drink-bottle.webp",
      },
      {
        id: "burn-original",
        name: "Burn Original",
        description: "0,5l Burn Energidrikk.",
        price: 44,
        image: "/images/burn-original-energy-drink-bottle.webp",
      },
      {
        id: "burn-twist",
        name: "Burn Twist",
        description: "0,5l Burn Energidrikk.",
        price: 44,
        image: "/images/monster-energy-zero-sugar-energy-drink-bottle.webp",
      },
      {
        id: "monster-zero-sugar",
        name: "Monster Energy Zero Sugar",
        description: "0,5l Monster Energy Zero Sugar.",
        price: 44,
        
      },
      {
        id: "powerking-zero",
        name: "Powerking Zero",
        description: "250ml Powerking Zero.",
        price: 24,
      },
      {
        id: "battery-energy",
        name: "Battery Energy",
        description: "0,5l Battery Energy.",
        price: 44,
      },
      {
        id: "monster-punch",
        name: "Monster Energy Punch",
        description: "0,5l Monster Energy Punch.",
        price: 44,
      },
      {
        id: "monster-ultra-gold",
        name: "Monster Energy Ultra Gold",
        description: "0,5l Monster Energy Ultra Gold.",
        price: 44,
      },
      {
        id: "monster-ultra-fiesta-mango",
        name: "Monster Energy Ultra Fiesta Mango",
        description: "0,5l Monster Energy Ultra Fiesta Mango.",
        price: 44,
      },
      {
        id: "monster-ultra-paradise",
        name: "Monster Energy Ultra Paradise",
        description: "0,5l Monster Energy Ultra Paradise.",
        price: 44,
      },
      {
        id: "monster-ultra-watermelon",
        name: "Monster Energy Ultra Watermelon",
        description: "0,5l Monster Energy Ultra Watermelon.",
        price: 44,
      },
      {
        id: "monster-ultra-white",
        name: "Monster Energy Ultra White",
        description: "0,5l Monster Energy Ultra White.",
        price: 44,
      },
      {
        id: "monster-lemonade-juiced",
        name: "Monster Energy Lemonade Juiced",
        description: "0,5l Monster Energy Lemonade Juiced.",
        price: 44,
      },
      {
        id: "monster-khaotic",
        name: "Monster Energy Khaotic",
        description: "0,5l Monster Energy Khaotic.",
        price: 44,
      },
      {
        id: "monster-mango-loco",
        name: "Monster Energy Mango Loco",
        description: "0,5l Monster Energy Mango Loco.",
        price: 44,
      },
      {
        id: "monster-monarch",
        name: "Monster Energy Monarch",
        description: "0,5l Monster Energy Monarch.",
        price: 44,
      },
      {
        id: "monster-original",
        name: "Monster Energy Original",
        description: "0,5l Monster Energy Original.",
        price: 44,
        popular: true,
      },
      {
        id: "monster-ultra-rosa",
        name: "Monster Energy Ultra Rosa",
        description: "0,5l Monster Energy Ultra Rosa.",
        price: 44,
      },
      {
        id: "monster-lewis-hamilton",
        name: "Monster Energy Lewis Hamilton",
        description: "0,5l Monster Energy Lewis Hamilton.",
        price: 44,
      },
    ],
  },
  {
    id: "dip",
    name: "Dip",
    icon: "🫙",
    items: [
      {
        id: "hvitloksdressing",
        name: "Hvitløksdressing",
        description: "Kremet hvitløksdressing.",
        price: 25,
        image: "/images/hvitløksdressing-kremet-hvitløksdressing.webp",
      },
      {
        id: "kebabdressing",
        name: "Kebabdressing",
        description: "Klassisk kebabdressing.",
        price: 25,
        image: "/images/kebabdressing-classic-kebab-sauce.png",
      },
      {
        id: "sweet-chilli",
        name: "Ketchup",
        description: "Ketchup saus.",
        price: 25,
        image: "/images/ketchup-bottle-red-tomato-sauce.webp",
      },
      {
        id: "bearnaisesaus",
        name: "Bearnaisesaus",
        description: "Klassisk bearnaisesaus.",
        price: 25,
        image: "/images/bearnaisesaus-classic-bearnaise-sauce.webp",
      },
    ],
  },
]

export const reviews = [
  {
    id: 1,
    name: "Karl",
    date: "10 måneder siden",
    rating: 5,
    text: "Veldig fornøyd med maten!",
    likedDishes: ["Snadderloff m/ Kjøttdeig & Bacon", "Snadderloff m/ Marinert Kylling"],
  },
  {
    id: 2,
    name: "Peder",
    date: "11 måneder siden",
    rating: 5,
    text: "Perfekt snadderloff som vanlig 👍",
    likedDishes: ["Snadderloff m/ Marinert Biff"],
  },
  {
    id: 3,
    name: "Vetle",
    date: "11 måneder siden",
    rating: 5,
    text: "Helt topp.",
    likedDishes: [],
  },
  {
    id: 4,
    name: "Assma",
    date: "9 måneder siden",
    rating: 5,
    text: "The food was absolutely amazing! Perfectly balanced flavors, beautifully presented, and cooked to perfection.",
    likedDishes: ["Kebabtallerken"],
  },
  {
    id: 5,
    name: "Åse",
    date: "7 måneder siden",
    rating: 5,
    text: "Nydelig mat, veldig glad for god service.",
    likedDishes: [],
  },
]
