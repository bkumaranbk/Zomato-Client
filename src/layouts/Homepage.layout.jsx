import React from "react";
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";
import Footer from "../components/Footer";

function HomeLayout({ children }) {
  return (
    <div>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto px-4 lg:px-20">{children}</div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
