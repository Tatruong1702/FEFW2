import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { Button, Table } from "antd";
import { Layout } from "antd";
import LoginForm from "./components/LoginForm";
import UserHeader from "./components/Header";
import Lab1 from "./pages/lab1";
import Lab2 from "./pages/lab2";
import Lab4 from "./pages/lab4";
import { StoryList } from "./pages/lab5";

const columns = [
  { title: "Name", dataIndex: "name"},
  {title: "Age", dataIndex: "age"},
  {title: "Major", dataIndex: "major"},
  {title: "Status", dataIndex: "status", render: (status: string) => (
    <span style={{color: status === "active" ? "green" : "red"}}>{status}</span>
  )},
  {title: "Email", dataIndex: "email", render: (email: string) => (
    <a href="mailto:{email}">{email}</a>)
  },
  {title: "Image", dataIndex: "image", render: (image: string) => (
    <img src={image} alt="hinhanh" width={50} height={50} />
  )},
  {title: "Action", render: (_: any) => {
    return (
      <>
      <button style={{ marginRight: 8, backgroundColor: "#00ff33", padding: "4px 8px" }}>Edit</button>
      <button style={{ backgroundColor: "#ff0000", padding: "4px 8px" }}>Delete</button>
      </>)
  } }
]
const data = [
  {key: 1, name: "John", age: 25, major: "IT", status: "active", email: "john@example.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"},
  {key: 2, name: "Anna", age: 30, major: "Maketing", status: "negative", email: "anna@example.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"},
  {key: 3, name: "Mike", age: 22, major: "Design", status: "negative", email: "mike@example.com", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"},
]

const { Header, Content, Footer } = Layout;

// Simple Form Page Component
function FormPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Form Page</h1>
      <p className="mb-4">Bạn đã đăng nhập thành công! Đây là trang form.</p>
      <Link to="/">
        <Button type="primary">Quay lại trang chủ</Button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <>
    <Header style={{ color: "white" }}>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>
    </Header>
    <Content style={{ padding: 20 }}>
      
      <Routes>
        
        <Route path="/" element={
          
          
          <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
            <UserHeader />
            <Table columns={columns} dataSource={data} pagination={{pageSize: 2}}/>
            <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
            <Link to="/lab1">
              <Button type="primary">Lab1</Button>
            </Link>
            <Link to="/lab2">
              <Button type="default">Lab2</Button>
            </Link>
            <Link to="/lab4">
              <Button type="dashed">Lab4</Button>
            </Link>
            <Button type="default">Click me</Button>
            <Button type="dashed">Click me</Button>
            <Button type="link">Click me</Button>
            <Button type="text">Click me</Button>
            <StoryList />
          </div>
        } />
        <Route path="/lab1" element={<Lab1 />} />
        <Route path="/lab2" element={<Lab2 />} />
        <Route path="/lab4" element={<Lab4 />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
      
    </Content>
    
    <Footer>Footer</Footer>
      <Toaster />
    </>
  );
}

export default App;
