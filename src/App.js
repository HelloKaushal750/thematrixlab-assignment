import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import Token from "./Components/Token/Token";
import Pair from "./Components/Pair/Pair";
import { useSelector } from "react-redux";

function App() {
  const isToken = useSelector((state) => {
    return state.isToken;
  });
  return (
    <div className="App">
      <div className="main">
        <div className="content">
          <Navbar />
          {isToken ? <Token /> : <Pair />}
        </div>
        <div className="red_strip"></div>
      </div>
    </div>
  );
}

export default App;
