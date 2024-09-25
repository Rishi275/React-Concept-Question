import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import './App.css';
import './index.css';
import AboutKrishna from './components/AboutKrishna';
import Purpose from './components/Purpose'
import Explore from './components/Explore';
import Manual from './components/Manual';
import Who from './components/Who';
import CardCreate from './components/CardCreate';
import PopulateCard from './components/templates/PopulateCard';
import Sidebar from './components/templates/Sidebar';
import PasswordGenerator from './NewComponents/PasswordGenerator';
import ParentCounter from './components/contextApi/ParentCounter';
import ParentProduct from './components/ContextApiProduct/ParentProduct';
import SingleProductPage from './components/ContextApiProduct/singleProductPage';
import FormValidate from './NewComponents/formValidate';


export default function App() {
  return (
    <>
      <div className='flex w-screen h-screen bg-[#161B22]'>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutKrishna" element={<AboutKrishna />} />
          <Route path="/Purpose" element={<Purpose />} />
          <Route path="/Manual" element={<Manual />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Who" element={<Who />} />
          <Route path="/PopulateCard" element={<PopulateCard />} />
          <Route path="/PasswordGenerator" element={<PasswordGenerator />} />
          <Route path="/Contextapi" element={<ParentCounter />} />
          <Route path="/ParentProduct" element={<ParentProduct />} />
          <Route path="/formValidate" element={<FormValidate />} />


          {/* //nested components */}
          <Route path="/SingleProductPage/:id" element={<SingleProductPage />} />          
          


          {/* ----------------------------------- */}

          <Route path="/CardCreate" element={<CardCreate />} />
        </Routes>


      </div>

    </>
  );
}
