import React from "react";

const AccountContext = React.createContext({
  notifications: [],
  language: "en",
  user: { number: "" },
});

export default AccountContext;
