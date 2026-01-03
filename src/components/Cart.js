import React from 'react';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.salePrice || item.price) * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-black">
            <h2 className="text-2xl font-black uppercase">Cart ({cartItems.length})</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
              <button onClick={onClose} className="btn-primary">
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-gray-200 pb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover border border-gray-300"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold uppercase text-sm mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2">
                        {item.category}
                      </p>
                      <p className="font-bold mb-2">
                        ${item.salePrice || item.price}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 border border-black flex items-center justify-center hover:bg-black hover:text-white"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 border border-black flex items-center justify-center hover:bg-black hover:text-white"
                        >
                          +
                        </button>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="ml-auto text-red-600 hover:text-red-700 text-sm font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="border-t-2 border-black pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold uppercase">Subtotal</span>
                  <span className="font-black text-xl">${subtotal.toFixed(2)}</span>
                </div>
                <button className="w-full btn-primary mb-3">
                  Checkout
                </button>
                <button onClick={onClose} className="w-full btn-secondary">
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
