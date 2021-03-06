import React from 'react';
import '../Styles/AboutUs.css';
import jerome from '../img/jerome.png';
import charlotte from '../img/charlotte.png';
import simon from '../img/simon.png';
import kevin from '../img/kevin.png';

const AboutUs = () => (
  <article className="aboutus">
    <section className="aboutus-intro">
      <h1 className="aboutus-title">À propos de nous</h1>
      <article className="aboutus-description">
        <p>
          L&apos;histoire de la Little Héro Academy débute en Avril 2021,
          lorsque 4 héros de la WildCodeSchool de Toulouse ont reçu pour mission
          de créer une application web. Seule contrainte: l&apos;utilisation
          d&apos;une base de données.
        </p>
        <p>
          Après quelques réunions méthodiques dans leur QG, nos héros sont
          partie sur l&apos;objectif de créer un site de jeux éducatifs pour
          enfants, avec des Super-Héros et des Super-Méchants. N&apos;hésitez
          pas à cliquer sur les cartes ci-dessous pour en savoir plus sur le
          profil de nos héros.
        </p>
      </article>
    </section>
    <section className="aboutus-cardbloc">
      <article className="aboutus-card" href="">
        <a href="https://www.linkedin.com/in/j%C3%A9rome-borga-7a4973133/">
          <div className="aboutus-img-container">
            <img className="aboutus-img" src={jerome} alt="personal-card" />
          </div>
          <div className="aboutus-card-title">
            <h2>
              Jerome,
              <br /> Super Héros
            </h2>
          </div>
          <div className="aboutus-card-text">
            Son pouvoir est immense ! Il a la capacité de dormir plus de 10h
            d&apos;affilée à moins qu&apos;on ne le réveille. Et en plus, il
            n&apos;est pas du tout du matin ! Il est super, c&apos;est un héros,
            c&apos;est un super héros !!
          </div>
          <div className="aboutus-stats">
            <div className="stats">
              <div>STR</div>
              <div>33</div>
            </div>
            <div className="stats">
              <div>INT</div>
              <div>65</div>
            </div>
            <div className="stats">
              <div>DEX</div>
              <div>51</div>
            </div>
            <div className="stats">
              <div>FATIGUE</div>
              <div>96</div>
            </div>
          </div>
        </a>
      </article>
      <article className="aboutus-card" href="">
        <a href="https://www.linkedin.com/in/charlotte-lucciardi-109443211">
          <div className="aboutus-img-container">
            <img className="aboutus-img" src={charlotte} alt="personal-card" />
          </div>
          <div className="aboutus-card-title">
            <h2>
              Charlotte,
              <br /> Super Héroine
            </h2>
          </div>
          <div className="aboutus-card-text">
            Son pouvoir est immense ! Elle a la capacité de se déplacer
            d&apos;un point à l&apos;autre presque plus vite que la lumière !
            Elle est super, c&apos;est une héroïne, c&apos;est une super héroïne
            !!
          </div>
          <div className="aboutus-stats">
            <div className="stats">
              <div>STR</div>
              <div>23</div>
            </div>
            <div className="stats">
              <div>INT</div>
              <div>66</div>
            </div>
            <div className="stats">
              <div>DEX</div>
              <div>89</div>
            </div>
            <div className="stats">
              <div>VITESSE</div>
              <div>30</div>
            </div>
          </div>
        </a>
      </article>
      <article className="aboutus-card" href="">
        <a href="https://www.linkedin.com/in/kevin-bouaziz-8636b9a7/">
          <div className="aboutus-img-container">
            <img className="aboutus-img" src={kevin} alt="personal-card" />
          </div>
          <div className="aboutus-card-title">
            <h2>
              Kevin,
              <br /> Super Héros
            </h2>
          </div>
          <div className="aboutus-card-text">
            Grâce à sa guitare magique, Kevin peut reveiller tout son quartier
            avec seulement 1 accord de rock ! Il combat sans relache les
            Super-Méchants armés de kazoos !
          </div>
          <div className="aboutus-stats">
            <div className="stats">
              <div>STR</div>
              <div>85</div>
            </div>
            <div className="stats">
              <div>INT</div>
              <div>72</div>
            </div>
            <div className="stats">
              <div>AGI</div>
              <div>31</div>
            </div>
            <div className="stats">
              <div>DISCRETION</div>
              <div>4</div>
            </div>
          </div>
        </a>
      </article>

      <article className="aboutus-card" href="recettespages/recette-page.html">
        <a href="https://www.linkedin.com/in/simon-ecoffet-b17b281bb">
          <div className="aboutus-img-container">
            <img className="aboutus-img" src={simon} alt="personal-card" />
          </div>
          <div className="aboutus-card-title">
            <h2>
              Simon,
              <br /> Super Héros
            </h2>
          </div>
          <div className="aboutus-card-text">
            Son pouvoir est immense ! Il a la capacité de coder plus vite que
            son ombre ! Il est super, c&apos;est un héros , c&apos;est un super
            héros !
          </div>
          <div className="aboutus-stats">
            <div className="stats">
              <div>STR</div>
              <div>80</div>
            </div>
            <div className="stats">
              <div>INT</div>
              <div>100</div>
            </div>
            <div className="stats">
              <div>DEX</div>
              <div>60</div>
            </div>
            <div className="stats">
              <div>Réflection</div>
              <div>100</div>
            </div>
          </div>
        </a>
      </article>
      {/* *************************************************************** */}
      <article className="aboutus-card" href="recettespages/recette-page.html">
        <div className="aboutus-card-title">
          <h2>Crédits</h2>
        </div>
        <div className="aboutus-card-text">
          Ils nous ont aidé à réaliser notre site, nous avons utilisé leur
          magnifique travail pour embellir le nôtre.
          <br />
          Nous les remercions ce sont aussi des super-héros , nos super-héros !
        </div>
        <div className="credit">
          <ul>
            <li>
              Base de données{' '}
              <a href="https://superheroapi.com/" className="href-footer">
                SuperHeroAPI
              </a>
            </li>
            <li>
              Vecteurs par{' '}
              <a
                href="https://waww.vecteezy.com/free-vector/cartoon"
                className="href-footer"
              >
                Vecteezy
              </a>{' '}
              et{' '}
              <a
                href="https://www.freepik.com/vectors/background"
                className="href-footer"
              >
                Freepik
              </a>
            </li>
            <li>
              Typographie{' '}
              <a href="https://fonts.google.com/" className="href-footer">
                GoogleFonts
              </a>{' '}
              et{' '}
              <a href="https://www.dafont.com/" className="href-footer">
                Dafont
              </a>
            </li>
            <li>
              Avatar cartoon{' '}
              <a
                href="https://superherotar.framiq.com/fr/"
                className="href-footer"
              >
                Superherotar
              </a>{' '}
            </li>
          </ul>
        </div>
      </article>
    </section>
  </article>
);

export default AboutUs;
