export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [,
    { id: "traditional-cloths", label: "Cultural Fashion" },
    { id: "african-art", label: "Art Gallery" },
    { id: "home-decor", label: "Home Decor" },
    { id: "wood-carvings", label: "Wood & Soul" },
    { id: "recycled", label: "Sustainable Treasures"},
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
    { id: "dresses", label: "Dresses" },
    { id: "trousers", label: "Trousers" },
    { id: "masai-products", label: "Maasai Products" },
    { id: "tops", label: "Tops" },
    { id: "belts", label: "Belts" },
    { id: "bags", label: "Bags" },
    { id: "hats", label: "Hats" },
    { id: "jewelry", label: "Jewelry" },
    { id: "wall-art", label: "Wall Art" },
    { id: "footwear", label: "Footwear" },
    { id: "furniture", label: "Furniture" },
    { id: "kitchen", label: "Kitchen" },
    { id: "beadwork", label: "Beadwork" },
    { id: "pottery", label: "Pottery" },
    { id: "textiles", label: "Textiles" },
    { id: "organic", label: "Organic" },
    { id: "planters", label: "Planters" },
    { id: "outdoor", label: "Outdoor" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

// Shopping Header Menu Items
export const shoppingViewHeaderMenuItems = [
  { id: "home", label: "Home", path: "/shop/home" },
  { id: "products", label: " All Products", path: "/shop/listing" },
  { id: "traditional-cloths", label: "Cultural Fashion", path: "/shop/listing" },
  { id: "african-art", label: "Art Gallery", path: "/shop/listing" },
  { id: "home-decor", label: "Handcrafted Home Decor", path: "/shop/listing" },
  { id: "wood-carvings", label: "Wood & Soul", path: "/shop/listing" },
  { id: "recycled", label: "Sustainable Treasures", path: "/shop/listing" },
  { id: "search", label: "Search Product", path: "/shop/search" },
];

// Category Options (from categoriesWithIcon)
export const categoryOptionsMap = {
  traditionalcloths: "Cultural Fashion",
  "african-art": "Art Gallery",
  "home-decor": "Handcrafted Home Decor",
  "wood-carvings": "Wood & Soul",
  recycled: "Sustainable Treasures",
};

// Brand/Product Type Options (from brandsWithIcon)
export const brandOptionsMap = {
  footwear: "Footwear",
  tops: "Tops",
  trousers: "Trousers",
  dresses: "Dresses",
  bags: "Bags",
  jewelry: "Jewelry",
  belts: "Belts",
  hats: "Hats",
  furniture: "Furniture",
  kitchen: "Kitchen",
  "wall-art": "Wall Art",
  beadwork: "Beadwork",
  pottery: "Pottery",
  textiles: "Textiles",
  organic: "Organic",
  planters: "Planters",
  outdoor: "Outdoor",
};

// Filter Options for UI Filters
export const filterOptions = {
  category: [
    { id: "traditional-cloths", label: "Cultural Fashion" },
    { id: "african-art", label: "Art Gallery" },
    { id: "home-decor", label: "Home Decor" },
    { id: "wood-carvings", label: "Wood & Soul" },
    { id: "recycled", label: "Sustainable Treasures" },
  ],
  brand: [
    { id: "dresses", label: "Dresses" },
    { id: "trousers", label: "Trousers" },
    { id: "masai-products", label: "Maasai Products" },
    { id: "tops", label: "Tops" },
    { id: "belts", label: "Belts" },
    { id: "bags", label: "Bags" },
    { id: "hats", label: "Hats" },
    { id: "jewelry", label: "Jewelry" },
    { id: "wall-art", label: "Wall Art" },
    { id: "footwear", label: "Footwear" },
    { id: "furniture", label: "Furniture" },
    { id: "kitchen", label: "Kitchen" },
    { id: "beadwork", label: "Beadwork" },
    { id: "pottery", label: "Pottery" },
    { id: "textiles", label: "Textiles" },
    { id: "organic", label: "Organic" },
    { id: "planters", label: "Planters" },
    { id: "outdoor", label: "Outdoor" },
  ],
};


export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
