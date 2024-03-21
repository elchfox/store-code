import { DollarOutlined } from "@ant-design/icons";
import { Card, Flex, Form, Image, Input, InputNumber } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { productCreateAndUpdate } from "../../store/products/productsSlice";
import { SubmitButton } from "../Forms";

type ProductDetailsProps = {};

const ProductDetails: React.FC<ProductDetailsProps> = (props) => {
  const dispatch = useDispatch<any>();
  const [form] = Form.useForm();
  const { currentProduct, modeType } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    form.setFieldsValue(currentProduct);
  }, [currentProduct]);
  const onFinish = (values: any) => {
    dispatch(productCreateAndUpdate({ ...currentProduct, ...values }));
  };
  return (
    <Card
      className={"shadow"}
      style={{
        maxWidth: "26rem",
        width: "100%",
        borderRadius: "0.5rem",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        gap: "1rem",
      }}
      title={
        modeType === "create" ? "Create New Product" : currentProduct.title
      }
      bordered={false}
    >
      <Flex vertical gap={"large"}>
        <Image
          style={{ border: "1px solid", borderRadius: "0.5rem" }}
          src={currentProduct.thumbnail}
          width={100}
          alt={currentProduct.title}
          preview={false}
        />
        <Form
          layout={"vertical"}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
        >
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input placeholder="Name" name="title" maxLength={30} />
          </Form.Item>
          <Form.Item name="description">
            <Input.TextArea
              placeholder="Description"
              maxLength={200}
              showCount
              autoSize={{
                minRows: 5,
                maxRows: 5,
              }}
              name="description"
            />
          </Form.Item>
          <Form.Item
            name="price"
            rules={[{ required: true }]}
            style={{ maxWidth: 150 }}
          >
            <InputNumber
              placeholder="Price"
              required
              addonBefore={<DollarOutlined />}
            />
          </Form.Item>
          <SubmitButton form={form}>Save</SubmitButton>
        </Form>
      </Flex>
    </Card>
  );
};

export default ProductDetails;
