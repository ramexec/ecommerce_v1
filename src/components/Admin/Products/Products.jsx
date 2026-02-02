import { ChevronLeft, Plus, Search } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import './Products.css'
import { deleteProduct, getPaginatedProducts, saveProduct } from '../../../services/Services';
import { toast } from 'react-toastify';
import { ChevronRight } from 'lucide-react';
import { AddProductModal } from './ProductModal/AddProductModal';

export const Products = () => {

    const [products, setProducts] = useState(null);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [first, setFirst] = useState(false);
    const [last, setLast] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [size, setSize] = useState(10);


    useEffect(() => {
        loadProducts();
    }, []);


    const loadProducts = async (page, size, query) => {
        try {
            const res = await getPaginatedProducts({ page: page, size: size, query: query })
            console.log(res)
            setPage(res.data.number)
            setLast(res.data.last);
            setFirst(res.data.first);
            setProducts(res.data.content)
        } catch (err) {
            toast.error(err);
        }
    }

    const handleFullText = (e, text) => {
        e.preventDefault(); // prevents page jump because of href="#"
        console.log(text);
        toast.info(text);
    }

    const smallTextContainer = (val, size = 10) => {

        if (val.length > size)
            return (
                <a className='overflow-name-link' href='#' onClick={(e) => handleFullText(e, val)}>
                    {val.substring(0, 10) + "..."}
                </a>)
        else
            return (val)
    }

    const handleSearch = (val) => {
        loadProducts(0, 10, val);
    }

    const handleAddProduct = () => {
        setEditProduct(null);
        setModalOpen(true);
    };

    const handleSaveProduct = async (data) => {

        try {

            await saveProduct(data);
            setModalOpen(false);
            loadProducts(0, 10, "");
        } catch (err) {
            toast.error(err);
        }

    };

    const handleDeleteProduct = async (id) => {
        try{
        const  res = await deleteProduct(id);
        loadProducts();
        toast.success("Deleted")
        }
        catch (err) {
            toast.error("Error ");
        }
    }

    const handleNextPage = (val) => {
        setPage(page + val);
        loadProducts(page, size, "");
    }

    return (
        <div className="admin-products-container">
            <div className="admin-products-header">
                <div className="admin-products-searchbar">
                    <label><Search /></label>
                    <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") handleSearch(search) }} />
                </div>

                <div className="admin-products-toolset">
                    <button className="admin-products-btn" onClick={handleAddProduct}> <Plus size={18} /></button>
                </div>
            </div>

            <div className="admin-products-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Discount(%)</th>
                            <th>Image</th>
                            <th>Featured?</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products?.map((val) => (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td style={{ whiteSpace: 'nowrap' }}>{smallTextContainer(val.name)}</td>
                                <td style={{ whiteSpace: 'nowrap' }}>{smallTextContainer(val.description)}</td>
                                <td>{val.price}</td>
                                <td>{val.discount}%</td>
                                <td><img src={val.image} /></td>
                                <td>{val.is_featured ? 'True' : 'False'}</td>
                                <td>{val.categoryName}</td>
                                <td className='product-actions'>
                                    <button onClick={() => handleDeleteProduct(val.id)}>Delete</button>
                                    <button>Action 2 </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="admin-page-control">
                <button disabled={first} onClick={() => { handleNextPage(1) }}><ChevronLeft size={18} /></button>
                <div className="admin-page-control-text">{page}</div>
                <button disabled={last} onClick={() => { handleNextPage(-1) }}><ChevronRight size={18} /></button>
            </div>

            <AddProductModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSaveProduct}
                editData={editProduct}
            />
        </div>
    )
}
