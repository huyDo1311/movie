import React, { useEffect, useState } from "react";
import { movieService } from "../../service/movieService";

import { Tabs } from "antd";
import moment from "moment/moment";

let ItemPhim = ({ phim }) => {
  return (
    <div className="flex space-x-3 mt-5">
      <img src={phim.hinhAnh} className="w-32" alt="" />
      <div className="">
        <h2 className="text-lg font-bold">{phim.tenPhim}</h2>
        <div className="grid grid-cols-2 gap-3">
          {phim.lstLichChieuTheoPhim.slice(0, 6).map((lichChieu, index) => {
            return (
              <span key={index} className="bg-white text-lime-500 px-5 py-2 rounded border-2 border-lime-500 font-black">
                {moment(lichChieu.ngayChieuGioChieu).format(
                  "DD/MM/YYYY - HH:mm"
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function TabMovie() {
  const [danhSachRap, setDanhSachRap] = useState([]);
  const onChange = (key) => {
    console.log(key);
  };
  useEffect(() => {
    movieService
      .layHeThongRap()
      .then((result) => {
        setDanhSachRap(result.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  let renderCumRap = (heThongRap) => {
    return heThongRap.lstCumRap.map((cumRap, index) => {
      return {
        key: index,
        label: (
          <div className="text-left w-80">
            <h3 className="truncate">{cumRap.tenCumRap}</h3>
            <p className="truncate text-lg text-gray-500">{cumRap.diaChi}</p>
          </div>
        ),
        children: (
          <div style={{ height: "500px" }} className="overflow-y-scroll">
            {cumRap.danhSachPhim.map((phim) => {
              return <ItemPhim phim={phim} key={phim.maPhim} />;
            })}
          </div>
        ),
      };
    });
  };

  let renderDanhSachRap = () => {
    return danhSachRap.map((heThongRap) => {
      return {
        key: heThongRap.maHeThongRap,
        label: <img src={heThongRap.logo} className="w-10" alt="..." />,
        children: (
          <Tabs
            defaultActiveKey="1"
            items={renderCumRap(heThongRap)}
            onChange={onChange}
            tabPosition="left"
            style={{ height: "500px" }}
          />
        ),
      };
    });
  };

  return (
    <div className="container mx-auto py-20">
      <Tabs
        defaultActiveKey="1"
        items={renderDanhSachRap()}
        onChange={onChange}
        tabPosition="left"
        style={{ height: "500px" }}
      />
    </div>
  );
}
