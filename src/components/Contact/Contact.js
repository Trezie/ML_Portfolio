import React, { useState } from "react";
import "./Contact.css";
import meImage from "../../assets/img/me.jpg";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating form submission
    setIsSubmitted(true);
    
    // You can add an actual API call here to send the form data to a server
    console.log("Form Submitted:", formData);

    // Reset the form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);

  };

  return (
    <section className="contact-section" >
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-info">
        <strong>Email:</strong>{" "}
        <a href="mailto:ifeomaokar@gmail.com">ifeomaokar@gmail.com</a> 
      </p>
      <p className="contact-info">
        <strong>Phone:</strong> <a href="tel:6178395035">+234 816 284 9400</a>
      </p>
      <p className="contact-subtext">...or use the following form</p>
      <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-left">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-right">
            <textarea
              name="message"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            {isSubmitted ? "Sent!" : "Send Message"}
          </button>
        </form>

      </div>
      
    </section>
  );
};

export default Contact;
