// import { FaPhoneAlt } from "react-icons/fa";

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

import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#fff] flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-[6rem] p-5">
        <div className="text-[#5D8736] font-bold text-2xl">
          <a href="" className="font-bold text-3xl">
            HartBazzar
          </a>
        </div>
        <div className="font-bold text-[#5D8736] hover:drop-shadow-md">
          <h2 className="font-bold text-xl">Socials</h2>
          <div className="mt-2">
            <a href="https://www.facebook.com/sujanpokharell" target="_blank">
              Facebook
            </a>
            <br />
            <a href="" target="_blank">
              Instagram
            </a>
            <br />
            <a href="" target="_blank">
              Twitter
            </a>
          </div>
        </div>
        <div className="text-xl font-bold text-[#5D8736]">
          <h3 className="ml-9">Contact</h3>
          <div className="flex space-x-5 mt-1">
            <FaPhoneAlt className="mt-1" />
            <h5>9847142253</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;