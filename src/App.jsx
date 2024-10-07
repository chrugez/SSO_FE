import Header from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import More from "./pages/More"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route element={<Home />} path="/" index/>
        <Route element={<About />} path="/about"/>
        <Route element={<More />} path="/more"/>
      </Routes>
    </>
  )
}

export default App
