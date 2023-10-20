import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="" />
        <span>Tolew</span>
      </div>
      <div className="nav-icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notifications">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="profile">
          <img
            src="https://images.pexels.com/photos/17718086/pexels-photo-17718086/free-photo-of-a-man-sitting-on-a-chair-with-a-sunflower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <span>John</span>
        </div>
        <img src="settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
