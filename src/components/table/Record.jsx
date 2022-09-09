import React from 'react';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiEmojiSad } from 'react-icons/hi';

const Record = ({ title, price, image, description, inStock, inptProp, position, onCheckboxChange, onAmountChange }) => {

    

  const avilableStock = () => {
    return [<BsFillEmojiSmileFill key='smile'/>, 'In Stock'];
  };
  const outOfStock = () => {
    return [<HiEmojiSad key='sad'/>, 'Out Of Stock'];
  };

  return (
    <tbody>
      <tr>
        <td>
          <img src={image} alt="#" />
        </td>
        <td className="primary-clr">{title}</td>
        <td className="primary-clr">{description.color}</td>
        <td className="green-clr">
          {inStock ? avilableStock() : outOfStock()}
        </td>
        <td>${price}</td>
        <td className="td-spe">
          <input 
          type="text" 
          className="td-inp" 
          value={ inptProp.amount }
          onChange = { (eve) => onAmountChange(eve.target.value, position) }
          />
          <button type="button" className="ml-1">
            <AiOutlineShoppingCart color="#ffff" />
          </button>
          <input 
          type="checkbox" 
          className="ml-2" 
          value={ inptProp.selected }
          checked={ inptProp.selected }
          onChange = { ()=> onCheckboxChange(position) }
          />
        </td>
      </tr>
    </tbody>
  );
};

export default Record;
