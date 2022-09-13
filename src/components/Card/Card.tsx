import React, { useState } from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import image from '../../images/cat.png'
import {makeСorrectDeclensionOfMouseWord} from '../../utils/utils'

//  подредачить функцию?
//  добавить миксины для отсупа между заголовком и карточками?
//  минус марджин сработал по верхам, но не сработал по бокам, мб можно как-то исправить?
//  добавь линтер


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
  const [isCardSelectedHover, setIsCardSelectedHover] = useState(false);

  const cardClassName = 
    props.disabled ? "card card_disabled" : 
    isCardSelectedHover ? "card card_selected-hover" :
    isCardSelected ? "card card_selected" : 
    "card";
  const cardTextClassName = props.disabled ? "card__text card__text_disabled" : "card__text";
  const cardTitleClassName = props.disabled ? "card__title card__title_disabled" : "card__title";
  const cardSubtitleClassName = props.disabled ? "card__subtitle card__subtitle_disabled" : "card__subtitle";
  const cardPhotoClassName = props.disabled ? "card__photo card__photo_disabled" : "card__photo";
  const cardStickerClassName = 
    props.disabled ? "card__sticker card__sticker_disabled" :
    isCardSelectedHover ? "card__sticker card__sticker_selected-hover":
    isCardSelected ? "card__sticker card__sticker_selected" :
    "card__sticker";
  
  function clickOnCard (): void {
    if (!props.disabled) {
      setIsCardSelected(!isCardSelected)
      setIsCardSelectedHover(false);
    }
  }
  function handleMouseEnter (): void {
    if(isCardSelected) {
      setIsCardSelectedHover(true);
    }
  }
  function handleMouseOver (): void {
    setIsCardSelectedHover(false);
  }

  return (
    <div className="wrapper">
      <Link 
        className={cardClassName}
        to="/"
        onClick={clickOnCard}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOver}
      >
        <div className={cardTextClassName}>
          {isCardSelectedHover ? 
            (<p className="card__tagline card__tagline_accent">Котэ не одобряет?</p>) :
            (<p className="card__tagline">Сказочное заморское яство</p>)
          }
          <p className={cardTitleClassName}>Нямушка</p>
          <p className={cardSubtitleClassName}>{props.taste}</p>
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
        <img className={cardPhotoClassName} src={image} alt='Пушистый котик со светлой шерсткой и миндальными глазами'/>
        <div className={ cardStickerClassName}>
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