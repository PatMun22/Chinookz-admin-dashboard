import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./order.scss";

const Order = () => {
  //Fetch data and send to single component
  return (
    <div className="order">
      <Single {...singleProduct} />
    </div>
  );
};

export default Order;
