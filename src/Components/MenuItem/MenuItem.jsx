import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";
import { 
  HiOutlineUserGroup, 
  HiOutlineOfficeBuilding, 
  HiShare, 
  HiDocumentText, 
  HiReceiptTax,
  HiCog,
  HiShieldExclamation,
  HiViewBoards,
  HiOutlineTable
} from "react-icons/hi";

const MenuItem = ( item ) => {

  const [showSubItems, setShowSubItems] = useState({})
  const [activeItem, setActiveItem] = useState(null);

  const handleShowSubItems = ( index, item) => {
    setShowSubItems({
      ...showSubItems,
      [index]: !showSubItems[index]
    });
    setActiveItem(item);
    MenuItems.forEach((item, i) => {
      item.active = i === index;
    });
  };

  const MenuItems = [
    {
      title: "Пользователи",
      href: "users.html",
      active: false,
      icon: <HiOutlineUserGroup className='icon' />
    },
    {
      title: "Группы компаний",
      href: "company-groups.html",
      active: false,
      icon: <HiOutlineOfficeBuilding className='icon' />
    },
    {
      title: "Контрагенты",
      href: "contractors.html",
      active: false,
      icon: <HiShare className='icon' />
    },
    {
      title: "Контракты",
      href: "contracts.html",
      active: false,
      icon: <HiDocumentText className='icon' />
    },
    {
      title: "Сделки",
      href: "deals.html",
      active: false,
      icon: <HiReceiptTax className='icon' />
    },
    {
      title: "Настройки",
      href: "settings.html",
      active: false,
      icon: <HiCog className='icon' />,
      subItems: [
        {
          title: "Роли и права",
          href: "settings-roles.html",
          active: false,
          icon: <HiShieldExclamation className='icon' />
        },
        {
          title: "Статусы сделок",
          href: "settings-deal-statuses.html",
          active: false,
          icon: <HiViewBoards className='icon' />
        },
        {
          title: "Настройка доп. полей",
          href: "settings-custom-fields.html",
          active: false,
          icon: <HiOutlineTable className='icon' />
        }
      ]
    }
  ];

  return (
    <nav className="">
      <ul className='main-menu'>
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className={`main-menu__item ${activeItem === item ? "main-menu__item_active" : ""}`}>
              <Link className='main-menu__link' to={item.href} onClick={() => handleShowSubItems(index)}>
                {item.icon}
                <div className='main-menu__link-title'>{item.title}</div>
                <div className='main-menu__control'>
                  <MdNavigateNext />
                </div>
              </Link>
              {item.subItems && showSubItems[index] ? (
                <ul className='main-menu__sub-items'>
                  {item.subItems.map((subItem, subIndex) => {
                    return (
                      <li
                        key={subIndex}
                        className={`main-menu__item ${activeItem === subItem ? "main-menu__item_active" : ""}`}>
                        <Link className='main-menu__link' to={subItem.href}>
                          {subItem.icon}
                          <div className='main-menu__link-title'>{subItem.title}</div>
                          <div className='main-menu__control'>
                            <MdNavigateNext />
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default MenuItem
