import axios from "axios";

// import { DOMAIN,TOKEN,TOKEN_MOVIE } from "";
import { DOMAIN } from "../utils/setting/setting";

export class baseService {


    post = (url, thongTinDangNhap ) => {

      // const key = 'v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ'
      // const secret = '91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H'
      const params = new FormData();
      params.append('grant_type', 'client_credentials');
      params.append('client_id', thongTinDangNhap.key);
      params.append('client_secret', thongTinDangNhap.secret);
      // console.log(url);
        return axios({
            url: `${DOMAIN}${url}`,
            method: 'post',
            data: params,
 
        })
      
    }

    get = (url) => {
    let token =  localStorage.getItem('USER_LOGIN').replace(/\"/g, "");
        return axios({
            url: `${DOMAIN}${url}`,
            method: 'get',
            headers: {
              'Authorization': 'Bearer ' + token
            }
        })
    }

    
}