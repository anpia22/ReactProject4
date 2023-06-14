import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import ProductList from './components/ProductList/ProductList';

function App() {
  const [allProduct, setAllProduct] = useState([]);

  const productHandler = (homeProduct) => {
    setAllProduct(() => {
      console.log(homeProduct.categary)
     return [...allProduct,homeProduct]
    })
  }
  return (
    <div className="App">
      <Home product={productHandler} />
      <ProductList productList={allProduct}/>
    </div>
  );
}

export default App;
