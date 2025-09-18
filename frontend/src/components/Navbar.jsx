import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const navbarhandler = ()=>{
         setShow(!show)
  }
  return (
    <>
      <nav>
        <div className="logo">Spice & Nice</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
              onClick={()=>{setShow(false)}}
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={navbarhandler}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;