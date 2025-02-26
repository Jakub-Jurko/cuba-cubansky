import ContactForm from "../components/ContactForm";
import "./Contact.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <h1 className="title">Kontaktuj mě</h1>
      <ContactForm />
      <div className="contact">
      <a
      className="facebook"
        href="https://www.facebook.com/cuba.cubansky/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare />
      </a>      
      <a className="mobile" href="tel:+420704177783"><FiPhoneCall /></a>
      </div>
      <p className="mobile-text">tel: +420 704 177 783</p>
    </div>
  );
};

export default Contact;
