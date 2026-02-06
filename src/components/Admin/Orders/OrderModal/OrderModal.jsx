import { useState } from "react";
import './OrderModal.css'
import {toast } from 'react-toastify'
import { updateOrder } from "../../../../services/Services";

export const EditOrderModal = ({ order, onClose, onUpdated}) => {
  const [status, setStatus] = useState(order.status);

  const handleSave = async () => {
    if(status == null || status == undefined){
      return;
    }

    try {
      const res = await updateOrder(order.id,{ status : status })
      toast.success("Order Updated")
      onUpdated();
      onClose();
    } catch (error) {
      toast
    }

  }

  return (
    <div className="admin-order-modal-backdrop">
      <div className="admin-order-modal">
        <h3>Edit Order</h3>

        <div className="admin-order-modal-field">
          <label>Order ID</label>
          <input value={order.id} disabled />
        </div>

        <div className="admin-order-modal-field">
          <label>Status</label>
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option value="PENDING">PENDING</option>
            <option value="CONFIRMED">CONFIRMED</option>
            <option value="CANCELLED">CANCELLED</option>
            <option value="DELIVERED">DELIVERED</option>
          </select>
        </div>

        <div className="admin-order-modal-items">
          {order.cartItems.map(item => (
            <div key={item.name} className="admin-order-modal-item">
              <span>{item.product.name}</span>
              <span>x {item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="admin-order-modal-actions">
          <button className="admin-btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="admin-btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};