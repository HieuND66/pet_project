import { DANG_NHAP_ACTION, LAY_ACTION } from "../action/type/QuanLyUserType"


let user ={};
if(localStorage.getItem('USER_LOGIN')){
  user = JSON.parse(localStorage.getItem('USER_LOGIN'))
}
const stateDefault = {
  userLogin: user
}

export const QuanLyUserReducer = (state = stateDefault, action) =>{
  switch (action.type){
    case DANG_NHAP_ACTION: {
      const {thongTinDangNhap} = action;

      localStorage.setItem('USER_LOGIN', JSON.stringify(thongTinDangNhap));
      return {...state, userLogin: thongTinDangNhap}
    }
    // case LAY_ACTION: {
    //   console.log('er');
    //   const {animals} = action;
    //   localStorage.setItem('ANIMALS', JSON.stringify(animals));
    //   return {...state, animals: animals}
    // }
    default :
    return {...state}
  }
}