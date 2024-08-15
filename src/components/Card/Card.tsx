import './Card.css'

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
            <img className="image" src={image}></img>
            <section className='textCardSection'>
                <h2 className='status'>{status}</h2>
                <h1 className='title'>{title}</h1>
                <p className='body'>{body}</p>
            </section>
        </div>
    )
}

export default Card;
export type {CardProps};