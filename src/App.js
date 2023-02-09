// // import ExpenseItem from "./components/ExpenseItem";
// import React from "react";
// import Expenses from "./components/Expenses/Expenses";
// import NewExpenses from "./components/NewExpenses/NewExpenses";
// const App = () => {
//   const expenses = [
//     {
//       id: "e1",
//       title: "Car Insurance",
//       amount: "40.00",
//       date: new Date(2000, 1, 1),
//     },
//     {
//       id: "e2",
//       title: "Mobile Reacharge",
//       amount: "90.00",
//       date: new Date(2020, 5, 10),
//     },
//     {
//       id: "e3",
//       title: "Bike buys",
//       amount: "120.00",
//       date: new Date(2023, 6, 9),
//     },
//     { id: "e4", title: "sabji", amount: "120.00", date: new Date(2003, 3, 9) },
//     {
//       id: "e5",
//       title: "car repair",
//       amount: "12000.00",
//       date: new Date(2013, 3, 5),
//     },
//     {
//       id: "e6",
//       title: "home reapir",
//       amount: "120000.00",
//       date: new Date(2014, 6, 6),
//     },
//   ];

//   const addExpenseHandler = expense => {
//     console.log(expenses);
//   }


  
//   // The code starts with a div tag that has the className of "App".
//   // Inside this div, there is an onAddExpense function.
//   // This function will be called when the user clicks on the New Expenses button in our app.
//   // The code then creates a new expenses object and assigns it to item property of the Expenses object.
//   // The code renders a div with the class name "App" and an element with the class name "NewExpenses".
//   // The element with the class name "NewExpenses" has an onAddExpense={addExpenseHandler} function attached to it.
//   return (
//     <div className="App">

//       {/* niche dono child hai bhai  */}
     
//          <NewExpenses onAddExpense={addExpenseHandler}/>
//           <Expenses item={expenses} />
//     </div>
//   );


//   // new way is tari ke se bhi ho sakta hai
//   // return React.createElement("div",
//   //  {}, 
//   //  React.createElement("h2", {}, "Let's get started"),
//   //  React.createElement(Expenses, {item: expenses})
//   //  );
// }

// export default App;








// new code hai

import React from 'react';

import NewExpense from './components/NewExpenses/NewExpenses';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;