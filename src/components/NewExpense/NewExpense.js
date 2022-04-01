import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [isEditing, setIsEditing ]= useState(false);

  //Passing data back up the chain to Parent. Also attaching an ID number which is NOT entered on form by user.   K.Eaton
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData ={
      ...enteredExpenseData,
      id: Math.random.toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    // use current function in child component by passing in like below
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
