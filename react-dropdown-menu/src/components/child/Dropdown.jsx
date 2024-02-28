const Dropdown = ({ childMenus, dropdown }) => {
    return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {childMenus.map((childMenu, index) => (
          <li key={index} className="menu-items">
            <a href={childMenu.url}>{childMenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;
  