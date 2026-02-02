import React, { useEffect, useState } from 'react'
import './AddProductModal.css'
import { getCategories } from '../../../../services/Services';

export const AddProductModal = ({ open, onClose, onSave, editData }) => {

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    image: "",
    featured: false,
    categoryId: ""
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (editData) {
      console.log(editData)
      setForm(editData);
    }
  }, [editData]);

  useEffect(() => {
    if (open) {
      handleGetCategories();
    }
  }, [open]);


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

  const handleGetCategories = async () =>  {
      const res = await getCategories();
      setCategories(res.data)
      console.log(res);
  }
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
          <select name="categoryId" value={form.categoryId} onChange={handleChange}>
            <option value="">Select Category</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id} defaultChecked={form.categoryId == cat.id ? true : false}>
                {cat.name}
              </option>
            ))}
          </select>

          <label className="product-checkbox-row">
            Featured Product
            <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} className='product-checkbox'/>
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
