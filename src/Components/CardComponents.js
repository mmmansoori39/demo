
function CardComponents(props){
    return (
        <div className="container">
            <div>
                <img src={'https://source.unsplash.com/1600x800/?' + props.name}></img>
                <span></span>
            </div>
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
            <h3>{"₹" + props.price}</h3>
            <h4>{props.rating} <span><p>Must</p></span></h4>
        </div>
    )
}
export default CardComponents;