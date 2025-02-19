import ContactStyle from "./modules/contact.module.css";

function Contact() {
  return (
    <div id="Contact" className={ContactStyle.bigBox}>
      <div className={ContactStyle.white}>
        <h1> La oss kome i kontakt!</h1>
        <span></span>
        <div className={ContactStyle.input}>
          <input placeholder="Namn..." type="text" />
          <input placeholder="E-post..." type="text" />
          <textarea
            placeholder="Melding..."
            type="text"
            className={ContactStyle.melding}
          />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
