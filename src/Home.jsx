import HomeStyle from "./modules/home.module.css";

function Home() {
  return (
    <div id="Home" className={HomeStyle.bigBox}>
      <div className={HomeStyle.white}>
        <h1>Hanna S. Kristoffersen</h1>
        <h4>Junior frontend utvikler</h4>
        <span></span>
        <a href="cv/cv.docx" download>
          <button>Last ned min CV her!</button>
        </a>
        <span></span>
        <div className={HomeStyle.imgDiv}>
          <img src="photos/ix_e-mail.png" alt="Email icon" />
          <p>hanna.kodehode@gmail.com</p>
        </div>
        <a href="https://github.com/Hanna-kodehode">
          <div className={HomeStyle.imgDiv}>
            <img src="photos/mdi_github.png" alt="Github icon" />
            <p>Min Github</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
