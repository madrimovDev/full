import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { AddProduct } from "./pages/AddProduct";
import { ProductList } from "./pages/ProductList";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto">
        <Routes>
          <Route index element={<AddProduct/>} />
          <Route path="/list" element={<ProductList/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
