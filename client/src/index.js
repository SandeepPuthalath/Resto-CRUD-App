import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from './layouts/Main';
const AddResto = React.lazy(() => import("./pages/AddResto"))
const UpdateResto = React.lazy(() => import('./pages/UpdateResto'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Main />} />
          <Route path='add-resto' element={<Suspense>
            <AddResto />
          </Suspense>} />
          <Route path='update-resto/:id' element={
            <Suspense>
              <UpdateResto />
            </Suspense>
          } />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
