
import { quanLyUserServices } from "../../services/QuanLyUserServices"
import { LAY_ACTION } from "./type/QuanLyUserType";


export const layAction = (token) =>{

 
  return async (dispatch) =>{
    try {

      const result = await quanLyUserServices.lay(token);
      
      if(result.status === 200){
        dispatch({
          type: LAY_ACTION,
          animals: result.data.animals
        })
      }
      // console.log(result.data.animals);
    } catch (error) {
      console.log(error);
    }
  }
}