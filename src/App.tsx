import { Navbar } from "./UI Components/Navbar";
import { Footer } from "./UI Components/Footer";
import { Homepage } from "./Pages/Homepage";
import { LaptopPage } from "./Pages/LaptopPage";
import { CartPage } from "./Pages/CartPage";
import { ErrorPage } from "./Pages/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/laptops" element={<LaptopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
