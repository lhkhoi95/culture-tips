import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./components/dashboard";
import Footer from "./components/footer";
import LandingPage from "./components/landing-page";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
