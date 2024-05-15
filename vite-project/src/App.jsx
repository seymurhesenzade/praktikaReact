import { useContext, useState } from "react";
import "./App.css";
import Products from "./pages/Products";
const { products, setProducts } = useContext();
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
