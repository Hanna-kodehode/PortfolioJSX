import HomeStyle from "./modules/home.module.css";

function Home() {
  return (
    <div id="Home" className={HomeStyle.bigBox}>
      <div className={HomeStyle.yellow1}>
        <img src="/public/photos/gul.png" alt="Yellow decoration" />
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
      <div className={HomeStyle.yellow2}>
        <img src="/public/photos/gul.png" alt="Yellow decoration" />
      </div>
    </div>
  );
}

export default Home;
