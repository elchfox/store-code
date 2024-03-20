import { Button, Card, Flex, Image, Typography } from "antd";
import { useDispatch } from "react-redux";
import { productDeleteById } from "../../store/products/productsSlice";
import { IProduct } from "../../types";
import styles from "./Product.module.scss";
const { Title, Paragraph } = Typography;

type IProductProps = {
  onClick?: () => void;
  isActive: boolean;
} & IProduct;
const Product: React.FC<IProductProps> = (props) => {
  const { onClick, title, thumbnail, description, isActive, ...rest } = props;
  const dispatch = useDispatch<any>();

  const onDelete = () => {
    dispatch(productDeleteById(rest.id || 0));
  };
  return (
    <Card
      className={`${styles.product} ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <Flex gap={"middle"}>
        <Image
          className={styles.img}
          src={thumbnail}
          alt={title}
          preview={false}
        />
        <Flex vertical gap={"small"} flex={1}>
          <Title level={5} style={{ margin: 0 }}>
            {title}
          </Title>
          <Paragraph style={{ margin: 0 }}>{description}</Paragraph>
        </Flex>
        <Flex align={"end"}>
          <Button
            type="primary"
            danger
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            Delete
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Product;
