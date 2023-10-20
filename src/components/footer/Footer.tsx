import "./footer.scss";
import { PiCopyrightFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer">
      <h3>TolewAdmin</h3>
      <div className="footer-right">
        <PiCopyrightFill />
        <p>
          All rights reserved. Tolew. <span>Designed by Waphwebs</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
