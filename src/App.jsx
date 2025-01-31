import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./pages/about";
import Navbar from "./component/nav";
import Home from "./pages/home";
import Service from "./pages/service";

// import Card from "./component/card";
// import Footer from "./component/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/service",
    element: (
      <>
        <Navbar />
        <Service />
      </>
    ),
  },
]);
// const App = () => {
//   return <RouterProvider router={routernav} />;
// };

function App() {
  return <RouterProvider router={router} />;
}

export default App;
