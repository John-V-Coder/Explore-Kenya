import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import marketplaceImg from "../../assets/marketplace.jpg";
import handcraftImg from "../../assets/handcraft.jpg";
import homeDecorImg from "../../assets/home-decore.jpeg";
import woodSoulImg from "../../assets/wood-soul.png";
import jewelryImg from "../../assets/Artke.jpg";
import beadingImg from "../../assets/beading.jpg";
import materialsImg from "../../assets/materials.jpg";
import founderImg from "../../assets/founderP.png";

function AuthLayout() {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [authMode, setAuthMode] = useState('signup');

  const handleSignUpClick = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    setAuthMode('signup');
    setShowAuthForm(true);
  };

  const handleSignInClick = () => {
    setAuthMode('signin');
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
      description: "Upcycled and Sustainable products",
      image: handcraftImg,
      features: [
        { text: "home-decore", image: homeDecorImg },
        { text: "wood and soul", image: woodSoulImg }
      ],
      artisans: "50+ Artist Items",
      price: "50$-1000$"
    },
    {
      id: 2,
      title: "Art Gallery",
      description: "Talented Artisans Products",
      image: jewelryImg,
      features: [
        { text: "Traditional techniques", image: beadingImg },
        { text: "Quality materials", image: materialsImg }
      ],
      artisans: "35+ Artist Items",
      price: "50$-1000$"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm py-4 sticky top-0 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="font-bold text-xl text-black">Explore Kenya</Link>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              <Link to="#about" className="text-gray-600 hover:text-black">About Us</Link>
              <Link to="#profile" className="text-gray-600 hover:text-black">Team</Link>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleSignInClick}
                className="px-4 py-2 text-black border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Sign In
              </button>
              <button
                onClick={() => handleSignUpClick('General')}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Discover Authentic Kenyan Craftsmanship</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect directly with talented artisans and bring authentic Kenyan culture to your business
          </p>
          {!showAuthForm && (
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleSignUpClick('General')}
                className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Start Your Journey
              </button>
              <button
                onClick={handleSignInClick}
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                Already a Partner?
              </button>
            </div>
          )}
        </section>

        {showAuthForm && (
          <section className="mb-12">
            <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">
                    {authMode === 'signup' ? 'Join Explore Kenya' : 'Welcome Back'}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {authMode === 'signup'
                      ? selectedCategory && selectedCategory !== 'General'
                        ? `Get access to ${selectedCategory} catalog`
                        : 'Start your partnership with Kenyan artisans'
                      : 'Sign in to your business account'}
                  </p>
                </div>
                <button onClick={closeAuthForm} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
              </div>
              <Outlet />
            </div>
          </section>
        )}

        <section className="mb-12 grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md">
              <img src={category.image} alt={category.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold mb-1">{category.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <div className="flex space-x-3 mb-3">
                  {category.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <img src={feature.image} alt="" className="w-8 h-8 rounded-full object-cover border-2 border-white" />
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
                  className="w-full bg-white border border-gray-300 py-2 rounded text-sm hover:bg-gray-100"
                >
                  Request Catalog
                </button>
              </div>
            </div>
          ))}
        </section>

        <section id="about" className="mb-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">About Explore Kenya</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                Explore Kenya is a digital marketplace dedicated to supporting Kenyan artists and preserving cultural heritage.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Curated cultural products</li>
                <li>Partnerships with verified artisans</li>
                <li>Cultural storytelling with each product</li>
                <li>Sustainable business model</li>
              </ul>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img src={marketplaceImg} alt="Explore Kenya Platform" className="w-full rounded border" />
            </div>
          </div>
        </section>

        <section id="profile" className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col md:flex-row">
            <div className="md:w-1/4 mb-4 md:mb-0 md:pr-6">
              <img src={founderImg} alt="John Vernest" className="w-32 h-32 rounded-full border-4 border-gray-100 mx-auto" />
            </div>
            <div className="md:w-3/4">
              <h3 className="font-bold text-lg mb-1">John Vernest</h3>
              <p className="text-gray-600 mb-3">Founder & CEO</p>
              <p className="text-gray-700 mb-4">
                With a passion for Kenyan culture and sustainable business, John created Explore Kenya to empower local artisans.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-8 text-center">
        <p>© {new Date().getFullYear()} Explore Kenya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AuthLayout;
