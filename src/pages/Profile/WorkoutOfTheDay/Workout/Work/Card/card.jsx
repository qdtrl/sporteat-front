const Card = ({ card }) => {
    const { name, time, rep_set, set } = card
    const { min, sec } = time
    const { rep, exercices } = set
    return (
    <div className="card">
        <h2>{name}</h2>
        <div className="exos">    
            <h3>Temps : {min} min {sec} s</h3>
            <h3>Nombre de tours : {rep_set} </h3>
        </div>
        <h3>Exercices</h3>
        <div className="exos">
            {
                exercices.map((exo, index) => (
                    <div key={index} className="exo">
                        <h4>{exo.name} - {rep} répétitions</h4>
                        <p>{exo.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
)}

export default Card;