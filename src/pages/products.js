import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MainLayout from "../components/Layouts/MainLayout";
import "../App.css";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios.get('https://shoppingapiacme.herokuapp.com/shopping')
        .then((res) => {
            setProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <MainLayout>
            <h1>Featured Products</h1>
            <div className='item-container'>
                {products.map((product) => (
                    <Link to={`/dynamic-routing/products/${product.id}`}>
                        <div className='card' key={product.id}>
                            <img src={product.image} alt='' />
                            <h3>{product.brand}</h3>
                            <p>{product.item}</p>
                            <Link to={`/dynamic-routing/products/${product.id}`}>
                                View
                            </Link>
                        </div>
                    </Link>
                ))}
            </div>
        </MainLayout>
    );
};

export default FeaturedProducts;
