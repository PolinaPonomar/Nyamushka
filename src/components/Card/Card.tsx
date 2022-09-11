import React, { useState, useEffect } from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import image from '../../images/cat.png'
//const image = require('../../images/cat.png') - можно сделать так без index.d.ts и строчек в tsconfig.json, но это нге так красиво (?)

export interface CardProps {
  taste: string
  numOfFeeds: string
  numOfMice: number
  numOfKg: string
  complimentString?: string
  selectedCaption: string
  disabled?: boolean
}

const Card = (props: CardProps) => {
  const [isCardSelected, setIsCardSelected] = useState(false);

  function makeСorrectDeclensionOfMouseWord (numOfMice: number): string {
    if ((numOfMice == 1)||((numOfMice % 10 === 1) && (numOfMice % 100 !== 11))) {
      return 'мышь'
    } else if ((numOfMice % 100 > 10) && (numOfMice % 100 < 15)) {
      return 'мышей'
    } else if ((numOfMice % 10 > 1) && (numOfMice % 10 < 5)) {
      return 'мыши'
    } else {
      return 'мышей'
    }
  }

  function clickOnCard (): void {
    if (!props.disabled) {
      setIsCardSelected(!isCardSelected)
    }
  }

  // function handleCardHover (): void {
  //   alert('z');
  // }

  // useEffect( () => {

  // }, [] )
  // если клик по карточке - onClick то подсовываем стиль без ховера
  // когда мышь уходит с карточки - подсовываем стиль с ховером onMouseOver={handleCardHover}

  return (
    <div className="wrapper">
      <Link className={ props.disabled ? "card card_disabled" : isCardSelected ? "card card_selected" : "card"} to="/" onClick={clickOnCard} >
        <div className={ props.disabled ? "card__text card__text_disabled" : "card__text"}>
          <p className="card__tagline">Сказочное заморское яство</p>
          <p className={ props.disabled ? "card__title card__title_disabled" : "card__title"}>Нямушка</p>
          <p className={ props.disabled ? "card__subtitle card__subtitle_disabled" : "card__subtitle"}>{props.taste}</p>
          <p className="card__description">
            <span className="card__description card__description_accent">{props.numOfFeeds} </span>
            порций
          </p>
          <p className="card__description">
            <span className="card__description card__description_accent">{props.numOfMice == 1 ? '': props.numOfMice} </span>
            {makeСorrectDeclensionOfMouseWord(props.numOfMice)} в подарок
          </p>
          <p className="card__description">{props.complimentString}</p>
        </div>
        <img className={ props.disabled ? "card__photo card__photo_disabled" : "card__photo"} src={image} alt='Пушистый котик со светлой шерсткой и миндальными глазами'/>
        <div className={ props.disabled ? "card__sticker card__sticker_disabled" : isCardSelected ? "card__sticker card__sticker_selected" : "card__sticker"}>
          <p className="card__sticker-text card__sticker-text_accent">
            {props.numOfKg}
            <br/>
            <span className="card__sticker-text">кг</span>
          </p>
        </div>
      </Link>
        { props.disabled ? (<p className="caption caption_disabled">Печалька, {props.taste} закончился.</p>) :
          isCardSelected ? (<p className="caption">{props.selectedCaption}</p>) :
          (<p className="caption">
            Чего сидишь? Порадуй котэ,
            <Link className="caption caption_link" to="/" onClick={clickOnCard}> купи.</Link>
          </p>)
        }
    </div>
  );
};

export default Card;