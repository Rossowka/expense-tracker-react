import './App.scss';
import { Header, Balance, IncomeExpenses, AddTransaction, List } from './components';

function App() {
  return (
    <>
      <Header />
      <Balance />
      <IncomeExpenses />
      <AddTransaction />
      <List />
    </>
  );
}

export default App;
