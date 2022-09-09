import React from 'react';
import { BiReset } from 'react-icons/bi';
import { GlobalContext } from '../../context/global.context';


const LeftSection = () => {

  const { type, size, dispatch } = GlobalContext();

  return (
   <>
    <section className="header__sec">
        <select className="slct" value={type} onChange={(eve)=> dispatch({ type: 'onTypeChange', payload: eve.target.value}) }>
          <option disabled>select</option>
          <option value="tshirt">T Shirt</option>
          <option value="jacket">Jacket</option>
          <option value="short">Short</option>
          <option value="pant">pant</option>
        </select>
        <select className="slct ml-2" value={size} onChange={(eve)=> dispatch({ type: 'onSizeChange', payload: eve.target.value}) }>
          <option disabled>size</option>
          <option value="XL">XL</option>
          <option value="L">L</option>
          <option value="MD">MD</option>
        </select>
        <button type="button" className="btn ml-2" onClick={()=>dispatch({ type: 'onClearFilter'})}>
          {' '}
          <BiReset /> Reset{' '}
        </button>
      </section>
   </>
  );
};

export default LeftSection;
