import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { NavBar } from "./components/NavBar";
import { Characters } from "./components/Characters";
import { Pagination } from "./components/Pagination";
import useFetchData from "./hooks/useFetchData";

function App() {
  // const info  = useFetchData('https://rickandmortyapi.com/api/character');

  //   const onPrevius = ()=>{
  //     useFetchData(info.previus)
  // }
  // const onNext = ()=>{
  //     useFetchData(info.next)
  // }// Llama al hook

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <div className="container mt-5">
        {/* <Pagination prev={info.prev}  next={info.next}  onPrevius={onPrevius} onNext={onNext}/> */}
        <Pagination />
        <Characters />
        <Pagination />
      </div>
    </BrowserRouter>
  );
}

export default App;
