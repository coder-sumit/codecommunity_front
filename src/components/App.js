import {LoginPage }from "../screens";
import { HomePage } from "../screens";
import { SideBar, Navbar, MFooter, MNavbar} from "../components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = ()=> {

  const router = createBrowserRouter([
    {path: "/", element: <><SideBar/> <Navbar/> <MFooter/><MNavbar/></>, children:[
      { path: "/", element: <HomePage /> }
    ]},
   
    { path: "/login", element:<LoginPage/>}
  ]);

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
