import {ChevronLeftIcon, Layers, UmbrellaIcon ,ChevronRightIcon,ShirtIcon,SproutIcon , FlowerIcon , TreePalmIcon, FlaskConicalIcon , BeakerIcon, MountainIcon , ImageIcon , UtensilsIcon , LightbulbIcon , SofaIcon , HardHatIcon , CircleDashedIcon , GemIcon, BackpackIcon, GlobeIcon, LampIcon , LeafIcon , Footprints, Split, Shirt} from "lucide-react";
import { Button } from "@/components/components/ui/button";
import { Card, CardContent } from "@/components/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllFilteredProducts,fetchProductDetails,} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";

const categoriesWithIcon = [
  { id: "traditional-cloths", label: "Cultural Fashion", icon: ShirtIcon, description: "Authentic Maasai shukas, kikoys, and traditional attire" },
  { id: "african-art", label: "Art Gallery", icon: GlobeIcon, description: "Tribal portraits and cultural paintings" },
  { id: "home-decor", label: "Handcrafted Home Decor", icon: LampIcon, description: "Wooden carvings and kitenge textiles" },
  { id: "wood-carvings", label: "Wood & Soul", icon: UmbrellaIcon, description: "Traditional woodwork and sculptures" },
  { id: "recycled", label: "Sustainable Treasures", icon: LeafIcon, description: "Eco-friendly crafts from recycled materials" },
];

const brandsWithIcon = [
  { id: "dresses", label: "Dresses", icon: Shirt }, 
  { id: "trousers", label: "Trousers", icon: Split },
  { id: "masai-products", label: "Maasai Products", icon: MountainIcon },
  { id: "tops", label: "Tops", icon: ShirtIcon },
  { id: "belts", label: "Belts", icon: CircleDashedIcon },
  { id: "bags", label: "Bags", icon: BackpackIcon },
  { id: "hats", label: "Hats", icon: HardHatIcon }, 
  { id: "jewelry", label: "Jewelry", icon: GemIcon },
  { id: "wall-art", label: "Wall Art", icon: ImageIcon },
  { id: "footwear", label: "Footwear", icon: Footprints }, 
  { id: "furniture", label: "Furniture", icon: SofaIcon },
  { id: "kitchen", label: "Kitchen", icon: UtensilsIcon },
  { id: "beadwork", label: "Beadwork", icon: BeakerIcon },
  { id: "pottery", label: "Pottery", icon: FlaskConicalIcon },
  { id: "textiles", label: "Textiles", icon: Layers },
  { id: "organic", label: "Organic", icon: SproutIcon },
  { id: "planters", label: "Planters", icon: FlowerIcon },
  { id: "outdoor", label: "Outdoor", icon: TreePalmIcon },
];

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts  
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    // Find product details from the product list
    const productDetails = productList.find(product => product._id === getCurrentProductId);
    
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
        productDetails: productDetails,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  // Load cart items on component mount
  useEffect(() => {
    dispatch(fetchCartItems(user?.id));
  }, [dispatch, user?.id]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section with Professional Carousel */}
      <div className="relative w-full h-[70vh] overflow-hidden bg-gradient-to-br from-red-50 to-green-50">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((slide, index) => (
              <div
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute inset-0 transition-opacity duration-1000`}
              >
                <img
                  src={slide?.image}
                  alt={`Featured product ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            ))
          : (
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-green-600 to-black flex items-center justify-center">
              <div className="text-center text-white space-y-4">
                <h1 className="text-5xl font-bold">Explore Kenya</h1>
                <p className="text-xl">Authentic Cultural Treasures</p>
              </div>
            </div>
          )}

        {/* Professional Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) % featureImageList.length
            )
          }
          className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg w-12 h-12"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }
          className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg w-12 h-12"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-800" />
        </Button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featureImageList?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section - Professional Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Our <span className="text-red-600">Cultural Categories</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each category represents a unique aspect of Kenyan culture, crafted by local artisans who pour their heritage into every piece
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {categoriesWithIcon.map((categoryItem, index) => (
              <Card
                key={categoryItem.id}
                onClick={() => handleNavigateToListingPage(categoryItem, "category")}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-100 to-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <categoryItem.icon className="w-10 h-10 text-red-600 group-hover:text-green-600 transition-colors duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {categoryItem.label}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {categoryItem.description}
                  </p>
                  <div className="pt-2">
                    <span className="text-red-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore Collection →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Craft Types Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Browse by <span className="text-green-600">Craft Specialization</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From traditional beadwork to contemporary fashion, discover the diverse skills of Kenyan artisans
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {brandsWithIcon.map((brandItem) => (
              <Card
                key={brandItem.id}
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-green-100 to-red-100 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-green-200 group-hover:to-red-200 transition-all duration-300">
                    <brandItem.icon className="w-7 h-7 text-green-600 group-hover:text-red-600 transition-colors duration-300" />
                  </div>
                  <span className="font-semibold text-sm text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {brandItem.label}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-red-600">Artisan Products</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Handpicked selections showcasing the finest craftsmanship from talented Kenyan artists
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <div key={productItem.id} className="group">
                    <ShoppingProductTile
                      handleGetProductDetails={handleGetProductDetails}
                      product={productItem}
                      handleAddtoCart={handleAddtoCart}
                    />
                  </div>
                ))
              : (
                // Loading skeleton or empty state
                Array.from({ length: 8 }).map((_, index) => (
                  <Card key={index} className="animate-pulse">
                    <CardContent className="p-4">
                      <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                      <div className="bg-gray-200 h-4 rounded mb-2"></div>
                      <div className="bg-gray-200 h-4 rounded w-2/3"></div>
                    </CardContent>
                  </Card>
                ))
              )}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-6">
    <div className="flex justify-center space-x-6">
      <h1>Social Media Platforms </h1>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
     <div className="text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} Explore Kenya. All rights reserved.</p>
      <p>Developed by <span className="text-white font-medium">John Vernest</span></p>
    </div>
  </div>
</footer>

      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;