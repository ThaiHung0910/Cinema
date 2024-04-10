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
};
