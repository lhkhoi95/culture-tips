import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/posts";
import Footer from "./components/footer";
import LandingPage from "./components/landing-page";
import Navbar from "./components/Navbar";
import CreatePost from "./components/create-post";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/add" element={<CreatePost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
