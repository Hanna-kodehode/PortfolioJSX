import ContactStyle from "./modules/contact.module.css";

function Contact() {
  return (
    <div id="Contact" className={ContactStyle.bigBox}>
      <div className={ContactStyle.yellow}>
        <img src="/public/photos/gul.png" alt="Yellow decoration" />
      </div>
      <div className={ContactStyle.white}>
        <h1> La oss kome i kontakt!</h1>
        <hr />
        <div>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>Send</button>
        </div>
      </div>
      <div className={ContactStyle.yellow}>
        <img src="/public/photos/gul.png" alt="Yellow decoration" />
      </div>
    </div>
  );
}

export default Contact;
