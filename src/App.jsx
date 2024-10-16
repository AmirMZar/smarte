
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Screen/landing/landing';
import Layout from './components/Layout/Layout';

function App() {
  const router = createBrowserRouter([
    {path: '/',element: (<Layout> <Landing /> </Layout>),},]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

