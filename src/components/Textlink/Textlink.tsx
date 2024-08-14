type TextlinkProps = {
    name: string;
    link: string;
}

const Textlink = ({name,link}:TextlinkProps) => {
   return <a href={link} className="text-link">{name}</a>
}

export default Textlink