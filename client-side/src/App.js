import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/client/Home'
import User from './pages/client/User'
import SignUp from './pages/client/SignUp'
import Login from './pages/client/Login'
import EmailVerfy from './pages/client/EmailVerfy'
import SendVerifyToken from './pages/client/SendVerifyToken'
import ForgetPassword from './pages/client/ForgetPassword'
import ResetPassword from './pages/client/ResetPassword'
import Categories from './pages/client/Categories';
import Category from './pages/client/Category';
import Products from './pages/client/Products';
import Product from './pages/client/Product';
import Cart from './pages/client/Cart';
import Dashboard from './pages/admin/Dashboard';
import CategoriesPanel from './pages/admin/Categories';
import CategoryPanel from './pages/admin/Category';
import NewCategory from './pages/admin/NewCategory';

import ProductsPanel from './pages/admin/Products';
import ProductPanel from './pages/admin/Product';
import NewProduct from './pages/admin/NewProduct';

import CartsPanel from './pages/admin/Carts';
import CartPanel from './pages/admin/Cart';

import UsersPanel from './pages/admin/Users';
import UserPanel from './pages/admin/User';
import Layout from './pages/client/Layout';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Layout />} >
            <Route exact path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category" element={<Category />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<User />} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth/:id/verify/:token" element={<EmailVerfy />} />
          <Route path="/SendVerifyToken" element={<SendVerifyToken />} />

          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/auth/:id/resetPassword/:token" element={<ResetPassword />} />

          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="categories" element={<CategoriesPanel />} />
            <Route path="category" element={<CategoryPanel />} />
            <Route path="newCategory" element={<NewCategory />} />

            <Route path="products" element={<ProductsPanel />} />
            <Route path="product" element={<ProductPanel />} />
            <Route path="newProduct" element={<NewProduct />} />

            <Route path="carts" element={<CartsPanel />} />
            <Route path="cart" element={<CartPanel />} />

            <Route path="users" element={<UsersPanel />} />
            <Route path="user" element={<UserPanel />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
