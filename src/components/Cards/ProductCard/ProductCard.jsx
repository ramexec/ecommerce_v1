import {ShoppingCart, Heart, Star } from 'lucide-react';
import './ProductCard.css'

export const ProductCard = ({ product }) => {

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        {product.discount && (
          <span className="product-discount">-{product.discount}%</span>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <div className="product-price-container">
            {product.originalPrice && (
              <span className="product-original-price">Rs.{product.originalPrice}</span>
            )}
            <span className="product-price">Rs.{product.price}</span>
          </div>
          <button className="product-cart-btn">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};