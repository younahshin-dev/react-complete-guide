import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className='expenses'>
      {props.itemList.map(({ date, title, amount }) => (
        <ExpenseItem date={date} title={title} amount={amount} />
      ))}
    </Card>
  );
}

export default Expenses;
