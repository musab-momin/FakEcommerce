import React, { useState } from 'react';
import { GlobalContext } from '../../context/global.context';
import Record from './Record';
import './table.css';

const Table = () => {
  const { data, dispatch } = GlobalContext();
  const [checkedState, setCheckedState] = useState(
    new Array(data.length).fill({ amount: '', selected: false })
  );

  const onCheckboxChange = position => {
    const updatedState = checkedState.map((entry, index)=>{
      if(index === position){
        if(checkedState[position].amount > 0 && checkedState[position].amount !== ""){
          dispatch({ type: 'addToCart', payload: [ position, checkedState[position].amount ] })
          return {...entry, selected: !entry.selected}
          // eslint-disable-next-line no-else-return
        }else{
          // eslint-disable-next-line no-alert
          alert(`Please enter amount`)
        }
      }
      return entry
    })
    setCheckedState(updatedState);
  };

  const onAmountChange = (value, position) => {
    const updatedState = checkedState.map((entry, index) => {
      if(index === position){
        if(value <= data[position].quantity){
          return {...entry, amount: value}
        // eslint-disable-next-line no-else-return
        }else{
          // eslint-disable-next-line no-alert
          alert(`Only ${data[position].quantity} are available`)
        }
      }
      return entry;
    });
    setCheckedState(updatedState)
  };

  return (
    <table className="tbl">
      <thead>
        <tr className="tbl-head">
          <th style={{ width: '50px' }}>Image</th>
          <th>Name</th>
          <th>Color</th>
          <th>Stock</th>
          <th>Price</th>
          <th style={{ textAlign: 'right' }}>Buy</th>
        </tr>
      </thead>
      {data.length > 0 ? (
        data.map((item, index) => (
          <Record
            key={item.id}
            {...item}
            inptProp={checkedState[index]}
            position={index}
            onCheckboxChange={onCheckboxChange}
            onAmountChange={onAmountChange}
          />
        ))
      ) : (
        <div>Record not found</div>
      )}
    </table>
  );
};

export default Table;

// 011-45 45 45
