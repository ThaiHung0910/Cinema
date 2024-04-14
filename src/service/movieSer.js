import { MA_NHOM, http } from './urlConfig';

export const movieSer = {
  getListMovies: () => {
    let uri = `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`;
    return http.get(uri);
  },
  getDetailMovie: (idMovie) => {
    let uri = `/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idMovie}`;
    return http.get(uri);
  },
  getScheduleMovie: (idMovie) => {
    let uri = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`;
    return http.get(uri);
  },
  getMovieByTheater: (params) => {
    let uri = "/api/QuanLyRap/LayThongTinLichChieuHeThongRap";
    return http.get(uri, { params });
  },
  getTheater: (params) => {
    let uri = "/api/QuanLyRap/LayThongTinHeThongRap";
    return http.get(uri, { params });
  },
  getListChair : (idMovie) => {
    let uri = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idMovie}`
    return http.get(uri)
  },
  postDataBookingChair: (data) => {
    let uri = "/api/QuanLyDatVe/DatVe";
    return http.post(uri, data);
  },

};
