import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };
  
  const addTransaction = (newtransaction) => {
    axios
    .post(`${API}/transactions`, newtransaction)
    .then(
    () => {
    navigate(`/transactions`);
    })
    .catch((c) => console.error("catch", c));
   };
   
  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction()
  };
  return (
    <div className="New Transaction" >
      <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={transaction.date}
          placeholder="date"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="item_name">Name</label>
        <input
          id="item_name"
          type="text"
          value={transaction.item_name}
          placeholder="name"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={transaction.amount}
          placeholder="amount"
          onChange={handleTextChange}
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          type="text"
          required
          value={transaction.from}
          placeholder="from"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          value={transaction.category}
          placeholder="category"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={"/transactions"}>
            <button>Delete</button>
          </Link>
    </div>
  );
}

export default TransactionNewForm;
