import { useEffect, useState } from "react";
import Pizza from "./Pizza";

//Utility for formatting currency in USD
const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order() {
  //State hooks for managing pizza types, selected type, size, and loading state
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);

  //Variables to store currently selected pizza and calculatede price
  let price, selectedPizza;

  if (!loading) {
    //find the pizza object from teh API response that matches the current selection
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    //Format the price of the selected pizza size
    price = intl.format(selectedPizza.sizes[pizzaSize]);
  }

  //Fetch list of pizzas from the backend API
  async function fetchPizzaTypes() {
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  //useEffect runs once on componenet mount to load pizza types
  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        {/* Dropdown for pizza type */}
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              {/* Render options dynamically from the pizzaTypes array */}
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          {/* Radio buttons for pizza size */}
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        {/* Show loading text or selected pizza */}
        {loading ? (
          <h1>loading pizza lol</h1>
        ) : (
          <div className="order-pizza">
            {/* Custom Pizza component for displaying pizza info */}
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              image={selectedPizza.image}
            />
            <p>{price}</p>
          </div>
        )}
      </form>
    </div>
  );
}
