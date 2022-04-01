import React, { useState } from "react";
import Card from "../card/Card";

import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "../Expenses-list/ExpensesList";
import ExpensesChart from "../list-expenses/ExpensesChart";
import "./ListExpenses.css";

const ListExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // pass the props items into filteredExpenses function to display properly
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 

  // keep JSX snippets 'lean' when possible
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
       <ExpensesChart expenses={filteredExpenses} />
       <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default ListExpenses;
