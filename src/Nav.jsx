import NavStyle from "./modules/nav.module.css";
function Nav() {
  return (
    <>
      <div className={NavStyle.nav}>
        <div className={NavStyle.logo}>
          <img src="photos/Logo.png" alt="Logo" />
        </div>
        <div className={NavStyle.navLinks}>
          <a href="#Home" className={NavStyle.button2}>
            Heim
          </a>
          <a href="#About" className={NavStyle.button2}>
            Om meg
          </a>
          <a href="#Work" className={NavStyle.button2}>
            Prosjekt
          </a>
          <a href="#Contact" className={NavStyle.button1}>
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;
