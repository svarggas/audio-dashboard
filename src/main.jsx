import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import Layout from './components/Layout';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/*">
            <Route index element={<Dashboard />} />
            <Route path="detail/:audio" element={<Detail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
