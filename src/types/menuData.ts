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
    name: "Oyster & Sea Buckthorn",
    price: 24,
    category: "starters",
    categoryLabel: "Première",
    description: "Foraged sea buckthorn mignonette, pickled kelp, dill oil.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeDm1k0_QiCP7OlgNjzMOd4osb9kW3HQV6FB1tinZ4PMtnZqEPGe5qtiXhkx8ciBebMEQ0rBHI2KLhqdTiAYmTYbNpPZGMCOJUr0ETNUPcztkj8dOTVUyxpbCm4udfeLv7M7EkM0uiImUUFcRfCNjUejgdPADfG5fawZxjpyjaqrQw8zmQq_yPPKxyPFk2RP6pS7Bjfq_nQPVv6tffzjn0vPHhBkoNJoMiTCSNvPI_CWvHjyDYoe9D",
    subtitle: "Coastline Sourcing, Batch 12",
    story: "Harvested from the cold northern tides, these oysters are paired with the sharp acidity of wild sea buckthorn berries, creating an intense, refreshing opening act that tastes of the ocean.",
    ingredients: [
      "Freshly shucked wild-caught coastal oysters",
      "Foraged sea buckthorn juice and mignonette",
      "Pickled sea kelp harvested at low tide",
      "Cold-pressed dill oil infusion"
    ],
    allergens: "Molluscs"
  },
  {
    id: "starter-2",
    name: "Cured Venison",
    price: 28,
    category: "starters",
    categoryLabel: "Première",
    description: "Fermented blueberries, pine emulsion, crispy lichen.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsGZ9gBRkNIRffLb4sTxhkLmLJKYj_pCD5l3worEOc_H96vwBVnT9Tz1i1p_QLXJGVi6z8TZsTXqhoSUMbEfIKxVvtJ459EaI6fARXywQpnvfB6kvX7zT5so5-pyW7cDNrLDcmI3V0kvyYRexyFg6rpcyMv3qNxdWmFtwnpzYRNsroQ2EvkEXlpLIie0mGiB1waJz1uj9lKi_AmqVzZWnpFrBSaGRWbZcr6rC94UmWtyvelSzfzAmq",
    subtitle: "Highlands & Pine Woods",
    story: "A wild dish evoking the forest floor. Venison loin is cured with pine needles and juniper, sliced paper-thin, and offset by the deep, complex sweetness of wild blueberries fermented in-house.",
    ingredients: [
      "Juniper and pine-cured wild venison loin",
      "Lacto-fermented wild forest blueberries",
      "Pine needle and rapeseed oil emulsion",
      "Crisped woodland lichen and moss extract"
    ],
    allergens: "None"
  },
  {
    id: "starter-3",
    name: "Charred Leeks",
    price: 22,
    category: "starters",
    categoryLabel: "Première",
    description: "Whipped smoked cod roe, hazelnut, brown butter vinaigrette.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeF7rl0odcJ3hjbDemY_5KrZb8iK70jUD3GPcOzUsr1Oj2Jbw-miYWd9t4RWXzENW3pOwgMc8wtPf98tqTF6MSPFM1Tp0SqtfzTYivbPvr2LMMcsaFAgCvMxGlhrQDeGXuDkFyDMOjb6TL0W0X4qi-QN3JzQk2tMGJq0fXrpZMU8FX7N_ZhS-3dFal7Ey-B3_xdrRgbMwtcEZaGOY0x2D3LeAJNP-x6sUaEt6L0EpmXI88-wE5MzDQ",
    subtitle: "Orchards & Ash",
    story: "Leeks are blackened directly on beechwood coals to steam them inside their own skins. The tender hearts are served warm over a rich, velvety whipped cod roe and drizzled with a nutty brown butter vinaigrette.",
    ingredients: [
      "Coal-charred sweet winter leeks",
      "Whipped smoked Baltic cod roe",
      "Toasted Piedmont hazelnuts",
      "Aged sherry vinegar and brown butter vinaigrette"
    ],
    allergens: "Fish, Tree Nuts"
  },
  {
    id: "starter-4",
    name: "Salt-Baked Beetroot",
    price: 18,
    category: "starters",
    categoryLabel: "Première",
    description: "Goat's curd, pickled walnuts, watercress oil.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAL9jGG0xApxxUCElVnpKdPoH-ZCKpABdVMcSL8BQGKZrN_asD3DTJj3hAofoL1qIu1lZPaCrdgA17p3aQJQ9s8H2rM_oXH3JOp4TLLu85kHVcMMQDBIjcVpw80DTRT5anoBB4BPo-PdZPidFHl3A2jEi88dEBqA7ebXapDHSAbub-3REuIy_dXFpALj3544D1rklzvy4FaaepJLpUdg48XTTGhWWdXqV4BD_WVySlCPlyuho33jFX",
    subtitle: "Earthy Roots & Herb Garden",
    story: "Salt-baking concentrates the natural earthy sweetness of organic beetroots. We balance this with the tanginess of fresh whipped goat's curd, crunch from pickled walnuts, and an aromatic watercress oil.",
    ingredients: [
      "Clay and salt-baked organic heritage beetroots",
      "Artisanal fresh goat's milk curd",
      "Green walnuts pickled in spiced vinegar",
      "Vibrant garden watercress oil"
    ],
    allergens: "Dairy, Tree Nuts"
  },
  {
    id: "starter-5",
    name: "Scallop Crudo",
    price: 26,
    category: "starters",
    categoryLabel: "Première",
    description: "Green apple, kohlrabi, horseradish snow.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxx8xgRo0Ldx9Tap3rsYOL8newKB6jqRWRllzeeeYsorfV3ByQp3z5zrEEZufAtAbW_tiLy6K-kf4qE6i_4um-d35Ok3gknL8ZoJF3ropMXKVTLqwowUPo6RmqSsPtw8v6twBLMEFaFxKo0_ulXTDhqfxhAEwzCJwaoHhQNjgvaCamAoGlIiCKPMCeAeA4J9AEoAw8Ocg01R5U1pm3wuDGDn-8rEUvkML_DWBoPm0jTjQusDLCPDb-",
    subtitle: "Orchard & Tide",
    story: "Slices of raw, sweet diver scallops layered with crisp green apple and shaved kohlrabi. Finished tableside with a delicate, refreshing snow made from freshly grated horseradish.",
    ingredients: [
      "Hand-dived raw Norwegian scallops",
      "Granny Smith apple gel and matchsticks",
      "Paper-thin sliced local kohlrabi",
      "Cryogenic fresh horseradish snow"
    ],
    allergens: "Molluscs"
  },
  {
    id: "main-1",
    name: "Aged Duck Breast",
    price: 48,
    category: "mains",
    categoryLabel: "Principale",
    description: "14-day dry aged, sour cherry jus, confit leg croquette, bitter greens.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBakE3O83vUqh5FG4W9nehOsVxiOUgkBeK5abl7HnegVFt4Ph1zil31hockuW3SFCp1P3oSp-1HyCEiedUcdxrS7Drm-LcxPbpbdribgUnl1i_kDcaHWOqBqjQcNMCg1puy8rHAHw36hngIVJ50RcuPd_cVVSEh2C6YNkOOaOSFiJsU3TFfvYPyrQtndcLclOgCAS6p46piivw7p6xKa-ppPl6PM26p-HzF4isSJabfQNGEvFAhVJRS",
    subtitle: "Dry-Ager Room, Day 14",
    story: "Our duck breasts are dry-aged on the bone in-house for 14 days to develop a deep gamey flavor and incredibly crispy skin. Accompanied by a rich sour cherry reduction and a crispy croquette made from slow-cooked leg meat.",
    ingredients: [
      "14-day dry-aged duck breast",
      "Slow-cooked duck leg confit croquette",
      "Fermented sour cherry and duck bone reduction",
      "Sautéed wild dandelion greens and chicory"
    ],
    allergens: "Gluten, Eggs"
  },
  {
    id: "main-2",
    name: "Wild Turbot",
    price: 52,
    category: "mains",
    categoryLabel: "Principale",
    description: "Roasted on the bone, white asparagus, vin jaune sauce, smoked caviar.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwoxceqefVMl9woCK75mqT229mHbD2afq9xnkwMncdAJaQ6fGpHY8MMnam4yHiDvG3kP4Dg0yuaiHzPoeOB0mi83ib3t7L6Y1M1krTD4RlAVQUXS-auq2f7Je3WB4euTqI3UMnEYh0RWrzYCaX9TWWFlxiX3N0qx5OhLYSUBVc0fey2XW94pL2SOeeCWfI9Pia93HH5YEqY98PaMIHmOO1D_Ud8ZCUWlaFtPFyeOU_EE705PuY0g7b",
    subtitle: "North Sea Day Boat",
    story: "Prized wild turbot, thick-cut and roasted gently on the bone to maintain its succulence. It sits in a rich, buttery emulsion flavored with French Vin Jaune, paired with tender seasonal white asparagus.",
    ingredients: [
      "Wild North Sea turbot roasted on the bone",
      "Seasonal poached white asparagus spears",
      "Vin Jaune and cream reduction sauce",
      "Smoked herring caviar"
    ],
    allergens: "Fish, Dairy"
  },
  {
    id: "main-3",
    name: "Heritage Pork Collar",
    price: 42,
    category: "mains",
    categoryLabel: "Principale",
    description: "Charred cabbage, mustard seed, pork jus infused with fermented plum.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJjzEWRlrRHrgQs0vjeWFjCmjIbKxf8E5S2P4dIKkrDzdPhx12_9fG7ZFYS-fPRnLVAqhgpmSBcTrAisOjong4Zkw7P34hM0u0d2t7kHMhSeVOyTLaAUJy1Q3impMYs9KTcEOK8FSm91zFG7F8XYRUMXufjxUnMmz9TFTSzMJzSa8MmI_QiLYXTd3yUcNkdF3Q8LmhCL8Hxeh4SmgfUZC31wen-Ve_qPovJ9SruS9MC5niADTEOGXy",
    subtitle: "Organic Pastures",
    story: "Sourced from local heritage pigs, this heavily marbled collar is slow-cooked until meltingly tender, then glazed over charcoal. Served alongside charred savoy cabbage and a jus sweet-and-sour with pickled plums.",
    ingredients: [
      "Heritage Berkshire pork collar",
      "Beechwood charred savoy cabbage",
      "Pickled mustard seeds",
      "Double-reduced pork jus with fermented local plums"
    ],
    allergens: "Mustard",
    soldOut: true
  },
  {
    id: "main-4",
    name: "Smoked Celeriac",
    price: 34,
    category: "mains",
    categoryLabel: "Principale",
    description: "Salt-baked, black truffle, rich mushroom demi-glace, crispy roots.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxmG87hAo7cmjMeXpma8Zd_aeD7Nl-kolYvWUpPqwvMHPoeWtkzoj0nOHMWxUWo6aU9eE7WeQEYKkcUEe1e5wVXlrrZh_GJxf_CR_k5efGMBQ_QCk6WuPMahAzaRAgfdxKX8gLDS2zZIvMGkTRnmBwMJ5e6YXFIbXk8DkksAxMJNVBPwaC0iFmnr9HGtMlYsetu8q1Rem-RBK2OJmi-tBGxSlw-vMhmfnKlCuyR_KsH7nQRImk3EcY",
    subtitle: "Forest Floor Earthiness",
    story: "A spectacular vegetarian main. Whole celeriac is smoked, salt-baked for hours, then carved and served with shaved fresh black winter truffle and a deeply concentrated mushroom and vegetable demi-glace.",
    ingredients: [
      "Oak-smoked celeriac baked in salt crust",
      "Shaved fresh black winter truffles",
      "Concentrated wild mushroom demi-glace",
      "Crisped celeriac root ribbons"
    ],
    allergens: "Celery"
  },
  {
    id: "main-5",
    name: "Charred Heirloom Cabbage",
    price: 28,
    category: "mains",
    categoryLabel: "Principale",
    description: "Smoked sea salt, fermented garlic honey, toasted hazelnut emulsion, sourdough crumbs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiPmTW9NNEZmffM2YXa9OiHsZ5AzSNDcyaZ7K978hcBeETblue2mJlpCvjl2Xjora2JzeSIqOQUrHlIRD1dpNneFhxNoSkD7NbMVnY5zfBs2IPZrPlonRw5YvrZdkqJEas4tC84Hl-NP7HRA5haXIwxDJPLzff2O_6-xqlGtxtA8EpZ3esc2IDVP4yMfoPE_FLNtXzE80E2SW519GGIO5aCCASX9cyhArAsH00r6pT0Yrd6Wln916z",
    subtitle: "Local Farms, Day 04",
    story: "A study in simplicity and time. We source late-season heirloom cabbages from local partners, allowing them to gently frost in the field to concentrate their natural sugars.",
    ingredients: [
      "Smoked sea salt harvested from the northern coast",
      "Fermented garlic honey aged for 60 days",
      "Toasted hazelnut emulsion with wild fennel pollen",
      "Crispy rye sourdough crumbs"
    ],
    allergens: "Alliums, Tree Nuts, Gluten"
  },
  {
    id: "dessert-1",
    name: "Birch Sap Panna Cotta",
    price: 16,
    category: "desserts",
    categoryLabel: "Sucré",
    description: "Rhubarb glass, wood sorrel, toasted grains.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwrZaY4_rlPL94HeVGQGn-TS6SYw7WRqNyvWrxW-N8w3Gnc_B8R3CY2FoyHtKUW8tZ_J3f6uW84l1XuQdmYf82s5rh9uCuVufe-TE9U3SpTrx6ICJjtjiCZXvPfClcYdqsyVIgZfQA4kpIzInIrhAj8h1wuwek9geyCsbgwz9lT0ub6-YjsdK8k6MpjOLPr3VPS7q2HnqQxwsSz7gkswYaACI-k34GUSUzstoCXM_WUrcyNiZ6-9Y7",
    subtitle: "Forest Tap & Spring",
    story: "A light, refreshing panna cotta made using fresh birch sap for a subtle woody sweetness, topped with sugar-baked crisp rhubarb glass, fresh wood sorrel leaves, and toasted ancient grains.",
    ingredients: [
      "Organic cream infused with spring birch sap",
      "Dehydrated heirloom rhubarb glass",
      "Freshly foraged green wood sorrel",
      "Toasted barley and spelt crumble"
    ],
    allergens: "Dairy, Gluten"
  }
];
