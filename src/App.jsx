import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Footer from "./components/Footer.jsx"
import Store from "./components/Store.jsx"

function App() {

  return (
    <>
    <BrowserRouter basename="/verduleria-ecommerce">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store></Store>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
