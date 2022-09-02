import { Route, Routes, Router, BrowserRouter } from "react-router-dom";
import "./index.css";
import MainCard from "./MainCard";
import { RatingProvider } from "./RatingContext";


function App() {
  
  return (
    <RatingProvider>
      <MainCard/>
    </RatingProvider>
  );
}

export default App;
