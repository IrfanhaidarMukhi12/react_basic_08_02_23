// import ExpenseItem from "./components/ExpenseItem";
import React from "react";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "40.00",
      date: new Date(2000, 1, 1),
    },
    {
      id: "e2",
      title: "Mobile Reacharge",
      amount: "90.00",
      date: new Date(2020, 5, 10),
    },
    {
      id: "e3",
      title: "Bike buys",
      amount: "120.00",
      date: new Date(2023, 6, 9),
    },
    { id: "e4", title: "sabji", amount: "120.00", date: new Date(2003, 3, 9) },
    {
      id: "e5",
      title: "car repair",
      amount: "12000.00",
      date: new Date(2013, 3, 5),
    },
    {
      id: "e6",
      title: "home reapir",
      amount: "120000.00",
      date: new Date(2014, 6, 6),
    },
  ];

  return (
    <div className="App">

          <Expenses item={expenses} />
    </div>
  );


  // new way is tari ke se bhi ho sakta hai
  // return React.createElement("div",
  //  {}, 
  //  React.createElement("h2", {}, "Let's get started"),
  //  React.createElement(Expenses, {item: expenses})
  //  );
}

export default App;
