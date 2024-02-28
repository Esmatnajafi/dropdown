import { useState } from 'react';

import Dropdown from "./Dropdown";


const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li className="menu-items">
      {items.childMenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown(prev => !prev)}
          >
            {items.title}
          </button>
          <Dropdown childMenus={items.childMenu} dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}> {items.title} </a>
      )}    

    </li>
  );
};

export default MenuItems;
