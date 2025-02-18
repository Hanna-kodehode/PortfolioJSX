import NavStyle from "./modules/nav.module.css";
function Nav() {
  return (
    <>
      <div className={NavStyle.nav}>
        <div className={NavStyle.logo}>
          <img src="public/photos/Logo.png" alt="Logo" />
        </div>
        <div className={NavStyle.navLinks}>
          <a href="#Home">Heim</a>
          <a href="#About">Om meg</a>
          <a href="#Work">Prosjekt</a>
          <a href="#Contact" id="ContactStyle">
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;
