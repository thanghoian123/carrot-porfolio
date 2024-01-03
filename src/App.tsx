import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/Home";
import { motion } from "framer-motion";
import { MouseContext } from "./contexts/MouseProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/", // yes, again
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  const { mouseVariant,mouseKeyAnimate } = useContext(MouseContext);
  return (
    <>
      <RouterProvider router={router} />
      <motion.div
        className="w-[32px] h-[32px] bg-slate-950 dark:bg-slate-50 fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={mouseVariant}
        animate={mouseKeyAnimate}
      ></motion.div>
    </>
  );
}

export default App;
