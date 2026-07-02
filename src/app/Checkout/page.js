"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import AddressForm from "./address";
import CartItems from "../component/CartItems";
import OrderSummary from "../component/OrderSummary";
import { placeOrder } from "../apis/order/order";
import { deleteCartItem } from "../apis/cart/cart";

function getCheckoutItemPrice(item) {
  return Number(
    item?.price ??
      item?.variantId?.offer?.salePrice ??
      item?.variantId?.offer?.sellingPrice ??
      0
  );
}

function getCheckoutItemMrp(item) {
  return Number(item?.mrp ?? item?.variantId?.offer?.mrp ?? 0);
}

function normalizeCheckoutItem(item) {
  const qty = item?.qty || item?.quantity || 1;
  const price = getCheckoutItemPrice(item);
  const mrp = getCheckoutItemMrp(item);

  return {
    ...item,
    id: item?._id || item?.id || item?.cartId,
    name:
      item?.name ||
      item?.title ||
      item?.pid?.productName ||
      item?.pid?.itemName ||
      "Untitled Product",
    image: item?.image || item?.variantId?.images?.[0] || item?.pid?.images?.[0],
    qty,
    quantity: qty,
    price,
    originalPrice: mrp > price ? mrp : item?.originalPrice,
  };
}

function toOrderItem(item) {
  return {
    product_id: item?.pid?._id || "",
    variant_id: item?.variantId?._id || "",
    vendor_id: item?.pid?.vendorId || "",
    product_name: item?.pid?.productName || item?.pid?.itemName || "Untitled Product",
    quantity: item?.qty || item?.quantity || 1,
    unit_price: Number(
      item?.variantId?.offer?.salePrice ??
        item?.variantId?.offer?.sellingPrice ??
        0
    ),
  };
}

function isValidObjectId(val) {
  return typeof val === "string" && /^[0-9a-fA-F]{24}$/.test(val);
}

function getLoggedInUserId(cartItems) {
  let user = {};
  try {
    user = JSON.parse(localStorage.getItem("user") || "{}");
  } catch (e) {
    user = {};
  }

  const candidates = [
    cartItems?.[0]?.cid,
    user?._id,
    user?.id,
    user?.userId,
    localStorage.getItem("cid"),
    localStorage.getItem("userId"),
  ];

  return candidates.find(isValidObjectId) || "";
}

const steps = ["BAG", "ADDRESS", "PAYMENT"];

export default function CheckoutPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [cartReady, setCartReady] = useState(false);
  const [currentStep, setCurrentStep] = useState("BAG"); // BAG -> ADDRESS -> PAYMENT
  const [placingOrder, setPlacingOrder] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const checkoutData = JSON.parse(
        localStorage.getItem("checkoutData") || "{}"
      );
      const savedCartItems = JSON.parse(
        localStorage.getItem("cartItems") || "[]"
      );
      const items = Array.isArray(checkoutData.items)
        ? checkoutData.items
        : savedCartItems;

      setCartItems(
        Array.isArray(items) ? items.map(normalizeCheckoutItem) : []
      );
      setCartReady(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem("userToken") || localStorage.getItem("user");

    if (!isLoggedIn) {
      router.replace("/Addtocard");
    }
  }, [router]);

  const handleSaveAddress = async (address) => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const userId = getLoggedInUserId(cartItems);

    if (!userId) {
      alert("Could not find a valid user id. Please log in again.");
      return;
    }

    let user = {};
    try {
      user = JSON.parse(localStorage.getItem("user") || "{}");
    } catch (e) {
      user = {};
    }

    const [firstName, ...rest] = (address.fullName || "").trim().split(" ");
    const lastName = rest.join(" ");

    const fullAddressText = [
      address.houseNumber,
      address.area,
      address.locality,
      address.city,
      address.state,
      address.pincode,
      address.landmark,
    ]
      .filter(Boolean)
      .join(", ");

    const payload = {
      user_id: userId,
      payment_method: "COD",
      billing_address: { address: fullAddressText },
      shipping_address: { address: fullAddressText },
      customer_details: {
        first_name: firstName || "",
        last_name: lastName || "",
        phone: address.mobile,
        email: user?.email || "",
      },
      items: cartItems.map(toOrderItem),
    };

    try {
      setPlacingOrder(true);
      await placeOrder(payload);
      const orderedCartIds = cartItems
        .map((item) => item?._id || item?.cartId || item?.id)
        .filter(isValidObjectId);

      const deleteResults = await Promise.allSettled(
        orderedCartIds.map((id) => deleteCartItem(id))
      );

      deleteResults.forEach((result, idx) => {
        if (result.status === "rejected") {
          console.error(
            "Failed to remove ordered cart item",
            orderedCartIds[idx],
            result.reason?.response?.data || result.reason?.message || result.reason
          );
        }
      });

      localStorage.removeItem("checkoutData");
      localStorage.removeItem("cartItems");
      window.dispatchEvent(new Event("cartUpdated"));

      alert("Order placed successfully!");
      router.push("/");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to place order. Please try again.");
    } finally {
      setPlacingOrder(false);
    }
  };

  if (!cartReady) {
    return (
      <div className="min-h-screen bg-gray-100 py-6 px-4">
        <div className="max-w-6xl mx-auto rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-500">
          Loading checkout...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* TOP STEPPER BAR */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {steps.map((step, i) => (
              <span key={step} className="flex items-center gap-4">
                <button
                  onClick={() => {
                    if (step === "BAG") setCurrentStep("BAG");
                    if (step === "ADDRESS") setCurrentStep("ADDRESS");
                  }}
                  className={`text-xs font-bold tracking-widest ${
                    currentStep === step
                      ? "text-[#FF9900]"
                      : "text-gray-400"
                  }`}
                >
                  {step}
                </button>
                {i < steps.length - 1 && (
                  <span className="text-gray-300">- - - - - -</span>
                )}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-green-600">
            <ShieldCheck className="h-4 w-4" />
            100% SECURE
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4 items-start">
          <div>
            {currentStep === "BAG" && (
              <>
                <CartItems items={cartItems} />

                <button
                  onClick={() => setCurrentStep("ADDRESS")}
                  className="mt-4 w-full sm:w-auto px-8 h-12 rounded-md bg-[#FF9900] hover:bg-[#e68a00] text-black text-sm font-bold tracking-wide transition"
                >
                  PLACE ORDER
                </button>
              </>
            )}

            {currentStep === "ADDRESS" && (
              <AddressForm onSave={handleSaveAddress} saving={placingOrder} />
            )}
          </div>

          <div className="lg:sticky lg:top-44 self-start">
            <OrderSummary
              items={cartItems}
              onProceed={() => setCurrentStep("ADDRESS")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
