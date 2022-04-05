import { Sidebar } from "./components/sidebar/Sidebar";
import { AddProduct } from "./pages/AddProduct";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto">
        <AddProduct/>
      </div>
    </div>
  );
}

export default App;
