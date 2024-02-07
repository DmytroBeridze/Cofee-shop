import { Link } from "react-router-dom";
import "./MainBtn.scss";

export default function MainButton() {
  return (
    <Link className="main__btn" to={"more"}>
      More
    </Link>
  );
}
