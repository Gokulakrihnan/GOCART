import { Link } from "react-router-dom";

export default function Shipping() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-block mb-8 text-sm text-gray-600 hover:text-black"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-2">Shipping Information</h1>
        <p className="text-gray-600 mb-10">
          Fast, reliable delivery to your doorstep
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl mb-4">🚚</div>
            <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-500 text-sm">On orders over ₹500</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-500 text-sm">2–5 business days</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-lg font-semibold mb-2">Pan India</h3>
            <p className="text-gray-500 text-sm">Delivery across India</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl mb-4">🎁</div>
            <h3 className="text-lg font-semibold mb-2">Premium Care</h3>
            <p className="text-gray-500 text-sm">Secure packaging</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Shipping Options</h3>
            <p className="text-gray-600 mb-4">
              Choose the delivery speed that works for you:
            </p>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Standard Delivery (5–7 business days)</span>
                <span className="font-semibold text-green-600">FREE</span>
              </li>
              <li className="flex justify-between">
                <span>Express Delivery (2–3 business days)</span>
                <span className="font-semibold">₹99</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Delivery Information</h3>
            <p className="text-gray-600 mb-2">
              <strong>Order Processing:</strong> Orders are processed within
              1–2 business days. You’ll receive a tracking number once your
              order ships.
            </p>
            <p className="text-gray-600">
              <strong>Delivery Areas:</strong> We deliver across India to major
              cities and towns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
