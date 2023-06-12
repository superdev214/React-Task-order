import { useState } from "react";
import AccountContext from "./context/AccountContext";
import Routing from "./routes/Routing";

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
  }, 1000);

  return (
    <div className="App">
      <AccountContext.Provider value={accountContext}>
        {loading === 0 ? (
          <img
            id="flash-img"
            src="./assets/images/flash-img.png"
            alt="flash"
            style={{ width: "90%" }}
          />
        ) : (
          <Routing />
        )}
      </AccountContext.Provider>
    </div>
  );
}

export default App;
