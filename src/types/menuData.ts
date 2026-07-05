export interface Dish {
  id: string;
  name: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  categoryLabel: string;
  description: string;
  image: string;
  subtitle: string;
  story: string;
  ingredients: string[];
  allergens: string;
  soldOut?: boolean;
}

export const menuData: Dish[] = [
  // --- STARTERS (Entradas / Snacks / Perros / Tequeperros) ---
  {
    id: "tequeperro-sencillo",
    name: "Tequeperros 2 Unidades",
    price: 8,
    category: "starters",
    categoryLabel: "Tequeperros y Perros",
    description: "Fusionamos el rico tequeño venezolano con el clásico perro caliente, cambiamos el pan por un súper tequeño. Con salchicha, papas ralladas, tocineta, maíz y salsas.",
    image: "/menufotos/480435892_17894956473170633_7261931795626125031_n.webp",
    subtitle: "El Tequeño Gigante Fusión",
    story: "¡Una locura total! Cambiamos el tradicional pan por una masa crujiente de tequeño venezolano dorado. Relleno con salchicha de calidad, maíz tierno, tocineta crocante, papitas ralladas y nuestra selección de salsas clásicas.",
    ingredients: [
      "Masa de tequeño artesanal frita",
      "Salchicha premium",
      "Papas ralladas ultra finas",
      "Tocineta crujiente",
      "Maíz tierno desgranado",
      "Salsas tradicionales"
    ],
    allergens: "Gluten, Lácteos"
  },
  {
    id: "tequeperro-especial",
    name: "Tequeperros Especial 2 Unidades",
    price: 10,
    category: "starters",
    categoryLabel: "Tequeperros y Perros",
    description: "Súper tequeño relleno de salchicha, jamón, queso amarillo, queso mozzarella, tocineta, papas ralladas, maíz y salsas.",
    image: "/menufotos/480435892_17894956473170633_7261931795626125031_n.webp",
    subtitle: "La Versión Recargada",
    story: "Si te gustó el tequeperro clásico, este te volará la cabeza. Añadimos jamón premium, queso amarillo derretido y una capa extra de queso mozzarella fundido al calor de la fritura de la masa de tequeño.",
    ingredients: [
      "Masa de tequeño artesanal extra grande",
      "Salchicha premium y jamón seleccionado",
      "Queso amarillo y queso mozzarella fundido",
      "Tocineta, maíz tierno y papitas crujientes",
      "Salsas especiales de la casa"
    ],
    allergens: "Gluten, Lácteos"
  },
  {
    id: "perro-jumbo",
    name: "Perros Normales Tamaño Jumbo",
    price: 6,
    category: "starters",
    categoryLabel: "Tequeperros y Perros",
    description: "Perro caliente jumbo tradicional con ensalada, salchicha, papitas, salsas y queso de año.",
    image: "/menufotos/480898688_17894956503170633_6105284169569578037_n.webp",
    subtitle: "Estilo Callejero Venezolano",
    story: "El clásico indiscutible de las noches venezolanas. Una salchicha gigante en pan ultra suave al vapor, cubierto con ensalada fresca rallada, papas fritas ralladas crujientes, una lluvia de queso de año con su característico toque salado y todas las salsas.",
    ingredients: [
      "Pan de perro caliente gigante al vapor",
      "Salchicha Jumbo de alta calidad",
      "Ensalada de repollo y zanahoria finamente rallada",
      "Papitas fritas trituradas crujientes",
      "Queso de año rallado tradicional",
      "Salsas tradicionales"
    ],
    allergens: "Gluten, Lácteos"
  },
  {
    id: "perro-charcutero",
    name: "Perro Charcutero",
    price: 8,
    category: "starters",
    categoryLabel: "Tequeperros y Perros",
    description: "Perro caliente especial con ensalada, salchicha, papitas, maíz, jamón, queso pasteurizado, queso amarillo, salsas y queso de año.",
    image: "/menufotos/480898688_17894956503170633_6105284169569578037_n.webp",
    subtitle: "El Rey de la Charcutería",
    story: "Una bomba de sabores. A la base del perro jumbo le sumamos jamón de primera, queso pasteurizado suave, queso amarillo derretido y maíz tierno, logrando una combinación irresistiblemente quesuda y sabrosa.",
    ingredients: [
      "Pan especial de perro jumbo al vapor",
      "Salchicha Jumbo y jamón premium",
      "Queso amarillo y queso pasteurizado tierno",
      "Ensalada rallada, maíz y papitas fritas",
      "Queso de año rallado y aderezos especiales"
    ],
    allergens: "Gluten, Lácteos"
  },

  // --- MAINS (Hamburpizzas, Pizzas, Patacones, Whoppers, La Meri) ---
  {
    id: "hamburpizza-pollo-carne",
    name: "Hamburpizza Pollo o Carne",
    price: 14,
    category: "mains",
    categoryLabel: "Hamburpizzas y Más",
    description: "La fusión de sabores que buscabas, unimos lo mejor de la hamburguesa y lo exquisito de una buena pizza. Con jamón, tocineta, queso mozzarella, queso amarillo, tomate, orégano, maíz, salsas, pasta de tomate y papas ralladas.",
    image: "/menufotos/481020682_17894956464170633_8960802278795460931_n.webp",
    subtitle: "Fusión Suprema de Carne o Pollo",
    story: "Nuestra creación insignia. Todo el relleno jugoso de una hamburguesa de carne o pollo asado a la plancha con tocineta, jamón y papas ralladas, envuelto en una masa de pizza artesanal con base de pomodoro, mozzarella y orégano recién horneada.",
    ingredients: [
      "Masa de pizza artesanal horneada al momento",
      "Carne de res o pollo desmechado premium a la plancha",
      "Jamón, tocineta y doble queso (mozzarella y amarillo)",
      "Tomate, maíz dulce, papas ralladas y orégano",
      "Pasta de tomate pomodoro y salsas de la casa"
    ],
    allergens: "Gluten, Lácteos"
  },
  {
    id: "hamburpizza-crispy",
    name: "Hamburpizza Crispy Pollo o Chuleta",
    price: 16,
    category: "mains",
    categoryLabel: "Hamburpizzas y Más",
    description: "Nuestra hamburpizza premium rellena de jamón, tocineta, queso mozzarella, queso amarillo, pollo crispy crujiente o chuleta, tomate, maíz, salsas, pasta de tomate y papas ralladas.",
    image: "/menufotos/481020682_17894956464170633_8960802278795460931_n.webp",
    subtitle: "Sabor Extra Crujiente",
    story: "Una versión con texturas inigualables. Rellenamos la masa de pizza con jugoso pollo crispy súper crujiente o una chuleta ahumada tierna a la plancha, combinada con jamón, tocineta, quesos derretidos y papitas fritas ralladas.",
    ingredients: [
      "Masa de pizza artesanal crujiente",
      "Pollo frito crispy o chuleta ahumada premium",
      "Queso mozzarella, queso amarillo y tocineta",
      "Tomate, maíz, papas ralladas y orégano",
      "Pasta de tomate artesanal y aderezos"
    ],
    allergens: "Gluten, Lácteos"
  },
  {
    id: "hamburpizza-minions",
    name: "Hamburpizza Minions",
    price: 10,
    category: "mains",
    categoryLabel: "Hamburpizzas y Más",
    description: "Hamburpizza en tamaño perfecto para los pequeños. Rellena de carne, jamón, queso mozzarella, queso amarillo, tomate, orégano, maíz, salsas, pasta de tomate y papas ralladas.",
    image: "/menufotos/481020682_17894956464170633_8960802278795460931_n.webp",
    subtitle: "La Favorita de los Chamos",
    story: "Una versión miniatura de nuestra hamburpizza pero con todo el sabor. Carne molida premium, jamón, quesos derretidos, maíz dulce y papitas ralladas en una porción ideal para niños.",
    ingredients: [
      "Masa de pizza individual",
      "Carne de res tierna sazonada",
      "Jamón, queso mozzarella y amarillo",
      "Tomate fresco, maíz dulce y papitas ralladas",
      "Salsas suaves y pasta de tomate"
    ],
    allergens: "Gluten, Lácteos"
  },
  {
    id: "pizza-ind-sencilla",
    name: "Pizza Individual Sencilla",
    price: 8,
    category: "mains",
    categoryLabel: "Pizzas",
    description: "Pizza individual de masa fina con queso mozzarella fundido, jamón premium y un toque de orégano.",
    image: "/menufotos/480456987_17894956491170633_2138880112667699261_n.webp",
    subtitle: "Rápida y Tradicional",
    story: "Nuestra clásica pizza individual estirada a mano al estilo napolitano, pintada con salsa de la casa, abundante mozzarella derretida, jamón curado y orégano aromático.",
    ingredients: [
      "Masa de pizza artesanal delgada",
      "Salsa de tomate especiada de la casa",
      "Queso mozzarella 100% real",
      "Jamón premium y orégano"
    ],
    allergens: "Gluten, Lácteos"
  },
  {
    id: "pizza-ind-margarita",
    name: "Pizza Individual Margarita",
    price: 8,
    category: "mains",
    categoryLabel: "Pizzas",
    description: "Pizza individual con queso mozzarella, maíz tierno y orégano.",
    image: "/menufotos/480456987_17894956491170633_2138880112667699261_n.webp",
    subtitle: "Un Toque Dulce de Maíz",
    story: "La versión de la casa de la clásica Margarita. Reemplazamos la albahaca por granos dulces de maíz tierno que combinan a la perfección con la cremosidad del queso mozzarella fundido.",
    ingredients: [
      "Masa de pizza delgada",
      "Salsa de tomate artesanal",
      "Queso mozzarella fundido",
      "Maíz dulce desgranado y orégano"
    ],
    allergens: "Gluten, Lácteos"
  },
  {
    id: "pizza-ind-especial",
    name: "Pizza Individual Especial",
    price: 10,
    category: "mains",
    categoryLabel: "Pizzas",
    description: "Pizza individual cargada con queso, jamón, tocineta, maíz y orégano.",
    image: "/menufotos/480456987_17894956491170633_2138880112667699261_n.webp",
    subtitle: "La Combinación Perfecta",
    story: "Una pizza individual completa para los que quieren un poco de todo. Jamón tierno, tocineta crocante y maíz tierno sobre una cama de queso mozzarella fundido sobre nuestra salsa de tomate secreta.",
    ingredients: [
      "Masa artesanal fina",
      "Salsa de tomate pomodoro",
      "Queso mozzarella premium",
      "Jamón, tocineta ahumada, maíz dulce y orégano"
    ],
    allergens: "Gluten, Lácteos"
  },
  {
    id: "pizza-rect-sencilla",
    name: "Pizza Il Rectzza Sencilla",
    price: 22,
    category: "mains",
    categoryLabel: "Pizzas",
    description: "Pizza cuadrada gigante de 24 trozos con abundante queso mozzarella, maíz y orégano. Perfecta para compartir en familia.",
    image: "/menufotos/480456987_17894956491170633_2138880112667699261_n.webp",
    subtitle: "La Pizza Cuadrada Gigante",
    story: "Nuestra famosa pizza rectangular XL. 24 deliciosos trozos cuadrados cubiertos de una generosa capa de mozzarella, maíz tierno y un aroma de orégano que perfuma toda la mesa.",
    ingredients: [
      "Masa de pizza rectangular familiar",
      "Salsa pomodoro especial de la casa",
      "Queso mozzarella extra fundido",
      "Maíz tierno desgranado y orégano"
    ],
    allergens: "Gluten, Lácteos"
  },
  {
    id: "pizza-rect-especial",
    name: "Pizza Il Rectzza Especial",
    price: 26,
    category: "mains",
    categoryLabel: "Pizzas",
    description: "Pizza cuadrada gigante de 24 trozos con abundante queso mozzarella, jamón, tocineta, maíz y orégano.",
    image: "/menufotos/480456987_17894956491170633_2138880112667699261_n.webp",
    subtitle: "El Banquete Familiar XL",
    story: "La reina de las reuniones. Una bandeja de 24 trozos de pizza cuadrada repletos de jamón premium, tocineta crujiente ahumada, maíz dulce desgranado, abundante queso mozzarella y orégano.",
    ingredients: [
      "Masa familiar rectangular horneada al molde",
      "Salsa de tomate artesanal",
      "Queso mozzarella premium",
      "Jamón, tocineta ahumada, maíz y orégano"
    ],
    allergens: "Gluten, Lácteos"
  },
  {
    id: "patacon-casa",
    name: "Patacón de la Casa",
    price: 12,
    category: "mains",
    categoryLabel: "Patacón y Burgers",
    description: "Plátano verde macho frito y crujiente relleno de carne y pollo, ensalada rallada, queso de mano, queso amarillo, jamón, tocineta, maíz y salsas.",
    image: "/menufotos/480898688_17894956503170633_6105284169569578037_n.webp",
    subtitle: "El Auténtico Sabor Zuliano",
    story: "Cambiamos el pan por dos tapas crujientes de plátano verde macho frito, aplanado y sazonado. Lo rellenamos con carne y pollo desmechado a la plancha, ensalada de repollo fresca, jamón, tocineta crujiente, maíz y un espectacular queso de mano y amarillo derretido.",
    ingredients: [
      "Tapas de plátano macho verde frito y crujiente",
      "Carne de res y pechuga de pollo desmechados a la plancha",
      "Queso de mano tradicional y queso amarillo",
      "Jamón premium y tocineta ahumada",
      "Ensalada rallada fresca, maíz y salsas"
    ],
    allergens: "Lácteos"
  },
  {
    id: "whopper-crispy",
    name: "Whopper de Pollo Crispy",
    price: 10,
    category: "mains",
    categoryLabel: "Patacón y Burgers",
    description: "Hamburguesa premium con vegetales, papitas crujientes, pollo crispy, queso mozzarella, queso amarillo, tocineta y salsas.",
    image: "/menufotos/480898688_17894956503170633_6105284169569578037_n.webp",
    subtitle: "Doble Queso & Pollo Crujiente",
    story: "Una hamburguesa enorme con una pechuga de pollo frita súper crujiente rebozada en nuestra receta especial de especias. Viene acompañada de vegetales frescos, papitas fritas ralladas, queso mozzarella y amarillo derretido y tocino crujiente.",
    ingredients: [
      "Pan brioche con ajonjolí tostado",
      "Pechuga de pollo crispy marinada y rebozada",
      "Queso mozzarella fundido y queso amarillo",
      "Vegetales frescos (lechuga y tomate)",
      "Tocineta crujiente y papitas fritas trituradas",
      "Salsas de la casa"
    ],
    allergens: "Gluten, Lácteos, Huevos"
  },
  {
    id: "whopper-sencilla",
    name: "Whopper Sencilla",
    price: 9,
    category: "mains",
    categoryLabel: "Patacón y Burgers",
    description: "Hamburguesa clásica con vegetales, papitas, carne de res premium o pollo, jamón, queso y salsas.",
    image: "/menufotos/480898688_17894956503170633_6105284169569578037_n.webp",
    subtitle: "El Clásico Hamburguesero",
    story: "La hamburguesa de toda la vida. Carne de res seleccionada o pollo a la plancha, jamón, queso derretido, vegetales frescos, papas ralladas crujientes y un aderezo de salsas tradicionales.",
    ingredients: [
      "Pan brioche tostado",
      "Carne de res smash premium o pollo a la plancha",
      "Queso derretido y jamón premium",
      "Lechuga, tomate fresco y papitas trituradas",
      "Salsas de la casa"
    ],
    allergens: "Gluten, Lácteos, Huevos"
  },
  {
    id: "meri-pollo-carne",
    name: "Meri de Pollo o Carne",
    price: 11,
    category: "mains",
    categoryLabel: "La Meri",
    description: "Cambiamos el pan tradicional por nuestra deliciosa masa frita de la casa. Con pollo o carne, queso de mano, queso amarillo, jamón, tocineta, papas ralladas, maíz y salsas.",
    image: "/menufotos/480986107_17894956482170633_5563912232239391031_n.webp",
    subtitle: "La Hamburguesa Frita",
    story: "Una joya exclusiva. Masa de pan frita y crujiente de la casa rellena de jugosa carne o pollo, queso de mano derretido, queso amarillo, jamón, tocineta, maíz dulce desgranado, papitas trituradas y salsas.",
    ingredients: [
      "Masa frita artesanal de la casa",
      "Carne de res o pollo desmechado premium",
      "Queso de mano venezolano y queso amarillo",
      "Jamón y tocineta ahumada",
      "Papas ralladas, maíz tierno y salsas"
    ],
    allergens: "Gluten, Lácteos"
  },
  {
    id: "meri-crispy-chuleta",
    name: "Meri de Pollo Crispy o Chuleta",
    price: 12,
    category: "mains",
    categoryLabel: "La Meri",
    description: "Masa frita de la casa rellena de pollo crispy súper crujiente o chuleta, queso de mano, queso amarillo, jamón, tocineta, papas ralladas, maíz y salsas.",
    image: "/menufotos/480986107_17894956482170633_5563912232239391031_n.webp",
    subtitle: "Doble Sabor Frito y Crujiente",
    story: "Nuestra meri en su versión premium. Con el increíble pollo frito crispy o chuleta ahumada a la plancha, combinados con queso de mano y amarillo derretido dentro del pan frito de la casa.",
    ingredients: [
      "Masa frita artesanal de la casa",
      "Pollo frito crispy o chuleta ahumada a la plancha",
      "Queso de mano y queso amarillo derretido",
      "Jamón, tocineta, maíz tierno y papitas",
      "Aderezos especiales de la casa"
    ],
    allergens: "Gluten, Lácteos"
  },

  // --- DESSERTS (Postres / Dulces) ---
  {
    id: "dessert-1",
    name: "Pizza Sweet Nutella & Fresas",
    price: 12,
    category: "desserts",
    categoryLabel: "Postres",
    description: "Masa delgada y crujiente cubierta de Nutella caliente, rodajas de fresas frescas y lluvia de azúcar glas.",
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?q=80&w=800",
    subtitle: "El Dulce Final",
    story: "Nuestra deliciosa masa de pizza artesanal estirada muy fina y horneada hasta quedar súper crujiente, cubierta generosamente con Nutella caliente y fresas frescas fileteadas.",
    ingredients: [
      "Masa fina crujiente",
      "Nutella de chocolate y avellana",
      "Fresas frescas seleccionadas",
      "Azúcar glas"
    ],
    allergens: "Gluten, Lácteos, Frutos Secos"
  },
  {
    id: "dessert-2",
    name: "Mega Shake Oreo Burger",
    price: 10,
    category: "desserts",
    categoryLabel: "Postres",
    description: "Batido cremoso de galletas Oreo, crema batida, coronado con una mini dona glaseada de chocolate.",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=800",
    subtitle: "Un Batido de Locura",
    story: "Batido espeso y frío de helado de vainilla y trozos de galleta Oreo, servido en copa con crema chantilly y una mini dona de chocolate de decoración.",
    ingredients: [
      "Helado de vainilla y leche entera",
      "Galletas Oreo trituradas",
      "Crema batida fresca",
      "Mini dona de chocolate"
    ],
    allergens: "Gluten, Lácteos"
  },

  // --- DRINKS (Bebidas) ---
  {
    id: "drink-1",
    name: "Refrescos Variados",
    price: 3,
    category: "drinks",
    categoryLabel: "Bebidas",
    description: "Lata de Coca-Cola, Chinotto, Fanta o Pepsi bien fría.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800",
    subtitle: "Gaseosas Heladas",
    story: "Las gaseosas clásicas servidas en lata súper heladas para acompañar tu hamburpizza o patacón favorito.",
    ingredients: [
      "Gaseosa seleccionada de 355ml"
    ],
    allergens: "Ninguno"
  },
  {
    id: "drink-2",
    name: "Soda Tropical de Maracuyá",
    price: 5,
    category: "drinks",
    categoryLabel: "Bebidas",
    description: "Refresco natural artesanal de pulpa de maracuyá maduro, menta fresca y gasificado ligero.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800",
    subtitle: "Refrescante sin Alcohol",
    story: "Elaborada en casa con pulpa 100% natural de maracuyá (parchita), hojas de menta fresca machacadas, un toque de jarabe de azúcar y agua mineral con gas.",
    ingredients: [
      "Pulpa natural de parchita (maracuyá)",
      "Agua carbonatada",
      "Hojas de menta fresca",
      "Jarabe de azúcar simple"
    ],
    allergens: "Ninguno"
  }
];
