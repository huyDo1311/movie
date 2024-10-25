import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { http } from "../../service/config";
import { Flex, Progress } from "antd";
import { movieService } from "../../service/movieService";
import { NavLink } from "react-router-dom";

export default function DetailPage() {
  let params = useParams();
  let { id } = params;
  let navigate = useNavigate();
  // ush
  const [detail, setDetail] = useState({});
  // useParams ~ lấy tham số từ url
  // console.log("params:", params);
  useEffect(() => {
    // gọi api lấy chi tiết phim
    movieService
      .layChiTietPhim(id)
      .then((result) => {
        // console.log("data", result.data.content);
        setDetail(result.data.content);
      })
      .catch((err) => {
        alert("Không tìm thấy phim");
      });
    // thenc
  }, []);
  let handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="p-5">
      <h2>{detail.tenPhim}</h2>
      <img src={detail.hinhAnh} alt="" className="h-96" />
      <p>{detail.moTa}</p>
      <Flex gap="small" wrap>
        <Progress
          type="circle"
          percent={detail.danhGia * 10}
          size={120}
          format={() => <span className="text-base font-medium text-red-600">{detail.danhGia}/10 điểm</span>}
        />
      </Flex>
      {/* <button className="bg-cyan-500 hover:bg-cyan-600" onClick={handleGoBack}>
        Go Back
      </button> */}
      <NavLink to="/booking" className="px-5 py-2 bg-red-500 text-white rounded">Mua vé</NavLink>
    </div>
  );
}
