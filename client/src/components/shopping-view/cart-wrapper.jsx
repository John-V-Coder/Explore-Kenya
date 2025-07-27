import { useNavigate } from "react-router-dom";
import { SheetContent, SheetHeader, SheetTitle } from "../components/ui/sheet";
import { Button } from "../components/ui/button";
import UserCartItemsContent from "./cart-item-content";

function UserCartWrapper({ cartItems = [], setOpenCartSheet }) {
  const navigate = useNavigate();

  // ✅ Fixed calculation syntax
  const totalCartAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
          (sum, currentItem) => {
            const itemPrice = currentItem?.salePrice > 0 
              ? currentItem?.salePrice 
              : currentItem?.price || 0;
            const quantity = currentItem?.quantity || 0;
            return sum + (itemPrice * quantity);
          },
          0
        )
      : 0;

  return (
    <SheetContent className="sm:max-w-md">
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>
      
      <div className="mt-8 space-y-4">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <UserCartItemsContent 
              key={item.id || item._id || index} 
              cartItem={item} 
            />
          ))
        ) : (
          <div className="text-center text-gray-500 py-8">
            Your cart is empty
          </div>
        )}
      </div>

      {/* Show total and checkout button even if cart is empty for better UX */}
      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">${totalCartAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* ✅ Button always shows, but disabled when cart is empty */}
      <Button
        onClick={() => {
          navigate("/shop/checkout");
          setOpenCartSheet(false);
        }}
        className="w-full mt-6"
        disabled={!cartItems || cartItems.length === 0}
      >
        {cartItems && cartItems.length > 0 ? "Checkout" : "Cart is Empty"}
      </Button>
    </SheetContent>
  );
}

export default UserCartWrapper;