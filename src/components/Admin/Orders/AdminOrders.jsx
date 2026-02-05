import { useEffect, useState } from "react";
import "./AdminOrders.css";
import { getAllOrdersAdmin } from "../../../services/Services";
import { toast } from "react-toastify";
import { EditOrderModal } from "./OrderModal/OrderModal";

export const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0);
  const size = 8;
  const [totalPages, setTotalPages] = useState(0);

  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, [page]);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await getAllOrdersAdmin(page, size);
      setOrders(res.data.content);
      setTotalPages(res.data.totalPages);
    } catch {
      toast.error("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="admin-orders-loading">Loading…</div>;
  }

  return (
    <div className="admin-orders-page">
      <h2 className="admin-orders-title">Orders Management</h2>

      <div className="admin-orders-table-wrapper">
        <div className="admin-orders-table">
          <div className="admin-orders-header">
            <span>Order ID</span>
            <span>Date</span>
            <span>Status</span>
            <span>Total</span>
            <span>Action</span>
          </div>

          {orders.map(order => (
            <div key={order.id} className="admin-orders-row">
              <span className="admin-orders-id">{order.id}</span>
              <span>{new Date(order.createdAt).toLocaleDateString()}</span>
              <span className={`admin-orders-status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
              <span>₹{order.totalCost}</span>
              <button
                className="admin-orders-edit-btn"
                onClick={() => setSelectedOrder(order)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="admin-orders-pagination">
        <button disabled={page === 0} onClick={() => setPage(p => p - 1)}>
          Prev
        </button>
        <span>{page + 1} / {totalPages}</span>
        <button disabled={page + 1 >= totalPages} onClick={() => setPage(p => p + 1)}>
          Next
        </button>
      </div>

      {selectedOrder && (
        <EditOrderModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onUpdated={fetchOrders}
        />
      )}
    </div>
  );
};
