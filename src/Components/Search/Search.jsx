import "./Search.css";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

function Search() {
  return (
    <div className="search">
      <div>
        <input type="text" placeholder="Search" />
        <button className="search_logo">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div>
        {/* <ConnectButton /> */}
      </div>
    </div>
  );
}

export default Search;
