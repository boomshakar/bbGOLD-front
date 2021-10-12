import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import PayStackPay from "./components/PayStackPay";
import Paystack2 from "./components/Paystack2";
import FlutterwavePay from "./components/FlutterwavePay";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Products from "./components/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <Products />
        </Route>
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <SignIn />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <SignUp />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
