import "./burgerButton.scss";

export default function BurgerButton({ toggleBurger, burgerState }) {
  return (
    <button onClick={toggleBurger} className="navigation__burger">
      <img
        src={
          !burgerState
            ? "./icons/header/white-burger.png"
            : "./icons/header/white-close.png"
        }
        alt="burger"
      />
    </button>
  );
}
