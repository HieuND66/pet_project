import { baseService } from "./baseServices";


export class QuanLyUserServices extends baseService {

  constructor(){
    super()
  }

  dangNhap = (thongTinDangNhap) =>{
    console.log('ee');
    return this.post(`/v2/oauth2/token`, thongTinDangNhap)
  }
}


export const quanLyUserServices = new QuanLyUserServices()