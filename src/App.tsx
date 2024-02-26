import './App.css'
import Navbar from './components/navbar/Navbar';
import HeroSec from './components/herosec/HeroSec';
import About from './components/aboutsec/About';
import ProductivityCTA from './components/productivityCTA/ProductivityCTA';
import Footer from './components/footer/Footer';


function App() {

  return (
    <div className='h-[100vh] w-[100vw] pt-[80px]'>
      <Navbar />
      <div className='w-full max-w-[1225px] mx-auto '>
        <HeroSec />
        <About />
        <ProductivityCTA/>
      </div>
        <Footer/>
    </div>
  )
}

export default App
