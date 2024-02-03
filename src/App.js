// import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login  />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


