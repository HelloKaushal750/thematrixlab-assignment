import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <div className="nav_first">
          <div
            style={{
              width: "25.33px",
              height: "29.33px",
              display: "flex",
              alignItems: "center",
              position: "fixed",
            }}
          >
            <img src="Images/Vector (2).png" alt="" width={"100%"} />
          </div>
          <div
            style={{
              width: "106px",
              height: "56px",
              display: "flex",
              alignItems: "center",
              paddingTop: "10px",
              marginLeft: "50px",
            }}
          >
            <img src="Images/NFTify.png" alt="" width={"100%"} />
          </div>
        </div>
        <div className="nav_second">
          <div style={{ width: "24px", height: "24px" }}>
            <img src="Images/ic_baseline-token.png" alt="" width={"100%"} />
          </div>
          <p>Token Address</p>
        </div>
        <div className="nav_second">
          <div style={{ width: "24px", height: "24px" }}>
            <img src="Images/fluent_pair-24-filled.png" alt="" width={"100%"} />
          </div>
          <p>Pair Address</p>
        </div>
      </div>
      <div style={{padding:"50px 34px"}}>
        <img src="Images/Frame 1649.png" alt="" width={'112px'} height={'24px'} />
      </div>
    </div>
  );
}

export default Navbar;
