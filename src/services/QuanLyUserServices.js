import { baseService } from "./baseServices";


export class QuanLyUserServices extends baseService {

  constructor(){
    super()
  }

  dangNhap = (thongTinDangNhap) =>{
    return this.post(`/v2/oauth2/token`, thongTinDangNhap)
  }

  lay = (token) =>{
    return this.get(`/v2/animals`, token)
  }
}


export const quanLyUserServices = new QuanLyUserServices()