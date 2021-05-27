import PizzaList from "./components/PizzaList";
import AddPizzaForm from "./components/AddPizzaForm";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <div className="App">
      <PizzaList></PizzaList>
      <AddPizzaForm></AddPizzaForm>
      <RestaurantList />
    </div>
  );
}

export default App;
