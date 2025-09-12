import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name = "Pepperoni" description="pep, cheese, n stuff" />
      <Pizza name = "Hawaiian" description="ham, cheese, n pineapple" />
      <Pizza name = "Americano" description="'merica frick ya" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
