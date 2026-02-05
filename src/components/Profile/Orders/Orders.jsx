import { useEffect, useState } from "react";
import "./Orders.css";
import { toast } from "react-toastify";
import { getAllOrders } from "../../../services/Services";

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0);
  const [size] = useState(5); 
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchOrders();
  }, [page]);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await getAllOrders(page, size);
      setOrders(res.data.content);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      toast.error("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="orders-loading">Loading orders…</div>;
  }

  if (!orders.length) {
    return <div className="orders-empty">You have no orders yet.</div>;
  }

  return (
    <div className="orders-page">
      <h2 className="orders-title">My Orders</h2>

      <div className="orders-list">
        {orders.map(order => (
          <div key={order.id} className="order-card">
            <div className="order-top">
              <span className="order-id">{order.id}</span>
              <span className={`order-status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>

            <div className="order-meta">
              <span>
                {new Date(order.createdAt).toLocaleDateString()}
              </span>
              <span className="order-total">
                ₹{order.totalCost}
              </span>
            </div>

            <div className="order-items">
              {order.cartItems.map(item => (
                <div key={item.name} className="order-item">
                  <span className="item-name">{item.product.name}</span>
                  <span className="item-qty">x {item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="orders-pagination">
        <button
          disabled={page === 0}
          onClick={() => setPage(p => p - 1)}
        >
          Previous
        </button>

        <span>
          Page {page + 1} of {totalPages}
        </span>

        <button
          disabled={page + 1 >= totalPages}
          onClick={() => setPage(p => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
