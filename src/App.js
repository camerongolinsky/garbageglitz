import React, { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./components/DataProvider";


function App() {
  // const [cart, setCart] = useState([]);
  return (
    <DataProvider>
      <div className="App">
        <Router>
          {/* <Header cartData={cart} /> */}
          <Header />
          <Section
            // cartData={cart} updateCart={(item) => setCart([...cart, item])}
            />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
