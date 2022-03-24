import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const [shouldRenderForm, setShouldRenderForm] = useState(false);
  // console.log(shouldRenderBtn);

  //   const [object, setObject] = useState({
  //     value: 0,
  //     amount: 0,
  //   });

  //   setObject({
  //     ...object,
  //     value: 1,
  //   });

  //   setUserInput((prevState) => {
  //       return {...prevState, enteredTitle: event.target.value}
  //   })

  const titleChangeHandler = function (event) {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = function (event) {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = function (event) {
    setEnteredDate(event.target.value);
  };

  const submitHandler = function (event) {
    console.log(123);
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setShouldRenderForm(false);
  };

  const showForm = function () {
    setShouldRenderForm(true);
  };

  const hideForm = function () {
    setShouldRenderForm(false);
  };

  return (
    <>
      {shouldRenderForm === false ? (
        <button onClick={showForm}>Add new expense</button>
      ) : (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={hideForm}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </>
  );
};

export default ExpenseForm;
