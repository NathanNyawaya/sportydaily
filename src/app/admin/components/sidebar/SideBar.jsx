"use client";
import React from "react";


const SideBar = ({ setSelectedPage, activeView }) => {
  const handledClick = (current_page_identifier) => {
    setSelectedPage(current_page_identifier);
  };
  const checkActiveView = (id) => {
    if (id === activeView) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="text-black p-2 md:sticky top-0">
      <div className="text-center">Control Panel</div>
      <div className="">

      <p
          className={`${checkActiveView("home") && "bg-gray-200"
            } cursor-pointer my-2 text-sm`}
          onClick={() => handledClick("home_dashboard")}
        >
          Home
        </p>
        
        <p
          className={`${checkActiveView("add_blog") && "bg-gray-200"
            } cursor-pointer my-2 text-sm`}
          onClick={() => handledClick("add_blog")}
        >
          Add Blog
        </p>
        

        <p
          className={`${checkActiveView("all_blogs") && "bg-gray-200"
            } cursor-pointer my-2 text-sm`}
          onClick={() => handledClick("all_blogs")}
        >
          Blogs
        </p>
        <p
          className={`${checkActiveView("all_livestreams") && "bg-gray-200"
            } cursor-pointer my-2 text-sm`}
          onClick={() => handledClick("all_livestreams")}
        >
          Livestreams
        </p>

        <p
          className={`${checkActiveView("orders_") && "bg-gray-200"
            } cursor-pointer my-2 text-sm`}
          onClick={() => handledClick("orders_")}
        >
          Orders
        </p>
        <p
          className={`${checkActiveView("users_") && "bg-gray-200"
            } cursor-pointer my-2 text-sm`}
          onClick={() => handledClick("users_")}
        >
          Users
        </p>
        <div className="mt-2">
          <h3 className="text-sm">Products</h3>
          <div className="pl-2 pt-2">
            <p
              className={`${checkActiveView("bets_tips") && "bg-gray-200"
                } cursor-pointer my-2 text-sm`}
              onClick={() => handledClick("bets_tips")}
            >
              Betting Tips
            </p>
          </div>
        </div>


      </div>
    </div >
  );
};

export default SideBar;
