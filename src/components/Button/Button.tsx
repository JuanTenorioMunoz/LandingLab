import './Button.css'

type ButtonProps = {
    text: string;
};

const Button = ({ text }: ButtonProps) => (
    <button className="button">{text}</button>
);



export default Button