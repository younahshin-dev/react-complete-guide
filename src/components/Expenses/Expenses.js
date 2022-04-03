import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2022');

  const selectYearHandler = (selectedYear) => {
    //console.log(selectedYear);
    setFilterYear(selectedYear);
  };
  const filteredList = props.itemList.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filterYear);
  });

  let expensesContent = <p>No expenses found.</p>;
  if (filteredList.length > 0) {
    expensesContent = filteredList.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        date={expenses.date}
        title={expenses.title}
        amount={expenses.amount}
      />
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selectedYear={filterYear}
          onSelectYear={selectYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
