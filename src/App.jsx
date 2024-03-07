import { useState, useEffect } from 'react'

import './App.css'
import Navbar from './Components/Navbar';
import backgroundImage2 from './assets/stock-market-graph-colorful-elegant-abstract-background-44339891.webp';

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("business")
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles))


  }, [category])


  return (


    <>
      <Navbar setCategory ={setCategory}/ >
      <div className='p-4 bg-cover bg-right relative min-h-[80vh] '>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage2})` }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="flex md:flex-row flex-wrap gap-3">

          {articles.map((news, index) => {
            return (<div key={index} className="border-solid border bg-black rounded-sm md:w-[25vw] md:h-[40vh] w-[80vw] h-[25vh] z-10 md:m-4 mx-3 overflow-y-scroll hover:overflow-y-auto scrollbar-hide">
              <div className=" flex flex-col gap-2 m-2">
                <h5 className=" text-white m-2 font-extrabold text-2xl">{news.title}</h5>
                <p className=" m-2">{news.description}</p>
                <a href={news.url} className="flex m-2 rounded-full border-blue-500 bg-blue-500 p-2 justify-center hover:text-black hover:bg-white transition-all ease-in-out duration-700">Read More</a>
              </div>
            </div>
            );


          })}

        </div>
      </div>
    </>
  )
}



export default App
