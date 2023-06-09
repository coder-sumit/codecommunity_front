import {LoginPage, HomePage, Register }from "../screens";
import { SideBar, Navbar, MFooter, MNavbar} from "../components";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const App = ()=> {

  const router = createBrowserRouter([
    {path: "/", element: <><SideBar/> <Navbar/> <MFooter/><MNavbar/><Outlet/></>, children:[
      { path: "/", element: <HomePage /> },
      {path: "/forum", element: <h1>Forum</h1>},
      {path: "/profile", element: <h1>Profile</h1>},
      {path: "/settings", element: <h1>Settings</h1>},
      {path: "/aboutme", element: <h1>About Me</h1>},
      {path: "/chatroom", element: <h1>ChatRoom</h1>},



    ]},
   
    { path: "/login", element:<LoginPage/>},
    { path: "/register", element:<Register/>}
  ]);

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
