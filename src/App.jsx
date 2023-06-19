import { useState } from "react";
import AccountContext from "./context/AccountContext";
import Routing from "./routes/Routing";
import "./App.scss";

function App() {
  const accountContext = {
    language: "en",
    notifications: [],
    user: {
      number: "",
    },
  };
  const [loading, setLoading] = useState(0);
  setTimeout(() => {
    setLoading(1);
  }, 2800);

  return (
    <div className="App">
      <AccountContext.Provider value={accountContext}>
        {true ? (
          <div className="earth-flash">
              <img
                id="earth-img"
                src="./assets/images/earth.png"
                alt="earth"
              />
            <div className="vector-flash">
              <img
                id="vector-img"
                src="./assets/images/vector.png"
                alt="vector"
              />
            </div>
          </div>

        ) : (
          <Routing />
        )}
      </AccountContext.Provider>
    </div>
  );
}

export default App;
