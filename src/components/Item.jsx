import React from "react";
import cat from "../img/cat.png"

function Item({
  title,
  brand,
  taste,
  quantityOfFeed,
  feedText,
  quantityOfBonus,
  bonusText,
  additionalInfo,
  totalWeight,
  available,
  description
}) {
  const initialState = available ? 'default' : 'disabled';
  const [state, setState] = React.useState(initialState);
  const [cartTitle, setCartTitle] = React.useState(title);
  const titleEl = React.useRef();
  const bonus = quantityOfBonus ? <><b>{quantityOfBonus}</b> {bonusText}</> : <>{bonusText}</>;

  const handleClick = () => {
    if (state === 'disabled') {
      return;
    }

    if (state === 'default') {
      return setState('just-selected');
    }

    setCartTitle(title);
    setState('default');
  };

  const getDescription = () => {
    if (available) {
      if (state === 'default') {
        return <>Чего сидишь? Порадуй котэ, <span className="item__buy" onClick={handleClick}>купи.</span></>;
      }
      return <>{description}</>;
    }
    return <>Печалька, {taste} закончился</>;
  };

  const onMouseEnter = () => {
    if (state === 'just-selected') {
      setState('selected');
      setCartTitle('Котэ не одобряет?');
    }

    if (state === 'selected') {
      setCartTitle('Котэ не одобряет?');
    }
  };

  const onMouseLeave = () => {
    if (state === 'just-selected') {
      return setState('selected');
    }
    setCartTitle(title);
  };

  return (
    <li className={`item`}>
      <div
        className={`card card--${state}`}
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span className="card__title" ref={titleEl}>{cartTitle}</span>
        <br />
        <b className="card__brand">{brand}</b>
        <br />
        <b className="card__taste">{taste}</b>
        <br />
        <span className="card__feed-quantity"><b>{quantityOfFeed}</b> {feedText}</span>
        <br />
        <span className="card__bonus">{bonus}</span>
        <br />
        <span className="card__additional">{additionalInfo}</span>
        <br />
        <img className="card__img" src={cat} alt="Сытый кот" title="Сытый кот" />
        <div className="card__weight">
          <span className="card__weight-total">{totalWeight}</span>
          <span className="card__weight-kg">кг</span>
        </div>
      </div>
      <div className={`item__description item__description--${state}`}>{getDescription()}</div>
    </li>
  )
}

export default Item
