import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 ">
      <nav className="flex justify-center space-x-4">
        <div className="flexStart flex-1 gap-10">
          <Link href="/">
            <Image src="next.svg" width={115} height={43} alt="Flexxible" />
          </Link>
        </div>
        <a
          href="#"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </a>
        <a
          href="#VideoPlayer"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          VideoPlayer
        </a>
        <a
          href="#ChessSubcription"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          ChessSubcription
        </a>
        <a
          href="#Testimonials"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Testimonials
        </a>
        <a
          href="#InfoFooter"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          InfoFooter
        </a>
        <a
          href="#SignIn & SignUp"
          className="nav-link disabled font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          SignIn & SignUp
        </a>
      </nav>
      {/*fix navbar bg issue*/}
      {/* <nav className=" flexBetween navbar">
        <div className="flexStart flex-1 gap-10">
          <Link href="/">
            <Image src="next.svg" width={115} height={43} alt="Flexxible" />
          </Link>
        </div>
        <div className="flex-col flexCenter">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#VideoPlayer">
                VideoPlayer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ChessSubcription">
                ChessSubcription
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#InfoFooter">
                InfoFooter
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                SignIn & SignUp
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
