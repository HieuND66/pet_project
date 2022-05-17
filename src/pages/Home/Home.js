import React,{ useEffect, createContext} from 'react'
import GetAPI from './GetAPI';
import './home.scss'

export const AuthContext = createContext();

export default function Home(props) {

  const petFinderKey = 'v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ'
  const petFinderSecret = '91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H'
    useEffect(() => {
      const fetchAccessToken = async() =>{
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
        params.append('client_id', petFinderKey);
        params.append('client_secret', petFinderSecret);
        const petFindRes = await fetch(
          'https://api.petfinder.com/v2/oauth2/token',{
            method: "POST",
            body: params
          }
        );
        
        console.log(await petFindRes.json());
      };
      fetchAccessToken()
    }, [])

  return (
    
    <div className='container'>

      <div className="card__container">
        <div className="card">
          <div className="card__content">
            <h3 className="card__header">Card 1</h3>
            <p className="card__info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="card__button">Read now</button>
          </div>
        </div>
        <div className="card">
          <div className="card__content">
            <h3 className="card__header">Card 2</h3>
            <p className="card__info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="card__button">Read now</button>
          </div>
        </div>
        <div className="card">
          <div className="card__content">
            <h3 className="card__header">Card 3</h3>
            <p className="card__info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="card__button">Read now</button>
          </div>
        </div>
      </div>

    </div>
  )
}
