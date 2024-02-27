import React from "react";
import Navbar from "./NavBar";
import ThemeContextProvider from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import CourseList from "./CourseList";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <CourseList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}
export default App;
