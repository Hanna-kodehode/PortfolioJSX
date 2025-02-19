import ContactStyle from "./modules/contact.module.css";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "eb9040c5-7d76-40bc-ac13-80cd83948bbc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Suksess!",
        text: "Meldingen blei sendt!",
      });
    }
  };

  return (
    <div id="Contact" className={ContactStyle.bigBox}>
      <div className={ContactStyle.white}>
        <h1> La oss kome i kontakt!</h1>
        <span></span>

        <div className={ContactStyle.input}>
          <form onSubmit={onSubmit} className={ContactStyle.input}>
            <div className={ContactStyle.inputDiv}>
              <label> Ditt fulle namn:</label>
              <input placeholder="Namn..." type="text" name="name " required />
            </div>
            <div className={ContactStyle.inputDiv}>
              <label> Din e-post:</label>
              <input
                placeholder="E-post..."
                type="text"
                name="email"
                required
              />
            </div>
            <div className={ContactStyle.inputDiv}>
              <label>Din melding:</label>
              <textarea
                name="message"
                placeholder="Melding..."
                type="text"
                className={ContactStyle.melding}
                required
              />
              <button type="submit">Send </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
