import React ,{useContext} from 'react'
import { GlobalContext }  from '../context/GlobalState'

const Balance = () => {
  let Total=0;
  const { transactions}=useContext(GlobalContext);
  
  const arr=[];
  transactions.map((e)=>  arr.push(e.amount) );
  for (var i = 0; i < arr.length; i++) { Total+=arr[i]; }
  return (
    <div>
    <h4>Your Balance</h4>
    <h1 id='balance'>{Total}</h1>
    </div>
  )
}

export default Balance