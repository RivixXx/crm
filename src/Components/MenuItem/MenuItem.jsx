import React from 'react'
import { Link } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";
import { 
  HiOutlineUserGroup, 
  HiOutlineLibrary, 
  HiShare, 
  HiDocumentText, 
  HiReceiptTax,
  HiCog 
} from "react-icons/hi";

const MenuItem = () => {

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
      icon: <HiOutlineLibrary className='icon' />
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
      icon: <HiCog className='icon' />
      // expanded: true,
      // subItems: [
      //   {
      //     title: "Роли и права",
      //     href: "settings-roles.html"
      //   },
      //   {
      //     title: "Статусы сделок",
      //     href: "settings-deal-statuses.html",
      //     active: true
      //   },
      //   {
      //     title: "Настройка доп. полей",
      //     href: "settings-custom-fields.html"
      //   }
      // ]
    }
  ];

  return (
    <nav className="">
      <ul className='main-menu'>
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className={`main-menu__item ${item.active ? "main-menu__item_active" : ""}`}>
              <Link className='main-menu__link' to={item.href}>
                {item.icon}
                <div className='main-menu__link-title'>{item.title}</div>
                <div className='main-menu__control'>
                  <MdNavigateNext />
                </div>
              </Link>
              {item.subItems ? (
                <ul>
                  {item.subItems.map((subItem, subIndex) => {
                    return (
                      <li
                        key={subIndex}
                        className={subItem.active ? "active" : ""}
                      >
                        <Link href={subItem.href}>{subItem.title}</Link>
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
