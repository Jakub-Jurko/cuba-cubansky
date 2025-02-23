import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import SharedLayout from "./pages/layout/SharedLayout";

const App = () => {
  return (
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >

        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
