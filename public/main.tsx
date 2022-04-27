import React from 'react'
import { routes } from './routes';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map(({path, element}) => <Route path={path} key={path} element={element} />)}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
