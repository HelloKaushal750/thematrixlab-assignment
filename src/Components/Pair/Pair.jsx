import Search from "../Search/Search";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

function Pair() {
  const pairdata = useSelector((state) => {
    return state.pairData;
  });
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Search type={"pair"} />
      {pairdata.length > 0 ? (
        <div style={{height:"80vh",marginTop:"50px"}}><Card data={pairdata} type={"Pair"} /></div>
      ) : (
        <div
          style={{
            color: "white",
            fontSize: "18px",
            marginTop:"10px",
            marginLeft:"355px",
            width:"120%",
            height:"82vh"
          }}
        >
          <p>
            Search pair addresses to see results <br /> For Example :
            0x7213a321F1855CF1779f42c0CD85d3D95291D34C
          </p>
        </div>
      )}
    </div>
  );
}

export default Pair;
