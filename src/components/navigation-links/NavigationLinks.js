import "./navigationLinks.scss";
import { NavLink } from "react-router-dom";

export default function NavigationLinks({
  listItemsData,
  fontColor,
  closeBurger,
}) {
  const listItems = listItemsData.map(({ name, path }) => {
    return (
      <li className="navigation__list_item" key={name}>
        <NavLink
          className="navigation__list_link"
          style={{ color: `${fontColor}` }}
          to={path}
          onClick={closeBurger}
        >
          {name}
        </NavLink>
      </li>
    );
  });
  return listItems;
}
