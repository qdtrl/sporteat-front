const Cards = (props) => {
  const reps = props.card.rep_set;

  return(
      <div className="card">
          {console.log(props.card)}
          <div className="exos">
              <div className="exo">
                  <h3>{props.card.set?.exercices[(props.exo % props.card?.set.exercices.length)]?.name} - {reps} répétitions</h3>
                  <p>{props.card.set?.exercices[(props.exo % props.card?.set.exercices.length)]?.description}</p>
              </div>
          </div>
      </div>
  )
}

export default Cards;