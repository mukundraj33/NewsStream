import React from 'react'
import backgroundImage from '../assets/business-candle-stick-graph-chart-of-stock-market-investment-free-vector.jpg';

const Navbar = ({setCategory}) => {







  return (
    <div className='navbar gap-3 justify-around flex md:flex-col items-center border-solid border-blue-400 border-b-2 bg-cover bg-right' style={{ backgroundImage: `url(${backgroundImage})` }}>

      <div className='font-extrabold md:text-[80px] text-[30px]  text-[#deb969] px-3 hover:text-white transition-all ease-in-out duration-700 bg-gradient-to-r bg-clip-text  backdrop-filter ' style={{ textShadow: '12px 8px 2px )' }}>
      NewsStream
      </div>
      <div className="border p-2 rounded-lg bg-[#e3bb70] z-10 font-bold text-2xl text-red-600 hover:bg-black hover:text-white transition-all ease-in-out duration-700">
        Latest NEWS
      </div>


      <div className="bg-clip-text" >
        <ul className="flex flex-row md:gap-[3vw] text-4xl font-bold bg-clip-text  pb-1 gap-[2vw] flex-wrap justify-center ">
          <li className="bg-clip-text ">
            <a className="bg-clip-text cursor-pointer hover:text-white duration-400 transition-all ease-in hover:bg-slate-300 text-violet-800 " style={{ textShadow: '12px 8px 2px rgba(0, 0, 0, 0.6)' }} onClick={() =>setCategory("business")}>Business</a>
          </li>
          <li className=" bg-clip-text">
            <a className="bg-clip-text cursor-pointer hover:text-white duration-400 transition-all ease-in hover:bg-slate-300 text-violet-800" style={{ textShadow: '12px 8px 2px rgba(0, 0, 0, 0.6)' }} onClick={() =>setCategory("technology")}>Technology</a>
          </li>
          <li className=" bg-clip-text">
            <a className="bg-clip-text cursor-pointer hover:text-white duration-400 transition-all ease-in hover:bg-slate-300 text-violet-800" style={{ textShadow: '12px 8px 2px rgba(0, 0, 0, 0.6)' }} onClick={() =>setCategory("science")}>Science</a>
          </li>
          <li className=" bg-clip-text">
            <a className="bg-clip-text cursor-pointer hover:text-white duration-400 transition-all ease-in hover:bg-slate-300 text-violet-800" style={{ textShadow: '12px 8px 2px rgba(0, 0, 0, 0.6)' }} onClick={() =>setCategory("sports")}>Sports</a>
          </li>
          <li className=" bg-clip-text">
            <a className="bg-clip-text cursor-pointer hover:text-white duration-400 transition-all ease-in hover:bg-slate-300 text-violet-800" style={{ textShadow: '12px 8px 2px rgba(0, 0, 0, 0.6)' }} onClick={() =>setCategory("health")}>Health</a>
          </li>
        </ul>

      </div>

    </div>

  )
}

export default Navbar
