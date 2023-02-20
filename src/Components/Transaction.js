import React, {useContext} from 'react'
import { GlobalContext }  from '../context/GlobalState'
const Transaction = (props) => {

 const {DeleteTransaction}= useContext(GlobalContext);

  return (

    <li className=  {props.trans.amount>0 ?"plus": "minus"}>
          {props.trans.text} <span>{props.trans.amount}</span>
          <button onClick={() => DeleteTransaction(props.trans.id)} className="delete-btn">x</button>
        </li> 
  )
}

export default Transaction