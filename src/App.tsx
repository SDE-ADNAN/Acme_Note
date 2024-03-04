import './App.css'; // Importing the main css file
import Ipad from './components/Ipad/Ipad'; // Ipad component import
import About from './components/aboutsec/About'; // About component import
import AnyDeviceSupport from './components/anydevicesupport/AnyDeviceSupport'; // AnyDeviceSupport component import
import Footer from './components/footer/Footer'; // Footer component import
import HeroSec from './components/herosec/HeroSec'; // HeroSec component import
import Navbar from './components/navbar/Navbar'; // Navbar component import
import ProductivityCTA from './components/productivityCTA/ProductivityCTA'; // ProductivityCTA component import


// App component entry point
const App = () => {
  return (
    <div id={"container__main_"} className=' w-[100vw] overflow-x-hidden pt-[80px] bg-[#fafafa]'>
      <Navbar />
      <div className='w-full max-w-[1225px] mx-auto min-[0px]:p-4 max-[1350px]:p-0'>
        <HeroSec />
        <About />
        <Ipad />
        <AnyDeviceSupport />
        <ProductivityCTA />
      </div>
      <Footer />
    </div>
  )
}

export default App;