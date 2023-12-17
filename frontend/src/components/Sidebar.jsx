import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
   const location = useLocation();
   const { pathname } = location;

   const trigger = useRef(null);
   const sidebar = useRef(null);

   const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");

   return (
      <div>
         {/* Sidebar backdrop (mobile only) */}
         <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} aria-hidden='true'></div>

         {/* Sidebar */}
         <div
            id='sidebar'
            ref={sidebar}
            className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
               sidebarOpen ? "translate-x-0" : "-translate-x-64"
            }`}>
            {/* Links */}
            <div className='space-y-8'>
               <div>
                  <ul className='mt-3'>
                     {/* Home */}
                     <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("campaigns") && "bg-slate-900"}`}>
                        <NavLink end to='/dashboard' className={`block text-slate-200 truncate transition duration-150 ${pathname.includes("campaigns") ? "hover:text-slate-200" : "hover:text-white"}`}>
                           <div className='flex items-center'>
                              <svg className='shrink-0 h-6 w-6' viewBox='0 0 24 24'>
                                 <path
                                    className={`fill-current ${pathname.includes("campaigns") ? "text-indigo-500" : "text-slate-600"}`}
                                    d='M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z'
                                 />
                                 <path
                                    className={`fill-current ${pathname.includes("campaigns") ? "text-indigo-300" : "text-slate-400"}`}
                                    d='M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z'
                                 />
                              </svg>
                              <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>Home</span>
                           </div>
                        </NavLink>
                     </li>
                     {/* Buy*/}
                     <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("inbox") && "bg-slate-900"}`}>
                        <NavLink end to='/buy' className={`block text-slate-200 truncate transition duration-150 ${pathname.includes("inbox") ? "hover:text-slate-200" : "hover:text-white"}`}>
                           <div className='flex items-center'>
                              <svg className='shrink-0 h-6 w-6' viewBox='0 0 24 24'>
                                 <path className={`fill-current ${pathname.includes("inbox") ? "text-indigo-500" : "text-slate-600"}`} d='M16 13v4H8v-4H0l3-9h18l3 9h-8Z' />
                                 <path className={`fill-current ${pathname.includes("inbox") ? "text-indigo-300" : "text-slate-400"}`} d='m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z' />
                              </svg>
                              <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>Buy</span>
                           </div>
                        </NavLink>
                     </li>
                     {/* Sell */}
                     <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("calendar") && "bg-slate-900"}`}>
                        <NavLink end to='/sell' className={`block text-slate-200 truncate transition duration-150 ${pathname.includes("calendar") ? "hover:text-slate-200" : "hover:text-white"}`}>
                           <div className='flex items-center'>
                              <svg className='shrink-0 h-6 w-6' viewBox='0 0 24 24'>
                                 <path className={`fill-current ${pathname.includes("calendar") ? "text-indigo-500" : "text-slate-600"}`} d='M1 3h22v20H1z' />
                                 <path className={`fill-current ${pathname.includes("calendar") ? "text-indigo-300" : "text-slate-400"}`} d='M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z' />
                              </svg>
                              <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>Sell</span>
                           </div>
                        </NavLink>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Sidebar;
