import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./AppRoutes";
const MainRoutes = () => {
  return (
    <>
      <main className="layout-content">
        <Router>
          <AppRoutes />
        </Router>
      </main>
    </>
  );
};

export default MainRoutes;
