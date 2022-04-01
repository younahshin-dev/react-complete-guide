import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return (
    <div>
      {props.itemList.map(({ date, title, amount }) => (
        <ExpenseItem date={date} title={title} amount={amount} />
      ))}
    </div>
  );
}

export default Expenses;
