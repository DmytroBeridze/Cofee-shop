import { NavLink } from "react-router-dom";
import "./navigationLinks.scss";

export default function NavigationLinks({
  listItemsData,
  fontColor,
  toggleBurger,
}) {
  const listItems = listItemsData.map(({ name, path }) => {
    return (
      <li className="navigation__list_item" key={name}>
        <NavLink
          className="navigation__list_link"
          style={{ color: `${fontColor}` }}
          to={path}
          onClick={toggleBurger}
        >
          {name}
        </NavLink>
      </li>
    );
  });
  return listItems;
}
