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
    options: [
       { id: "home", label: "Home", path: "/shop/home" },
  { id: "products", label: "Products", path: "/shop/listing" },
  { id: "men", label: "Men", path: "/shop/listing" },
  { id: "women", label: "Women", path: "/shop/listing" },
  { id: "kids", label: "Kids", path: "/shop/listing" },
  { id: "african-art", label: "African Art", path: "/shop/listing" },
  { id: "home-decor", label: "Home Decor", path: "/shop/listing" },
  { id: "wood-carvings", label: "Wood Carvings", path: "/shop/listing" },
  { id: "recycled", label: "Sustainable", path: "/shop/listing" },
  { id: "search", label: "Search", path: "/shop/search" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
       { id: "footwear", label: "Footwear" },
    { id: "tops", label: "Tops" },
    { id: "trousers", label: "Trousers" },
    { id: "dresses", label: "Dresses" },
    { id: "bags", label: "Bags" },
    { id: "jewelry", label: "Jewelry" },
    { id: "belts", label: "Belts" },
    { id: "hats", label: "Hats" },
    { id: "furniture", label: "Furniture" },
    { id: "lighting", label: "Lighting" },
    { id: "kitchen", label: "Kitchen" },
    { id: "wall-art", label: "Wall Art" },
    { id: "tribal-wear", label: "Tribal Wear" },
    { id: "masai-products", label: "Maasai Products" },
    { id: "kitenge", label: "Kitenge" },
    { id: "ankara", label: "Ankara" },
    { id: "native-american", label: "Native American" },
    { id: "beadwork", label: "Beadwork" },
    { id: "pottery", label: "Pottery" },
    { id: "textiles", label: "Textiles" },
    { id: "handbags", label: "Handbags" },
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
  { id: "products", label: "Products", path: "/shop/listing" },
  { id: "men", label: "Men", path: "/shop/listing" },
  { id: "women", label: "Women", path: "/shop/listing" },
  { id: "kids", label: "Kids", path: "/shop/listing" },
  { id: "african-art", label: "African Art", path: "/shop/listing" },
  { id: "home-decor", label: "Home Decor", path: "/shop/listing" },
  { id: "wood-carvings", label: "Wood Carvings", path: "/shop/listing" },
  { id: "recycled", label: "Sustainable", path: "/shop/listing" },
  { id: "search", label: "Search", path: "/shop/search" },
];

// Category Options (from categoriesWithIcon)
export const categoryOptionsMap = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  "african-art": "African Art",
  "home-decor": "Home Decor",
  "wood-carvings": "Wood Carvings",
  recycled: "Sustainable",
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
  lighting: "Lighting",
  kitchen: "Kitchen",
  "wall-art": "Wall Art",
  "tribal-wear": "Tribal Wear",
  "masai-products": "Maasai Products",
  kitenge: "Kitenge",
  ankara: "Ankara",
  "native-american": "Native American",
  beadwork: "Beadwork",
  pottery: "Pottery",
  textiles: "Textiles",
  handbags: "Handbags",
  organic: "Organic",
  planters: "Planters",
  outdoor: "Outdoor",
};

// Filter Options for UI Filters
export const filterOptions = {
  category: [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "kids", label: "Kids" },
    { id: "african-art", label: "African Art" },
    { id: "home-decor", label: "Home Decor" },
    { id: "wood-carvings", label: "Wood Carvings" },
    { id: "recycled", label: "Sustainable" },
  ],
  brand: [
    { id: "footwear", label: "Footwear" },
    { id: "tops", label: "Tops" },
    { id: "trousers", label: "Trousers" },
    { id: "dresses", label: "Dresses" },
    { id: "bags", label: "Bags" },
    { id: "jewelry", label: "Jewelry" },
    { id: "belts", label: "Belts" },
    { id: "hats", label: "Hats" },
    { id: "furniture", label: "Furniture" },
    { id: "lighting", label: "Lighting" },
    { id: "kitchen", label: "Kitchen" },
    { id: "wall-art", label: "Wall Art" },
    { id: "tribal-wear", label: "Tribal Wear" },
    { id: "masai-products", label: "Maasai Products" },
    { id: "kitenge", label: "Kitenge" },
    { id: "ankara", label: "Ankara" },
    { id: "native-american", label: "Native American" },
    { id: "beadwork", label: "Beadwork" },
    { id: "pottery", label: "Pottery" },
    { id: "textiles", label: "Textiles" },
    { id: "handbags", label: "Handbags" },
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
