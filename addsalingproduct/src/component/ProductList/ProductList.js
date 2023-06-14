import React, { useEffect, useState } from "react";
import './ProductList.css'
const ProductList = (props) => {
    const [electronicItem, setElectronicItem] =  useState([]);
    const [foodItem, setFoodItem] =  useState([]);
    const [skinItem, setSkinItem] =  useState([]);

    useEffect(() => {
        // Clear the state variables
        setElectronicItem([]);
        setFoodItem([]);
        setSkinItem([]);

        // Categorize the products
        props.productList.forEach((catg) => {
            switch (catg.categary) {
                case 'Electronic':
                    setElectronicItem((prevItems) => [...prevItems, catg]);
                    break;
                case "Food Item":
                    setFoodItem((prevItems) => [...prevItems, catg]);
                    break;
                case "Skin Care":
                    setSkinItem((prevItems) => [...prevItems, catg]);
                    break;
                default:
                    break;
            }
        });
    }, [props.productList]);

    return (<div className="product-list-section">
        <div className="item-box">
            <h3>Electronic</h3>
            {electronicItem.map((item)=>{
                return(<div key={item.id}>{item.price} - {item.name} - Categary-{item.categary} <button>Delete Item</button></div>)
            })}
        </div>
        <div className="item-box">
            <h3>Food Item</h3>
            {foodItem.map((item)=>{
                return(<div key={item.id}>{item.price} - {item.name} - Categary-{item.categary} <button>Delete Item</button></div>)
            })}
        </div>
        <div className="item-box">
            <h3>Skin Care</h3>
            {skinItem.map((item)=>{
                return(<div key={item.id}>{item.price} - {item.name} - Categary-{item.categary} <button>Delete Item</button></div>)
            })}
        </div>
    </div>);
}

export default ProductList;
