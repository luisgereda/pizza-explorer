import { useDispatch, useSelector } from "react-redux";
import { selectPizzas } from "../store/pizzas/selectors";
import { toggleFavorite } from "../store/users/actions";
import { selectUser } from "../store/users/selectors";
import "./PizzaList.scss";

export default function PizzaList() {
  const selectAllPizzas = useSelector(selectPizzas);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="PizzaList">Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>!
      </p>
      <p>TODO: the list of pizzas</p>
      <p>We have {selectAllPizzas.length} Pizzas to choose</p>
      <ul className="Pizzas">
        {" "}
        {selectAllPizzas.map((pi, index) => (
          <li
            key={index}
            className="Pizza"
            style={{ backgroundImage: `url(${pi.image})` }}
          >
            <div className="Overlay">
              {" "}
              {pi.name} {pi.description} {pi.id}
              <p>Bought {pi.bought} times</p>
            </div>
            <button
              onClick={() => {
                dispatch(toggleFavorite(pi.id));
              }}
              className={`FavToggle ${
                user.favorites.includes(pi.id) ? "fav" : ""
              }`}
            >
              {user.favorites.includes(pi.id) ? "♥" : "♡"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
