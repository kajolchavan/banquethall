import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "./SearchModal";

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};
export default Menu;

const DeskTopMenu = () => {
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <nav className="main-menu d-none d-xl-block">
        <ul>
         
        
         
          <li className="menu-item has-children">
            <Link onClick={() => activeMenuSet("/#about")} href="/#about">
             About
              
            </Link>
           
          </li>
          <li className="menu-item has-children">
            <Link href="/#service">
             Service
              
            </Link>
           
          </li>
          <li className="menu-item has-children">
            <Link href="/#gallery">
             Service
              
            </Link>
           
          </li>
          <li className="menu-item has-children">
            <Link href="/#enquiry">
             Contact
              
            </Link>
           
          </li>
         
        </ul>
      </nav>
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
     <ul>
         
        
         
          <li className="menu-item has-children">
            <Link onClick={() => activeMenuSet("/#about")} href="/#about">
             About
              
            </Link>
           
          </li>
          <li className="menu-item has-children">
            <Link href="/#service">
             Service
              
            </Link>
           
          </li>
          <li className="menu-item has-children">
            <Link href="/#gallery">
             Service
              
            </Link>
           
          </li>
          <li className="menu-item has-children">
            <Link href="/#enquiry">
             Contact
              
            </Link>
           
          </li>
         
        </ul>
    </nav>
  );
};
