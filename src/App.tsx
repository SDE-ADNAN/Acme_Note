import './App.css'
import Navbar from './components/navbar/Navbar';
import HeroSec from './components/herosec/HeroSec';
import About from './components/aboutsec/About';


function App() {

  return (
    <div className='main_app_container h-[100%] w-[100%] pt-[80px]'>
      <Navbar />
      <div className='contents_container w-full max-w-[1128px] h-[80px] mx-auto '>
        <HeroSec />
        <About/>
      </div>
    </div>
  )
}

export default App
