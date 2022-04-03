import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021');

  const selectYearHandler = (selectedYear) => {
    //console.log(selectedYear);
    setFilterYear(selectedYear);
  };
  const filteredList = props.itemList.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filterYear);
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selectedYear={filterYear}
          onSelectYear={selectYearHandler}
        />
        {filteredList.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            date={expenses.date}
            title={expenses.title}
            amount={expenses.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
