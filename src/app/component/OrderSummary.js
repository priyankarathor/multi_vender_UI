import { ShieldCheck, Truck } from "lucide-react";

export default function OrderSummary({ items = [], onProceed }) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * (item.qty || item.quantity || 1),
    0
  );

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sticky top-4">
      <button
        onClick={onProceed}
        className="w-full bg-[#FF9900] hover:bg-[#e68a00] text-black font-medium py-3 rounded-lg transition-colors text-sm mb-4"
      >
        Deliver to this address
      </button>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Items ({items.length}):</span>
          <span>₹{subtotal.toLocaleString("en-IN")}.00</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Delivery:</span>
          <span className="text-green-700 font-medium">FREE</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Marketplace fee:</span>
          <span>--</span>
        </div>
        <div className="flex justify-between pt-2 mt-2 border-t border-gray-200 text-base font-medium text-gray-900">
          <span>Order Total:</span>
          <span>₹{subtotal.toLocaleString("en-IN")}.00</span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <ShieldCheck className="h-4 w-4 text-[#FF9900]" />
          Secure payments
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Truck className="h-4 w-4 text-[#FF9900]" />
          Fast delivery
        </div>
      </div>
    </div>
  );
}
