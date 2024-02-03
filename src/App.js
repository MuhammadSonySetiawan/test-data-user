// import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

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


