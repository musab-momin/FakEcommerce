import React from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/global.context'

const RightSection = () => {

  const { searchQuery, dispatch } = GlobalContext();

  return (
    <section className="header__sec on-right">
        Search:
        <input 
        type='text' 
        className='srch ml-1' 
        name='srch' 
        value={ searchQuery }
        onChange = { (eve) => dispatch({ type: "onQueryChange", payload: eve.target.value }) }
        />

        <Link to='/checkout' className='lnk ml-2'>Add to cart</Link>
    </section>
  )
}

export default RightSection