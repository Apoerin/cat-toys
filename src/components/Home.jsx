import React, { useEffect, useState } from 'react';

import getProducts from './getProducts';

import Search from './Search';
import Product from './Product';
import CartProduct from './CartProduct';
import Sidebar from './Sidebar';

import { CardDeck } from 'react-bootstrap';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const handleGetProduct = () => {
        setProducts(getProducts);
    }

    const handleAddProductToCart = productID => {
        setCartProducts([...cartProducts, productID]);
    };

    const handleRemoveFromCart = productID => {
        const newCartProducts = cartProducts.filter(id => id !== productID);
        setCartProducts(newCartProducts);
    };

    const searchProduct = value => {
        let keyWord = value.toLowerCase();

        if (keyWord) {
            let filtered = products.filter(product => {
                return (
                    product.title.toLowerCase().includes(keyWord) ||
                    product.description.toLowerCase().includes(keyWord)
                );
            });
            setProducts(filtered);
        } else {
            setSearchValue("");
            handleGetProduct();
        }
    };

    const handleSearchValue = event => {
        setSearchValue(event.target.value);
        searchProduct(event.target.value);
    };

    useEffect(() => {
        handleGetProduct();
    }, []);


    return (
        <>
            <div>
                <Search handleSearchValue={handleSearchValue} searchValue={searchValue} />
            </div>
            <div className="main-container">
                <CardDeck className="custom-card-deck">
                    {products.map(product => {
                        return (
                            <Product
                                key={product.id}
                                product={product}
                                handleAddProductToCart={handleAddProductToCart}
                            />
                        );
                    })}
                </CardDeck>
                <div className="cart-container">
                    {cartProducts.length > 0 ? (
                        <>
                            <h3>Your Cart</h3>
                            {cartProducts.map(productID => {
                                const productIndex = products.findIndex(product => {
                                    return product.id === productID;
                                });
                                let product = products[productIndex];

                                return (
                                    <CartProduct
                                        key={product.id}
                                        product={product}
                                        handleRemoveFromCart={handleRemoveFromCart}
                                        haveInCart={true}
                                    />
                                );
                            })}
                        </>
                    ) : (
                        <h3>Your Cart is Empty :(</h3>
                    )}
                </div>
            </div>
            <Sidebar/>
        </>
    )
}
