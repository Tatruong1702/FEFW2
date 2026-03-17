import { Form, Input, Button } from "antd";

const RegisterForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Register:", values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 500 }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Nhập tên" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Nhập email" },
          { type: "email", message: "Email không hợp lệ" }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Nhập số điện thoại" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Nhập mật khẩu" },
          { min: 6, message: "Tối thiểu 6 ký tự" }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirm"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Nhập lại mật khẩu" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Mật khẩu không khớp"));
            }
          })
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;