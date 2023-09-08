import "./Card.css";

function Card({ data, type }) {
  return (
    <div className="result">
      <div style={{ width: "300px" }}>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "28px",
          }}
        >
          {type} Search Results
        </h1>
      </div>
      <div style={{ marginTop: "25px" }}>
        {data?.map((item) => {
          return (
            <div className="card_data">
              <div>
                <p>Basic Info</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Pair Created at</td>
                      <td>#{item.pairCreatedAt}</td>
                    </tr>
                    <tr>
                      <td>Symbol</td>
                      <td>{item.baseToken.symbol}</td>
                    </tr>
                    <tr>
                      <td>Dex ID</td>
                      <td>{item.dexId}</td>
                    </tr>
                    <tr>
                      <td>Pair Address</td>
                      <td>{item.pairAddress.substring(0, 5)}...</td>
                    </tr>
                  </tbody>
                </table>
                <div className="icon_btn" style={{ marginTop: "-47px" }}>
                  <img
                    src="Images/Vector (3).png"
                    alt=""
                    width={"24px"}
                    height={"24px"}
                  />
                </div>
              </div>
              <div>
                <p>Base Token</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{item.baseToken.name}</td>
                    </tr>
                    <tr>
                      <td>Symbol</td>
                      <td>{item.baseToken.symbol}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{item.baseToken.address.substring(0,5)}...</td>
                    </tr>
                  </tbody>
                </table>
                <div className="icon_btn" style={{ marginTop: "-20px" }}>
                  <img
                    src="Images/material-symbols_token-outline.png"
                    alt=""
                    width={"24px"}
                    height={"24px"}
                  />
                </div>
              </div>
              <div>
                <p>Quote Token</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{item.quoteToken.name}</td>
                    </tr>
                    <tr>
                      <td>Symbol</td>
                      <td>{item.quoteToken.symbol}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{item.quoteToken.address.substring(0,5)}...</td>
                    </tr>
                  </tbody>
                </table>
                <div className="icon_btn" style={{ marginTop: "-20px" }}>
                  <img
                    src="Images/material-symbols_token-outline.png"
                    alt=""
                    width={"24px"}
                    height={"24px"}
                  />
                </div>
              </div>
              <div>
                <p>Price</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Price Native</td>
                      <td>${item.priceNative.substring(0,8)}</td>
                    </tr>
                    <tr>
                      <td>Price USD</td>
                      <td>${item.priceUsd.substring(0,8)}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="icon_btn" style={{ marginTop: "10px" }}>
                  <img
                    src="Images/pepicons-pop_dollar.png"
                    alt=""
                    width={"24px"}
                    height={"24px"}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
