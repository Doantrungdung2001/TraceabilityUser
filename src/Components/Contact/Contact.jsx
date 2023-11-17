import React from "react";
import "./Contact.css";
import contact from "../../Assets/Image/farm3.jpg";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We always ready to help by probiding the best services for you.
            <br />
            We beleive a good blace to live can make your life better.
          </span>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
