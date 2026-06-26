"use client";

import { ArrowRight, ShoppingBag, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartSidebar({ isOpen, onClose, cartItems }) {
  const router = useRouter();
  const getQuantity = (item) => item.qty || item.quantity || 1;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * getQuantity(item),
    0
  );

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/30 z-[100] transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[340px] bg-white z-[110] shadow-2xl transition-all duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-[64px] px-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#FFD814] flex items-center justify-center">
              <ShoppingBag size={17} />
            </div>

            <div>
              <h2 className="text-[15px] font-semibold leading-none">
                Cart Added
              </h2>
              <p className="text-[11px] text-gray-500 mt-1">
                {cartItems.length} item{cartItems.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            <X size={17} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-[#fafafa] p-3 space-y-2.5">
          {cartItems.map((item, index) => {
            const quantity = getQuantity(item);
            const lineTotal = item.price * quantity;

            return (
              <div
                key={item.id || index}
                className="bg-white border border-gray-100 rounded-xl p-2.5 flex gap-2.5"
              >
                <div className="w-[64px] h-[64px] bg-[#f5f5f5] rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-1.5"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-[12.5px] font-medium text-gray-800 line-clamp-2 leading-[17px]">
                    {item.title}
                  </h3>

                  <p className="text-[10px] text-gray-500 mt-1 truncate">
                    {item.storage} - {item.color}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <p className="text-[15px] font-bold text-gray-900">
                        Rs.{lineTotal.toLocaleString()}
                      </p>
                      <p className="text-[10px] text-gray-500">
                        Rs.{item.price.toLocaleString()} x {quantity}
                      </p>
                    </div>

                    <div className="px-2 py-[3px] rounded-md bg-gray-100 text-[10px] font-medium text-gray-700">
                      Qty {quantity}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-gray-100 bg-white p-3 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-gray-500">Subtotal</span>
            <span className="text-[20px] font-bold">
              Rs.{subtotal.toLocaleString()}
            </span>
          </div>

          <button
            onClick={() => router.push("/Addtocard")}
            className="w-full h-11 rounded-xl bg-[#FFD814] hover:bg-[#F7CA00] transition text-[13px] font-semibold flex items-center justify-center gap-2"
          >
            View Cart
            <ArrowRight size={15} />
          </button>

          <button
            onClick={onClose}
            className="w-full h-10 rounded-xl border border-gray-200 hover:bg-gray-50 transition text-[13px] font-medium"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
}
