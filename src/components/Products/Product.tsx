import { IProduct } from "../../types";
import styles from "./Product.module.scss";
type IProductProps = {
  onClick?: () => void;
} & IProduct;
const Product: React.FC<IProductProps> = (props) => {
  const {onClick, title, thumbnail, description, ...rest } = props;
  return (
    <div className={styles.product} onClick={onClick}>
      <img src={thumbnail} className={styles.img} alt={title} />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div>
        <button className="btn danger">Delete</button>
      </div>
    </div>
  );
};

export default Product;
