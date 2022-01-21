import workoutImage from '../../../../assets/icons/workout.png';
import menuImage from '../../../../assets/icons/menu.png';
import followupImage from '../../../../assets/icons/followup.png';


const PresentationCards = () => {
	const cards = [
		{
			name: 'workout',
			title: "Des exercices sur mesure",
			secondeTitle: "Prise en main",
			text: `Pour commencer, c'est simple ! Il vous suffit de renseigner 
							votre forme physique puis la ou les parties du corps vous souhaitez travailler.
							Ensuite, Sporteat se charge ensuite de vous créer un programme sur mesure.`,
			image: workoutImage
		},
			{
				name: "menu",
				title: "Des menus personnalisés",
				secondeTitle: "Un programme alimentaire adapté",
				text: `Nous vous guidons pour allier alimentation et sport pour des
							résultats à la hauteur de vos espérances.
							Vous bénéficierez ainsi des apports nécessaires et d'un nouveau rythme de vie plus sain.`,
				image: menuImage
			},
			{ 
				name: "followup",
				title: "Un suivi régulier",
				secondeTitle: "Un suivi de vos performances",
				text: `Parque nous savons qu'il est important que vous puissiez avoir un regard sur votre avancée,
							nous vous propons un reporting d'ensemble avec des graphiques et des chiffres concrets
							pour vous encourager dans votre progression !`,
				image: followupImage
			},
		]
	return (
		<>
			<h2 className="title-presentation"><strong>Sporteat</strong>, c'est quoi ?</h2>                
			<div className="container-icons">
				{cards.map((card) => (
					<div className="cards">
						<h3>{card.title}</h3>
						<div className="text">
							<h4>{card.secondeTitle}</h4>
							<p>{card.text}</p>
						</div> 
						<div className="image">
								<img src={card.image} className="icons" alt={card.name}></img>
						</div>
					</div>
				))} 
			</div>          
  	</>
	)
};

export default PresentationCards;