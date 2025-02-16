import HomeStyle from "./modules/home.module.css";

function Home() {
  return (
    <div id="Home" className={HomeStyle.bigBox}>
      <div className={HomeStyle.background}>
        <img src="/public/photos/background.png" alt="Yellow background" />
      </div>
      <div className={HomeStyle.white}>
        <h1>Hanna S. Kristoffersen</h1>
        <p>Junior Front-End Utvikler</p>
        <hr />
        <button>Last ned min CV her</button>
        <hr />
        <div>
          <img src="" alt="" />
          <p>hanna.kodehode@gmail.com</p>
          <div>
            <a href="">
              <img src="" alt="" />
              <p>Figma</p>
            </a>
          </div>
          <div>
            <a href="">
              <img src="" alt="" />
              <p>Github</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
