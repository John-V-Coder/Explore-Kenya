import { Outlet, Link } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Professional Navigation */}
      <nav className="bg-white border-b-2 border-red-600 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-green-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-br from-red-600 to-green-600 rounded-full"></div>
                </div>
              </div>
              <span className="text-2xl font-bold text-gray-900">Explore Kenya</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Left Panel - Platform Overview */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-gray-50 to-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-transparent to-green-50 opacity-30"></div>
          
          <div className="relative z-10 p-12 flex flex-col justify-center max-w-lg mx-auto">
            <div className="space-y-8">
              {/* Header Section */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                  Digital Marketplace for 
                  <span className="text-red-600"> Kenyan Artisans</span>
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-green-600 rounded-full"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Supporting local artists and designers through culturally inspired products that celebrate Kenya's rich heritage and traditions.
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Featured Categories</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-600">
                    <h4 className="font-semibold text-gray-900 mb-1">Tailored Cultural Clothing</h4>
                    <p className="text-sm text-gray-600">Custom garments inspired by Maasai shukas, kikoys, and traditional attire from Kikuyu, Luo, and Kalenjin communities.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-600">
                    <h4 className="font-semibold text-gray-900 mb-1">Jewelry & Ornaments</h4>
                    <p className="text-sm text-gray-600">Hand-beaded accessories, brass and bone jewelry reflecting tribal identity and authentic Kenyan artistry.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-600">
                    <h4 className="font-semibold text-gray-900 mb-1">Home Decor & Art</h4>
                    <p className="text-sm text-gray-600">Wooden carvings, decorative masks, kitenge textiles, and cultural paintings celebrating Kenyan traditions.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-600">
                    <h4 className="font-semibold text-gray-900 mb-1">Handcrafted Accessories</h4>
                    <p className="text-sm text-gray-600">Kiondos, leather goods, and accessories made from kikoy, Ankara, and sustainable materials.</p>
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-red-600 to-green-600 p-6 rounded-lg text-white">
                <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                <p className="text-sm leading-relaxed">
                  A storytelling hub where each product includes cultural context and artist backgrounds, promoting cultural pride, creative entrepreneurship, and sustainable fashion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Authentication */}
        <div className="flex-1 flex items-center justify-center bg-white p-8">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

     {/* Footer with Only Social Media Links */}
<footer className="bg-gray-900 text-white py-8">
  <h1>Social Media Platforms </h1>
  <div className="container mx-auto px-6">
    <div className="flex justify-center space-x-6">
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
  </div>
   <div className="text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} Explore Kenya. All rights reserved.</p>
      <p>Developed by <span className="text-white font-medium">John Vernest</span></p>
    </div>
</footer>

    </div>
  );
}

export default AuthLayout;