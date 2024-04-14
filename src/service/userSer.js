import { MA_NHOM, http } from './urlConfig';

export const userSer = {
  postLogin: (data) => {
    let uri = '/api/QuanLyNguoiDung/DangNhap';
    return http.post(uri, data);
  },
  postRegister: (data) => {
    let uri = "/api/QuanLyNguoiDung/DangKy";
    return http.post(uri, { ...data, maNhom: MA_NHOM });
  },
  postUserInfo: () => {
    let uri = "/api/QuanLyNguoiDung/ThongTinTaiKhoan";
    return http.post(uri);
  },
  getInfoUser: () => {
    let uri = "/api/QuanLyNguoiDung/ThongTinTaiKhoan";
    return http.post(uri);
  },
  putUpdateInfo: (data) => {
    let uri = "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    return http.put(uri, data);
  },
};
