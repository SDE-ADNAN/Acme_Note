import './App.css'
import Navbar from './components/navbar/Navbar';
import HeroSec from './components/herosec/HeroSec';
import image1 from './assets/img1.webp'


function App() {

  return (
    <div className='main_app_container h-[100%] w-[100%] pt-[80px]'>
      <Navbar />
      <div className='contents_container w-full max-w-[1128px] h-[80px] mx-auto '>
        <HeroSec />
        <div className='about '>
          <div className='row_1 flex items-center'>
            <div className='Child1 w-auto max-w-[400px]'>
              <div className='text-4xl font-extrabold'>
                A handwriting experience like no other.
              </div>
              <div className='text-xl font-light tracking-wide'>
                Fall in love with handwriting all over again with Goodnotes’ digital ink. ❤️ by millions of people worldwide.
              </div>
            </div>
            <div className='child2 flex-1'></div>
            <div className='image w-auto max-w-[508px]'>
              <img className='rounded'src={image1}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
