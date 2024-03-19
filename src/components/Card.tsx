
const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...rest } = props;
    return (
        <div className={`card ${className}`} {...rest}>
            {children}
        </div>
    );
};

export default Card;
