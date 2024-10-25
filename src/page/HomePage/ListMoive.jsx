import React, { useEffect, useState } from "react";
import { http } from "../../service/config";
import { Card } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import Meta from "antd/es/card/Meta";
import { movieService } from "../../service/movieService";


export default function ListMoive() {
  let navigate = useNavigate();
  let [state, setState] = useState([]);
  useEffect(() => {
    movieService
      .layDanhSachPhim()
      .then((result) => {
        setState(result.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  let renderListMovie = () => {
    return state.map((movie, index) => {
      return (
        <Card
          onClick={() => {
            navigate(`/detail/${movie.maPhim}`);
          }}
          key={movie.maPhim}
          className="hover:bg-blue-400 hover:scale-90 transition duration-300"
          //   title={movie.tenPhim}
          cover={
            <img
              style={{ height: 250, object: "fit" }}
              alt={movie.tenPhim}
              src={movie.hinhAnh}
            />
          }
        >
          <Meta title={movie.tenPhim} />
          {/* <NavLink to={`/detail/${movie.maPhim}`}>Xem chi tiet</NavLink> */}
        </Card>
      );
    });
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-6 gap-4">{renderListMovie()}</div>
    </div>
  );
}
