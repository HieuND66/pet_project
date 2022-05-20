import React, { useEffect } from 'react'
import './home.scss'
import { useDispatch, useSelector } from 'react-redux'
import { layAction } from '../../redux/action/QuanLyPetAction'
import { history } from '../../App';


export default function Home(props) {
  const dispatch = useDispatch();

  const { arrPet } = useSelector(state => state.QuanLyPetReducer);


  useEffect(() => {
    const action = layAction(localStorage.getItem('USER_LOGIN'));
    dispatch(action);
  }, [])

  const renderPets = () => {
    return arrPet.map((pet, index) => {
      return <div className="grid__item" key={index}>
        <div className="card">
          {pet.photos.length !== 0 ? <img src={pet.photos[0].large} alt="" className="card__img" /> : <img src="https://i.picsum.photos/id/1062/5092/3395.jpg?hmac=o9m7qeU51uOLfXvepXcTrk2ZPiSBJEkiiOp-Qvxja-k" alt="" className="card__img" />}
          <div className="card__content">
            <h1 className="card__header">{pet.name}</h1>
            <p className="card__text">species: {pet.species}</p>
            <p className="card__text">size: {pet.size}</p>
            <p className="card__text">gender: {pet.gender}</p>
            <a href={pet.url} target='_blank' className="card__btn" >View Detail</a>
          </div>
        </div>
      </div>
    })
  }

  if (localStorage.getItem('USER_LOGIN')) {
    return (
      <div className='container category_pet'>
        {localStorage.getItem('USER_LOGIN') ? <div className="grid">
          {renderPets()}
        </div> : history.goBack()}
      </div>
    )
  } else {
    history.push("/login")
    return null
  }
}
