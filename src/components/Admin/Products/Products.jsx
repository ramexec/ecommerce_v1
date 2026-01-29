import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import './Products.css'

export const Products = () => {
    const [products, setProducts] = useState([
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Noise cancelling over-ear headphones",
        price: 8999,
        discount: 10,
        image: "https://picsum.photos/200?1",
        is_featured: true,
        rating: 5,
        category_id: 1
    },
    {
        id: 2,
        name: "Gaming Mouse",
        description: "RGB ergonomic gaming mouse",
        price: 2499,
        discount: 5,
        image: "https://picsum.photos/200?2",
        is_featured: false,
        rating: 4,
        category_id: 1
    },
    {
        id: 3,
        name: "Mechanical Keyboard",
        description: "Blue switch mechanical keyboard",
        price: 5999,
        discount: 15,
        image: "https://picsum.photos/200?3",
        is_featured: true,
        rating: 5,
        category_id: 1
    },
    {
        id: 4,
        name: "Running Shoes",
        description: "Lightweight sports running shoes",
        price: 3499,
        discount: 20,
        image: "https://picsum.photos/200?4",
        is_featured: false,
        rating: 4,
        category_id: 2
    },
    {
        id: 5,
        name: "Smart Watch",
        description: "Fitness tracking smartwatch",
        price: 12999,
        discount: 12,
        image: "https://picsum.photos/200?5",
        is_featured: true,
        rating: 5,
        category_id: 1
    },
    {
        id: 6,
        name: "Office Chair",
        description: "Ergonomic mesh office chair",
        price: 10999,
        discount: 18,
        image: "https://picsum.photos/200?6",
        is_featured: false,
        rating: 4,
        category_id: 3
    },
    {
        id: 7,
        name: "Backpack",
        description: "Waterproof travel backpack",
        price: 1999,
        discount: 8,
        image: "https://picsum.photos/200?7",
        is_featured: false,
        rating: 4,
        category_id: 2
    },
    {
        id: 8,
        name: "Bluetooth Speaker",
        description: "Portable mini speaker",
        price: 2999,
        discount: 10,
        image: "https://picsum.photos/200?8",
        is_featured: true,
        rating: 5,
        category_id: 1
    },
    {
        id: 9,
        name: "LED Monitor",
        description: "24 inch full HD monitor",
        price: 14999,
        discount: 7,
        image: "https://picsum.photos/200?9",
        is_featured: false,
        rating: 4,
        category_id: 1
    },
    {
        id: 10,
        name: "Desk Lamp",
        description: "Adjustable LED desk lamp",
        price: 1299,
        discount: 5,
        image: "https://picsum.photos/200?10",
        is_featured: false,
        rating: 3,
        category_id: 3
    }
]);
    const [search, setSearch] = useState('');

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(search.trim().toLowerCase())
    );


    return (
        <div className="admin-products-container">
            <div className="admin-products-searchbar">
                <label><Search /></label>
                <input type='text' onChange={(e) => setSearch(e.target.value)} />
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
                            <th>Image url</th>
                            <th>Featured?</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredProducts.map((val) => (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.description}</td>
                                <td>{val.price}</td>
                                <td>{val.discount}%</td>
                                <td>{val.image}</td>
                                <td>{val.is_featured ? 'True':'False'}</td>
                                <td>{val.category_id}</td>
                                <td className='product-actions'>
                                    <button>Action 1 </button>
                                    <button>Action 2 </button>
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
              <div className="admin-page-control">
              <button>{"<"}</button>
              <div className="admin-page-control-text">100</div>
              <button>{">"}</button>
              </div>          
            </div>

        </div>
    )
}
