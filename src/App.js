import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="content">
          <Navbar />
          <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
            <Search />
            <div></div>
          </div>
        </div>
        <div className="red_strip"></div>
      </div>
    </div>
  );
}

export default App;
