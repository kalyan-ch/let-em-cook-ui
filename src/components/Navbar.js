import React from "react";

const NavBar = () => {
  return(
    <nav className="bg-white border-gray-800 dark:border-dark-gray dark:bg-custom-black p-2" >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex space-x-3">
          <span className="self-center text-2xl dark:text-slate-100">Let 'em Cook</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button data-collapse-toggle="navbar-sticky" type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-slate-100 dark:hover:bg-dark-gray dark:focus:ring-dark-gray" 
            aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-custom-black md:dark:bg-custom-black dark:border-slate-100">
            <li>
              <a href="#" className="button text-white rounded md:bg-transparent md:text-slate-100 md:p-0 md:dark:text-slate-100" aria-current="page">Cuisines</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-slate-100 md:p-0 md:dark:text-slate-100" aria-current="page">Search</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-slate-100 md:p-0 md:dark:text-slate-100" aria-current="page">Favorites</a>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default NavBar;