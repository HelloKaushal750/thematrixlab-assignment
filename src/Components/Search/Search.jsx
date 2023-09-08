import "./Search.css";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

function Search({ type }) {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const handleSearch = () => {
    if (type === "token") {
      if (state === "") {
        alert("Search something by token address");
      } else if (state) {
        axios
          .get(`https://api.dexscreener.com/latest/dex/tokens/${state}`)
          .then((res) => {
            let arr = res.data.pairs.splice(0, 10);
            console.log(arr);
            dispatch({ type: "TOKENDATA", payload: arr });
            setState("");
          })
          .catch((err) => alert("Invalid Token Address"));
      } else {
        alert("Invalid Token Address");
      }
    } else {
      if (state === "") {
        alert("Search something by pair address");
      } else if (state) {
        axios
          .get(`https://api.dexscreener.com/latest/dex/pairs/bsc/${state}`)
          .then((res) => {
            // console.log(res);
            dispatch({ type: "PAIRDATA", payload: res.data.pairs });
            setState("");
          })
          .catch((err) => alert("Invalid Pair Address"));
      } else {
        alert("Invalid Pair Address");
      }
    }
  };
  return (
    <div className="search">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
        <button className="search_logo" onClick={handleSearch}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div>
        <button className="connect_btn">Connect</button>
      </div>
    </div>
  );
}

export default Search;
