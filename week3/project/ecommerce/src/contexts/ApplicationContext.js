import React, { createContext, useState } from "react";

export const ApplicationContext = createContext();

function ApplicationProvider({ children }) {
  const [favoriteProductIds, setfavoriteProductsIds] = useState([]);

  const sharedState = {
    favoriteProductIds,
    setfavoriteProductsIds,
  };
  return <ApplicationContext.Provider value={sharedState}>{children}</ApplicationContext.Provider>;
}

export default ApplicationProvider;
