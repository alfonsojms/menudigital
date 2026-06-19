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
  {
    id: "starter-1",
    name: "Papas Pepperoni Loaded",
    price: 12,
    category: "starters",
    categoryLabel: "Entradas / Snacks",
    description: "Papas fritas crujientes bañadas en salsa marinara artesanal, queso mozzarella derretido y pepperoni doradito.",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=800",
    subtitle: "El Snack Más Pedido",
    story: "Nuestras papas fritas cortadas a mano se cubren con una deliciosa salsa marinara casera, queso mozzarella fundido bajo el grill y rodajas de pepperoni premium tostado, logrando un sabor único que une lo mejor de la pizza con las papas.",
    ingredients: [
      "Papas fritas artesanales crujientes",
      "Salsa marinara casera de tomates italianos",
      "Queso mozzarella fundido premium",
      "Rodajas de pepperoni tostadas al horno"
    ],
    allergens: "Lácteos, Gluten"
  },
  {
    id: "starter-2",
    name: "Cheesy Burger Bites",
    price: 10,
    category: "starters",
    categoryLabel: "Entradas / Snacks",
    description: "Esferas de carne smash premium rellenas de queso cheddar cremoso, empanizadas al panko y fritas al momento.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
    subtitle: "Fusión de Sabor",
    story: "Combinamos la sazón de nuestra carne de hamburguesa con un corazón de queso cheddar líquido, envuelto en una capa súper crujiente de panko. Se sirven calientes para que el queso explote en tu boca.",
    ingredients: [
      "Carne de res seleccionada y sazonada",
      "Corazón de queso cheddar americano líquido",
      "Empanizado crujiente de panko y finas hierbas",
      "Salsa especial 'Casa Sauce' para untar"
    ],
    allergens: "Gluten, Lácteos, Huevos"
  },
  {
    id: "starter-3",
    name: "Aros de Cebolla Gigantes BBQ",
    price: 8,
    category: "starters",
    categoryLabel: "Entradas / Snacks",
    description: "Aros de cebolla cortados a mano, doblemente empanizados y servidos con nuestra salsa barbacoa ahumada.",
    image: "https://images.unsplash.com/photo-1639024471283-2bc7b3c6a267?q=80&w=800",
    subtitle: "Crujiente Clásico",
    story: "Cebollas dulces seleccionadas cortadas en aros gigantescos, pasadas por un tempura de cerveza y panko para el máximo crujido, acompañadas de salsa BBQ dulce y ahumada.",
    ingredients: [
      "Cebollas dulces cortadas gruesas",
      "Tempura crujiente a base de cerveza rubia",
      "Pan rallado panko de alta calidad",
      "Salsa BBQ con toque de chipotle"
    ],
    allergens: "Gluten"
  },
  {
    id: "starter-4",
    name: "Crispy Chicken Nuggets",
    price: 9,
    category: "starters",
    categoryLabel: "Entradas / Snacks",
    description: "Trozos de pechuga de pollo marinados en suero de leche, empanizados con receta secreta de especias.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800",
    subtitle: "Puro Pollo Real",
    story: "Olvídate de los nuggets procesados. Estos son trozos de pechuga de pollo real marinados por 24 horas en buttermilk y especias, fritos hasta que queden súper crujientes por fuera y jugosos por dentro.",
    ingredients: [
      "Pechuga de pollo 100% natural cortada a mano",
      "Marinado en buttermilk (suero de leche) y ajo",
      "Mezcla de harina sazonada con 11 especias",
      "Aderezo Honey Mustard artesanal"
    ],
    allergens: "Gluten, Lácteos, Mostaza"
  },
  {
    id: "main-1",
    name: "La Hamburpizza Suprema",
    price: 22,
    category: "mains",
    categoryLabel: "Hamburguesas & Pizzas",
    description: "Jugosa carne smash de 200g, tocino ahumado, cheddar y salsa envueltos en una mini pizza de pepperoni recién horneada.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800",
    subtitle: "Nuestra Creación Insignia",
    story: "La madre de todas las fusiones. Reemplazamos los tradicionales panes por una mini pizza de pepperoni estirada a mano y horneada al momento. En su interior guarda una jugosa carne premium de res smash de 200g, queso cheddar fundido, tocino crujiente y vegetales frescos.",
    ingredients: [
      "Masa de pizza artesanal horneada con salsa e hilo de mozzarella",
      "Carne smash de res premium de 200 gramos",
      "Rodajas de pepperoni y tocino ahumado",
      "Queso cheddar americano y aderezo especial de la casa"
    ],
    allergens: "Gluten, Lácteos, Huevos"
  },
  {
    id: "main-2",
    name: "Pizza Pepperoni Explosiva",
    price: 18,
    category: "mains",
    categoryLabel: "Hamburguesas & Pizzas",
    description: "Masa napolitana madurada 48h, salsa pomodoro italiana, abundante mozzarella y triple ración de pepperoni.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800",
    subtitle: "Para Fanáticos del Pepperoni",
    story: "El clásico americano llevado a otro nivel. Masa napolitana súper delgada y con bordes inflados alveolados, pintada con salsa pomodoro artesanal, cubierta de queso mozzarella premium que estira al infinito y repleta de rodajas de pepperoni que se curvan en el horno.",
    ingredients: [
      "Masa artesanal madurada en frío por 48 horas",
      "Salsa de tomates de San Marzano",
      "Queso mozzarella 100% de leche de vaca",
      "Abundante pepperoni curado seleccionado"
    ],
    allergens: "Gluten, Lácteos"
  },
  {
    id: "main-3",
    name: "Burger Double Smash Cheddar",
    price: 15,
    category: "mains",
    categoryLabel: "Hamburguesas & Pizzas",
    description: "Doble carne smash costrosa (100g c/u), cuatro rebanadas de cheddar, cebolla caramelizada y aderezo especial.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800",
    subtitle: "Clásico Americano Smash",
    story: "Carne de res de libre pastoreo con la costra perfecta que solo da la plancha caliente. Dos carnes smash de 100g unidas por capas de queso cheddar americano derretido, cebolla caramelizada a la mantequilla y aderezo de pepinillos casero en pan brioche.",
    ingredients: [
      "Doble carne smash premium de 100g cada una",
      "Cuatro rebanadas de queso cheddar americano real",
      "Cebolla caramelizada y pepinillos agridulces",
      "Pan brioche de papa tostado con mantequilla noisette"
    ],
    allergens: "Gluten, Lácteos, Huevos",
    soldOut: false
  },
  {
    id: "main-4",
    name: "Pizza Burger Especial",
    price: 20,
    category: "mains",
    categoryLabel: "Hamburguesas & Pizzas",
    description: "Pizza tradicional con salsa marinara y mozzarella, cargada de carne de res molida premium, tocino, cheddar y cebolla.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800",
    subtitle: "La Hamburguesa Hecha Pizza",
    story: "Preparamos una pizza artesanal y la coronamos con todos los ingredientes icónicos de una hamburguesa premium: trocitos de carne sazonada a la plancha, tocino ahumado, aros de cebolla morada y un baño final de queso cheddar fundido tras salir del horno de piedra.",
    ingredients: [
      "Base de pizza artesanal con pomodoro y mozzarella",
      "Carne de hamburguesa sazonada desmenuzada",
      "Tocino ahumado y cebolla morada fresca",
      "Baño de salsa de queso cheddar derretido"
    ],
    allergens: "Gluten, Lácteos"
  },
  {
    id: "main-5",
    name: "La Burger Monstrosa Triple",
    price: 24,
    category: "mains",
    categoryLabel: "Hamburguesas & Pizzas",
    description: "Triple carne smash (100g c/u), triple cheddar, aros de cebolla crujientes y salsa BBQ en pan brioche.",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800",
    subtitle: "Solo para Valientes",
    story: "Una hamburguesa colosal diseñada para satisfacer los apetitos más feroces. Tres carnes smash doraditas, tres rebanadas de cheddar americano, aros de cebolla crujientes y salsa BBQ ahumada en pan brioche de papa.",
    ingredients: [
      "Triple carne smash de 100g (300g totales)",
      "Triple porción de queso cheddar fundido",
      "Aros de cebolla empanizados integrados",
      "Salsa BBQ artesanal y pan de papa"
    ],
    allergens: "Gluten, Lácteos, Huevos",
    soldOut: true
  },
  {
    id: "dessert-1",
    name: "Pizza Sweet Nutella & Fresas",
    price: 12,
    category: "desserts",
    categoryLabel: "Postres / Dulces",
    description: "Masa delgada y crujiente cubierta de Nutella caliente, rodajas de fresas frescas y lluvia de azúcar glas.",
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?q=80&w=800",
    subtitle: "El Postre Estrella",
    story: "Masa artesanal estirada fina, horneada hasta quedar crujiente, untada generosamente con crema de avellanas Nutella caliente y decorada con fresas jugosas frescas y azúcar flor.",
    ingredients: [
      "Masa delgada crujiente de pizza dulce",
      "Crema de avellanas y chocolate Nutella caliente",
      "Fresas frescas seleccionadas fileteadas",
      "Lluvia de azúcar flor glas"
    ],
    allergens: "Gluten, Lácteos, Frutos de Cáscara"
  },
  {
    id: "dessert-2",
    name: "Mega Shake Oreo Burger",
    price: 10,
    category: "desserts",
    categoryLabel: "Postres / Dulces",
    description: "Batido cremoso de galletas Oreo, crema batida, coronado con una mini dona glaseada de chocolate.",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=800",
    subtitle: "Batido Extremo",
    story: "Un batido ultra cremoso a base de helado de vainilla premium, galletas Oreo trituradas y leche entera, decorado con fudge de chocolate, crema chantilly y una mini dona de chocolate arriba.",
    ingredients: [
      "Helado de vainilla premium y leche entera",
      "Galletas Oreo trituradas en el batido",
      "Crema batida chantilly fresca",
      "Mini dona de chocolate y jarabe fudge"
    ],
    allergens: "Lácteos, Gluten, Soya"
  },
  {
    id: "drink-1",
    name: "Cerveza Artesanal IPA La Casa",
    price: 7,
    category: "drinks",
    categoryLabel: "Bebidas / Cervezas",
    description: "IPA artesanal de cuerpo medio, con intensas notas cítricas, de maracuyá y un amargor refrescante.",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800",
    subtitle: "Para Acompañar la Hamburguesa",
    story: "Una cerveza estilo India Pale Ale elaborada localmente, con adición de lúpulos aromáticos americanos que aportan aromas de frutas tropicales y cítricos. Marida perfecto con el queso cheddar y tocino.",
    ingredients: [
      "Agua purificada de manantial",
      "Malta de cebada pale seleccionada",
      "Lúpulos cítricos Cascade, Citra y Mosaic",
      "Levadura de cerveza ale"
    ],
    allergens: "Gluten"
  },
  {
    id: "drink-2",
    name: "Soda Tropical de Maracuyá",
    price: 5,
    category: "drinks",
    categoryLabel: "Bebidas / Cervezas",
    description: "Refresco natural artesanal de pulpa de maracuyá maduro, menta fresca y gasificado ligero.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800",
    subtitle: "Refrescante sin Alcohol",
    story: "Una gaseosa natural elaborada en casa con pulpa fresca de maracuyá, un jarabe simple infundido con menta fresca del huerto y agua carbonatada ligera. Ácida, dulce y ultra refrescante.",
    ingredients: [
      "Pulpa fresca de maracuyá natural",
      "Agua carbonatada mineralizada",
      "Hojas de menta fresca machacadas",
      "Jarabe de azúcar simple artesanal"
    ],
    allergens: "Ninguno"
  }
];
