import React, { useState } from "react";
import "./ExpenseForm.css"

export default function ExpenseForm(props) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0.01);
    const [date, setDate] = useState("");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const submittedExpense = {
            title,
            amount,
            date: new Date(date)
        };

        props.onSaveExpense(submittedExpense);

        resetForm();
    }

    const resetForm = () => {
        setTitle("");
        setAmount(0.01);
        setDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text"
                        value={title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date"
                        min="2023-01-01"
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add expense</button>
                </div>
            </div>
        </form>
    );
}
