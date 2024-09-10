import React, { useState, useEffect, useCallback } from 'react';
import './Dashboard.scss';
import api from '../../ApiService/apiService';

const Dashboard = ({ setLoading }) => {
    const [showAddProductModal, setShowAddProductModal] = useState(false);
    const [showAddCategoryPopup, setShowAddCategoryPopup] = useState(false);
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [productOriginalRate, setProductOriginalRate] = useState('');
    const [productCurrentRate, setProductCurrentRate] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productRating, setProductRating] = useState('');
    const [productStatus, setProductStatus] = useState('Available');
    const [productQuantity, setProductQuantity] = useState('');
    const [productUnit, setProductUnit] = useState('');
    const [productDiscount, setProductDiscount] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [categoryImage, setCategoryImage] = useState(null);
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const handleAddProduct = async (e) => {
        e.preventDefault();

        // Convert image file to base64 string
        const reader = new FileReader();
        reader.readAsDataURL(productImage);
        reader.onload = async () => {
            const base64Image = reader.result;

            const newItem = {
                productName,
                productCategory,
                productImage: base64Image,
                productOriginalRate: (productOriginalRate),
                productCurrentRate: (productCurrentRate),
                productDescription,
                productRating: (productRating),
                productStatus,
                productQuantity: (productQuantity, 10),
                productUnit,
                productDiscount: (productDiscount),
            };
            console.log(newItem);

            try {
                await api.createProducts(newItem);
                console.log('Product created successfully');

                // Add the new item to the items array
                const updatedItems = [...items, newItem];
                setItems(updatedItems);

                // Save to local storage
                localStorage.setItem('items', JSON.stringify(updatedItems));

                // Reset form fields
                setProductName('');
                setProductCategory('');
                setProductImage(null);
                setProductOriginalRate('');
                setProductCurrentRate('');
                setProductDescription('');
                setProductRating('');
                setProductStatus('Available');
                setProductQuantity('');
                setProductUnit('');
                setProductDiscount('');

                await fetchProducts();

                // Reset form fields
                resetProductForm();

                // Close modal
                setShowAddProductModal(false);
            } catch (error) {
                console.error('Error creating product:', error);
            }
        };
    };

    const handleAddCategory = async (e) => {
        e.preventDefault();

        // Convert image file to base64 string
        const reader = new FileReader();
        reader.readAsDataURL(categoryImage);
        reader.onload = async () => {
            const base64Image = reader.result;

            const newCategory = {
                name: categoryName,
                image: base64Image,
            };

            try {
                await api.createCategory(newCategory);
                console.log('Category created successfully');
                // Close category popup

                await fetchCategories();

                // Reset form fields
                resetCategoryForm();
                setShowAddCategoryPopup(false);
            } catch (error) {
                console.error('Error creating category:', error);
            }
        };
    };


    const resetProductForm = () => {
        setProductName('');
        setProductCategory('');
        setProductImage(null);
        setProductOriginalRate('');
        setProductCurrentRate('');
        setProductDescription('');
        setProductRating('');
        setProductStatus('Available');
        setProductQuantity('');
        setProductUnit('');
        setProductDiscount('');
    };

    // Function to reset category form fields
    const resetCategoryForm = () => {
        setCategoryName('');
        setCategoryImage(null);
    };

    const fetchCategories = useCallback(async () => {
        console.log('fetchCategories called');
        setLoading(true);
        try {
            const response = await api.getAllCategory();
            console.log(response.data);
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        } finally {
            setLoading(false);
        }
    }, [setLoading]);

    const fetchProducts = useCallback(async () => {
        console.log('fetchProducts called');
        setLoading(true);
        try {
            const response = await api.getAllProducts();
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    }, [setLoading]);

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, [fetchCategories, fetchProducts]);

    return (
        <div className="container">
            {/* Buttons for Create Product and Create Category */}
            <div className="addBtn d-flex justify-content-end mt-4">
                <button className="btn btn-primary" onClick={() => setShowAddProductModal(true)}>Create Product</button>
                <button className="btn btn-secondary" onClick={() => setShowAddCategoryPopup(true)}>Create Category</button>
            </div>


            <h1 className="title text-center pt-4">All Products</h1>
            <div className="AllCat container table-responsive py-5">
                {categories.map((res, index) => (
                    <div className='categoriesBox'>
                        <img src={res.image} alt="" />
                        <span>{res.name}</span>
                    </div>
                ))}
            </div>


            {/* Table for All Products */}
            <h1 className="title text-center pt-4">All Products</h1>
            <div className="container table-responsive py-5">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Img</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Description</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Status</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <th scope="row" className='prodImg'>
                                    <img src={product.productImage} alt="" />
                                </th>
                                <td>{product.productName}</td>
                                <td>{product.productCategory}</td>
                                <td>{product.productCurrentRate}</td>
                                <td>
                                    {product.productDescription.length > 20
                                        ? product.productDescription.substring(0, 20) + "..."
                                        : product.productDescription}
                                </td>
                                <td>{product.productRating}</td>
                                <td>{product.productStatus}</td>
                                <td>{product.productQuantity} KG</td>
                                <td>{product.productDiscount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



            {/* Add Product Modal */}
            {showAddProductModal && (
                <div className="modal" style={{ display: 'block', background: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Product</h5>
                                <button type="button" className="close" onClick={() => setShowAddProductModal(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleAddProduct}>
                                    <div className="mb-3">
                                        <label htmlFor="UrunAdi" className="form-label">Product Name</label>
                                        <input type="text" className="form-control" id="UrunAdi" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Kategori" className="form-label">Product Category</label>
                                        <select id="Kategori" className="form-control" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required>
                                            {categories.map((category) => {
                                                return (
                                                    <option key={category.id} value={category.name}>{category.name}</option>
                                                );
                                            })}
                                        </select>

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="UrunImage" className="form-label">Product Image</label>
                                        <input type="file" className="form-control" id="UrunImage" onChange={(e) => setProductImage(e.target.files[0])} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="OriginalRate" className="form-label">Original Rate</label>
                                        <input type="number" className="form-control" id="OriginalRate" value={productOriginalRate} onChange={(e) => setProductOriginalRate(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="CurrentRate" className="form-label">Current Rate</label>
                                        <input type="number" className="form-control" id="CurrentRate" value={productCurrentRate} onChange={(e) => setProductCurrentRate(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Description" className="form-label">Product Description</label>
                                        <textarea className="form-control" id="Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Rating" className="form-label">Product Rating</label>
                                        <input type="number" step="0.1" className="form-control" id="Rating" value={productRating} onChange={(e) => setProductRating(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Status" className="form-label">Product Status</label>
                                        <select id="Status" className="form-control" value={productStatus} onChange={(e) => setProductStatus(e.target.value)} required>
                                            <option value="Available">Available</option>
                                            <option value="Out of Stock">Out of Stock</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Quantity" className="form-label">Product Quantity</label>
                                        <input type="number" className="form-control" id="Quantity" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Unit" className="form-label">Product Unit</label>
                                        <input type="text" className="form-control" id="Unit" value={productUnit} onChange={(e) => setProductUnit(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Discount" className="form-label">Product Discount (%)</label>
                                        <input type="number" className="form-control" id="Discount" value={productDiscount} onChange={(e) => setProductDiscount(e.target.value)} required />
                                    </div>
                                    <button type="submit" className="btn btn-success">Add Product</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Category Popup */}
            {showAddCategoryPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Add Category</h2>
                        <form onSubmit={handleAddCategory}>
                            <div className="mb-3">
                                <label htmlFor="categoryName" className="form-label">Category Name</label>
                                <input type="text" className="form-control" id="categoryName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="categoryImage" className="form-label">Category Image</label>
                                <input type="file" className="form-control" id="categoryImage" onChange={(e) => setCategoryImage(e.target.files[0])} />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Category</button>
                        </form>
                        <button className="close-btn" onClick={() => setShowAddCategoryPopup(false)}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
