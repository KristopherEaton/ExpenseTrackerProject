import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // store strings inside useState parenthesis, below is use of multiple use state functionality
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Alternative WAY of useState with an object passed in storing all values
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const titleChangeHandler = (event) => {
    // Here is call is single line event state is used and NOT object version
    setEnteredTitle(event.target.value);

    //Alternative Method for use with single object useState()
    // setUserInput({
    //   // Javascript "SPREAD" operator to copy in current values, and just override targeted value  - K.Eaton
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //React schedules ALL state updates, so using synthax method below ensures proper previous state is used if state depneds on previous state!
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value};
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    //Alternative method code:
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    //Alternative method code:
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  // Function to handle submission of form below and store form data
  const submitHandler = (event) => {
    // Prevent default reload request sent so we can handle event with Javascript! Woot!
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      // Use built date constructor and pass in date value to make date object...  O.O
      date: new Date(enteredDate),
    };
    
    props.onSaveExpenseData(expenseData);
    //Override user input and clear input field
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2030-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
