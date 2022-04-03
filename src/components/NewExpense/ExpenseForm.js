import React, { useState } from 'react';

import './ExpenseForm.css';
const ExpenseForm = (props) => {
  // const [EnteredTitle, setEnteredTitle] = useState(
  //   document.getElementById('enteredTitle')
  // );
  // const [EnteredAmount, setEnteredAmount] = useState(
  //   document.getElementById('enteredAmount')
  // );
  // const [EnteredDate, setEnteredDate] = useState(
  //   document.getElementById('enteredDate')
  // );

  // 각각 인풋값에대한 useState를 선언하기보다 한꺼번에 객체로 묶어서 선언
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    //이전 상태의 userInput에 의존하지만 동시다발적으로 업데이트 가 발생할경우 userInput의 값이 오래되거나 제대로된 시점이 아닌 상태의 값을 가져올 수 있음
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //setUserInput에 값을 넘겨주기보다 함수로 변한 값들을 전달해주면 react에서 prevState를 항상 최신의 이전 상태를 보장해줌

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    props.onClickCancel();
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor=''>Title</label>
          <input
            type='text'
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Amount</label>
          <input
            type='number'
            value={userInput.enteredAmount}
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Date</label>
          <input
            type='date'
            value={userInput.enteredDate}
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={cancelHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
