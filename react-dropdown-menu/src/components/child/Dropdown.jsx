import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown }) => {
    return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <MenuItems key={index} items={submenu} />
        ))}
      </ul>
    );
  };
  
  export default Dropdown;
  