// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Band from "./components/Band";
import Tour from "./components/Tour";
import Contact from "./components/Contact";
import FocusInput from "./components/FocusInput";

import "./css/global.css";
import "./css/navbar.css";
import "./css/carousel.css";
import "./css/buttons.css";
import "./css/modal.css";
import "./css/footer.css";
import "./css/layout.css";
import "./css/forms.css";
import "./css/list-group.css";
import "./css/responsive.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Band />
      <Tour />
      <Contact />
      <FocusInput />
    </div>
  );
};

export default App;
