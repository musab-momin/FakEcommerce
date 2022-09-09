import React from 'react';
import { GlobalContext } from '../../context/global.context';

const Item = ({ id, image, quantity, price, title }) => {
  const { dispatch } = GlobalContext();

  return (
    <tbody className="center-bdy">
      <tr className="main__tr">
        <td className="td-col-2">
          <div className="flex-center">
            <button
              type="button"
              className="qunt-btn"
              onClick={() => dispatch({ type: 'removeFromCart', payload: [id, quantity] })}
            >
              {' '}
              X{' '}
            </button>
            <img src={image} alt="#" className="ml-2" />
          </div>
          {title}
        </td>
        <td> ${price} </td>
        <td>
          <div className="td-btn">
            <button type="button" className="qunt-btn" onClick={()=> { dispatch({ type:'toggleQuantity', payload: [id, 'decrease'] }) }}>-</button>
            {quantity}
            <button type="button" className="qunt-btn" onClick={()=> { dispatch({ type:'toggleQuantity', payload: [id, 'increase'] }) }}>+</button>
          </div>
        </td>
        <td> ${price}.00 </td>
      </tr>
    </tbody>
  );
};

export default Item;
