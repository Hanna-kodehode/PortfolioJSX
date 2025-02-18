import AboutStyle from "./modules/about.module.css";

function About() {
  return (
    <div id="About" className={AboutStyle.bigBox}>
      <div className={AboutStyle.white}>
        <h1>Om meg</h1>
        <hr />
        <h3>Hello World! </h3>
        <p>
          Eg heiter Hanna, og eg er ein 23 år gammal student som for tida
          studerar ved JobLoop sitt kurs, Kodehode. Eg er på jakt etter ein
          praksisplass der eg kan få praktisk erfaring, utvide kunnskapen min.
          Kven veit— kanskje eg til og med blir ein framtidig tilsett hjå dykk?
        </p>
        <br />
        <p>
          Eg har alltid hatt ein djup lidenskap for ulike former for kunst. På
          fritida liker eg å lage kostyme og å game. Desse hobbyane har lært meg
          verdifulle ferdigheiter, som presisjon, fokus på kvalitet,
          samarbeidsevner og diverse datakunnskapar.
        </p>
        <br />
        <p>
          Eg er ivrig etter å utvikle meg, og kan ikkje vente med å bringe
          ferdigheitene og kreativiteten min til teamet dykkar!
        </p>
      </div>
      <div className={AboutStyle.yellow}>
        <img src="public/photos/gul.png" alt="Yellow decoration" />
      </div>
      <img
        className={AboutStyle.portrait}
        src="public/photos/me background.png"
        alt="Portrait of me"
      />
    </div>
  );
}

export default About;
