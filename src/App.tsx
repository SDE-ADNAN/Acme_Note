import './App.css'
import Navbar from './components/navbar/Navbar';
import heroImg from './assets/hero_img2.png'


function App() {

  return (
    <div className='main_app_container h-[100%] w-[100%] pt-[80px]'>
      <Navbar />
      <div className='contents_container w-full max-w-[1250px] h-[80px] mx-auto '>
        <div className='w-full herosec flex flex-col gap-20 items-center justify-center py-[80px]'>
          <div className='child1'>
            <div className='flex flex-col items-center'>
              <div className='text-5xl font-bold'> Effortless Note-Taking. </div>
              <div className='text-4xl font-light mt-[13px]'> Say Hello to Acme.</div>
              <button className='bg-[#387ADF] w-fit text-white rounded-lg p-3 px-6 mt-11'> -{">"} Start Taking Notes</button>
            </div>
          </div>
          <div className='w-auto max-w-[1128px]'>
            <img className='w-fit' src={heroImg} alt="hero_img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
