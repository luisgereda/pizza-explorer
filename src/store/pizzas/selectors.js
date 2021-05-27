//export const selectPizzas = (reduxState) => reduxState.pizzas.allPizzas;

export const selectPizzas = (reduxState) => {
  const pizzarOrdered = [...reduxState.pizzas.allPizzas];
  return pizzarOrdered.sort((a, b) => {
    return b.bought - a.bought;
  });
};
