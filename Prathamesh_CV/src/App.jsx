

import './index.css'

import NavbarSimple from '/src/Components/NavComponent'
import TeckCarousel from '/src/Components/TeckCarousel'

import SocialsComponent from '/src/Components/SocialsComponent'
function App() {



  
  
  return (
    <>
      <div className=' w-screen min-h-screen bg-teal-300 p-16'>

        <NavbarSimple/>
        
        <div className=" container flex w-full min-h-[50vh] mt-12 shadow-xl py-10 mx-9  backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white text-blue-gray-900 rounded-xl">
          <div className="container flex w-1/2  justify-center ">
            <img className=' w-1/2 rounded-[3rem] '
          src="../src/assets/PrathameshImage.png"
          alt="card-image"
        />
          </div>
          <div className="container grid w-1/2 content-center place-items-center">
                <h1 className=" font-bold text-center animate-bounce text-6xl">Hi</h1>
                <h2 className="text-6xl font-semibold text-center animate-pulse ">I'm Prathamesh</h2>
                <p className="text-gray-700 mt-4 text-1xl"> Third year engineering student at PICT,Pune </p>
        </div>
        </div>


        <div className=" container flex flex-col w-full min-h-[50vh] mt-12 shadow-xl py-10 mx-9  backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white text-blue-gray-900 rounded-xl">
        
        <h1 className=' text-4xl text-center'>Technical Skills </h1>
          
        
      
        <TeckCarousel/>
        
    
          



        </div>

        <div className=" container flex w-full min-h-[50vh] mt-12 shadow-xl py-10 mx-9  backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white text-blue-gray-900 rounded-xl">

          

        </div>

        <div className=" container flex flex-col w-full min-h-[30vh] mt-12 shadow-xl py-10 mx-9  backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white text-blue-gray-900 rounded-xl justify-around">

        <h1 className=' text-4xl text-center '>Socials </h1>
        <div className='self-center'>
        <SocialsComponent/>
        </div>
          

        </div>

        



      </div>
      
    </>
  )
}

export default App
