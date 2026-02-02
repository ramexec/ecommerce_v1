import { ChevronLeft, ChevronRight, Plus, Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import './Products.css';
import {
  deleteProduct,
  getPaginatedProducts,
  saveProduct,
  updateProduct
} from '../../../services/Services';
import { toast } from 'react-toastify';
import { AddProductModal } from './ProductModal/AddProductModal';

export const Products = () => {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [first, setFirst] = useState(false);
  const [last, setLast] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    loadProducts(0, size, "");
  }, []);

  const loadProducts = async (page, size, query) => {
    try {
      const res = await getPaginatedProducts({ page, size, query });
      setProducts(res.data.content);
      setPage(res.data.number);
      setFirst(res.data.first);
      setLast(res.data.last);
    } catch {
      toast.error("Failed to load products");
    }
  };

  /* ---------- Helpers ---------- */

  const handleFullText = (e, text) => {
    e.preventDefault();
    toast.info(text);
  };

  const smallText = (val, limit = 12) =>
    val.length > limit ? (
      <a href="#" className="overflow-name-link" onClick={(e) => handleFullText(e, val)}>
        {val.substring(0, limit)}...
      </a>
    ) : val;

  /* ---------- Actions ---------- */

  const handleSearch = () => {
    loadProducts(0, size, search);
  };

  const handleAddProduct = () => {
    setEditProduct(null);
    setModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
    setModalOpen(true);
  };

  const handleSaveProduct = async (data) => {
    try {
      if (editProduct) {
        await updateProduct(data.id, data);
        toast.success("Product updated");
      } else {
        await saveProduct(data);
        toast.success("Product added");
      }
      closeModal();
      loadProducts(page, size, search);
    } catch {
      toast.error("Error saving product");
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      toast.success("Deleted");
      loadProducts(page, size, search);
    } catch {
      toast.error("Delete failed");
    }
  };

  const handlePageChange = (delta) => {
    const newPage = page + delta;
    loadProducts(newPage, size, search);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditProduct(null);
  };

  /* ---------- Render ---------- */

  return (
    <div className="admin-products-container">

      {/* Header */}
      <div className="admin-products-header">
        <div className="admin-products-searchbar">
          <Search size={18} />
          <input
            type="text"
            value={search}
            placeholder="Search products..."
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        <button className="admin-products-btn" onClick={handleAddProduct}>
          <Plus size={18} />
        </button>
      </div>

      {/* Table */}
      <div className="admin-products-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Discount %</th>
              <th>Image</th>
              <th>Featured</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map(val => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{smallText(val.name)}</td>
                <td>{smallText(val.description)}</td>
                <td>{val.price}</td>
                <td>{val.discount}%</td>
                <td>
                  <img src={val.image} alt={val.name} />
                </td>
                <td>{val.is_featured ? "Yes" : "No"}</td>
                <td>{val.categoryName}</td>
                <td className="product-actions">
                  <button onClick={() => handleEditProduct(val)}>Edit</button>
                  <button onClick={() => handleDeleteProduct(val.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="admin-page-control">
        <button disabled={first} onClick={() => handlePageChange(-1)}>
          <ChevronLeft size={18} />
        </button>

        <span>{page + 1}</span>

        <button disabled={last} onClick={() => handlePageChange(1)}>
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Modal */}
      <AddProductModal
        open={modalOpen}
        editData={editProduct}
        onSave={handleSaveProduct}
        onClose={closeModal}
      />
    </div>
  );
};
