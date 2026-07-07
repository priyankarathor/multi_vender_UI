"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Package } from "lucide-react";
import { getLoggedInCid } from "../apis/customer/customer";
import { getUserOrders } from "../apis/orders/orders";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  confirmed: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

const getApiOrders = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.orders)) return payload.orders;
  if (Array.isArray(payload?.data?.data)) return payload.data.data;
  if (Array.isArray(payload?.data?.orders)) return payload.data.orders;
  return [];
};

const formatDate = (date) => {
  if (!date) return "-";

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return "-";

  return parsedDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const fetchOrders = async () => {
      const userId = getLoggedInCid();

      if (!userId) {
        if (!active) return;
        setError("Please login to view your orders.");
        setLoading(false);
        return;
      }

      try {
        const res = await getUserOrders(userId);
        if (!active) return;
        setOrders(getApiOrders(res.data));
      } catch (err) {
        console.log("Orders fetch error:", err);
        if (!active) return;
        setError("Failed to load orders.");
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchOrders();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center text-gray-500">
        Loading your orders...
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <Package size={40} className="mx-auto text-gray-300 mb-3" />
        <p className="text-gray-500">{error}</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <Package size={40} className="mx-auto text-gray-300 mb-3" />
        <p className="text-gray-500">No orders yet.</p>
        <Link
          href="/shop"
          className="inline-block mt-4 px-5 py-2 bg-[#FF9900] text-black rounded-lg font-semibold text-sm hover:bg-[#e08a00] transition"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 bg-gray-50 border-b border-gray-100">
              <div>
                <p className="text-xs text-gray-500">Order</p>
                <p className="text-sm font-semibold text-gray-800">
                  {order.order_number || order._id}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Placed on</p>
                <p className="text-sm text-gray-700">
                  {formatDate(order.createdAt)}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                  statusColors[order.status] || "bg-gray-100 text-gray-600"
                }`}
              >
                {order.status || "pending"}
              </span>
            </div>

            <div className="px-5 py-4 space-y-3">
              {order.items?.map((item) => (
                <div
                  key={item._id || `${item.product_name}-${item.variant_id}`}
                  className="flex items-center justify-between gap-4 text-sm"
                >
                  <div>
                    <p className="font-medium text-gray-800">
                      {item.product_name || "Product"}
                    </p>
                    <p className="text-gray-500 text-xs">
                      Qty: {item.quantity || 1}
                    </p>
                  </div>
                  <p className="font-semibold text-gray-800">
                    Rs. {item.total || item.unit_price || 0}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100">
              <span className="text-sm text-gray-500">
                {order.payment_method || "COD"} - {order.payment_status || "pending"}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">
                  Rs. {order.total || 0}
                </span>
                <ChevronRight size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
