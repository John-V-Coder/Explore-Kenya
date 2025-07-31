import { Plus, Trash, Minus } from "lucide-react";
import { Button } from "../components/ui/button";
import { deleteCartItem, updateCartQuantity } from "@/store/shop/cart-slice";
import { useToast } from "../components/ui/use-toast";
import { useDispatch, useSelector } from "react-redux";

function UserCartItemsContent({ cartItem }) {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart || {});
  const { productList } = useSelector((state) => state.shopProducts || {});
  const dispatch = useDispatch();
  const { toast } = useToast();

  function handleUpdateQuantity(getCartItem, typeOfAction) {
    if (typeOfAction == "plus") {
      let getCartItems = cartItems.items || [];

      if (getCartItems.length) {
        const indexOfCurrentCartItem = getCartItems.findIndex(
          (item) => item.productId === getCartItem?.productId
        );

        const getCurrentProductIndex = productList.findIndex(
          (product) => product._id === getCartItem?.productId
        );
        const getTotalStock = productList[getCurrentProductIndex].totalStock;

        if (indexOfCurrentCartItem > -1) {
          const getQuantity = getCartItems[indexOfCurrentCartItem].quantity;
          if (getQuantity + 1 > getTotalStock) {
            toast({
              title: `Only ${getQuantity} quantity can be added for this item`,
              variant: "destructive",
            });
            return;
          }
        }
      }
    }

    dispatch(
      updateCartQuantity({
        userId: user?.id,
        productId: getCartItem?.productId,
        quantity:
          typeOfAction === "plus"
            ? getCartItem?.quantity + 1
            : getCartItem?.quantity - 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: "Cart item is updated successfully",
        });
      }
    });
  }

  function handleCartItemDelete(getCartItem) {
    dispatch(
      deleteCartItem({ userId: user?.id, productId: getCartItem?.productId })
    ).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: "Cart item is deleted successfully",
        });
      }
    });
  }

  return (
    <div className="flex items-center gap-6 p-4 border rounded-lg">
      {/* Larger image container */}
      <div className="flex-shrink-0">
        <img
          src={cartItem?.image}
          alt={cartItem?.title}
          className="w-32 h-32 rounded-lg object-cover border"
        />
      </div>
      
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <h3 className="font-bold text-lg">{cartItem?.title}</h3>
          <p className="text-gray-600 text-sm mt-1">
            {cartItem?.category || "General Product"}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="h-8 w-8 rounded-full"
              size="icon"
              disabled={cartItem?.quantity === 1}
              onClick={() => handleUpdateQuantity(cartItem, "minus")}
            >
              <Minus className="w-4 h-4" />
              <span className="sr-only">Decrease</span>
            </Button>
            <span className="font-semibold w-8 text-center">
              {cartItem?.quantity}
            </span>
            <Button
              variant="outline"
              className="h-8 w-8 rounded-full"
              size="icon"
              onClick={() => handleUpdateQuantity(cartItem, "plus")}
            >
              <Plus className="w-4 h-4" />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
          
          <div className="ml-auto flex items-center gap-4">
            <p className="font-bold text-lg">
              $
              {(
                (cartItem?.salePrice > 0 ? cartItem?.salePrice : cartItem?.price) *
                cartItem?.quantity
              ).toFixed(2)}
            </p>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCartItemDelete(cartItem)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash className="w-5 h-5" />
              <span className="sr-only">Remove item</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCartItemsContent;