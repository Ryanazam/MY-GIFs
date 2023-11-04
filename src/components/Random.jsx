import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";




export default function Random() {

  const [gif,setgif]=useState("");
  const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
  const [loading ,setloading]=useState(false);

  async function fetchData(){
    setloading(true)
   
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data}= await axios.get(url);

    setgif(data.data.images.preview_gif.url)

    setloading(false)

  }

  useEffect(()=>{

    fetchData();
  },[]);

  function changeHandler(){


    fetchData();



  }
  return <div className=  " w-1/2 bg-green-500 flex flex-col items-center  mx-auto rounded-lg border border-slate-950 ">

    <h1 className="font-bold text-lg underline  mb-5 mt-5 uppercase"> A Random GIP</h1>
   
   {
        loading ?( <Spinner></Spinner>):( <img src={gif} width="350" height="350" alt="gifss mt-8"></img>)

   }
    


    <buttton
    onClick={changeHandler}
    className= " w-10/12 cursor-pointer  bg-white py-3 rounded-lg text-lg flex justify-center items-center font-bold mt-8 mb-5 ">Generate</buttton>


  </div>;
}
