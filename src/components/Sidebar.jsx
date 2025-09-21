// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { IconContext } from "react-icons";
// import { AiOutlineHome } from "react-icons/ai";
// import { BiLike } from "react-icons/bi";
// import { LuHistory } from "react-icons/lu";
// import { GoDeviceCameraVideo } from "react-icons/go";
// import { BsCollectionPlay } from "react-icons/bs";
// import { LiaUserCheckSolid } from "react-icons/lia";
// import { CiSettings } from "react-icons/ci";
// import { RxQuestionMarkCircled } from "react-icons/rx";
// import { FaRegCommentDots } from "react-icons/fa";

// const Sidebar = ({ isOpen, toggleDashboard }) => {
//   const location = useLocation();
//   const fullSize = useSelector((state) => state.ui.sideBarFullSize);
//   const username = useSelector((state) => state.auth.user?.username);

//   // Combined items with improved grouping and functionality
//   const sidebarItems = [
//     {
//       name: "Home",
//       path: "/",
//       icon: <AiOutlineHome />,
//       onMobile: true,
//     },
//     {
//       name: "Liked Videos",
//       path: "/liked-videos",
//       icon: <BiLike />,
//       onMobile: false,
//     },
//     {
//       name: "History",
//       path: "/history",
//       icon: <LuHistory />,
//       onMobile: true,
//     },
//     {
//       name: "My Channel",
//       path: `/channel/${username}/videos`,
//       icon: <GoDeviceCameraVideo />,
//       onMobile: false,
//     },
//     {
//       name: "My Studio",
//       path: "/my-studio",
//       icon: <BsCollectionPlay />,
//       onMobile: true,
//     },
//     {
//       name: "Subscriptions",
//       path: "/subscriptions",
//       icon: <LiaUserCheckSolid />,
//       onMobile: true,
//     },
//     {
//       name: "Tweets",
//       path: "/tweets",
//       icon: <FaRegCommentDots />,
//       onMobile: true,
//     },
//   ];

//   // Bottom items for support and settings
//   const bottomItems = [
//     {
//       name: "Support",
//       path: "/support",
//       icon: <RxQuestionMarkCircled />,
//     },
//     {
//       name: "Settings",
//       path: "/edit-profile/personal-info",
//       icon: <CiSettings />,
//     },
//   ];

//   return (
//     <div
//       className={`fixed top-0 h-full bg-[#0e0e0e] shadow-lg transition-transform duration-300 ${
//         isOpen ? "w-64" : "w-16"
//       } ${isOpen ? "translate-x-0" : "-translate-x-full"} 
//       lg:left-0 lg:translate-x-0 lg:${isOpen ? "w-64" : "w-16"}
//       right-0 lg:right-auto ${
//         isOpen ? "sm:translate-x-0" : "sm:translate-x-full"
//       } sm:left-auto sm:${isOpen ? "w-64" : "w-16"}`}
//     >
//       <IconContext.Provider value={{ className: "w-6 h-6" }}>
//         {/* Toggle button */}
//         <div className="p-2 hover:bg-gray-200 cursor-pointer" onClick={toggleDashboard}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="h-6 w-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M3 3h18v18H3V3z"
//             />
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 3v18M15 3v18M3 9h18M3 15h18"
//             />
//           </svg>
//         </div>

