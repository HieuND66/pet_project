import { quanLyUserServices } from "../../services/QuanLyUserServices"
import { DANG_NHAP_ACTION } from "./type/QuanLyUserType";


export const dangNhapAction = (thongTinDangNhap) =>{

 
  return async (dispatch) =>{

    try {

      const result = await quanLyUserServices.dangNhap(thongTinDangNhap);
      console.log(result);
      // if(result.data.status === 200){
      //   dispatch({
      //     type:DANG_NHAP_ACTION,
      //     thongTinDangNhap: result.animals
      //   })
      // }
      dispatch({
        type:DANG_NHAP_ACTION,
        thongTinDangNhap: result

      })
      console.log('result', result);
    } catch (error) {
      console.log(error);
    }
  }
}