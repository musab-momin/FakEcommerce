import React, { useEffect } from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { GlobalContext } from '../context/global.context'


const Thankyou = () => {

    const {dispatch} = GlobalContext();

    useEffect(()=>{
        dispatch({ type: 'CLEARCART' })
    }, [dispatch])
  return (
    <div className='container'>
        <h1>THANK YOU</h1>
        <FcCheckmark size={150}/>
        <p>
        Dear Customer, You have made a recent purchase with us, and we thank you for it. 
        We really hope you have greate shopping experience. Comeback soon 
        </p>
    </div>
  )
}

export default Thankyou