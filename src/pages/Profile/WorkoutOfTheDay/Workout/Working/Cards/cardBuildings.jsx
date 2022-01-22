const Cards = ({ exo:indexArray , card }) => {
    const { set } = card;

    return (
        <div className="card">
            <div className="exos">
                <div className="exo">
                    <h3>{set[(indexArray % set?.length)]?.exercice?.name} - {set[(indexArray % set?.length)]?.rep} répétitions</h3>
                    <p>{set[(indexArray % set?.length)]?.exercice?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;