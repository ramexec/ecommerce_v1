import React, { useEffect, useState } from 'react';
import './Category.css';
import {
  deleteCategory,
  getCategories,
  saveCategory,
  updateCategory
} from '../../../services/Services';
import { toast } from 'react-toastify';
import { AddCategoryModal } from './CategoryModal/AddCategoryModal';

export const Category = () => {

  const [categories, setCategories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch {
      toast.error("Failed to load categories");
    }
  };

  const handleAddCategory = async (form) => {
    try {
      await saveCategory(form);
      loadCategories();
      toast.success("Category added");
      closeModal();
    } catch {
      toast.error("Error adding category");
    }
  };

  const handleEditCategory = async (form) => {
    try {
      await updateCategory(form.id, form);
      loadCategories();
      toast.success("Category updated");
      closeModal();
    } catch {
      toast.error("Error updating category");
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await deleteCategory(id);
      loadCategories();
      toast.success("Category deleted");
    } catch {
      toast.error("Error deleting category");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditData(null);
  };

  return (
    <div className="category-container">

      <div className="header">
        <button onClick={() => setModalOpen(true)}>
          Add Category
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Category Id</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map(cat => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td>
                <button
                  onClick={() => {
                    setEditData(cat);
                    setModalOpen(true);
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDeleteCategory(cat.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddCategoryModal
        open={modalOpen}
        editData={editData}
        onSave={editData ? handleEditCategory : handleAddCategory}
        onClose={closeModal}
      />
    </div>
  );
};
