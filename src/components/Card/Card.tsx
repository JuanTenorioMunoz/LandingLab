interface CardProps{
    image: string,
    status: string,
    title: string,
    body: string,
    url: string,
}

const Card  = ({image, status, title, body}:CardProps) => {
    return (
        <div className="card">
            <img src={image}></img>
            <h2>{status}</h2>
            <h1>{title}</h1>
            <h1>{body}</h1>
        </div>
    )
}

export default Card