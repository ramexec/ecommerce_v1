import React, { useEffect, useState } from 'react'
import './AddProductModal.css'

export const AddProductModal = ({ open, onClose, onSave, editData }) => {

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    image: "",
    is_featured: false,
    category_id: ""
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="product-modal-overlay">
      <div className="product-modal-box">
        <h3>{editData ? "Edit Product" : "Add Product"}</h3>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
          <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
          <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} />
          <input name="discount" type="number" placeholder="Discount %" value={form.discount} onChange={handleChange} />
          <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
          <input name="category_id" type="number" placeholder="Category ID" value={form.category_id} onChange={handleChange} />

          <label className="product-checkbox-row">
            Featured Product
            <input type="checkbox" name="is_featured" checked={form.is_featured} onChange={handleChange} className='product-checkbox'/>
          </label>

          <div className="product-modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>

      </div>
    </div>
  );
};
