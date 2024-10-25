import { Tag, Button } from "antd";
import PasswordField from "./PasswordField";

export const columnsListUser = [
  {
    title: "Tài Khoản",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
    sorter: (a, b) => a.taiKhoan.localeCompare(b.taiKhoan),
    render: (taiKhoan) => taiKhoan || "N/A",
  },
  {
    title: "Họ Tên",
    dataIndex: "hoTen",
    key: "hoTen",
    render: (hoTen) => hoTen || "N/A",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (email) => email || "N/A",
  },
  {
    title: "Số Điện Thoại",
    dataIndex: "soDT",
    key: "soDT",
    render: (soDT) => soDT || "N/A",
  },
  {
    title: "Mật Khẩu",
    dataIndex: "matKhau",
    key: "matKhau",
    render: (text) => <PasswordField password={text} />,
  },
  {
    title: "Loại Người Dùng",
    dataIndex: "maLoaiNguoiDung",
    key: "maLoaiNguoiDung",
    filters: [
      { text: "Khách Hàng", value: "KhachHang" },
      { text: "Quản Trị", value: "QuanTri" },
    ],
    onFilter: (value, record) => record.maLoaiNguoiDung === value,
    render: (loai) =>
      loai === "KhachHang" ? (
        <Tag color="green">Khách Hàng</Tag>
      ) : (
        <Tag color="blue">Quản Trị</Tag>
      ),
  },
  {
    title: "Thao Tác",
    key: "action",
    render: (_, record) => (
      <Button type="primary" danger onClick={() => console.log(`Deleting ${record.taiKhoan}`)}>
        Xoá
      </Button>
    ),
  },
];

export const columnsListMovie = [
  {
    title: "Mã Phim",
    dataIndex: "maPhim",
    key: "maPhim",
    sorter: (a, b) => a.maPhim - b.maPhim,
    render: (maPhim) => maPhim || "N/A",
  },
  {
    title: "Tên Phim",
    dataIndex: "tenPhim",
    key: "tenPhim",
    render: (tenPhim) => tenPhim || "N/A",
  },
  {
    title: "Trailer",
    dataIndex: "trailer",
    key: "trailer",
    render: (trailer) =>
      trailer ? (
        <a href={trailer} target="_blank" rel="noopener noreferrer">
          Xem Trailer
        </a>
      ) : (
        "Không có"
      ),
  },
  {
    title: "Hình Ảnh",
    dataIndex: "hinhAnh",
    key: "hinhAnh",
    render: (imgSrc) =>
      imgSrc ? (
        <img src={imgSrc} alt="Hình ảnh phim" style={{ width: 100 }} />
      ) : (
        "Không có"
      ),
  },
  {
    title: "Ngày Khởi Chiếu",
    dataIndex: "ngayKhoiChieu",
    key: "ngayKhoiChieu",
    sorter: (a, b) => new Date(a.ngayKhoiChieu) - new Date(b.ngayKhoiChieu),
    render: (date) =>
      date ? new Date(date).toLocaleDateString("vi-VN") : "N/A",
  },
  {
    title: "Đánh Giá",
    dataIndex: "danhGia",
    key: "danhGia",
    sorter: (a, b) => a.danhGia - b.danhGia,
    render: (danhGia) => danhGia || "Chưa đánh giá",
  },
  {
    title: "Mã Nhóm",
    dataIndex: "maNhom",
    key: "maNhom",
    render: (maNhom) => maNhom || "N/A",
  },
  {
    title: "Đang Chiếu",
    dataIndex: "dangChieu",
    key: "dangChieu",
    filters: [
      { text: "Đang chiếu", value: true },
      { text: "Không", value: false },
    ],
    onFilter: (value, record) => record.dangChieu === value,
    render: (isDangChieu) =>
      isDangChieu ? <Tag color="green">Có</Tag> : <Tag>Không</Tag>,
  },
  {
    title: "Sắp Chiếu",
    dataIndex: "sapChieu",
    key: "sapChieu",
    filters: [
      { text: "Sắp chiếu", value: true },
      { text: "Không", value: false },
    ],
    onFilter: (value, record) => record.sapChieu === value,
    render: (isSapChieu) =>
      isSapChieu ? <Tag color="blue">Có</Tag> : <Tag>Không</Tag>,
  },
  {
    title: "Hot",
    dataIndex: "hot",
    key: "hot",
    filters: [
      { text: "Hot", value: true },
      { text: "Không", value: false },
    ],
    onFilter: (value, record) => record.hot === value,
    render: (isHot) =>
      isHot ? <Tag color="red">Hot</Tag> : <Tag>Không</Tag>,
  },
  {
    title: "Thao Tác",
    key: "action",
    render: (_, record) => (
      <Button
        type="primary"
        danger
        onClick={() => handleDelete(record.maPhim)}
      >
        Xoá
      </Button>
    ),
  },
];
  // Delete handler (example)
  const handleDelete = (maPhim) => {
    console.log(`Deleting movie with ID: ${maPhim}`);
    // Add delete logic here (e.g., API call)
  };