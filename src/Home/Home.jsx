import React, { useEffect, useState, useCallback } from 'react';
import '../Home/Home.scss';
import api from "../ApiService/apiService";
import { useNavigate } from 'react-router-dom';

const HomePage = ({ setLoading }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setselectedCategory] = useState('Vegetables');
    const navigate = useNavigate();

    const fetchCategories = useCallback(async () => {
        console.log('fetchCategories called');
        setLoading(true);
        try {
            const response = await api.getAllCategory();
            setCategories(response.data);
            fetchProductsByCategory(selectedCategory);
        } catch (error) {
            console.error("Error fetching categories:", error);
        } finally {
            setLoading(false);
        }
    }, [selectedCategory, setLoading]);

    useEffect(() => {
        console.log('Fetching categories...');
        fetchCategories();
    }, [fetchCategories]);

    const fetchProductsByCategory = async (category) => {
        console.log('fetchProductsByCategory called');
        try {
            setselectedCategory(category);
            const response = await api.getProductbyCategory(category);
            setProducts(response.data);
        } catch (error) {
            setProducts([]);
            console.error("Error fetching products:", error);
        }
    };

    const addCart = async (e,data) => {
        e.preventDefault();
        console.log('Button clicked!');
let post={
    "productId": data.productId,
    "quantity": 1,
    "userId": "" 

}
        const isLogged = localStorage.getItem('isLogged');

        if (isLogged === 'true') {
            this.api.AddToCart()
        } else {
            navigate('login');
        }
    };

    return (
        <div>
            <h1 className='tittle'>Categories</h1>
            <div className='AllCategory'>
                {categories?.map((res) => (
                    <div className='Category' key={res._id} onClick={() => fetchProductsByCategory(res.name)}>
                        <img src={res.image || "default-category-image.jpg"} alt={res.name || "Category"} />
                        <span>{res.name || "Unnamed Category"}</span>
                    </div>
                ))}
            </div>

            <h1 className='prodTitle tittle'>Products From {selectedCategory}</h1>
            <div className='AllProd'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div className='Prod' key={product._id}>
                            <img src={product.productImage || "default-product-image.jpg"} alt={product.productName || "Product"} />
                            <span>{product.productName || "Unnamed Product"}</span>
                            <div className='prodButtons'>
                                <button className='rate'>₹ {product.productCurrentRate || "N/A"}</button>
                                {product.productDiscount ? <button className='Off'>{product.productDiscount}% off</button> : null}
                                <button className='cart' type='button' onClick={()=>addCart(product)}><i className="bi bi-cart4"></i></button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='notFound'>
                        <p className="no-products">Product not available</p>
                        <img src="notFound.jpg" alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
