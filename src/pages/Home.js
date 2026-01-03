import React, { useState } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Clothing', 'Shoes', 'Caps', 'Sale'];

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Sale') return product.sale;
    return product.category === selectedCategory;
  });

  return (
    <div>
      <Hero />

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-5 justify-center mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-10 py-5 font-black uppercase tracking-wider text-base border-4 transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-black text-white border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-x-1 -translate-y-1'
                  : 'bg-white text-black border-black hover:bg-black hover:text-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-5xl font-black uppercase tracking-tight">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h2>
            <p className="text-gray-900 font-bold text-lg">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 pt-24 border-t-4 border-black">
          <div className="text-center group">
            <div className="w-24 h-24 bg-black text-white flex items-center justify-center mx-auto mb-6 text-4xl font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300">
              ★
            </div>
            <h3 className="font-black uppercase mb-3 text-2xl tracking-tight">Premium Quality</h3>
            <p className="text-gray-600 text-sm">
              Carefully curated streetwear with exceptional quality
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              →
            </div>
            <h3 className="font-bold uppercase mb-2">Fast Shipping</h3>
            <p className="text-gray-600 text-sm">
              Get your order delivered within 2-5 business days
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ↻
            </div>
            <h3 className="font-bold uppercase mb-2">Easy Returns</h3>
            <p className="text-gray-600 text-sm">
              Not satisfied? Return within 30 days for a full refund
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
