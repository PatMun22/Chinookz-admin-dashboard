import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="menu-subsection" key={item.id}>
          <p className="title">{item.title}</p>
          <div className="menulist">
            {item.menulist.map((listItem) => (
              <Link to={listItem.url} className="menulink" key={listItem.id}>
                <img src={listItem.icon} alt="" />
                <span>{listItem.listTitle}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
