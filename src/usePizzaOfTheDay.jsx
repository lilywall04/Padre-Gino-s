import { useState, useEffect, useDebugValue } from "react";

//custom hook for fetching and exposing "pizza of the day"
export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  //adds a label in React DevTools to help debug hook state
  useDebugValue(
    pizzaOfTheDay ? "{pizzaOfTheDay.id} : ${pizzaOfTheDay.name}" : "loading...",
  );

  //Effect runs once when component mounts
  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }

    fetchPizzaOfTheDay();
  }, []); //Empty dependency array means this runs only once

  return pizzaOfTheDay;
};
