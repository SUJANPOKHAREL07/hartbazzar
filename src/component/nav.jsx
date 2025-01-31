// import { NavLink } from "react-router-dom";
// import { CgSearch } from "react-icons/cg";
// import { useState } from "react";
// import {
//   IoIosAddCircleOutline,
//   IoIosCloseCircleOutline,
//   IoMdCloseCircleOutline,
// } from "react-icons/io";
// // import { FaRegUserCircle } from "react-icons/fa";
// import Modal from "./modal";
// import AddProductForm from "../Forms/addproducts";
// import LoginForm from "../Forms/loginform";
// import { FaRegUserCircle } from "react-icons/fa";
// import { IoCart } from "react-icons/io5";

// const Navbar = () => {
//   const [OpenModal, setOpenModal] = useState(false);
//   return (
//     <>
//       <nav>
//         <div className="text-xl bg-[#F4FFC3] text-[#5D8736] flex">
//           <a href="" className="font-bold text-3xl p-6 ml-[10rem]">
//             HartBazzar
//           </a>
//           {/* <h1 className="font-bold text-3xl p-5">HartBazzar</h1> */}

//           <div className="flex space-x-8 mt-7 font-bold ml-[30rem] ">
//             <div className="hover:scale-110 transition-transform duration-200 ">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) => {
//                   return isActive ? "text-[#809D3C]" : "text-[#5D8736 ]";
//                 }}
//               >
//                 Home
//               </NavLink>
//             </div>
//             <div className="hover:scale-110 transition-transform duration-200">
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) => {
//                   return isActive ? "text-[#809D3C]" : "text-[#5D8736 ]";
//                 }}
//               >
//                 About
//               </NavLink>
//             </div>
//             <div className="hover:scale-110 transition-transform duration-200">
//               <NavLink
//                 to="/service"
//                 className={({ isActive }) => {
//                   return isActive ? "text-[#809D3C]" : "text-[#5D8736 ]";
//                 }}
//               >
//                 Service
//               </NavLink>
//             </div>
//             <div className="">
//               <input
//                 type="text"
//                 placeholder="search...."
//                 className=" bg-[#fff] h-9 rounded-md p-4"
//               />
//             </div>
//           </div>

//           <CgSearch
//             className="text-3xl cursor-pointer mt-8 ml-2 "
//             title="Search"
//           />

//           {/* add new data button */}
//           {OpenModal ? (
//             <Modal>
//               <div className="bg-white w-2/6 rounded-md p-4">
//                 <div className="flex justify-end">
//                   <IoMdCloseCircleOutline
//                     onClick={() => setOpenModal(false)}
//                     className="text-[#5D8736] text-xl cursor-pointer hover:scale-125 transition-transform duration-200 "
//                   />
//                 </div>
//                 <AddProductForm />
//               </div>
//             </Modal>
//           ) : null}

//           <IoIosAddCircleOutline
//             onClick={() => setOpenModal(true)}
//             className="font-bold  text-4xl felx items-start ml-10 mt-6.5 cursor-pointer hover:scale-125 transition-transform duration-200"
//             title="Add Product"
//           />

//           {/* login buttton */}

//           {OpenModal ? (
//             <Modal>
//               <div className="bg-white w-2/6 rounded-md p-4">
//                 <div className="flex justify-end">
//                   <IoMdCloseCircleOutline
//                     onClick={() => setOpenModal(false)}
//                     className="text-[#5D8736] text-xl cursor-pointer hover:scale-110 transition-transform duration-200 "
//                   />
//                 </div>
//                 <LoginForm />
//               </div>
//             </Modal>
//           ) : null}

//           <div className="">
//             <FaRegUserCircle
//               onClick={() => setOpenModal(true)}
//               className="font-bold  text-4xl felx items-start ml-10 mt-6.5 cursor-pointer hover:scale-110 transition-transform duration-200 "
//               title="login"
//             />
//           </div>
//           <div className="">
//             <IoCart
//               className="font-bold  text-4xl felx items-start ml-10 mt-6.5 cursor-pointer hover:scale-110 transition-transform duration-200"
//               title="Cart" 
//             />
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };
// export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { IoIosAddCircleOutline, IoMdCloseCircleOutline, IoMdMenu } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import Modal from "./modal";
import AddProductForm from "../Forms/addproducts";
import LoginForm from "../Forms/loginform";

const Navbar = () => {
  const [isAddProductOpen, setAddProductOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="text-xl bg-[#F4FFC3] text-[#5D8736] flex justify-between items-center px-6 py-4 lg:px-[10rem]">
        {/* Logo */}
        <a href="" className="font-bold text-3xl">HartBazzar</a>
        
        {/* Hamburger Menu for Mobile */}
        <IoMdMenu
          className="text-3xl cursor-pointer lg:hidden"
          onClick={() => setMenuOpen(!isMenuOpen)}
        />

        {/* Nav Links (Desktop & Mobile) */}
        <div className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent flex-col lg:flex-row lg:flex ${isMenuOpen ? "flex" : "hidden"} lg:space-x-8 font-bold p-4 lg:p-0 shadow-lg lg:shadow-none`}>
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Service", path: "/service" },
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `block p-2 lg:p-0 ${isActive ? "text-[#809D3C]" : "text-[#5D8736]"}`}
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Search Bar */}
          <div className="flex items-center bg-white h-9 rounded-md px-4 mt-2 lg:mt-0">
            <input type="text" placeholder="search...." className="outline-none" />
            <CgSearch className="text-2xl cursor-pointer ml-2" title="Search" />
          </div>
        </div>

        {/* Icons */}
        <div className="hidden lg:flex space-x-6 items-center">
          <IoIosAddCircleOutline
            onClick={() => setAddProductOpen(true)}
            className="text-4xl cursor-pointer hover:scale-125 transition-transform duration-200"
            title="Add Product"
          />
          <FaRegUserCircle
            onClick={() => setLoginOpen(true)}
            className="text-4xl cursor-pointer hover:scale-110 transition-transform duration-200"
            title="Login"
          />
          <IoCart
            className="text-4xl cursor-pointer hover:scale-110 transition-transform duration-200"
            title="Cart"
          />
        </div>
      </nav>

      {/* Modals */}
      {isAddProductOpen && (
        <Modal>
          <div className="bg-white w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircleOutline
                onClick={() => setAddProductOpen(false)}
                className="text-[#5D8736] text-xl cursor-pointer hover:scale-125 transition-transform duration-200"
              />
            </div>
            <AddProductForm />
          </div>
        </Modal>
      )}

      {isLoginOpen && (
        <Modal>
          <div className="bg-white w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircleOutline
                onClick={() => setLoginOpen(false)}
                className="text-[#5D8736] text-xl cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </div>
            <LoginForm />
          </div>
        </Modal>
      )}
    </>
  );
};
export default Navbar;
