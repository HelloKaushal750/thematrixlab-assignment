import Search from "../Search/Search";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

function Token() {
  const tokendata = useSelector((state) => {
    return state.tokenData;
  });
  console.log(tokendata);
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Search type={"token"} />
      {tokendata.length > 0 ? (
        <Card data={tokendata} type={"Token"} />
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
            Search token addresses to see results <br /> For Example :
            0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
          </p>
        </div>
      )}
    </div>
  );
}

export default Token;
