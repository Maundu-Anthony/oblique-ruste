import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white border-4 border-black hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
      {/* Sale Badge */}
      {product.sale && (
        <div className="absolute top-0 left-0 bg-red-600 text-white px-6 py-3 font-black text-sm uppercase z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-pulse">
          ⚡ SALE
        </div>
      )}
      
      {/* New Badge for non-sale items */}
      {!product.sale && (
        <div className="absolute top-0 right-0 bg-black text-white px-4 py-2 font-bold text-xs uppercase z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          NEW
        </div>
      )}

      {/* Product Image */}
      <div className="aspect-square bg-gray-100 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay Effect */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-6 bg-white">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs uppercase tracking-widest text-gray-600 font-black">
            {product.category}
          </p>
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
        
        <h3 className="font-black text-xl mb-4 uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-baseline space-x-3">
            <span className="text-3xl font-black">
              ${product.sale ? product.salePrice : product.price}
            </span>
            {product.sale && (
              <span className="text-lg text-red-600 line-through font-bold">
                ${product.price}
              </span>
            )}
          </div>
        </div>

        {/* Sizes */}
        {product.sizes && (
          <div className="mb-5">
            <p className="text-xs font-bold uppercase mb-2 text-gray-600">Select Size:</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="border-2 border-black px-4 py-2 text-sm font-black hover:bg-black hover:text-white transition-all duration-200 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
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
          className="w-full bg-black text-white px-6 py-4 font-black uppercase tracking-wider hover:bg-white hover:text-black border-4 border-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 text-sm"
        >
          Add to Cart ✦
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
