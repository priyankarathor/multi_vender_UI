"use client";

import { useState } from "react";
import { LocateFixed, MapPin, X } from "lucide-react";

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu & Kashmir", "Ladakh",
];

const fieldClass =
  "w-full h-9 border rounded px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-[#FF9900]";

export default function AddressModal({ isOpen, onClose, onSave }) {
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    pincode: "",
    flat: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    isDefault: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.mobile.trim() || !/^\d{10}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit pincode";
    }
    if (!form.flat.trim()) newErrors.flat = "This field is required";
    if (!form.area.trim()) newErrors.area = "This field is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.state) newErrors.state = "Please select a state";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSave(form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="flex items-center justify-between p-5 border-b border-gray-200 sticky top-0 bg-white rounded-t-xl z-10">
          <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-[#FF9900]" />
            Enter a new delivery address
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors p-1"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div className="bg-orange-50 border border-orange-200 rounded-md px-4 py-3 flex items-center justify-between gap-3">
            <span className="text-sm text-gray-800 flex items-center gap-2">
              <LocateFixed className="h-4 w-4 text-[#FF9900] shrink-0" />
              Save time. Autofill your current location.
            </span>
            <button className="text-sm bg-white border border-orange-200 rounded px-3 py-1.5 hover:bg-orange-100 transition-colors">
              Autofill
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Country/Region
            </label>
            <select className={`${fieldClass} border-gray-400 bg-white`}>
              <option>India</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Full name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="First and Last name"
                className={`${fieldClass} ${
                  errors.fullName ? "border-red-500" : "border-gray-400"
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Mobile number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="10-digit number"
                maxLength={10}
                className={`${fieldClass} ${
                  errors.mobile ? "border-red-500" : "border-gray-400"
                }`}
              />
              {errors.mobile ? (
                <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>
              ) : (
                <p className="text-xs text-gray-500 mt-1">
                  May be used to assist delivery
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Pincode <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              placeholder="6 digits [0-9] PIN code"
              maxLength={6}
              className={`${fieldClass} ${
                errors.pincode ? "border-red-500" : "border-gray-400"
              }`}
            />
            {errors.pincode && (
              <p className="text-xs text-red-600 mt-1">{errors.pincode}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Flat, House no., Building, Company, Apartment{" "}
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="flat"
              value={form.flat}
              onChange={handleChange}
              className={`${fieldClass} ${
                errors.flat ? "border-red-500" : "border-gray-400"
              }`}
            />
            {errors.flat && (
              <p className="text-xs text-red-600 mt-1">{errors.flat}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Area, Street, Sector, Village{" "}
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="area"
              value={form.area}
              onChange={handleChange}
              className={`${fieldClass} ${
                errors.area ? "border-red-500" : "border-gray-400"
              }`}
            />
            {errors.area && (
              <p className="text-xs text-red-600 mt-1">{errors.area}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Landmark
              </label>
              <input
                type="text"
                name="landmark"
                value={form.landmark}
                onChange={handleChange}
                placeholder="E.g. near apollo hospital"
                className={`${fieldClass} border-gray-400`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Town/City <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className={`${fieldClass} ${
                  errors.city ? "border-red-500" : "border-gray-400"
                }`}
              />
              {errors.city && (
                <p className="text-xs text-red-600 mt-1">{errors.city}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              State <span className="text-red-600">*</span>
            </label>
            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              className={`${fieldClass} bg-white ${
                errors.state ? "border-red-500" : "border-gray-400"
              }`}
            >
              <option value="">Choose a state</option>
              {INDIAN_STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="text-xs text-red-600 mt-1">{errors.state}</p>
            )}
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="isDefault"
              checked={form.isDefault}
              onChange={handleChange}
              className="w-4 h-4 accent-[#FF9900]"
            />
            <span className="text-sm text-gray-800">
              Make this my default address
            </span>
          </label>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#FF9900] hover:bg-[#e68a00] text-black font-medium py-2.5 rounded-lg transition-colors text-sm mt-2"
          >
            Use this address
          </button>
        </div>
      </div>
    </div>
  );
}
