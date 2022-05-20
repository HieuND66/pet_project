import { quanLyUserServices } from "../../services/QuanLyUserServices"
import { DANG_NHAP_ACTION, LAY_ACTION } from "./type/QuanLyUserType";


export const dangNhapAction = (thongTinDangNhap) =>{

 
  return async (dispatch) =>{

    try {

      const result = await quanLyUserServices.dangNhap(thongTinDangNhap);

      if(result.status === 200){
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.access_token
        })
      }
      // dispatch({
      //   type:DANG_NHAP_ACTION,
      //   thongTinDangNhap: result

      // })
      // console.log('result', result.data.access_token);
    } catch (error) {
      console.log(error);
    }
  }
}

