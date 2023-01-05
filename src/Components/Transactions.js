import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";
import { Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
      axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch(err => console.error())
    }, []);
    
    console.log(transactions)

  return (
    <div className="transactions">  
        <h2>Bank Account Total:</h2>
            {transactions.map((transaction, index) => {
              return (
                  <div className="transaction">
                  {transaction.date} 
                  <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
                   {transaction.amount}
                </div>
              )
            })}
    </div>
  );
}

export default Transactions;