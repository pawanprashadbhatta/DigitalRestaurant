import { RouterProvider } from "react-router-dom"
import Footer from "./global/components/footer/Footer"
import Navbar from "./global/components/navbar/Navbar"

import router from "../router"


const App = () => {
  return (
    <>
   
   <Navbar/>
    <RouterProvider router={router}/>
    <Footer/>
    
    </>
  )
}

export default App


