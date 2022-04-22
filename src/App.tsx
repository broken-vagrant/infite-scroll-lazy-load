import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Layout from "@/components/Layout"
import Country from "./pages/country"
import Brand from "./pages/brand"
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate"

function App() {
  return (
    <div>
      <BrowserRouter basename="/yk-infy-scroll-lazy-load">
        <ScrollToTopOnNavigate />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/country/:code" element={<Country />}></Route>
            <Route path="/brand/:id" element={<Brand />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
