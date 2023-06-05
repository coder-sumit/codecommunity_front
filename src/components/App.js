import {LoginPage }from "../screens";
import { HomePage } from "../screens";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {

  const router = createBrowserRouter([
    { path: "/", element: <HomePage/> },
    { path: "/login", element:<LoginPage/>}
  ]);

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
