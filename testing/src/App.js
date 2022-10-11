import './App.css';
import { Home, About, Events, Products, Contact, Whoops404, Services, History, Location } from './pages';
import { Route, BrowserRouter, Routes, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Basic Example</h1>
        <Routes>
          <Route path='/' element={<Outlet />}>
            
            <Route index element={<Home />} />

            <Route path='about' element={<Outlet />}>
              <Route index element={<About />} />
              <Route path='services' element={<Services />} />
              <Route path='history' element={<History />} />
              <Route path='location' element={<Location />} />
            </Route>

            <Route path='events' element={<Events />} />
            <Route path='products' element={<Products />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<Whoops404 />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}