import React, { useState } from "react";
import './Home.css'

const Home = (props) => {
  const options = ["Electronic", "Food Item", "Skin Care"];
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [categary, setCategary] = useState(options[0]);

  const addProduct = (e) => {
    e.preventDefault();

    if (productName && productPrice && categary) {
      const product = {
        id: new Date().getTime().toString(),
        name: productName,
        price: productPrice,
        categary: categary,
      };
      props.product(product);
    }
    else{
      alert('please fill all the input filds')
    }
  };
  return (
    <div className="addProduct-section">
      <form onSubmit={addProduct}>
        <div className="input-label-section">
          <label htmlFor="productPrice">Product Price</label>
          <input
            type="number"
            name="productPrice"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="input-label-section">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            name="productName"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="select-label-section">
          <label htmlFor="categary">Categary </label>
          <select
            id="categary"
            value={categary}
            onChange={(e) => setCategary(e.target.value)}
          >
            {options.map((choose, index) => {
              return (
                <option key={index} value={choose}>
                  {choose}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit">Add Your Product</button>
      </form>
    </div>
  );
};

export default Home;
