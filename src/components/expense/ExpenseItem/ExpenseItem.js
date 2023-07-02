import './ExpenseItem.css'
import ExpenseItemDate from './ExpenseItemDate/ExpenseItemDate';

export default function ExpenseItem({ expense }) {
    return (
        <div className="expense-item">
            <ExpenseItemDate date={expense.date} />
            <div className="expense-item__description">
                <h2>{expense.title}</h2>
                <div className="expense-item__price">R${expense.price}</div>
            </div>
        </div>
    );
}
