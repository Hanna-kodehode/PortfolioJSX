import FooterStyle from "./modules/footer.module.css";
function Footer() {
  return (
    <>
      <div className={FooterStyle.footer}>
        <div className={FooterStyle.hug}>
          <img src="public/photos/logos_figma.png" alt="Figma logo" />
          <a href="https://www.figma.com/@e29d4a67_e3c6_4">Figma</a>
        </div>
        <div className={FooterStyle.hug}>
          <img src="public/photos/mdi_github.png" alt="Github logo" />
          <a href="https://github.com/Hanna-kodehode">Github</a>
        </div>
        <div className={FooterStyle.hug}>
          <img src="public/photos/ix_e-mail.png" alt="E-mail logo" />
          <p>hanna.kodehode@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
