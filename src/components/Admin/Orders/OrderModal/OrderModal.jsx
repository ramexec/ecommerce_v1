import { useState } from "react";
import './OrderModal.css'

export const EditOrderModal = ({ order, onClose }) => {
  const [status, setStatus] = useState(order.status);

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
            <option value="COMPLETED">COMPLETED</option>
            <option value="CANCELLED">CANCELLED</option>
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
          <button className="admin-btn-primary">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};