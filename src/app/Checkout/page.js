"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, MapPin, Plus } from "lucide-react";
import AddressModal from "../component/AddressModal";
import CartItems from "../component/CartItems";
import OrderSummary from "../component/OrderSummary";

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

export default function CheckoutPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [cartReady, setCartReady] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedAddress, setSavedAddress] = useState(null);

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

  const handleSaveAddress = (address) => {
    setSavedAddress(address);
    console.log("Saved address:", address);
  };

  const handleProceed = () => {
    if (!savedAddress) {
      alert("Please add a delivery address first.");
      return;
    }

    console.log("Proceeding to payment with address:", savedAddress);
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
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4 items-start">
          <div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h2 className="text-lg font-medium text-gray-900 pb-3 border-b border-gray-200 mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#FF9900]" />
                Delivery address
              </h2>

              {savedAddress ? (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-3">
                  <p className="text-sm font-medium text-gray-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FF9900]" />
                    Delivery address saved
                  </p>
                  <p className="text-sm text-gray-700">
                    {savedAddress.fullName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {savedAddress.flat}, {savedAddress.area}
                  </p>
                  <p className="text-sm text-gray-600">
                    {savedAddress.city}, {savedAddress.state} -{" "}
                    {savedAddress.pincode}
                  </p>
                  {savedAddress.landmark && (
                    <p className="text-xs text-gray-500 mt-1">
                      Near: {savedAddress.landmark}
                    </p>
                  )}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-xs text-[#FF9900] hover:underline mt-2 block font-medium"
                  >
                    Change address
                  </button>
                </div>
              ) : (
                <p className="text-sm text-gray-500 mb-4">
                  Enter your address to see delivery options
                </p>
              )}

              {!savedAddress && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#FF9900] hover:bg-[#e68a00] text-black font-medium text-sm px-5 py-2.5 rounded-full transition-colors inline-flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add a new delivery address
                </button>
              )}
            </div>

            <CartItems items={cartItems} />
          </div>

          <div className="lg:sticky lg:top-44 self-start">
            <OrderSummary items={cartItems} onProceed={handleProceed} />
          </div>
        </div>
      </div>

      <AddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveAddress}
      />
    </div>
  );
}
