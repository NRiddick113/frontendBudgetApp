import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pie, PieChart,Cell } from "recharts";

const API = process.env.REACT_APP_API_URL

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState([])
  const [pieData, setPieData]= useState()
  
    let arr = []
    transactions.map((transaction) =>{
      arr.push(transaction.amount)
    })
    let total = arr.reduce((acc,transaction)=> acc + transaction, 0)
    // return total
  



useEffect(() => {

  axios
  .get(`${API}/transactions`)
  .then((res) => {
    setTransactions(res.data)
  })
  .catch(err => console.error())
}, []);

var colors= ['yellow', 'blue', 'fuchsia', 'green', 
'lime', 'maroon', 'plum', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'pink', 'skyblue'];

  return (
    <div className="transactions">  
    <h2>Bank Account Total:{total}</h2>
    {/* <h3></h3> */}
         {console.log(transactions)}
        {transactions.length > 0 && <PieChart width={730} height={250}>
  <Pie data={transactions} cx="50%" cy="50%" outerRadius={80} label="item_name" dataKey={"amount"}>
    {
      transactions.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]}/>
      ))
    }
  </Pie>
</PieChart>}

            {transactions.map((transaction, index) => {
              return (
                  <div className="transaction">
                    {new Date(transaction.date).toLocaleDateString('en-us', {year:"numeric", month:"long", day:"numeric"}) }
                  <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
                   ${transaction.amount}
                </div>
              )
            })}
    </div>
  );
}

export default Transactions;