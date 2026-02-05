import React, { useState, useEffect } from 'react';
import './Cart.css';
import {checkOutCurrentCart, deleteCartItem, getAllCartItems} from "../../../services/Services"
import {Trash } from 'lucide-react';
import { toast } from 'react-toastify';

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading,setLoading] = useState(false);
    const [checkoutLoading, setCheckOutLoading] = useState(false);
    useEffect(() => {
        handleGetCartItems();
    }, []);

    const handleGetCartItems = async () => {
        setLoading(true);
        try {
            const res = await getAllCartItems();
            setCartItems(res.data);
        } catch (err) {
            switch(err.code){
                case 404:setCartItems([]);break;
                default:toast.error("Items Failed to load")
            }
        }finally{
            setLoading(false)
        }
    };

    const handleDeleteItem = async (id) => {
        setLoading(true)
        try {
            const res = await deleteCartItem(id);
            handleGetCartItems();
        } catch (error) {
            console.log(error)
            toast.error("Failed to Delete item")
        }finally{
            setLoading(false)
        }
    }

    const discountedPrice = (price, discount) =>
        price - (price * discount) / 100;

    const cartTotal = cartItems.reduce((total, item) => {
        return (
            total +
            discountedPrice(item.product.price, item.product.discount) *
                item.quantity
        );
    }, 0);

    const handleCheckOut = async () => {
        setCheckOutLoading(true)
        try {
            const res = await checkOutCurrentCart();
            toast.success("Order placed successfully")

            handleGetCartItems()
        } catch (err) {
            console.log(err)
            toast.error(err.error);
        }finally{
            setCheckOutLoading(false);
        }
    }

    return (
        <div className='cart-card'>
            {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
            ) : (
                <div >
                    <div className="cart-list">
                        {cartItems.map((item) => (
                            <div
                                className="cart-item"
                                key={item.product.id} 
                            >
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
                                <div className="cart-item-actions">
                                    <button className="cart-item-delete" onClick={() => {handleDeleteItem(item.name)}}><Trash size={18}/></button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-total">
                        <span>Total</span>
                        <span>Rs.{cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="cart-actions">
                        <button onClick={!checkoutLoading ? handleCheckOut : null} > {!checkoutLoading ? "Checkout" : "Loading ..."} </button>
                    </div>
                </div>
            )}
        </div>
    );
};
