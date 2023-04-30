import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "@/redux/slices/darkModeSlice";
import { IoIosSchool } from "react-icons/io";
import { SiAngular } from "react-icons/si";
import { MdModeNight } from "react-icons/md";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [showHamburger, setShowHamburger] = useState(true);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  console.log(darkMode);

  const setActive = () => {
    const element = document.getElementById("setActive");
    element.classList.add("setActive");
  };

  const removeActive = () => {
    console.log("Hello world");
    const element = document.getElementById("setActive");
    element.classList.remove("setActive");
  };

  return (
    <>
      <div className="relative dark:bg-gray-900">
        <nav className="fixed top-0 left-0 right-0 z-10 px-2 py-2 bg-white shadow shadow-[#333] md:px-10 lg:px-32 lg:py-3 dark:bg-gray-900">
          <div className="flex items-center justify-between dark:bg-gray-900">
            <Link href="/" className="text-3xl">
              <SiAngular />
            </Link>
            <div className="hidden lg:block " id="setActive">
              <ul className="flex flex-col items-center absolute bg-teal-500 text-base left-0 top-full w-full text-center gap-16 py-28 h-[100vh] md:py-60 md:text-2xl lg:static lg:flex-row lg:h-0 lg:p-0 lg:text-lg text-[#222831]">
                <li className="duration-1000 hover:text-teal-500">
                  <Link href="#">Home</Link>
                </li>
                <li className="duration-1000 hover:text-teal-500">
                  <Link href="#">Services</Link>
                </li>
                <li className="duration-1000 hover:text-teal-500">
                  <Link href="#">Downloads</Link>
                </li>
                <li className="duration-1000 hover:text-teal-500">
                  <Link href="#">News</Link>
                </li>
                <li className="duration-1000 hover:text-teal-500">
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2 text-2xl md:gap-5">
              <button onClick={() => dispatch(setDarkMode())}>
                <MdModeNight />
              </button>
              <button className="lg:hidden">
                {showHamburger ? (
                  <RxHamburgerMenu
                    onClick={() => {
                      setShowHamburger(!showHamburger);
                      setActive();
                    }}
                  />
                ) : (
                  <RxCross1
                    onClick={() => {
                      setShowHamburger(!showHamburger);
                      removeActive();
                    }}
                  />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>
      <style jsx>{`
        .setActive {
          display: block;
        }
      `}</style>
      ;
    </>
  );
}
