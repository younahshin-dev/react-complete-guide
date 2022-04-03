import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2022');

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
        <ExpensesList filteredList={filteredList} />
      </Card>
    </div>
  );
};

export default Expenses;
