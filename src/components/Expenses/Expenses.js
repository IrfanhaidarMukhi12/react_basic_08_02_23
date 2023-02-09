// import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
// import "./Expenses.css";
// import ExpensesFilter from "./ExpensesFilter";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");
//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };
//   return (
//     <Card className="expenses">
//       <ExpensesFilter
//         selected={filteredYear}
//         onChangeFiltee={filterChangeHandler}
//       />
//       <ExpenseItem
//         title={props.item[0].title}
//         amount={props.item[0].amount}
//         date={props.item[0].date}
//       />
//       <ExpenseItem
//         title={props.item[1].title}
//         amount={props.item[1].amount}
//         date={props.item[1].date}
//       />
//       <ExpenseItem
//         title={props.item[2].title}
//         amount={props.item[2].amount}
//         date={props.item[2].date}
//       />
//       <ExpenseItem
//         title={props.item[3].title}
//         amount={props.item[3].amount}
//         date={props.item[3].date}
//       />
//       <ExpenseItem
//         title={props.item[4].title}
//         amount={props.item[4].amount}
//         date={props.item[4].date}
//       />
//       <ExpenseItem
//         title={props.item[5].title}
//         amount={props.item[5].amount}
//         date={props.item[5].date}
//       />
//     </Card>
//   );
// };

// export default Expenses;

//new code

import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        
      </Card>
    </div>
  );
};

export default Expenses;
