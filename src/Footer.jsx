import FooterStyle from "./modules/footer.module.css";
function Footer() {
  return (
    <>
      <div className={FooterStyle.footer}>
        <a href="https://www.figma.com/@e29d4a67_e3c6_4">
          <div className={FooterStyle.hug}>
            <img src="photos/logos_figma.png" alt="Figma logo" />
            <p>Figma</p>
          </div>
        </a>

        <a href="https://github.com/Hanna-kodehode">
          <div className={FooterStyle.hug}>
            <div>
              <img src="photos/mdi_github.png" alt="Github logo" />
            </div>
            <p>Github</p>
          </div>
        </a>

        <div className={FooterStyle.hug}>
          <div>
            <img src="photos/ix_e-mail.png" alt="E-mail logo" />
          </div>
          <p>hanna.kodehode@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
