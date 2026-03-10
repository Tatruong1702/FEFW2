import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { Button } from "antd";
import { Layout } from "antd";
import LoginForm from "./components/LoginForm";
import Lab1 from "./pages/lab1";

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
            <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
            <Link to="/lab1">
              <Button type="primary">Lab1</Button>
            </Link>
            <Button type="default">Click me</Button>
            <Button type="dashed">Click me</Button>
            <Button type="link">Click me</Button>
            <Button type="text">Click me</Button>
          </div>
        } />
        <Route path="/lab1" element={<Lab1 />} />
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
