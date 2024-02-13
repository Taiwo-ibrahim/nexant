import React from 'react'
import Pro1 from '../assets/pro1.png';
import Pro2 from '../assets/pro2.png';
import Pro3 from '../assets/pro3.png';
import Pro4 from '../assets/pro4.png';
import Elipse from '../assets/Ellipse.svg';

const Projects = () => {
  return (
    <div className="w-full h-full bg-white  ">
        <div className='md:max-w-[1028px] max-w-[600px] h-[600px] 2xl:pt-[20px]  md:pt-[50px] md:mt-[100px] mt-[50px] '>
          <div className='text-center md:pl-[150px] relative z-40  '>
              <p className='text-[#C4942D] 2xl:text-[13px] text-[11px] pb-[10px] md:ml-[130px] 2xl:ml-[85%] '>Our projects</p>
              <h1 className='2xl:text-4xl md:text-3xl text-[lg] md:ml-[200px] ml-[50px] md:w-[600px] text-center w-[300px] pb-[10px] 2xl:ml-[60%]'>Our Latest projects showcase</h1>
              <p className='2xl:text-[16px] md:text-[13px] text-[11px] 2xl:w-[900px] md:w-[700px] w-[300px] 2xl:ml-[45%] md:ml-[150px] ml-[50px] pb-[px]  '>To deliver world class infrastructure and engineering consultancy services by reinforcing our worldwide corporate alliances and upholding top-tier quality and ethical standards'</p>
          </div>

         <div className=' w-full md:-mt-[100px] -mt-[70px] md:pl-[0%] pl-[%] 2xl:ml-[35%]   ' >
           <img className='relative z-20 w-full md:w-[1500px] h-[200px] md:ml-[115px] 2xl:ml-[]  ' src={Elipse} />
            <div className='flex space-x-4 proframe -mt-[100px] md:ml-[115px]  '>
                <img src={Pro2} className='2xl:w-[px] md:w-[245px] w-[22%] md:h-[600px] h-[350px]' />
                <img src={Pro3} className='2xl:w-[px] md:w-[245px] w-[22%] md:h-[500px] h-[300px]' />
                <img src={Pro4} className='2xl:w-[px] md:w-[245px] w-[22%] md:h-[500px] h-[300px]' />
                <img src={Pro1} className='2xl:w-[px] md:w-[245px] w-[22%] md:h-[500px] h-[300px] '  />

            </div>
            <img className='relative z-20 w-full md:w-[1500px] h-[200px]  md:ml-[115px]  md:mt-[300px] mt-[100px] ' src={Elipse} />
          </div>  
        </div>

    </div>
  )
}

export default Projects