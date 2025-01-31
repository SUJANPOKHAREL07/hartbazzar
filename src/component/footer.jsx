// import { FaPhoneAlt } from "react-icons/fa";

import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <>
//       <div className=" bg-[#fff] flex space-x-[6rem] ">
//         <div className="text-[#5D8736] font-bold text-2xl ">
//           <a href="" className="font-bold text-3xl p-5">
//             HartBazzar
//           </a>
//         </div>
//         <div className=" font-bold text-[#5D8736] hover:drop-shadow-md">
//           <h2 className="font-bold text-xl ">Socials</h2>
//           <div className="mt-2">
//             <a href="https://www.facebook.com/sujanpokharell" target="_blank">
//               Facebook
//             </a>
//             <br />
//             <a href="" target="_blank">
//               Instagram
//             </a>{" "}
//             <br />
//             <a href="" target="_blank">
//               Twitter
//             </a>
//           </div>
//         </div>
//         <div className="text-xl font-bold text-[#5D8736]">
//           <h3 className="ml-9">Contact</h3>
//           <div className="flex space-x-5 mt-1">
//             <FaPhoneAlt className="mt-1" />
//             <h5>9847142253</h5>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Footer;

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Left Section */}
        <div className="mb-6 lg:mb-0">
          <h2 className="text-[#FFF]  text-2xl font-bold">HartBazzar</h2>

          <p className="mt-4 max-w-md">
            Typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the like Aldus PageMaker including of Lorem Ipsum.
          </p>
          <button className="mt-4 border border-[#F4FFC3] text-[#F4FFC3] px-4 py-2 rounded-lg hover:bg-[#A9C46C] hover:text-gray-900">
            Read More
          </button>
        </div>

        {/* Center Section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">Shop Info</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>FAQs & Help</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p>Address: Butwal-3,Goalpark </p>
            <p>Email: officialsuzan@gmail.com</p>
           
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-4 lg:mt-0 ml-[25rem]">
        <span className="w-10 h-10 flex items-center justify-center border border-white rounded-full ">
          <a href="https://www.facebook.com/sujanpokharell" target="_blank">
            <FaFacebookF className="text-2xl" />
          </a>
        </span>
        <span className="w-10 h-10 flex items-center justify-center border border-white rounded-full">
          <a href="https://www.instagram.com/itssuzan07/" target="_blank">
            <FaInstagram className="text-2xl" />
          </a>
        </span>
        <span className="w-10 h-10 flex items-center justify-center border border-white rounded-full">
          <a href="https://github.com/SUJANPOKHAREL07" target="_blank">
            <FaGithub className="text-2xl" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
