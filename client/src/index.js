import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CustomNavbar from './components/CustomNavbar'
import SearchBanquetHalls from './components/SearchBanquetHalls'
import SearchCatering from './components/SearchCatering'
import SearchDj from './components/SearchDj'
import SearchFlorist from './components/SearchFlorist'
import SearchLighting from './components/SearchLighting'
import SearchPhotographer from './components/SearchPhotographer'
import AboutUs from './components/AboutUs'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomNavbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/SearchBanquetHalls" element={<SearchBanquetHalls />} />
        <Route path="/SearchCatering" element={<SearchCatering />} />
        <Route path="/SearchDj" element={<SearchDj />} />
        <Route path="/SearchFlorist" element={<SearchFlorist />} />
        <Route path="/SearchLighting" element={<SearchLighting />} />
        <Route path="/SearchPhotographer" element={<SearchPhotographer />} />
        <Route path="/AboutUs" element={<AboutUs />} />

      </Routes>
    </BrowserRouter>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
