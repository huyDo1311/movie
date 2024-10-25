import React, { useEffect, useState } from "react";
import { adminService } from "../../service/movieService";
import { Button, Space, Table, Tag } from "antd";
import { message } from "antd";
import { AddUser } from "./AddUser";


export default function AdminListUser() {
  const [listUser, setListUser] = useState([]);
  let fetchListUser = () => {
    adminService
      .layDanhSachUser()
      .then((result) => {
        setListUser(result.data.content);
      })
      .catch((err) => {
        console.log("🚀 ~ fetchListUser ~ err:", err);
      });
  };
  useEffect(() => {
    adminService
      .layDanhSachUser()
      .then((res) => {
        console.log("res.data", res.data);
        setListUser(res.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  let handleDelete = async (taiKhoan) => {
    try {
      let result = await adminService.xoaNguoiDung(taiKhoan);
      console.log("result", result);
      message.success("Xoa thanh cong");
      fetchListUser();
    } catch (error) {
      console.log("🚀 ~ handleDelete ~ error:", error);
      message.error("xoa that bai");
    }
  };
  const columns = [
    {
      title: "taiKhoan",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Loại khách hàng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (dataIndex, dataObject) => {
        if (dataObject.maLoaiNguoiDung === "KhachHang") {
          return <Tag color="blue">Khách hàng</Tag>;
        } else {
          return <Tag color="red">Quản trị</Tag>;
        }
      },
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, dataObject) => {
        return (
          <div className="">
            <Button
              onClick={() => {
                handleDelete(dataObject.taiKhoan);
              }}
              type="primary"
              className="bg-red-600"
            >
              Xoá
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="container mx-auto">
      <AddUser fetchListUser={fetchListUser} />
      <Table
        pagination={{
          pageSize: 20,
        }}
        // scroll={{
        //   y: 55 * 5,
        // }}
        columns={columns}
        dataSource={listUser}
      />
    </div>
  );
}
