import Card, { CardProps } from "../Card/Card";

interface CardContainerProps {
    cards: CardProps[];
}

const CardContainer = ({cards}:CardContainerProps) => {
    cards.forEach(card => {
        return(
            <Card
                image={card.image}
                status={card.status}
                title={card.title}
                body={card.body}
                url={card.url}
            ></Card>
        )
    });
}

export default CardContainer