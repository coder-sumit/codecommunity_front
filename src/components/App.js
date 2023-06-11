import {LoginPage, HomePage, Register, AboutMe, Profile }from "../screens";
import { SideBar, Navbar, MFooter, MNavbar, Restricted, AppLoader} from "../components";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useAuth } from "../hooks";

const App = ()=> {
  const auth = useAuth();
  let loading = auth.loading;

  const router = createBrowserRouter([
    {path: "/", element: <><SideBar/> <Navbar/> <MFooter/><MNavbar/><Outlet/></>, children:[
      { path: "/", element: <Restricted><HomePage /></Restricted> },
      {path: "/forum", element: <h1>Forum</h1>},
      {path: "/:id", element: <Restricted><Profile/></Restricted>},
      {path: "/settings", element: <h1>Settings</h1>},
      {path: "/aboutme", element: <Restricted><AboutMe/></Restricted>},
      {path: "/chatroom", element: <h1>ChatRoom</h1>},



    ]},
   
    { path: "/login", element:<LoginPage/>},
    { path: "/register", element:<Register/>}
  ]);

  return (
    <>
       {loading ? <AppLoader /> : (
        <RouterProvider router={router} />
      )}
    </>
  )
}

export default App;
