
import React,{useState} from 'react'; 
import NewExpense from './components/NewExpense/NewExpense';
import ListExpenses from './components/list-expenses/ListExpenses';
import Banner from './components/banner/banner';
import './App.css';

const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Blueberry Muffins',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Gumdrop Buttons', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Standing Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses]= useState(Dummy_Expenses);

    const addExpenseHandler = expense => {
      setExpenses(prevExpenses =>{
        return [expense, ...prevExpenses];
      });
    };

  return (
    <div>
      <Banner/>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ListExpenses items={expenses} />
    </div>
  );
}
export default App;
