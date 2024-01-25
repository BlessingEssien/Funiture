import { Suspense, lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/nav/MyNav";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./components/home/Home"));
const Shop = lazy(() => import("./components/shop/Shop"));
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MyNav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
