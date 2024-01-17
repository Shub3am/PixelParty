import Banner from "./Banner";
import Image from "next/image";

import MobileNav from "./mobileNav";
export default function Nav () {
  return (
    <div className="">
      <div className="bg-indigo-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">

        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Pixel Party"
            title="Pixel Party"
            className="inline-flex items-center"
          >
<Image src="/icon.svg" width={30} height={30}/>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              Pixel Party
            </span>
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/create"
                aria-label="Create Meet"
                title="Create Meet"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Create Meet
              </a>
            </li>
            <li>
              <a
                href="/join"
                aria-label="Join Meet"
                title="Join Meet"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Join Meet
              </a>
            </li>
            <li>
              <a
                href="/about"
                aria-label="About"
                title="About"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About
              </a>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="https://www.buymeacoffee.com/vshubham"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sponser"
                title="Sponser"
              >
                Support This Project
              </a>
            </li>
          </ul>
<MobileNav/>
        </div>
      </div></div>
      {/* <Banner/> */}
    </div>
  );
};