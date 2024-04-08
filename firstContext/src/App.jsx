import "./App.css";
import Account from "./components/Account";
// import Card from "./components/Card";
import Login from "./components/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1> First Context API App - Prats </h1>
        <Login />
        <Account />
      </UserContextProvider>
    </>
  );
}

export default App;
