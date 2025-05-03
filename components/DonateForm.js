"use client";
import { useState } from "react";
export default function DonateForm() {
  const [paymentMethod, setPaymentMethod] = useState("credit");

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
        {/* Payment Method Section */}
        <div className="lg:col-span-2">
          <h2 className="text-sm font-medium">Payment Method</h2>
          <div className="bg-white rounded mt-4 shadow-lg">
            <div className="flex items-center px-8 py-5">
              <input
                type="radio"
                name="payment"
                id="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
                className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-lime-600 ring-opacity-100"
              />
              <label htmlFor="paypal" className="text-sm font-medium ml-4">
                PayPal
              </label>
            </div>
            <div className="border-t">
              <div className="flex items-center px-8 py-5">
                <input
                  type="radio"
                  name="payment"
                  id="credit"
                  checked={paymentMethod === "credit"}
                  onChange={() => setPaymentMethod("credit")}
                  className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-lime-600 ring-opacity-100 bg-lime-600"
                />
                <label htmlFor="credit" className="text-sm font-medium ml-4">
                  Credit Card
                </label>
              </div>
              {paymentMethod === "credit" && (
                <div className="grid grid-cols-2 gap-4 px-8 pb-8">
                  <div className="col-span-2">
                    <label htmlFor="cardNumber" className="text-xs font-semibold">
                      Card number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder="0000 0000 0000 0000"
                      className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="expiry" className="text-xs font-semibold">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      placeholder="MM/YY"
                      className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="text-xs font-semibold">
                      CVC/CVV
                    </label>
                    <input
                      type="password"
                      id="cvv"
                      placeholder="..."
                      className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Purchase Summary */}
        <div>
          <h2 className="text-sm font-medium">Purchase Summary</h2>
          <div className="bg-white rounded mt-4 shadow-lg py-6">
            <div className="px-8">
              <div className="flex items-end">
                <select className="text-sm font-medium focus:outline-none -ml-1">
                  <option value="">Product (Billed Monthly)</option>
                  <option value="">Product (Billed Annually)</option>
                </select>
                <span className="text-sm ml-auto font-semibold">$20</span>
                <span className="text-xs text-gray-500 mb-px">/mo</span>
              </div>
              <span className="text-xs text-gray-500 mt-2">
                Save 20% with annual billing
              </span>
            </div>

            <div className="px-8 mt-4">
              <div className="flex items-end justify-between">
                <span className="text-sm font-semibold">Tax</span>
                <span className="text-sm text-gray-500 mb-px">10%</span>
              </div>
            </div>

            <div className="px-8 mt-4 border-t pt-4">
              <div className="flex items-end justify-between">
                <span className="font-semibold">Today you pay (AUD)</span>
                <span className="font-semibold">$0</span>
              </div>
              <span className="text-xs text-gray-500 mt-2">
                After 1 month free: $22/mo.
              </span>
            </div>

            <div className="flex items-center px-8 mt-8">
              <input id="termsConditions" type="checkbox" />
              <label
                htmlFor="termsConditions"
                className="text-xs text-gray-500 ml-2"
              >
                I agree to the terms and conditions.
              </label>
            </div>

            <div className="flex flex-col px-8 pt-4">
              <button className="flex items-center justify-center bg-lime-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700 transition-all">
                Start Subscription
              </button>
              <button className="text-xs text-lime-500 mt-3 underline">
                Have a coupon code?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
