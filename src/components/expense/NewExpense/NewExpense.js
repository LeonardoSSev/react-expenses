import React from "react";

import "./NewExpense.css"
import "../ExpenseForm/ExpenseForm"
import ExpenseForm from "../ExpenseForm/ExpenseForm";

export default function NewExpense(props) {
    const saveExpenseHandler = (expenseData) => {
        const newExpense = {
            ...expenseData,
            id: Math.random().toString()
        };

        props.onNewExpense(newExpense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={saveExpenseHandler} />
        </div>
    )
}