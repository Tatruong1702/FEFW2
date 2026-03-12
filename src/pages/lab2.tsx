import { Table } from "antd";

const columns_bt1 = [
    {title: "Product Name", dataIndex: "productName"},
    {title: "Price", dataIndex: "price"},
    {title: "Category", dataIndex: "category"}
];

const columns_bt2 = [
    {title: "Name", dataIndex: "name"},
    {title: "Email", dataIndex: "email"},
    {title: "Status", dataIndex: "status", reder:(status: string) => (
        <span style={{ color: status === "active" ? "green" : "red"}}>{status}</span>
    )},
    {title: "Action", reder: (_: any) => {
        return(
            <>
            <button style={{ color: "pink" }}>Edit</button>
            <button style={{ color: "yellow" }}>Delete</button>
            </>
        )
    }}
];

const data_bt2 = [
    {key: 1, name: "Tạ Văn Trường", email: "tvaantruog1702@gmail.com", status: "active"},
    {key: 2, name: "Nguyễn Văn A", email: "nguyenvana@gmail.com", status: "inactive"},
    {key: 3, name: "Lê Thị B", email: "lethib@gmail.com", status: "active"},
    {key: 4, name: "Phạm Văn C", email: "phamvanc@gmail.com", status: "inactive"}
]

const data_bt1 = [
    {key: 1, productName: "laptop", price: 1000, category: "Điện tử"},
    {key: 2, productName: "áo thun", price: 20, category: "Thời trang"},
    {key: 3, productName: "bàn phím", price: 50, category: "Điện tử"},
    {key: 4, productName: "giày thể thao", price: 80, category: "Thời trang"},
    {key: 5, productName: "tai nghe", price: 150, category: "Điện tử"},
    {key: 6, productName: "cầu lông", price: 40, category: "Thể thao"},
    {key: 7, productName: "đồng hồ", price: 200, category: "Phụ kiện"},
    {key: 8, productName: "balo", price: 60, category: "Phụ kiện"},
    {key: 9, productName: "áo khoác", price: 120, category: "Thời trang"},
    {key: 10, productName: "bàn làm việc", price: 300, category: "Nội thất"},
]


function Lab2() {
    return (
        <div>
        <div style={{ padding: 20 }}>
            <h1>Lab 2 - Danh sách sản phẩm</h1>
            <Table columns={columns_bt1} dataSource={data_bt1} pagination={{ pageSize: 3 }} />
        </div>
        <div style={{ padding: 20 }}>
            <h1>Lab 2 - User Management</h1>
            <Table columns={columns_bt2} dataSource={data_bt2} pagination={{ pageSize: 5 }} />
        </div>
        </div>
    );
}

export default Lab2;