import React from "react";
import "antd/dist/antd.css";
import Routes from "./Routes";
import { AppContext } from "./context/AuthContext";

function App() {
  const [user, setUser] = React.useState(null);
  const [cart, setCart] = React.useState({});

  React.useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const storageCart = localStorage.getItem("cart");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
    if (storageCart) {
      const foundCart = JSON.parse(storageCart);
      setCart(foundCart);
    }
  }, []);

  const customSetCart = (newCart) => {
    if (user?.id) {
      const userCart = { ...cart, [user?.id]: newCart };
      localStorage.setItem("cart", JSON.stringify(userCart));
      setCart(userCart);
    }
  };

  return (
    <AppContext.Provider
      value={{ user, setUser, cart: cart[user?.id] ?? [], customSetCart }}
    >
      <Routes />
    </AppContext.Provider>
  );
}

export default App;
