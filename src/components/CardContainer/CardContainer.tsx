import Card, { CardProps } from "../Card/Card";

interface CardContainerProps {
    cards: CardProps[];
}

const CardContainer = ({ cards }: CardContainerProps) => {
    return (
        <div className="card-container">
            {cards.map((card) => (
                <Card
                    image={card.image}
                    status={card.status}
                    title={card.title}
                    body={card.body}
                    url={card.url}
                />
            ))}
        </div>
    );
};

export default CardContainer