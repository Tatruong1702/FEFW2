import { Form, Input, Button, InputNumber } from "antd";

const ProductForm = () => {
  const onFinish = (values: any) => {
    console.log("Product:", values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
      <Form.Item
        label="Tên sản phẩm"
        name="name"
        rules={[{ required: true, message: "Nhập tên sản phẩm" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Giá"
        name="price"
        rules={[{ required: true, message: "Nhập giá" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Số lượng"
        name="quantity"
        rules={[{ required: true, message: "Nhập số lượng" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Mô tả" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Thêm sản phẩm
      </Button>
    </Form>
  );
};

export default ProductForm;