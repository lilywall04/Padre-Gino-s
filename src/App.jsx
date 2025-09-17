import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Order from "./Order";

//main aaplication component
const App = () => {
  return (
    <StrictMode>
      {" "}
      {/*StrictMode helps catch potential problems in development*/}
      <div>
        <h1 className="logo">Padre Gino's - Order Now</h1>
        <Order /> {/* Renders the order form component */}
        <PizzaOfTheDay /> {/* Renders the pizza of the day component*/}
      </div>
    </StrictMode>
  );
};

//Standard React 18+ rendering setup using createRoot API
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
