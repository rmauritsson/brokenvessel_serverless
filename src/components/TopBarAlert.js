import { Link } from "react-router-dom";

const TopBarAlert = () => {
  return (
    <div className="topbar__alert">
      <p>
        One of Broken Vessel's core objectives is to enable access to
        counselling services for everyone who can not afford. Please donate to
        enable us to do that.{" "}
        <span>
          <Link to="">DONATE</Link>
        </span>
      </p>
    </div>
  );
};

export default TopBarAlert;
