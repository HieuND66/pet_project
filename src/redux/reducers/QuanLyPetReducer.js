import { DANG_NHAP_ACTION, LAY_ACTION } from "../action/type/QuanLyUserType"



const stateDefault = {
  arrPet: [

  ]
}

export const QuanLyPetReducer = (state = stateDefault, action) =>{

  switch (action.type){
  
    case LAY_ACTION: {

      // const {animals} = action;
      state.arrPet = action.animals
      // const {animals} = action;
      // localStorage.setItem('ANIMALS', JSON.stringify(animals));
      // localStorage.setItem('ANIMALS', JSON.stringify(animals));
      return {...state}
    }
    default :
    return {...state}
  }
}