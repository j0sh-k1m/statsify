import "./App.css";
import Login from "./components/Login/Login";
import Home from "./Home";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? <Home code={code} /> : <Login />;
}

export default App;
