import React from "react";

const HomeScrollContext = React.createContext();

export function HomeScrollContextProvider({ children }) {
  // state for current-page that is showing in viewport
  const [page, setPage] = React.useState(1);

  const value = {
    page,
    setPage
  };

  return (
    <HomeScrollContext.Provider value={value}>
      {children}
    </HomeScrollContext.Provider>
  );
}

export const useHomeScrollContext = () => React.useContext(HomeScrollContext);
