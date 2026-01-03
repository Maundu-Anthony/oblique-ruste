import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white border-4 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
      {/* Sale Badge */}
      {product.sale && (
        <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 font-black text-sm uppercase z-10">
          SALE
        </div>
      )}

      {/* Product Image */}
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-gray-700 mb-2 font-bold">
          {product.category}
        </p>
        <h3 className="font-black text-xl mb-3 uppercase tracking-tight">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black">
              ${product.sale ? product.salePrice : product.price}
            </span>
            {product.sale && (
              <span className="text-base text-gray-500 line-through font-semibold">
                ${product.price}
              </span>
            )}
          </div>
        </div>

        {/* Sizes */}
        {product.sizes && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="border border-black px-3 py-1 text-xs font-semibold hover:bg-black hover:text-white transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="w-full btn-primary text-sm py-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
