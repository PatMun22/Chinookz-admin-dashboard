import { topdeals } from "../../data";
import "./topdealsbox.scss";

const TopDealsBox = () => {
  return (
    <div className="topdealsbox">
      <h1>Top Deals</h1>
      <div className="topdeals-container">
        {topdeals.map((topdeal) => (
          <div className="topdeal" key={topdeal.id}>
            <div className="dealer-profile">
              <img src={topdeal.photo} alt="" />
              <div className="dealer-details">
                <p>{topdeal.name}</p>
                <span>{topdeal.email}</span>
              </div>
            </div>
            <div className="amount">Ksh. {topdeal.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDealsBox;
