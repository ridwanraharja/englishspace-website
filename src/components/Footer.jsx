import React from "react";
import EnglishSpaceIcon from "../assets/img/jumbotron-icon.png";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 col-xs-6 footer-left">
            <img
              src={EnglishSpaceIcon}
              alt="English Space logo"
              className="ESFooter text-center"
              width="500px"
            />
            <p className="mt-2 title-footer">
              Develop Student Skills & Academic
            </p>
            <br />
            <a
              href="https://www.instagram.com/englishspace.in/"
              target="_blank"
              rel="noreferrer noopener"
              className="m-2"
            >
              <i className="fa-brands fa-instagram fa-2xl"></i>
            </a>
            <a
              href="https://wa.wizard.id/6f1d5e"
              target="_blank"
              rel="noreferrer noopener"
              className="m-2"
            >
              <i className="fa-brands fa-whatsapp fa-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/english-space-01b9aa247/"
              target="_blank"
              rel="noreferrer noopener"
              className="m-2"
            >
              <i className="fa-brands fa-linkedin-in fa-2xl"></i>
            </a>
          </div>
          <div className="col-md-5 col-xs-6 footer-right">
            <p>
              englishspace.id26@gmail.com
              <br />
              <strong>(+62) 882 9725 3491</strong>
            </p>

            <p>
              English Space is an established
              <br />
              company under the name
              <br />
              <br />
              PT Ruang Pendidikan Digital
            </p>
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
