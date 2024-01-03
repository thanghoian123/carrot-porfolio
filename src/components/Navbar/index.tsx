import * as React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MenuToggle } from "../MenuToggle";
import { motion, useCycle } from "framer-motion";
import MenuItem from "../MenuToggle/MenuItem";
import MenuList from "../MenuToggle/MenuList";

const LIST_ROUTE = [
  {
    path: "/home",
    text: "HOME",
  },
  {
    path: "/pages",
    text: "pages",
  },
  {
    path: "/porfolio",
    text: "porfolio",
  },
  {
    path: "/shop",
    text: "shop",
  },
  {
    path: "/blog",
    text: "blog",
  },
];

const navItemVariants = {
  opened: {},
  closed: {},
};

const Navbar = React.memo(() => {
  const location = useLocation();
  const { pathname } = location;
  const [isToggleNavbar, setIsToggleNavbar] = useCycle(false, true);

  return (
    <>
      <motion.nav initial={true} animate={isToggleNavbar ? "open" : "closed"} className='dark:bg-slate-950'>
        <div className="mx-auto max-w-7xl ">
          <div className="relative flex h-16 items-center justify-between ">
            <div className="flex flex-1 items-center justify-between sm:items-stretch md:justify-center px-5">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>

              <MenuToggle toggle={() => setIsToggleNavbar()} isToggle={isToggleNavbar}/>

              <div className="sm:ml-6 hidden md:block">
                <motion.ul className="flex space-x-4">
                  {LIST_ROUTE.map((i) => {
                    const isMatched = pathname === i.path;
                    return (
                      <motion.li
                        variants={navItemVariants}
                        whileHover={{
                          scale: 1.1,
                          transition: { ease: "easeOut", duration: 0.3 },
                        }}
                        key={i.path}
                        className={`dark:text-white`}
                      >
                        <Link
                          to={i.path}
                          className="text-black rounded-md px-3 py-2 text-sm font-medium uppercase dark:text-white"
                        >
                          {i.text}
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
               
                <MenuList>
                  {LIST_ROUTE.map((i) => {
                    const isMatched = pathname === i.path;
                    return (
                      <MenuItem item={i} key={i.path} isMatched={isMatched} />
                    );
                  })}
                </MenuList>
              
            </div>
          </div>
        </div>
      </motion.nav>
      <Outlet />
    </>
  );
});

export default Navbar;
