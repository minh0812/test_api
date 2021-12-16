import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/products");
      setProducts(result.data.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const Delete = async (id) => {
    await axios.delete(`http://localhost:8000/products/${id}`)
    setProducts(products.filter(product => product.id !== id));
  }

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="App">
      {products.map((product) => (

        <Product product={product} delete={Delete} key={product.id} />
      
      ))}
      <AddProduct/>
    </div>
  );
}

export default App;
