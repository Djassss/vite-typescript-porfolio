import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Contact  from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"
import { useState, useEffect } from "react"


function App() {
  const [isCallapse, setIsCallapse] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect( () => {
    const handleScroll = () => {
      if (window.scrollY > 100 ) {
        setShowScroll(true);
      } else {
        setShowScroll(false)
      }
    };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll)
  };
},);


  return (
    <>
      <Router>
        <Header isCallapse={isCallapse} setIsCallapse={setIsCallapse}/>
        <Routes>
          <Route path="/" element={<Home
           isCallapse={isCallapse} 
           setIsCallapse={setIsCallapse} 
           showScroll={showScroll}
           setShowScroll={setShowScroll}
           />
          }
           />
          <Route path="/contact" element={<Contact 
          />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
