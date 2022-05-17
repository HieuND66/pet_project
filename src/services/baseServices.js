import axios from "axios";
// import { DOMAIN,TOKEN,TOKEN_MOVIE } from "";
import { DOMAIN } from "../utils/setting/setting";
export class baseService {


    post = (url) => {
      const key = 'v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ'
      const secret = '91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H'
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');
      params.append('client_id', key);
      params.append('client_secret', secret);
      console.log(url);
        return axios({
            url: `${DOMAIN}${url}`,
            method: 'post',
            // data: model,
            // body: params,
            body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
     
        })
      
    }

    // get = (url) => {
    //     return axios({
    //         url: `${DOMAIN}/${url}`,
    //         method: 'get',
    //         headers: { 'TokenCybersoft': TOKEN_MOVIE }
    //     })
    // }

    
}