//         {/* Sidebar Items */}
//         <ul className="mt-4 flex flex-col">
//           {sidebarItems.map((item, index) => (
//             <li
//               key={index}
//               className={`${
//                 item.onMobile ? "" : "hidden"
//               } sm:block mt-2`}
//             >
//               <Link
//                 to={item.path}
//                 className={`flex items-center py-2 px-4 hover:bg-[#444] cursor-pointer ${
//                   location.pathname === item.path ? "bg-[#444] text-white" : ""
//                 }`}
//               >
//                 <span className="w-5 sm:mr-4">{item.icon}</span>
//                 {isOpen && (
//                   <span
//                     className={`ml-4 sm:group-hover:inline ${
//                       fullSize ? "lg:inline" : ""
//                     }`}
//                   >
//                     {item.name}
//                   </span>
//                 )}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Bottom Items */}
//         <div className="absolute bottom-0 w-full border-t border-gray-200">
//           <ul className="mt-4">
//             {bottomItems.map((item, index) => (
//               <li key={index} className="sm:block">
//                 <Link
//                   to={item.path}
//                   className="flex items-center py-2 px-4 hover:bg-[#444] cursor-pointer"
//                 >
//                   <span className="w-5 sm:mr-4">{item.icon}</span>
//                   {isOpen && <span className="ml-4">{item.name}</span>}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </IconContext.Provider>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import { GoDeviceCameraVideo } from "react-icons/go";
import { BsCollectionPlay } from "react-icons/bs";
import { LiaUserCheckSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import { CiSettings } from "react-icons/ci";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { useSelector } from "react-redux";
import { FaRegCommentDots } from "react-icons/fa";

function Sidebar() {
  const location = useLocation();
  const fullSize = useSelector((state) => state.ui.sideBarFullSize);
  const username = useSelector((state) => state.auth.user?.username);

  const sidebarItems = [
    {
      name: "Home",
      path: "/",
      icon: <AiOutlineHome />,
      onMobile: true,
    },
    {
      name: "Liked Videos",
      path: "/liked-videos",
      icon: <BiLike />,
      onMobile: false,
    },
    {
      name: "History",
      path: "/history",
      icon: <LuHistory />,
      onMobile: true,
    },
    {
      name: "My Channel",
      path: `/channel/${username}/videos`,
      icon: <GoDeviceCameraVideo />,
      onMobile: false,
    },
    {
      name: "My Studio",
      path: "/my-studio",
      icon: <BsCollectionPlay />,
      onMobile: true,
    },
    {
      name: "Subscriptions",
      path: "/subscriptions",
      icon: <LiaUserCheckSolid />,
      onMobile: true,
    },
    {
      name: "Tweets",
      path: "/tweets",
      icon: <FaRegCommentDots />,
      onMobile: true,
    },
  ];

  return (
    <aside
      className={`z-40 group absolute inset-x-0 bottom-0 w-full shrink-0 bg-[#0e0e0e] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:py-6 sm:hover:max-w-[250px] ${
        fullSize ? "lg:sticky lg:max-w-[250px]" : ""
      }`}
    >
      <IconContext.Provider value={{ className: "w-6 h-6" }}>
        <ul className="flex justify-around gap-y-2 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className={`${item.onMobile ? "" : "hidden"} sm:block`}
            >
              <Link
                to={item.path}
                className={`flex flex-col items-center justify-center py-1 sm:w-full sm:flex-row sm:p-1.5 sm:rounded-md sm:hover:bg-[#444] sm:hover:text-white sm:focus:bg-[#444] sm:focus:text-white sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4 ${
                  location.pathname === item.path ? "text-[#FFFFFF] bg-[#444]" : ""
                }`}
              >
                <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                  {item.icon}
                </span>
                <span
                  className={`block sm:hidden sm:group-hover:inline ${
                    fullSize ? "lg:inline" : ""
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}

          <li className="hidden sm:block mt-auto">
            <Link
              to="/support"
              className="flex flex-col items-center justify-center py-1 sm:w-full sm:flex-row sm:p-1.5 sm:rounded-md sm:hover:bg-[#444] sm:hover:text-white sm:focus:bg-[#444] sm:focus:text-white sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4"
            >
              <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                <RxQuestionMarkCircled />
              </span>
              <span
                className={`block sm:hidden sm:group-hover:inline ${
                  fullSize ? "lg:inline" : ""
                }`}
              >
                Support
              </span>
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              to="/edit-profile/personal-info"
              className="flex flex-col items-center justify-center py-1 sm:w-full sm:flex-row sm:p-1.5 sm:rounded-md sm:hover:bg-[#444] sm:hover:text-white sm:focus:bg-[#444] sm:focus:text-white sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4"
            >
              <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                <CiSettings />
              </span>
              <span
                className={`block sm:hidden sm:group-hover:inline ${
                  fullSize ? "lg:inline" : ""
                }`}
              >
                Settings  
              </span>
            </Link>
          </li>
        </ul>
      </IconContext.Provider>
    </aside>
  );
}

export default Sidebar;
