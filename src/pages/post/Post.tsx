import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./post.scss";

const Post = () => {
  //Fetch data and send to single component
  return (
    <div className="post">
      <Single {...singleProduct} />
    </div>
  );
};

export default Post;
