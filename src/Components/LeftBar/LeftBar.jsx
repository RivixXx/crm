import React from 'react';
import { Link } from 'react-router-dom';
import { MdExitToApp, MdNavigateBefore } from "react-icons/md";
import avatar from "../../assets/avatars/true.png"
import Logo_2 from "../../assets/logo/logo_2.svg"

import MenuItems from '../MenuItem/MenuItem';
import "./LeftBar.css";

const LeftBar = () => {

  return (
      <aside className="left-bar">
        <div className="left-bar__expander">
          <button className="button">
            <MdNavigateBefore />
          </button>
        </div>
        <div className="left-bar__inner">
          <div className="left-bar__logo-wrapper">
            <img src={Logo_2} alt="Logo" className="logo" />
          </div>
          <div className='main-menu__profile-item'>
            <Link className='main-menu__link'>
              <div className='user-avatar'>
                <div className='user-avatar__wrapper'>
                  <img src={avatar} alt='avatar' />
                </div>
              </div>
              <div className='main-menu__link-title'>Зорин Михаил</div>
            </Link>
            <Link className='main-menu__link'>
             <MdExitToApp className='icon_logout' /> 
            </Link>
          </div>
          <MenuItems />
        </div>
      </aside>
    );
};

export default LeftBar