import React, { useEffect } from "react";

// components
import Navbar from "../components/Navbar/CheckoutNavbar";

// Redux
import { useDispatch } from "react-redux";
import { getCart } from "../redux/reducers/cart/cart.action";
import Footer from "../components/Footer";

function CheckoutLayout(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 lg:px-20">{props.children}</div>
      <Footer />
    </>
  );
}

export default CheckoutLayout;
