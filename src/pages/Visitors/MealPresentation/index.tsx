import { FC } from "react";
import './index.scss';

const MealPresentation:FC = () => {
  return (
    <section className="meal_presentation flex__center padding">
      <h1>Les repas</h1>
      <h2>Notre unique objectif : vous mangez nous nous occupons du reste !</h2>
      <p>L'alimentation dans le sport est le carburant de votre voiture. 
        Si l'on veut performer, on doit manger en consequence ! 
        Mange de tout, vegetarien ou vegan choisissez votre regime 
        alimentaire et nous vous proposerons des menus ou creez 
        les votres avec notres banques d'aliments afin de vous donnez les mesures</p>
      <p>Pour atteindre vos objectifs nous devons suivre vos macros. 
        Au debut pour les personnes qui debutent dans le suivi
        alimentaire nous vous proposerons des macros s'approchant de
        la moyenne vous correspondant. Ensuite apres quelques semaines 
        vous serez les jugent avec qu'un seul facteur : comment vous sentez vous ?</p>
    </section>
  )
}

export default MealPresentation;
