const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "yummy pizza",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "WTF is a Kilometer?!",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian Pizza",
      description: "pineapple and ham, interesting...",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "mcDons nugs on pizza",
    }),
    React.createElement(Pizza, {
      name: "Baked Potato Pizza",
      description: "a lot of carbs",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
