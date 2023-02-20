import React,{useContext} from 'react'
import { GlobalContext }  from '../context/GlobalState'
const Expenses = () => {
  const { transactions}=useContext(GlobalContext);
  var Positive=0;
  var Negative=0;
  const arr=[];
  transactions.map((e)=>  arr.push(e.amount) );
  for (var i = 0; i < arr.length; i++) { 
    if(arr[i]>0)
    Positive+=arr[i];
    else
    Negative+=arr[i];
  }
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+{Positive}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-{Math.abs(Negative)}</p>
        </div>
      </div>
  )
}

export default Expenses