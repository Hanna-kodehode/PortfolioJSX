import WorkStyle from "./modules/work.module.css";

function Work() {
  return (
    <div id="Work" className={WorkStyle.bigBox}>
      <div className={WorkStyle.white}>
        <h1>Prosjekt</h1>

        <span></span>
        <p className={WorkStyle.p}>
          På skulen har eg lært grunnleggande webutvikling og design, inkludert
          HTML, CSS, JavaScript, 21. century skills og Figma. Desse verktøya har
          gitt meg eit grunnlag for å lage enkle, responsive nettsider og
          designe prototypar. Eg har òg blitt introdusert for viktige digitale
          ferdigheiter som problemløysing og samarbeid.
        </p>

        <p className={WorkStyle.p}>
          Eg er framleis tidleg i utviklinga mi, men eg er spent på å halde fram
          med å lære og utvikle meg!
        </p>
        <span></span>
        <div>
          <a href="">
            <img src="" alt="" />
            <p>Github</p>
          </a>
        </div>
        <div>
          <a href="">
            <img src="" alt="" />
            <p>Figma</p>
          </a>
        </div>
      </div>
      <img
        className={WorkStyle.portrait}
        src="photos/me background.png"
        alt="Portrait of me"
      />
    </div>
  );
}

export default Work;
