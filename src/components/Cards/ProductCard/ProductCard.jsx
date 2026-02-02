import {ShoppingCart } from 'lucide-react';
import './ProductCard.css'
import { addToCart } from '../../../services/Services';
import {toast} from "react-toastify"
import {useAuth } from "../../../services/Auth"

export const ProductCard = ({ product }) => {

  const auth = useAuth();

  const handleAddToCart = async () => {
    const data = {
      productId: product.id,
      quantity: 1,
    }
    if(auth.user == null || auth.user == undefined)
    {
      toast.info("Login to add to cart")
      return;
    }

    try {
      const res = await addToCart(data)
      toast.success("Added to cart!")
    } catch (error) {
      toast.error("Cannot add to cart currently")
    }
  } 

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
          <button className="product-cart-btn" onClick={handleAddToCart}>
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};