import { Layout, Form, Input, Button, Table, Modal } from "antd";
import { useState } from "react";

const { Header, Content, Footer } = Layout;

export default function Lab1() {

  // Form
  const onFinish = (values: any) => {
    console.log(values);
  };

  // Table
  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
  ];

  const data = [
    { key: 1, name: "John", age: 25 },
    { key: 2, name: "Anna", age: 30 },
  ];

  // Modal
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 20 }}>

      <h1>Lab 1 - Ant Design</h1>

      {/* 1 Layout */}
      <Layout style={{ marginBottom: 40 }}>
        <Header style={{ color: "white" }}>Header</Header>
        <Content style={{ padding: 20 }}>Content</Content>
        <Footer>Footer</Footer>
      </Layout>

      {/* 2 Form */}
      <h2>Form</h2>
      <Form onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Nhập email" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary">
            Login
          </Button>
        </Form.Item>
      </Form>

      {/* 3 Table */}
      <h2>Table</h2>
      <Table columns={columns} dataSource={data} />

      {/* 4 Modal */}
      <h2>Modal</h2>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        Nội dung modal
      </Modal>

    </div>
  );
}