import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flexBetween navbar">
      <div className="flexStart flex-1 gap-10">
        <Link href="/">
          <Image src="next.svg" width={115} height={43} alt="Flexxible" />
        </Link>
      </div>
      <div className="flex-col flexCenter">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#blog">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#news">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
