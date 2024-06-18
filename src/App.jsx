import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header.jsx"
import Home from "./pages/Home.jsx"
import Footer from "./components/Footer.jsx"
import Store from "./pages/Store.jsx"
import Faqs from "./pages/Faqs.jsx"
import ProductPage from "./pages/ProductPage.jsx"
import Contact from "./pages/Contact.jsx"

function App() {

  return (
    <>
    <BrowserRouter basename="/verduleria-ecommerce">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store></Store>}></Route>
        <Route path="/FAQs" element={<Faqs />}></Route>
        <Route path="/product" element={<ProductPage></ProductPage>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
