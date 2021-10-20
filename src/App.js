import React from "react";
import "./App.css";
import firebase from "./firebase";
import { ProductInput } from "./ProductInput";

function App() {
  const [products, setProducts] = React.useState([]);
  const [newProductName, setNewProductName] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("spells").get();
      setProducts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("Products").add({ name: newProductName });
  };

  return (
    <ul>
      <input
        value={newProductName}
        onChange={e => setNewProductName(e.target.value)}
      />
      <button onClick={onCreate}>Creat</button>
      {products.map(product => (
        <li key={product.name}>
          <productInput product={product} />
        </li>
      ))}
    </ul>
  );
}

export default App;