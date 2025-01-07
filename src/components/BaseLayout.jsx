import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const BaseLayout = ({ children }) => {
  return (
    <div className="base-layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
