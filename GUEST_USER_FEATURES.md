# Guest User Features for Explore Kenya

## Overview
This update allows unauthenticated users (guest users) to browse the website, view products, and add items to cart before requiring registration for checkout.

## New Features

### 1. Guest Cart System
- **Session Storage**: Guest users' cart data is stored in browser session storage
- **Persistent**: Cart persists during the browsing session
- **Merge on Login**: Guest cart items are automatically merged with user account after login/registration

### 2. Access Control
- **Public Pages**: All shopping pages (home, listing, search) are accessible to guest users
- **Protected Pages**: Checkout and account pages require authentication
- **Admin Routes**: Admin routes remain protected and require admin authentication

### 3. User Experience
- **Seamless Browsing**: Guests can browse products without interruption
- **Cart Management**: Add, remove, and update cart items as a guest
- **Smooth Transition**: Easy login/registration flow when ready to checkout

## Technical Implementation

### Frontend Changes
- **CheckAuth Component**: Updated to allow guest access to shopping pages
- **Cart Slice**: Enhanced to handle both authenticated and guest users
- **App.jsx**: Modified routing to remove authentication requirements for shopping pages
- **Header**: Shows login/register buttons for guests, user menu for authenticated users

### Backend Changes
- **Cart Controller**: Updated to gracefully handle guest user requests
- **API Endpoints**: Modified to accept requests without user ID for guest operations

### Cart Data Flow
1. **Guest User**: Cart data stored in session storage
2. **Add to Cart**: Works for both guest and authenticated users
3. **Login/Register**: Guest cart automatically merges with user account
4. **Checkout**: Requires authentication, redirects to login if guest

## Usage

### For Guest Users
1. Browse products on home and listing pages
2. Add items to cart (stored in session)
3. View cart contents in header
4. When ready to checkout, click "Register" or "Login"
5. After authentication, cart items are preserved

### For Developers
- Cart operations work with or without user ID
- Guest cart data is automatically loaded on app startup
- Cart merging happens automatically after successful login
- No changes needed to existing product components

## Benefits
- **Improved Conversion**: Users can build cart before committing to registration
- **Better UX**: No forced authentication for browsing
- **Data Preservation**: Cart items are not lost during registration process
- **Flexible Access**: Users can explore the site before creating an account

## Security Considerations
- Guest carts are isolated to browser sessions
- No sensitive data stored for unauthenticated users
- Admin routes remain fully protected
- Checkout process requires proper authentication
