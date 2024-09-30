import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import Landing from './Screen/landing/landing'

function App() {

  const router = createBrowserRouter([
    {path:'/' , element:<LayOut/> , 
      children:[
        {path:'/' , element:<Landing/>}
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
