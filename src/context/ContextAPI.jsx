import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [navbar, setNavbar] = useState("Home");
  const [searchKey, setSearchKey] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const value = {
    navbar,
    setNavbar,
    searchKey,
    setSearchKey,
    loggedIn,
    setLoggedIn,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
