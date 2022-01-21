export const Field = (props) => {
    return(
        <div className={`field ${(props.error && "error" )|| ""}`}>
        {   
            (props.area 
            &&
            <textarea name="" id="" cols="30" rows="10" className="input" 
            // eslint-disable-next-line react/jsx-no-duplicate-props
            placeholder=" " value={props.value} onChange={props.change} name={props.name}></textarea>
            )||
            <input type={ 
                (props.password && "password") || "text"
            } className="input" placeholder=" "
              value={props.value} onChange={props.change} name={props.name}/> }
            <div className="label">
                {props.label}
            </div>
            {
                props.error
                &&
                <div className="error">
                    {props.error}
                </div>
            }
        </div>
    )
}