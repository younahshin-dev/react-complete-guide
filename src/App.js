import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: '12.05',
      date: new Date(2022, 4, 1),
    },
    {
      id: 'e2',
      title: 'Car insurance',
      amount: '264.65',
      date: new Date(2022, 3, 26),
    },
    {
      id: 'e3',
      title: 'dog food',
      amount: '100.38',
      date: new Date(2022, 1, 3),
    },
    {
      id: 'e4',
      title: 'Water 1.25L',
      amount: '0.8',
      date: new Date(2022, 4, 1),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses itemList={expenses} />
    </div>
  );
}

export default App;
