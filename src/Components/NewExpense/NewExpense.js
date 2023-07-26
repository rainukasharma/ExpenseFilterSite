import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React, {useState} from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id : Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsEditing(false);
    
  };

 const[isEditing , setIsEditing]=  useState(false);

 const startEditingHandler = event => { 
    setIsEditing(true);
 };

 const CancelEditing = event => {
    setIsEditing(false);
 };

  return (
    <div className="new-expense">
     {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button> }
     {isEditing && <ExpenseForm onCancel = {CancelEditing}  onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
