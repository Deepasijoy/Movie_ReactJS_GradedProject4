import React from 'react';
import Home from './Home';
import {Routes,Route} from "react-router-dom";
import SingleMoviePage from './SingleMoviePage';
import Error from './Error';
import './App.css';
import FavoriteList from './FavoriteList';

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id"  element={<SingleMoviePage />}/> 
      <Route path="movie/:id"  element={<FavoriteList/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    
    </>
  )
}

export default App;
