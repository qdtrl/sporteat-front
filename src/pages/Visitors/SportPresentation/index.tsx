import { FC } from "react";
import './index.scss';

const SportPresentation:FC = () => {
  return (
    <section className="sport_presentation flex__center padding">
      <h1>Le sport</h1>
      <h2>La facilite de rentrer ses seances et de suivres ses performances</h2>
      <p>Les premieres seances seances seront un peu longue a rentrer puis avec le temps il
        vous suffira de quelques cliques pour avoir un suivi complet de vos seances
        de sport et faire vos seances en fonctions de vos envies et des equipements que vous possedez.</p>
      <h2>Mon entrainement du jour</h2>
      <h3>Je le creer de A a Z :</h3>
      <p>Je choisis haut, bas ou tout le corps et suivant l'equipement que je dispose
        faire ma seance en choisissant les exercices et le nombres de repetitions et
        tours en objectif. A la fin de la seance valider ou modifier le nombre de
        repetitions / tours effectuer pour un suivit precis de vos performance. 
        Cette seance sera automatiquement sauvegarder pour la refaire plus tard
        continuer a s'ameliorer dessus.</p>
      <h3>Je suis le flow</h3>
      <p>A force de faire vos seances nous pourront vous proposer des seances que vous
        choisirez tout en continuant la progression sur les exercices. Cela vous permettra
        de varier vos seances et ne pas faire toujours la meme chose et eviter l'habitude
        a votre corps.</p>
      <h3>Continuer a m'ameliorer sur mes seances favorites</h3>
      <p>Qui n'a pas sa seance fetiche ? Continuer les seances passees et s'ameliorer dessus !</p>
      <h2>A venir</h2>
      <h3>Les types d'entrainements</h3>
      <p>Nous sommes entrain d'ajouter et voir pour different types de sports et renforcement 
        non plus seulement pour des entrainement type tours / repetitions mais tout autres types
        d'exercices type cardio, gymnastiques, etc...</p>
      <h3>Suivit Sport / Repas</h3>
      <p>Nous sommes entrain de continuer de developper notre application pour obtenir
        une correlation entre le nombre de seance de sport, les performances et le nombre
        de calorie dans vos repas pour permettre une adaptation et avoir la bonne alimentation
        en fonction de l'activite afin d'etre toujours bien avec sois-meme.</p>
    </section>
  )
}

export default SportPresentation;