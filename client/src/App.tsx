import React from "react";
import Header from "./components/shared/Header";
import "./App.css";
import UsersDashboard from "./pages/UsersDashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <UsersDashboard />
    </div>
  );
}

export default App;
