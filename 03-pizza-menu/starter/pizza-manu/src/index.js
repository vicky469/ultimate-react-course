import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const header = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1 style={header}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData || [];
  const totalPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {totalPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : null}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // Destructuring the props ^^
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : null}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <PizzaInfo {...pizzaObj} />
    </li>
  );
}

function PizzaInfo({ name, ingredients, price, soldOut }) {
  return (
    <div className="pizza-info">
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>{price}</p>
      <p>{soldOut ? "Sold Out" : "Available"}</p>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      <div className="order">
        <p>
          {isOpen
            ? ""
            : `We are closed. Please order from ${openHour}: 00  am to ${closeHour}: 00 pm.`}
        </p>
        {Order(isOpen)}
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function Order(isOpen) {
  return (
    <button className="btn" disabled={!isOpen}>
      Order Now
    </button>
  );
}
