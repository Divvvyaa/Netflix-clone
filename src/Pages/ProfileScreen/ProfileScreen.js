import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import Nav from "../../components/Nav/Nav";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./ProfileScreen.css";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  const logout = () => {
    signOut(auth);
  };

  const subscribe = (plan) => {
    console.log(`Subscribed to ${plan} plan`);
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Profile Avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <div className="description">
                <div>
                  <h3>Basic plan</h3>
                  <h5>$199.00 / month</h5>
                </div>
                <button onClick={() => subscribe('Basic')} className="profileScreen__subscribe">
                  Subscribe
                </button>
              </div>
              <div className="description">
                <div>
                  <h3>Standard plan</h3>
                  <h5>$499.00 / month</h5>
                </div>
                <button onClick={() => subscribe('Standard')} className="profileScreen__subscribe">
                  Subscribe
                </button>
              </div>
              <div className="description">
                <div>
                  <h3>Premium plan</h3>
                  <h5>$199.00 / month</h5>
                </div>
                <button onClick={() => subscribe('Premium')} className="profileScreen__subscribe">
                  Subscribe
                </button>
              </div>
              <button onClick={logout} className="profileScreen__signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
