
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './Screen/landing/landing'

function App() {

  const router = createBrowserRouter([
    {path:'/'  , element:<Landing/>}
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
