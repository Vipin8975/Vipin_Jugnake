import React from "react";
import "../Contact/Contact.css";
import email_img from "../../assets/email.png";
import phone_img from "../../assets/phone-call.png";
import location_img from "../../assets/location-pin.png";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "882b5e7d-3ff9-4279-8d07-56c3d7cd11f8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

  return (
    <div>
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get in Touch</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>
              This is my Official Portfolio website ,Currently, I am pursing my
              B.Tech degree form Anjuman College of Engineering and Technology .
              I am a Final years Computer Science Engineer , Passionate about
              the endless possibilities that the world of technology holds
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img
                  src={email_img}
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                />
                <p>vipinjugnake@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img
                  src={phone_img}
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                />
                <p>8975811878</p>
              </div>
              <div className="contact-detail">
                <img
                  src={location_img}
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                />
                <p>Sadar ,Nagpur , Maharashtra</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter Your Name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your Email" name="email" />
            <label htmlFor="">Write your Message here</label>
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your Message here"
            ></textarea>
            <button type="sumbit" className="contact-sumbit">
              Sumbit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
