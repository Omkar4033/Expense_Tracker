import React, { useState, useContext} from "react";
import { GlobalContext }  from '../context/GlobalState'

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

 const {addTransaction} =useContext(GlobalContext);




  const handleChange=(e)=>{
    setText(e.target.value)
  }
  const handleAmount=(e)=>{
    setAmount(e.target.value)
  }
  const handleInput=()=> {
    console.log(text,amount);
  }
  const onsubmit= e => {
    e.preventDefault();
    const newTransaction={
      id:Math.floor(Math.random() * 10000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={handleChange}
            type="text"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input 
           value={amount}
            onChange={handleAmount}
          type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button  onClick={handleInput} className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
