import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

function AuthLayout() {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleSignUpClick = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    setShowAuthForm(true);
  };
  const closeAuthForm = () => {
    setShowAuthForm(false);
    setSelectedCategory(null);
  };
  const categories = [
    {
      id: 1,
      title: "Handcraft Items",
      description: "Upcyled and Sustainable products",
      color: "bg-red-100 border-red-300 text-red-700",
      image: "/assets/clothing.jpg",
      features: [
        { text: "Custom designs", image: "/assets/tailor.jpg" },
        { text: "Authentic patterns", image: "/assets/patterns.jpg" }
      ],
      artisans: "50+ Artist Items",
      price: "50$-1000$"
    },
    {
      id: 2,
      title: "Art Gallery",
      description: "Talented Artisans Products",
      color: "bg-emerald-100 border-emerald-300 text-emerald-700",
      image: "/assets/jewelry.jpg",
      features: [
        { text: "Traditional techniques", image: "/assets/beading.jpg" },
        { text: "Quality materials", image: "/assets/materials.jpg" }
      ],
      artisans: "35+ Artist Items",
      price: "50$-1000$"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="font-bold text-lg text-gray-800">
            Explore Kenya
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
            <Link to="/profile" className="text-gray-600 hover:text-blue-600">Founder</Link>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!showAuthForm ? (
          <div className="max-w-6xl mx-auto">
             <section id="about" className="mb-12 pt-8 border-t">
              <h2 className="text-xl font-bold mb-4">About Explore Kenya</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="md:flex">
                  <div className="md:w-2/3 md:pr-8">
                    <h3 className="font-semibold mb-3">Our Mission</h3>
                    <p className="text-gray-700 mb-4">
                      Explore Kenya is a digital marketplace dedicated to supporting Kenyan artists and preserving cultural heritage. 
                      We bridge traditional craftsmanship with the modern digital economy through authentic, handcrafted products.
                    </p>
                    <h3 className="font-semibold mb-3">What We Offer</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Five curated categories of cultural products</li>
                      <li>Direct partnerships with 150+ verified artisans</li>
                      <li>Cultural storytelling with each product</li>
                      <li>Sustainable and ethical business model</li>
                    </ul>
                  </div>
                  <div className="md:w-1/3 mt-6 md:mt-0">
                    <img 
                      src="/assets/marketplace-screenshot.jpg" 
                      alt="Explore Kenya Platform"
                      className="w-full h-auto rounded border"
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* Business Section */}
            <section className="mb-12">          
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Business Advantages</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded border">
                    <h3 className="font-medium mb-2">Volume Discounts</h3>
                    <p className="text-sm text-gray-600">15-30% off retail pricing for bulk orders</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h3 className="font-medium mb-2">Custom Solutions</h3>
                    <p className="text-sm text-gray-600">Private label and custom design services</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h3 className="font-medium mb-2">Direct Sourcing</h3>
                    <p className="text-sm text-gray-600">Straight from artisan workshops</p>
                  </div>
                </div>
              </div>
              {/* Categories Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {categories.map((category) => (
                  <div key={category.id} className={`border rounded-lg overflow-hidden ${category.color}`}>
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold mb-1">{category.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{category.description}</p>      
                      <div className="flex space-x-3 mb-3">
                        {category.features.map((feature, i) => (
                          <div key={i} className="flex items-center">
                            <img 
                              src={feature.image} 
                              alt="" 
                              className="w-8 h-8 rounded-full object-cover border-2 border-white"
                            />
                            <span className="text-xs ml-2">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm mb-3">
                        <span>Artisans: {category.artisans}</span>
                        <span>From {category.price}</span>
                      </div>
                      <button
                        onClick={() => handleSignUpClick(category.title)}
                        className="w-full bg-white border py-2 rounded text-sm font-medium hover:bg-gray-50"
                      >
                        Request Catalog
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* About Us Section */}
           
            {/* Founder Profile */}
            <section id="profile" className="pt-8 border-t">
              <h2 className="text-xl font-bold mb-4">Our Team</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0 md:pr-6">
                  <img 
                    src="/assets/founder-profile.jpg" 
                    alt="John Vernest"
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 mx-auto"
                  />
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-bold text-lg mb-1">John Vernest</h3>
                  <p className="text-blue-600 mb-3">Founder & CEO</p>
                  <p className="text-gray-700 mb-4">
                    With a passion for Kenyan culture and sustainable business, John created Explore Kenya to 
                    empower local artisans while sharing Kenya's rich heritage with the world. His background 
                    in both technology and cultural preservation drives the platform's unique approach.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <i className="fab fa-linkedin text-lg"></i>
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <i className="fab fa-twitter text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* Simple Auth Form */
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-bold">Business Sign Up</h2>
              <button onClick={closeAuthForm} className="text-gray-500">×</button>
            </div>     
            <Outlet />         
            <div className="mt-4 pt-4 border-t text-sm">
              <p className="font-medium mb-2">Why partner with us?</p>
              <ul className="space-y-1 text-gray-600">
                <li>• Direct support to Kenyan artisans</li>
                <li>• Authentic cultural products</li>
                <li>• Sustainable business model</li>
              </ul>
            </div>
          </div>
        )}
      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8 mb-6">
      {/* Branding */}
      <div>
        <h3 className="font-medium mb-3">Explore Kenya</h3>
        <p className="text-sm text-gray-300">
          Bridging traditional Kenyan craftsmanship with global markets through ethical trade.
        </p>
      </div>

      {/* Contact */}
      <div>
        <h3 className="font-medium mb-3">Contact</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>business@explorekenya.co.ke</li>
          <li>Nairobi, Kenya</li>
        </ul>
      </div>

      {/* Shop Locations */}
      <div>
        <h3 className="font-medium mb-3">Shop Locations</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>
            <a href="https://www.google.com/maps?q=Maasai+Market+Nairobi" target="_blank" rel="noopener noreferrer" className="hover:underline">
              📍 Maasai Market – Nairobi CBD & Westlands
            </a>
          </li>
          <li>
            <a href="https://www.google.com/maps?q=City+Market+Nairobi" target="_blank" rel="noopener noreferrer" className="hover:underline">
              📍 City Market – Nairobi City Centre
            </a>
          </li>
          <li>
            <a href="https://www.google.com/maps?q=Akamba+Handicraft+Mombasa" target="_blank" rel="noopener noreferrer" className="hover:underline">
              📍 Akamba Handicraft – Mombasa
            </a>
          </li>
          <li>
            <a href="https://www.google.com/maps?q=Curio+Shops+Diani+Beach" target="_blank" rel="noopener noreferrer" className="hover:underline">
              📍 Curio Shops – Diani Beach & Malindi
            </a>
          </li>
          <li>
            <a href="https://www.google.com/maps?q=Kitengela+Glass+Nairobi" target="_blank" rel="noopener noreferrer" className="hover:underline">
              📍 Kitengela Glass – Nairobi
            </a>
          </li>
          <li>
            <a href="https://www.google.com/maps?q=Kazuri+Beads+Karen" target="_blank" rel="noopener noreferrer" className="hover:underline">
              📍 Kazuri Beads – Karen, Nairobi
            </a>
          </li>
          <li>
            <a href="https://www.google.com/maps?q=Bomas+of+Kenya+Langata" target="_blank" rel="noopener noreferrer" className="hover:underline">
              📍 Bomas of Kenya – Lang'ata, Nairobi
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
      <p>© {new Date().getFullYear()} Explore Kenya. All rights reserved.</p>
    </div>
  </div>
</footer>


    </div>
  );
}

export default AuthLayout;