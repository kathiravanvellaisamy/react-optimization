import React, { Suspense, useState } from "react";

import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
const CompenentA = React.lazy(() => import("./components/CompenentA"));
const ComponentB = React.lazy(() => import("./components/ComponentB"));

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", textDecoration: "none" }}>
        <Link to="/component-a">Comp A</Link>
        <Link to="/component-b">Comp B</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/component-a" element={<CompenentA />} />
          <Route path="/component-b" element={<ComponentB />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
