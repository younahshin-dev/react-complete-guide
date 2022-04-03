import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showButton, setShowButton] = useState('on');
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    toggleButton();
  };

  const toggleButton = () => {
    console.log(showButton);
    if (showButton === 'on') {
      setShowButton('off');
    } else {
      setShowButton('on');
    }
  };

  return (
    <div className='new-expense'>
      {showButton === 'on' && (
        <button onClick={toggleButton}>Add New Expense</button>
      )}
      {showButton === 'off' && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickCancel={toggleButton}
        />
      )}
    </div>
  );
};

export default NewExpense;
