import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderBanner from "./HeaderBanner";
import Home from "./Home";
import ProductItem from "./ProductItem";
import Profile from "./profile/Profile";
import Fashion from "./Fasion/Fashion";
import Mobile from "./mobile/Mobile";
import MobileList from "./mobile/MobileList";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";   
import Orders from "./Orders";
const promise = loadStripe('pk_test_51HrSrkCtiV6vuLCdrpihZuqZFZtITArvpk0hkOPbTRQq7cwDBhHsveRiWXUnTwC4XBCLMUbuQdOPDyQsblkL0M4900T7hJtLpo');
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/productItem">
            <Header />
            <HeaderBanner />
            <ProductItem />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header />
            <HeaderBanner />
            <Profile />
            <Footer />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path="/fashion">
            <Header />
            <HeaderBanner />
            <Fashion />
            <Footer />
          </Route>
          <Route path="/orders">
          <Header />
           <Orders />
          </Route>
          <Route path="/mobile">
            <Header />
            <HeaderBanner />
            <Mobile />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <HeaderBanner />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/mobileList">
            <Header />
            <HeaderBanner />
            <MobileList />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <HeaderBanner />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
