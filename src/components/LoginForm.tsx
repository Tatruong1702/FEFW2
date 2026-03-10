import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
  email: string;
}

export default function LoginForm() {
  const navigate = useNavigate();

  const onFinish = (values: LoginFormValues) => {
    console.log(values);
    // Chuyển sang trang form sau khi đăng nhập thành công
    navigate("/form");
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h1>
      <Form onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Nhập email" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}