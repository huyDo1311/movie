import React, { useState } from "react";
import { Table, Button, Tag } from "antd";
import { columnsListUser } from "./ColumnDefinitions";

const UserTable = ({ listUser }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys) => setSelectedRowKeys(keys),
  };

  const onDeleteAll = () => {
    console.log("Deleting users with IDs:", selectedRowKeys);
    setSelectedRowKeys([]);
  };

  return (
    <div>
      <Button
        type="primary"
        danger
        onClick={onDeleteAll}
        disabled={selectedRowKeys.length === 0}
      >
        Xoá Tất Cả
      </Button>
      <Table
        className="mt-5"
        rowSelection={rowSelection}
        columns={columnsListUser}
        dataSource={listUser}
        rowKey="taiKhoan"
      />
    </div>
  );
};

export default UserTable;
