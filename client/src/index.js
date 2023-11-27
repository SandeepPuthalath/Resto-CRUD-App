import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from './layouts/Main';
import AddResto from "./pages/AddResto"
import UpdateResto from './pages/UpdateResto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
           <Route index element={<Main/>}/>
           <Route path='add-resto' element={<AddResto/>}/>
           <Route path='update-resto/:id' element={<UpdateResto/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
