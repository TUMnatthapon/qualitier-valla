import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Social from "./Social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const Navbar: NextPage = () => {
  const [menu, setMenu] = useState(true);
  const [hideIcon, setHideIcon] = useState(false);

  const ScrollEvent = () => {
    window.scrollY > 80 ? setHideIcon(true) : setHideIcon(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", ScrollEvent);
    return () => {
      window.removeEventListener("scroll", ScrollEvent);
    };
  }, []);
  return (
    <>
      <div className="logo-top hide-mobile">
        <div style={{ marginLeft: 70 }}>
          <div className="call">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:063-007-5618">063-007-5618</a>
          </div>
        </div>
        <Link href="/">
          <Image src="/logo-top.svg" alt="Logo-top" width={200} height={85} />
        </Link>
        <Social />
      </div>
      <div className="header">
        <div className="header--container">
          <div className="header--logo">
            <Link href="/">
              {hideIcon ? (
                <div>
                  <Image src="/logo.svg" alt="Logo" width={200} height={50} />
                </div>
              ) : (
                <div style={{ width: 200 }}>
                  <div className="hide-desk">
                    <Image src="/logo.svg" alt="Logo" width={200} height={50} />
                  </div>
                </div>
              )}
            </Link>
          </div>
          <ul className={menu ? "menu" : "menu --active"}>
            <li onClick={() => setMenu(!menu)}>
              <Link href="/">หน้าหลัก</Link>
            </li>
            <li onClick={() => setMenu(!menu)}>
              <Link href="/House">บ้าน</Link>
            </li>
            <li onClick={() => setMenu(!menu)}>
              <Link href="/Service">บริการ</Link>
            </li>
            <li onClick={() => setMenu(!menu)}>
              <Link href="/Promotion">โปรโมชั่น</Link>
            </li>
            <li onClick={() => setMenu(!menu)}>
              <Link href="/About">เกี่ยวกับเรา</Link>
            </li>
          </ul>
          {hideIcon ? (
            <div className="hide-mobile">
              <Social />
            </div>
          ) : (
            <div className="social" />
          )}
          <div className="menu-mobile" onClick={() => setMenu(!menu)}>
            {!menu ? (
              <div className="hamburger-menu --actives">
                <div className="bar-top"></div>
                <div className="bar-middle"></div>
                <div className="bar-bottom"></div>
              </div>
            ) : (
              <div className="hamburger-menu">
                <div className="bar-top"></div>
                <div className="bar-middle"></div>
                <div className="bar-bottom"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        {hideIcon ? (
          <div
            className="go-to-top"
            onClick={() => {
              window.scrollTo({
                top: 0,
              });
            }}
          >
            <a className="icon">
              <KeyboardDoubleArrowUpIcon />
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;
