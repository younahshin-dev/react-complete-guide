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

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selectedYear={filterYear}
        onSelectYear={selectYearHandler}
      />
      {props.itemList.map(({ id, date, title, amount }) => (
        <ExpenseItem key={id} date={date} title={title} amount={amount} />
      ))}
    </Card>
  );
};

export default Expenses;
