import { menuItemsData } from "../../menuItemsData";
import MenuItems from "./MenuItems";

const NavBar = () => {
    return(
        <nav className="desktop-nav">
            <ul className="menus">
                {menuItemsData.map((menu, index) => {
                    return(
                        
                        <MenuItems key={index} items={menu}/>
                    )                
                })}
            </ul>            
        </nav>
    );
}

export default NavBar;