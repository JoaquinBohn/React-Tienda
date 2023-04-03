import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <div className="contact">
        <div className="contact-content">
          <h1>Contacto</h1>
          <p className="contact-text">
            Puede contactarse con atención al cliente enviando un email a
            info@thebookshop.com. <br></br>Para compras en proceso o si tiene
            dudas de cómo comprar, llame al (54) 11 234142412 De lunes a viernes
            de 9 a 19 (hora Argentina). O por mail ventas@thebookshop.com.
          </p>
          <h2>Seguinos en nuestras redes</h2>
          <div className="redes">
            <a
              target="_blank"
              href="https://www.facebook.com/cuspidelibros"
              title="facebook icon"
            >
              <img
                className="icono"
                src="https://res.cloudinary.com/drdgu83bp/image/upload/v1680525638/Assets/facebook_qkhka1.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/cuspidelibros/"
              title="instagram icons"
            >
              <img
                className="icono"
                src="https://res.cloudinary.com/drdgu83bp/image/upload/v1680525638/Assets/instagram_ffgxry.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              href="https://wa.me/542923659475"
              title="whatsapp icons"
            >
              <img
                className="icono"
                src="https://res.cloudinary.com/drdgu83bp/image/upload/v1680525638/Assets/whatsapp_l3oa01.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
