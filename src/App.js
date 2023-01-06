import './App.css';
import { Link, Outlet } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import publicRoutes from './routes';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />

        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
