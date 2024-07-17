import React, { useState } from "react";
import { BsGithub, BsLinkedin, BsEnvelope, BsInstagram, BsTelephone, BsGeoAlt } from "react-icons/bs";
import Rotate from "react-reveal/Rotate";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      alert("Please provide all fields");
      return;
    }

    const data = {
      name,
      email,
      msg,
    };

    try {
      const response = await fetch('/api/v1/portfolio/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMsg("");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <Rotate>
              <div className="card card2 border-0 px-4 py-5">
                <h2 className="mb-4">CONTACT ME</h2>
                <div className="contact-message mb-4">
                  <p>
                    Have a project in mind or just want to say hi? <br />
                    Feel free to reach out using the form below or through
                    these links:
                  </p>
                </div>
                <div className="icons mb-4">
                  <a
                    href="mailto:0710rohithl@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                    title="Gmail"
                  >
                    <BsEnvelope size={40} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rohith-sri-nagula-malyala-b95a9a267/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                    title="LinkedIn"
                  >
                    <BsLinkedin size={40} />
                  </a>
                  <a
                    href="https://github.com/RohithSriNagulaMalyala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                    title="GitHub"
                  >
                    <BsGithub size={40} />
                  </a>
                  <a
                    href="https://www.instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                    title="Instagram"
                  >
                    <BsInstagram size={40} />
                  </a>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="form-control mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="form-control mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="msg"
                      placeholder="Write your message"
                      className="form-control mb-3"
                      rows="5"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="form-group text-right">
                    <button type="submit" className="btn btn-primary">
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
                <div className="contact-details mt-4">
                  <p><BsTelephone /> +91 7386699755</p>
                  <p><BsGeoAlt />  Stanza Living Dijon House, Kokapet, Hyderabad, India</p>
                </div>
              </div>
            </Rotate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
