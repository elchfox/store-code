import { Button, Typography } from "@mui/material";
import { IProduct } from "../../types";
import styles from "./Product.module.scss";
import Card from "../Card";
type IProductProps = {
  onClick?: () => void;
} & IProduct;
const Product: React.FC<IProductProps> = (props) => {
  const { onClick, title, thumbnail, description, ...rest } = props;
  return (
    <Card className={styles.product} onClick={onClick}>
      <img src={thumbnail} className={styles.img} alt={title} />
      <div className={styles.content}>
        <Typography variant={"h5"} component={"b"}>{title}</Typography>
        <Typography variant={"body1"}>{description}</Typography>
        {/* <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p> */}
      </div>
      <div>
        <Button color={"error"} variant={"contained"}>Delete</Button>
      </div>
    </Card>
  );
};

export default Product;
