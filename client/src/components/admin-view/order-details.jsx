import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../components/ui/use-toast";
import {
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Separator } from "@radix-ui/react-separator";
import CommonForm from "../common/form";
import {
  getAllOrdersForAdmin,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} from "@/store/admin/order-slice";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const initialFormData = {
  status: "",
};

const statusColors = {
  pending: "bg-gray-400",
  confirmed: "bg-green-500",
  inProcess: "bg-blue-500",
  inShipping: "bg-purple-500",
  delivered: "bg-emerald-600",
  rejected: "bg-red-600",
};

function AdminOrderDetailsView({ orderDetails }) {
  const [formData, setFormData] = useState(initialFormData);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleUpdateStatus = (event) => {
    event.preventDefault();
    const { status } = formData;

    dispatch(updateOrderStatus({ id: orderDetails?._id, orderStatus: status }))
      .then((data) => {
        if (data?.payload?.success) {
          dispatch(getOrderDetailsForAdmin(orderDetails?._id));
          dispatch(getAllOrdersForAdmin());
          setFormData(initialFormData);
          toast({ title: data?.payload?.message });
        }
      });
  };

  return (
    <DialogContent className="sm:max-w-[600px]">
      <VisuallyHidden>
        <DialogTitle>Order Details</DialogTitle>
      </VisuallyHidden>
      <DialogDescription>
        View and update the details of the selected order.
      </DialogDescription>

      <div className="grid gap-6 mt-2">
        {/* Order Info */}
        <div className="grid gap-2">
          {[ 
            ["Order ID", orderDetails?._id],
            ["Order Date", orderDetails?.orderDate?.split("T")[0]],
            ["Order Price", `$${orderDetails?.totalAmount}`],
            ["Payment method", orderDetails?.paymentMethod],
            ["Payment Status", orderDetails?.paymentStatus],
          ].map(([label, value]) => (
            <div key={label} className="flex mt-2 items-center justify-between">
              <p className="font-medium">{label}</p>
              <Label>{value}</Label>
            </div>
          ))}

          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Status</p>
            <Label>
              <Badge
                className={`py-1 px-3 ${
                  statusColors[orderDetails?.orderStatus] || "bg-black"
                }`}
              >
                {orderDetails?.orderStatus}
              </Badge>
            </Label>
          </div>
        </div>

        <Separator />

        {/* Cart Items */}
        <div className="grid gap-2">
          <div className="font-medium">Order Details</div>
          <ul className="grid gap-3">
            {orderDetails?.cartItems?.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-between text-sm"
              >
                <span>Title: {item.title}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ${item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Shipping Info */}
        <div className="grid gap-2">
          <div className="font-medium">Shipping Info</div>
          <div className="grid gap-0.5 text-muted-foreground">
            <span>{user?.userName}</span>
            <span>{orderDetails?.addressInfo?.address}</span>
            <span>{orderDetails?.addressInfo?.city}</span>
            <span>{orderDetails?.addressInfo?.pincode}</span>
            <span>{orderDetails?.addressInfo?.phone}</span>
            <span>{orderDetails?.addressInfo?.notes}</span>
          </div>
        </div>

        {/* Update Form */}
        <CommonForm
          formControls={[
            {
              label: "Order Status",
              name: "status",
              componentType: "select",
              options: [
                { id: "pending", label: "Pending" },
                { id: "inProcess", label: "In Process" },
                { id: "inShipping", label: "In Shipping" },
                { id: "delivered", label: "Delivered" },
                { id: "rejected", label: "Rejected" },
              ],
            },
          ]}
          formData={formData}
          setFormData={setFormData}
          buttonText={"Update Order Status"}
          onSubmit={handleUpdateStatus}
        />
      </div>
    </DialogContent>
  );
}

export default AdminOrderDetailsView;
