import React from "react";
import "../Footer/Footer.css";
import user_img from "../../assets/user.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={}/> */}
          <p>
            Passionate about the
            endless possibilities that the world of technology holds.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_img} 
            style={
              {
                height:"20px",
                width: "20px"
              }
            }
            />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Send</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="fotter-bottom-left">@2024 Vipin Jugnake , All rights Reserved</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
