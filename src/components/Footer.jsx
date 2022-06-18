import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import toolbarHome from "../assets/img/toolbar/home.svg";
import toolbarSearch from "../assets/img/toolbar/search.svg";
import toolbarNew from "../assets/img/toolbar/new.svg";
import toolbarChat from "../assets/img/toolbar/chat.svg";
import toolbarProfile from "../assets/img/toolbar/profile.svg";

function Footer() {

  return (
    <>
    <Outlet />
    <div className="footer">
      <div className="toolbar">
        <Link to="/">
          <div className="toolbar__item">
            <img width="50" src={toolbarHome} alt="Home" />
          </div>
        </Link>
        <Link to="/search">
          <div className="toolbar__item">
            <img width="50" src={toolbarSearch} alt="Search" />
          </div>
        </Link>
        <Link to="/create">
          <div className="toolbar__item">
            <img width="70" src={toolbarNew} alt="New" />
          </div>
        </Link>
        <Link to="#">
          <div className="toolbar__item">
            <img width="50" src={toolbarChat} alt="Chat" />
          </div>
        </Link>
        <Link to="/profile">
          <div className="toolbar__item">
            <img width="50" src={toolbarProfile} alt="Profile" />
          </div>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Footer;