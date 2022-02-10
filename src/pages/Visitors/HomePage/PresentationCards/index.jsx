import images from "../../../../constants/index";

const PresentationCards = () => {
	const cards = [
		{
			name: 'workout',
			title: "Vos seances sur mesure",
			secondeTitle: "La prise en main",
			text: `Pour commencer, c'est simple ! Il vous suffit de renseigner 
							les equipements que vous possedez chez vous votre forme physique puis la ou les parties du corps vous souhaitez travailler.
							Ensuite, Sporteat se charge ensuite de vous créer un programme sur mesure.`,
			image: images.workout
		},
			{
				name: "menu",
				title: "Des menus personnalisés",
				secondeTitle: "Un programme alimentaire adapté",
				text: `Nous vous guidons pour allier alimentation et sport pour des
							résultats à la hauteur de vos espérances.
							Vous bénéficierez ainsi des apports nécessaires et d'un nouveau rythme de vie.`,
				image: images.menu
			},
			{ 
				name: "followup",
				title: "Un suivi régulier",
				secondeTitle: "Un suivi de vos performances",
				text: `Parque nous savons qu'il est important que vous puissiez avoir un regard sur votre avancée,
							nous vous propons un reporting d'ensemble avec des graphiques et des chiffres concrets
							pour vous encourager dans votre progression !`,
				image: images.followup
			},
		]
	return (
		<>
			<h2 className="title-presentation"><strong>Sporteat</strong>, c'est quoi ?</h2>                
			<div className="container-icons">
				{cards.map((card, index) => (
					<div key={index} className="cards">
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