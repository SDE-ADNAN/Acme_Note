import './App.css'
import Navbar from './components/navbar/Navbar';
import HeroSec from './components/herosec/HeroSec';
import About from './components/aboutsec/About';
import ProductivityCTA from './components/productivityCTA/ProductivityCTA';
import Footer from './components/footer/Footer';
import AnyDeviceSupport from './components/anydevicesupport/AnyDeviceSupport';
import Ipad from './components/Ipad/Ipad';


function App() {

  return (
    <div className='h-[100vh] w-[100vw] pt-[80px] bg-[#fafafa]'>
      <Navbar />
      <div className='w-full max-w-[1225px] mx-auto min-[0px]:p-4 max-[1350px]:p-0'>
        <HeroSec />
        <About />
        <Ipad/>
        <AnyDeviceSupport/>
        <ProductivityCTA/>
      </div>
        <Footer/>
    </div>
  )
}

export default App
