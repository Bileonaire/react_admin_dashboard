import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Topbar, Sidebar } from "./components";
import { Home, UserList, User, NewUser, Product, NewProduct, ProductList } from "./components/pages";
import "./App.css";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />}/>
          <Route path="/user/:userId" element={<User />}/>
          <Route path="/newuser" element={<NewUser />}/>
          <Route path="/products" element={<ProductList />}/>
          <Route path="/product/:productId" element={<Product />}/>
          <Route path="/newproduct" element={<NewProduct />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;