import { useState, useEffect } from "react";
import * as C from './App.styles';
import logoGFinanceiro from './assets/logo-gerenciador-financeiro.png';
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMounth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TabletArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./InputArea";


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMounth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);


  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }
  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }
  return (
    <C.Container>
      <C.Header>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={logoGFinanceiro}
            alt="Logo"
            style={{ width: '250px', height: 'auto', marginBottom: '10px' }}
          />
        </div>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}
export default App;