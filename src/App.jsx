import Random from "./components/Random";
import Tag from './components/Tag'

export default function App() {
  return <div className="w-full h-screen flex flex-col background overflow-y-auto ">

<h1 className=" w-11/12   flex  justify-center mt-8 bg-white mx-auto rounded-lg py-3 text-4xl font-bold">RANDOM GIFS</h1>

<div className="mt-8 w-full">

  <Random></Random>
  <Tag></Tag>
</div>





  </div>;
}
