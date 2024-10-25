import React, { useState } from "react";
import { Table, Button, Tag } from "antd";
import { columnsListMovie } from "./ColumnDefinitions";

const MovieTable = ({ state }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys) => setSelectedRowKeys(keys),
  };

  const onDeleteAll = () => {
    console.log("Deleting movies with IDs:", selectedRowKeys);
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
        columns={columnsListMovie}
        dataSource={state}
        rowKey="maPhim"
      />
    </div>
  );
};

export default MovieTable;
