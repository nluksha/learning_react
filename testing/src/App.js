import './App.css';
import {Home, About, Events, Products, Contact} from './pages';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='events' element={<Events />} />
      <Route path='products' element={<Products />} />
      <Route path='contact' element={<Contact />} />
    </>
  )
);
