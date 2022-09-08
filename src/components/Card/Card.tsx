import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import image from '../../images/cat.png'
//const image = require('../../images/cat.png') - можно сделать так без index.d.ts и строчек в tsconfig.json, но это нге так красиво (?)

const Card = () => {
  return (
    <div className="card">
      <div className="card__template">
        <div className="card__text">
          <p className="card__tagline">Сказочное заморское яство</p>
          <p className="card__title">Нямушка</p>
          <p className="card__subtitle">с фуа-гра</p>
          <p className="card__description">10 порций</p>
          <p className="card__description">мышь в подарок</p>
        </div>
        <img className="card__photo" src={image} alt='Пушистый котик со светлой шерсткой и миндальными глазами'/>
        <div className="card__sticker">
          <p className="card__sticker-text card__sticker-text_accent">0,5<br/><span className="card__sticker-text">кг</span></p>
        </div>
      </div>
      <p className="card__caption">Чего сидишь? Порадуй котэ, <Link className="card__caption card__caption_link" to="/">купи.</Link></p>
    </div>
  );
};

export default Card;