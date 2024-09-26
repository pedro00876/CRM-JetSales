import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://crm.rdstation.com/api/v1/contacts?token=66e5f14d9803c30027dc3f70",
        {
          mode: "no-cors",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //promisse
      const data = await res.json();
      console.log(data);
      // setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Lista de Contatos</h1>
      {products.map((list) => console.log(list))}
    </div>
  );
}

export default App;
