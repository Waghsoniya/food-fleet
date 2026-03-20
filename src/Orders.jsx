import { useSelector } from "react-redux";

function Order() {
  const orders = useSelector((state) => state.orders);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-50 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Order Details
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders yet.</p>
      ) : (
        <ul className="space-y-6">
          {orders.map((purchase, index) => (
            <li
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-200"
            >
              {/* Header */}
              <div className="flex justify-between mb-4">
                <p className="text-gray-600">
                  <span className="font-semibold">Date:</span> {purchase.date}
                </p>
                <p className="text-gray-700 font-semibold">
                  Total: ₹{purchase.totalPrice.toFixed(2)}
                </p>
              </div>

              {/* Table Header */}
              <div className="hidden md:flex justify-between text-gray-500 border-b border-gray-200 pb-2 font-semibold">
                <span className="w-1/2">Item</span>
                <span className="w-1/6 text-center">Qty</span>
                <span className="w-1/6 text-right">Price</span>
                <span className="w-1/6 text-right">Total</span>
              </div>

              {/* Items */}
              <ul className="mt-2 space-y-2">
                {purchase.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 p-2 rounded-lg"
                  >
                    <span className="w-full md:w-1/2 text-gray-700 font-medium">
                      {item.name}
                    </span>
                    <span className="w-full md:w-1/6 text-center md:text-center text-gray-600">
                      {item.quantity}
                    </span>
                    <span className="w-full md:w-1/6 text-right text-gray-600">
                      ₹{item.price.toFixed(2)}
                    </span>
                    <span className="w-full md:w-1/6 text-right text-gray-800 font-semibold">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Order;