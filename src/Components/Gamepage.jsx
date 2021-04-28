import '../Styles/Gamepage.css';
import VocalRules from './VocalRules';

const Gamepage = ({ gameInformation }) => (
  <section className="gamepage">
    <div className="gamepage-container">
      <h2 className="gamepage-title">
        Bienvenue sur le jeu du {gameInformation.name} !
      </h2>
      <div className="game-rules">
        <div className="rules-heropicture-container">
          <img
            src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
            alt="hero"
            className="rules-heropicture"
          />
        </div>
        <div className="rules-text">
          <p>{gameInformation.rules}</p>
        </div>
        <div className="vocal-rules">
          <VocalRules gameInformation={gameInformation} />
        </div>
      </div>
    </div>
  </section>
);

export default Gamepage;
