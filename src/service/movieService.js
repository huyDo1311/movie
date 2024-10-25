import { http } from "./config";

export let movieService = {
    layDanhSachPhim: () => {
       return http.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
    },
    layChiTietPhim: (id) => {
        return http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
    },
    layHeThongRap: () => {
        return http.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap`);
    },
   
}

export let adminService = {
    layDanhSachUser: () => {
        return http.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=GP01");
    },
    xoaNguoiDung: (taiKhoan) => {
        return http.delete(`https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
    },
    themNguoiDung: (dataForm) => {
        return http.post('/api/QuanLyNguoiDung/ThemNguoiDung',dataForm);
    }
}