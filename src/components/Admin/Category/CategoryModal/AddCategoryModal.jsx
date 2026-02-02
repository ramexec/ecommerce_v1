import React, { useEffect, useState } from 'react';
import './AddCategoryModal.css';

export const AddCategoryModal = ({ open, onSave, onClose, editData }) => {

  const [form, setForm] = useState({ name: "" });

  useEffect(() => {
    if (editData) {
      setForm(editData);   // pre-fill when editing
    } else {
      setForm({ name: "" });
    }
  }, [editData]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      name: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="category-modal-container">
      <div className="category-modal-box">

        <h3>{editData ? "Edit Category" : "Add Category"}</h3>

        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <div className="category-modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">
              {editData ? "Update" : "Save"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
