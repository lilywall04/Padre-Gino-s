import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Order from "./Order";
import Header from "./Header";
import { CartContext } from "./contexts";

//main aaplication component
const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
       <div>
        <Header />
        <Order /> {/* Renders the order form component */}
        <PizzaOfTheDay /> {/* Renders the pizza of the day component*/}
      </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

//Standard React 18+ rendering setup using createRoot API
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

