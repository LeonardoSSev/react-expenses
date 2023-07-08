import { useState } from 'react';
import './App.css';
import ExpenseList from './components/Expense/ExpenseList/ExpenseList';
import NewExpense from './components/Expense/NewExpense/NewExpense';

function App(props) {
  const defaultExpensesList = [
      {
          title: 'Pack of cheese',
          price: 8.00,
          date: new Date(2023, 6, 30)
      },
      {
          title: 'Orange juice',
          price: 7.50,
          date: new Date(2023, 6, 30)
      },
      {
          title: 'Grape juice',
          price: 13.0,
          date: new Date(2023, 6, 30)
      },
      {
          title: 'Pack of coffee',
          price: 23.0,
          date: new Date(2023, 6, 30)
      }
  ];

  const [expensesList, setExpensesList] = useState(defaultExpensesList)
    
  const newExpenseHandler = (e) => {
    // todo
  }

  return (
    <div className="App">
      <main>
        <NewExpense onNewExpense={newExpenseHandler}/>
        <ExpenseList expenses={expensesList}></ExpenseList>
      </main>
    </div>
  );
}

export default App;
