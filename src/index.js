import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import './normalize.css';
import App from './App';
import Articles from './pages/Articles';
import Favorites from './pages/Favorites';
import DetailPage from './pages/DetailPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="articles" element={<Articles />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="detail-blog" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);