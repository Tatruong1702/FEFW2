import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Table } from "antd";
import axios from "axios";

export function StoryList() {
    const {data, isLoading} = useQuery({
        queryKey: ["GetAllStories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stories");
            return res.data;
        },
    });
    
    const qc = useQueryClient();
    const handleDelete = async (id: number) => {
        await axios.delete(`http://localhost:3000/stories/${id}`);
        qc.invalidateQueries({queryKey: ["GetAllStories"]});
    }
    const colums = [
        {
        title: "Tên truyện",
        dataIndex: "title",
        },
        {
        title: "Tác giả",
        dataIndex: "author",
        },
        {
        title: "Nội dung",
        dataIndex: "content",
        },
        {
        title: "Hình ảnh",
        dataIndex: "image",
        render: (src: string) => <img src={src} width={50} height={50} />
        },
        {
        title: "Ngày tạo",
        dataIndex: "createdAt",
        render: (date: string) => new Date(date).toLocaleDateString("vi-VN")
        },
        {
        title: "Action",
        render: (_: any, record: any) => (
            <button onClick={() => handleDelete(record.id)}>Xóa</button>
        ) 
        }

    ];
    // const data = [
    //     {
    //     title: "Truyện 1",
    //     }
    // ];
    return <Table columns={colums} dataSource={data} loading={isLoading} pagination={{ pageSize: 5 }} />;
}
