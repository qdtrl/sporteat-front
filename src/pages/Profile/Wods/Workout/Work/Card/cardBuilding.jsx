const CardBuilding = ({ card }) => {
    console.log(card);
    const { name, time, rep_set, set } = card
    const { min, sec } = time

    return (
    <div className="card">
        <h2>{name}</h2>
        <div className="exos">    
            <h3>Temps de repos entre les tours : {min} min {sec} s</h3>
            <h3>Nombre de tours : {rep_set} </h3>
        </div>
        <h3>Exercices</h3>
        <div className="exos">
            {
                set.map((exercice, index) => (
                    <div key={index} className="exo">
                        <h4>{exercice.exercice.name} - {exercice.rep} répétitions</h4>
                        <p>{exercice.exercice.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
)}

export default CardBuilding;