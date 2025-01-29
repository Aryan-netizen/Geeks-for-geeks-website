import React from "react";

function Nav() {
  return (
    <div className="h-screen w-full container mx-auto py-10 px-10 ">
        <div className="bg-[rgba(31,41,55,1)] px-10 py-2">
      <nav className="flex justify-between text-xl items-center">
        <div className="flex gap-20 items-center ">
          <div>
            <img className="h-20" src="" alt="" />
          </div>
          <div>
            <ul className="flex gap-10">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <input className="bg-amber-50 py-2 px-4 text-black rounded-full" type="text" placeholder="Search" />
        </div>
      </nav>
      </div>
    </div>
  );
}

export default Nav;
