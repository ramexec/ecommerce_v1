import React, { useEffect, useState } from "react";
import "./Profile.css";
import { getAllCartItems } from "../../services/Services";

export const Profile = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    handleGetCartItems();
  }, []);

  const handleGetCartItems = async () => {
    try {
      const res = await getAllCartItems();
      console.log(res);
      setCartItems(res.data);
    } catch (err) {
      console.error("Failed to load cart items", err);
    }
  };

  const discountedPrice = (price, discount) =>
    price - (price * discount) / 100;

  const cartTotal = cartItems.reduce((total, item) => {
    return (
      total +
      discountedPrice(item.product.price, item.product.discount) *
      item.quantity
    );
  }, 0);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>My Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.name}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                  />

                  <div className="cart-details">
                    <h4>{item.product.name}</h4>
                    <p className="muted">
                      {item.product.categoryName}
                    </p>

                    <div className="price-row">
                      <span>
                        Rs.
                        {discountedPrice(
                          item.product.price,
                          item.product.discount
                        ).toFixed(2)}
                      </span>
                      <span className="discount">
                        {item.product.discount}% OFF
                      </span>
                    </div>

                    <p>Qty: {item.quantity}</p>
                  </div>

                  <div className="cart-subtotal">
                    Rs.
                    {(
                      discountedPrice(
                        item.product.price,
                        item.product.discount
                      ) * item.quantity
                    ).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <span>Total</span>
              <span>Rs.{cartTotal.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
