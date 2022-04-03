import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
const ExpensesList = (props) => {
  if (props.filteredList.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
  }

  if (props.filteredList.length > 0) {
    return (
      <ul className='expenses-list'>
        {props.filteredList.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            date={expenses.date}
            title={expenses.title}
            amount={expenses.amount}
          />
        ))}
      </ul>
    );
  }
};

export default ExpensesList;
